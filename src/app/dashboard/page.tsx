
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const stats = [
  {
    title: "Events Discovered",
    value: "24",
    icon: "🎉",
    color: "bg-pink-100",
    text: "text-pink-600",
  },
  {
    title: "My Bookings",
    value: "08",
    icon: "🎟️",
    color: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "Upcoming Events",
    value: "03",
    icon: "📅",
    color: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Saved Events",
    value: "12",
    icon: "💜",
    color: "bg-orange-100",
    text: "text-orange-600",
  },
];

const events = [
  {
    name: "Neon Music Festival",
    date: "15 November 2026",
    location: "Jalandhar",
    category: "Music",
    icon: "🎵",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Future Tech Summit",
    date: "20 November 2026",
    location: "Chandigarh",
    category: "Technology",
    icon: "💻",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Creative Art Carnival",
    date: "28 November 2026",
    location: "Ludhiana",
    category: "Art",
    icon: "🎨",
    color: "from-orange-400 to-pink-500",
  },
];

export default async function DashboardPage() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  const firstName = user?.firstName || "there";
  const userInitial = firstName.charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      {/* Navigation */}
      <nav className="border-b border-purple-100 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            <span className="text-fuchsia-600">Event</span>
            <span className="text-indigo-700">Sphere.</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden text-sm font-semibold text-gray-600 hover:text-fuchsia-600 sm:block"
            >
              Home
            </Link>
            {/* <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white"
                title={user?.emailAddresses[0]?.emailAddress || "User"}
            >
                {userInitial}
            </div> */}
            <UserButton />
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 p-8 text-white shadow-xl shadow-purple-200 sm:p-12">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 font-semibold text-pink-200">
              YOUR EVENT JOURNEY STARTS HERE ✨
            </p>

            <h1 className="text-3xl font-black sm:text-5xl">
                Welcome, {firstName}!
            </h1>

            <p className="mt-4 text-sm leading-7 text-purple-100 sm:text-base">
              Discover exciting experiences, manage your bookings, and make
              unforgettable memories with EventSphere.
            </p>

            <Link
              href="/#explore"
              className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-bold text-purple-700 shadow-lg transition hover:-translate-y-1 hover:bg-pink-100"
            >
              Explore Events →
            </Link>
          </div>

          <div className="absolute -right-10 -top-16 text-[190px] opacity-20">
            🎊
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-10">
          <h2 className="text-2xl font-black text-gray-900">
            Your Activity
          </h2>
          <p className="mt-2 text-gray-500">
            A quick overview of your EventSphere journey.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    {stat.title}
                  </span>
                  <span className={`rounded-xl p-3 text-2xl ${stat.color}`}>
                    {stat.icon}
                  </span>
                </div>

                <p className={`mt-5 text-3xl font-black ${stat.text}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming events */}
        <section className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Upcoming Events 🎈
              </h2>
              <p className="mt-2 text-gray-500">
                Experiences you might love.
              </p>
            </div>

            <Link
              href="/#explore"
              className="font-bold text-fuchsia-600 hover:text-purple-700"
            >
              View all events →
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.name}
                className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-36 items-center justify-center bg-gradient-to-br ${event.color}`}
                >
                  <span className="text-7xl">{event.icon}</span>
                </div>

                <div className="p-5">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                    {event.category}
                  </span>

                  <h3 className="mt-4 text-lg font-black text-gray-900">
                    {event.name}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    📅 {event.date}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    📍 {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
