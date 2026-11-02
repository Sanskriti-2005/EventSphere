
"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateEvent(
  _prevState: { error: string },
  formData: FormData
) {
  // 1. Check login
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 2. Find the logged-in user
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  // 3. Check organizer permissions
  if (!user || (user.role !== "ORGANIZER" && user.role !== "ADMIN")) {
    return { error: "You are not authorized to edit events." };
  }

  // 4. Get event information from the form
  const eventId = String(formData.get("eventId") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const venue = String(formData.get("venue") || "").trim();

  const startDate = new Date(String(formData.get("startDate") || ""));
  const endDate = new Date(String(formData.get("endDate") || ""));

  // 5. Find the event
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!event) {
    return { error: "Event not found." };
  }

  // 6. Check event ownership
  if (user.role !== "ADMIN" && event.organizerId !== user.id) {
    return { error: "You cannot edit someone else's event." };
  }

  // 7. Validate information
  if (!title || !description || !location) {
    return { error: "Please fill in all required fields." };
  }

  if (
    !Number.isFinite(startDate.getTime()) ||
    !Number.isFinite(endDate.getTime())
  ) {
    return { error: "Please enter valid event dates." };
  }

  if (endDate <= startDate) {
    return { error: "End date must be after the start date." };
  }

  // 8. Update the event in PostgreSQL
  await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      title,
      description,
      location,
      venue: venue || null,
      startDate,
      endDate,
    },
  });

  // 9. Refresh relevant pages
  revalidatePath("/organizer");
  revalidatePath("/organizer/events");
  revalidatePath(`/organizer/events/edit/${eventId}`);

  // 10. Return to the events listing page
  redirect("/organizer/events");
}
