
"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createEvent(
  _prevState: { error: string },
  formData: FormData
) {
  // 1. Check login
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 2. Find the logged-in user in PostgreSQL
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  // 3. Check organizer permissions
  if (!user || (user.role !== "ORGANIZER" && user.role !== "ADMIN")) {
    return { error: "You are not authorized to create events." };
  }

  // 4. Get form information
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const venue = String(formData.get("venue") || "").trim();
  const startDate = new Date(String(formData.get("startDate") || ""));
  const endDate = new Date(String(formData.get("endDate") || ""));
  const categoryId = String(formData.get("categoryId") || "").trim();

  // 5. Validate information
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

  // 6. Generate a unique event URL
  const slugBase = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const slug = `${slugBase || "event"}-${Date.now()}`;

  // 7. Save the event in PostgreSQL
  await prisma.event.create({
    data: {
      title,
      slug,
      description,
      location,
      venue: venue || null,
      startDate,
      endDate,
      organizerId: user.id,
      categoryId: categoryId || null,
      status: "DRAFT",
    },
  });

  // 8. Refresh relevant pages
  revalidatePath("/organizer");
  revalidatePath("/organizer/events");

  // 9. Navigate to the events page
  redirect("/organizer/events");
}
