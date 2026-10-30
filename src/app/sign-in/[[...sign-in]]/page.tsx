
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffaf5] px-4 py-12">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/60 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <a href="/" className="mb-8 block text-center text-3xl font-black">
          <span className="text-fuchsia-600">Event</span>
          <span className="text-indigo-700">Sphere.</span>
        </a>

        <div className="rounded-3xl border border-white bg-white/90 p-5 shadow-2xl shadow-purple-100 sm:p-8">
          <div className="mb-6 text-center">
            <div className="text-4xl">🎉</div>
            <h1 className="mt-3 text-2xl font-black text-gray-900">
              Welcome back!
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Your next great experience is waiting.
            </p>
          </div>

          <SignIn />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Discover events. Create memories. Live more. 💜
        </p>
      </div>
    </main>
  );
}
