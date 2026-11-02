
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function OrganizerEventsPage() {
  // 1. Check login
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 2. Find the user
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  // 3. Check organizer permissions
  if (!user || (user.role !== "ORGANIZER" && user.role !== "ADMIN")) {
    redirect("/dashboard");
  }

  // 4. Fetch events created by this organizer
  const events = await prisma.event.findMany({
    where:
      user.role === "ADMIN"
        ? {}
        : {
            organizerId: user.id,
          },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/organizer"
              className="text-sm font-semibold text-purple-600 hover:text-pink-600"
            >
              ← Organizer Dashboard
            </Link>

            <h1 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
              My Events 🎪
            </h1>

            <p className="mt-2 text-gray-600">
              Manage and keep track of your events.
            </p>
          </div>

          <Link
            href="/organizer/events/new"
            className="rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-3 text-center font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1"
          >
            + Create New Event
          </Link>
        </div>

        {/* Event count */}
        <div className="mt-8 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Total Events Created
          </p>
          <p className="mt-1 text-3xl font-black text-purple-700">
            {events.length}
          </p>
        </div>

        {/* Event list */}
        <div className="mt-8">
          {events.length === 0 ? (
            <div className="rounded-3xl border-2 border-dashed border-purple-200 bg-white px-6 py-16 text-center">
              <div className="text-6xl">🎈</div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                No events yet!
              </h2>

              <p className="mt-2 text-gray-500">
                Your created events will appear here.
              </p>

              <Link
                href="/organizer/events/new"
                className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-pink-600"
              >
                Create Your First Event
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-purple-100 bg-white p-6 shadow-md shadow-purple-100/40 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h2>

                    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      {event.status}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-gray-600">
                    <p>📍 {event.venue ? `${event.venue}, ` : ""}{event.location}</p>

                    <p>
                      📅{" "}
                      {event.startDate.toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>

                    <p>
                      🏁{" "}
                      {event.endDate.toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>


                  <div className="mt-6 flex gap-3">
                    <Link
                        href={`/organizer/events/edit/${event.id}`}
                        className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-center font-bold text-white transition hover:from-pink-500 hover:to-purple-600"
                    >
                        ✏️ Edit Event
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
