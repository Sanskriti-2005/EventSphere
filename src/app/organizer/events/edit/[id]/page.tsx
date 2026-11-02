
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditEventForm from "./edit-event-form";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditEventPage({ params }: Props) {
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
    redirect("/dashboard");
  }

  // 4. Get the event ID from the URL
  const { id } = await params;

  // 5. Fetch the event from PostgreSQL
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  // 6. Check whether the event exists
  if (!event) {
    notFound();
  }

  // 7. Check event ownership
  if (user.role !== "ADMIN" && event.organizerId !== user.id) {
    redirect("/organizer/events");
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/organizer/events"
          className="text-sm font-semibold text-purple-600 hover:text-pink-600"
        >
          ← Back to My Events
        </Link>

        <div className="mb-8 mt-6 text-center">
          <div className="text-5xl">✏️</div>

          <h1 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
            Edit Your Event
          </h1>

          <p className="mt-3 text-gray-600">
            Update the details of your event.
          </p>
        </div>

        <EditEventForm event={event} />
      </div>
    </main>
  );
}
