
import Link from "next/link";

const events = [
  {
    title: "Neon Music Festival",
    category: "MUSIC",
    date: "NOV 15, 2026",
    location: "Jalandhar, Punjab",
    price: "₹799",
    emoji: "🎸",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    tag: "TRENDING",
  },
  {
    title: "Future Tech Summit",
    category: "TECHNOLOGY",
    date: "NOV 20, 2026",
    location: "Chandigarh, Punjab",
    price: "₹499",
    emoji: "🚀",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    tag: "POPULAR",
  },
  {
    title: "Creative Art Carnival",
    category: "ART & CULTURE",
    date: "NOV 28, 2026",
    location: "Ludhiana, Punjab",
    price: "₹299",
    emoji: "🎨",
    gradient: "from-orange-400 via-pink-500 to-rose-600",
    tag: "NEW",
  },
];

const categories = [
  { name: "Music", emoji: "🎵", color: "bg-pink-100" },
  { name: "Technology", emoji: "💻", color: "bg-blue-100" },
  { name: "Art", emoji: "🎨", color: "bg-orange-100" },
  { name: "Sports", emoji: "⚽", color: "bg-green-100" },
  { name: "Food", emoji: "🍕", color: "bg-yellow-100" },
  { name: "Education", emoji: "📚", color: "bg-purple-100" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-gray-900">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-fuchsia-600">Event</span>
          <span className="text-indigo-700">Sphere.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#events" className="hover:text-fuchsia-600">Explore</a>
          <a href="#categories" className="hover:text-fuchsia-600">Categories</a>
          <a href="#organize" className="hover:text-fuchsia-600">Organize</a>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="text-sm font-bold hover:text-fuchsia-600">
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full bg-indigo-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-fuchsia-600"
          >
            Join us →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="absolute right-0 top-10 -z-0 h-72 w-72 rounded-full bg-pink-200 opacity-50 blur-3xl" />
        <div className="absolute left-10 top-40 -z-0 h-64 w-64 rounded-full bg-blue-200 opacity-50 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-fuchsia-100 px-5 py-2 text-sm font-bold text-fuchsia-700">
              ✨ YOUR NEXT GREAT EXPERIENCE STARTS HERE
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Make plans.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Make memories.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover exciting events, meet amazing people, and turn your
              ordinary days into extraordinary experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#events"
                className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-purple-200 transition hover:-translate-y-1"
              >
                Explore Events →
              </a>
              <Link
                href="/sign-up"
                className="rounded-full border-2 border-gray-200 bg-white px-8 py-4 font-bold transition hover:border-fuchsia-400"
              >
                Get Started
              </Link>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-black text-indigo-700">500+</p>
                <p className="text-sm text-gray-500">Events</p>
              </div>
              <div>
                <p className="text-3xl font-black text-fuchsia-600">10K+</p>
                <p className="text-sm text-gray-500">Happy attendees</p>
              </div>
              <div>
                <p className="text-3xl font-black text-orange-500">50+</p>
                <p className="text-sm text-gray-500">Organizers</p>
              </div>
            </div>
          </div>

          {/* Creative visual panel */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 top-10 h-24 w-24 rotate-12 rounded-3xl bg-yellow-300" />
            <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-pink-300" />

            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 p-8 shadow-2xl shadow-purple-200">
              <div className="flex items-center justify-between text-white">
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold">
                  ✦ FEATURED EXPERIENCE
                </span>
                <span className="text-2xl">✧</span>
              </div>

              <div className="py-16 text-center text-white">
                <div className="text-8xl">🎪</div>
                <h2 className="mt-6 text-4xl font-black">The Big Event</h2>
                <p className="mt-3 text-white/80">
                  Discover something unforgettable.
                </p>
                <div className="mt-8 inline-block rounded-full bg-yellow-300 px-6 py-3 font-black text-indigo-950">
                  LET&apos;S GO! ✨
                </div>
              </div>

              <div className="flex justify-between text-sm font-semibold text-white/90">
                <span>🎟️ Experiences</span>
                <span>💜 Memories</span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rotate-[-5deg] rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="font-black text-fuchsia-600">Good vibes only!</p>
              <p className="text-xs text-gray-500">Your event journey starts here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-fuchsia-600">
              FIND YOUR INTEREST
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Explore by category
            </h2>
            <p className="mt-3 text-gray-500">
              Whatever you love, there&apos;s an event waiting for you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.color} rounded-3xl p-6 text-center transition hover:-translate-y-2 hover:shadow-lg`}
              >
                <div className="text-4xl">{category.emoji}</div>
                <p className="mt-3 font-bold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-widest text-indigo-600">
              HANDPICKED FOR YOU
            </p>
            <h2 className="mt-3 text-4xl font-black">Events you&apos;ll love 💜</h2>
            <p className="mt-3 text-gray-500">
              Find your next favourite experience.
            </p>
          </div>
          <a href="#categories" className="font-bold text-fuchsia-600">
            Explore all →
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-200/60 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${event.gradient}`}>
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-gray-800">
                  {event.tag}
                </span>
                <span className="text-8xl drop-shadow-lg">{event.emoji}</span>
              </div>

              <div className="p-6">
                <p className="text-xs font-black tracking-widest text-fuchsia-600">
                  {event.category}
                </p>
                <h3 className="mt-2 text-2xl font-black">{event.title}</h3>

                <div className="mt-5 space-y-2 text-sm text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="text-xl font-black text-indigo-700">{event.price}</p>
                  </div>
                  <Link
                    href="/sign-in"
                    className="rounded-full bg-indigo-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-fuchsia-600"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Organizer CTA */}
      <section id="organize" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-600 p-10 text-center text-white shadow-xl md:p-16">
          <div className="text-5xl">🎉</div>
          <h2 className="mt-5 text-4xl font-black">
            Have an event in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Bring your ideas to life. Create an event, connect with your
            audience, and make something memorable.
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-fuchsia-700 transition hover:-translate-y-1"
          >
            Become an Organizer →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-6 py-10 text-center text-white">
        <p className="text-2xl font-black">
          Event<span className="text-fuchsia-400">Sphere.</span>
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Discover events. Create memories. Live more.
        </p>
        <p className="mt-6 text-xs text-gray-500">
          © 2026 EventSphere. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
