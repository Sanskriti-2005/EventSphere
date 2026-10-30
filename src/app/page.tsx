
import Link from "next/link";

const categories = [
  { icon: "🎵", name: "Music" },
  { icon: "💻", name: "Technology" },
  { icon: "🎨", name: "Art & Culture" },
  { icon: "🏃", name: "Sports" },
  { icon: "🍔", name: "Food & Drink" },
  { icon: "📚", name: "Education" },
];

const events = [
  {
    title: "The Future of Technology",
    category: "Technology",
    date: "November 15, 2026",
    location: "Jalandhar, Punjab",
    price: "₹499",
    icon: "💻",
    color: "from-blue-100 to-indigo-200",
  },
  {
    title: "Live Music Festival",
    category: "Music",
    date: "November 20, 2026",
    location: "Chandigarh, Punjab",
    price: "₹799",
    icon: "🎸",
    color: "from-pink-100 to-purple-200",
  },
  {
    title: "Creative Arts Workshop",
    category: "Art & Culture",
    date: "November 28, 2026",
    location: "Ludhiana, Punjab",
    price: "₹299",
    icon: "🎨",
    color: "from-orange-100 to-yellow-200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between border-b border-gray-100 px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          EventSphere<span className="text-blue-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="#events" className="hover:text-blue-700">Explore Events</Link>
          <Link href="#categories" className="hover:text-blue-700">Categories</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 sm:block"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Discover experiences. Create memories.
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Find events that
            <span className="text-blue-700"> inspire you.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Discover exciting events around you, connect with people,
            and make every moment unforgettable.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-blue-100 sm:flex-row">
            <input
              type="text"
              placeholder="Search events, workshops, concerts..."
              className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm outline-none"
            />
            <button className="rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition hover:bg-blue-800">
              Search Events
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Explore events, meet new people, and discover something new.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="px-6 py-16 md:px-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Explore by interest
          </p>
          <h2 className="mt-2 text-3xl font-bold">Browse Categories</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-3xl">{category.icon}</div>
              <h3 className="mt-3 text-sm font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="events" className="bg-gray-50 px-6 py-16 md:px-16">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Don't miss out
            </p>
            <h2 className="mt-2 text-3xl font-bold">Featured Events</h2>
            <p className="mt-2 text-gray-500">
              Discover experiences worth being part of.
            </p>
          </div>

          <Link
            href="#events"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            Explore all events →
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${event.color}`}
              >
                <span className="text-7xl">{event.icon}</span>
              </div>

              <div className="p-6">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {event.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">{event.title}</h3>

                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-blue-700">{event.price}</p>
                  </div>

                  <button className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organizer Section */}
      <section className="px-6 py-20 md:px-16">
        <div className="rounded-3xl bg-blue-700 px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold">Have an event to organize?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Bring people together. Create your event, manage registrations,
            and reach your audience with EventSphere.
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Become an Organizer
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        <p className="font-semibold text-blue-700">EventSphere.</p>
        <p className="mt-2">Discover events. Connect. Experience more.</p>
        <p className="mt-3">© 2026 EventSphere. All rights reserved.</p>
      </footer>
    </main>
  );
}
