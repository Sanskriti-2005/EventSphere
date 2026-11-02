
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EventForm from "./event-form";

export default async function NewEventPage() {
  // Check whether the user is logged in
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Find the user in our database
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  // Only organizers and admins can create events
  if (!user || (user.role !== "ORGANIZER" && user.role !== "ADMIN")) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <a
          href="/organizer"
          className="text-sm font-semibold text-purple-600 hover:text-pink-600"
        >
          ← Back to Organizer Dashboard
        </a>

        <div className="mb-8 mt-6 text-center">
          <div className="text-5xl">🎉</div>

          <h1 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
            Create a New Event
          </h1>

          <p className="mt-3 text-gray-600">
            Bring people together and create unforgettable experiences.
          </p>
        </div>

        <EventForm />
      </div>
    </main>
  );
}
