
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function OrganizerPage() {
  const { userId } = await auth();

  // Check whether the user is logged in
  if (!userId) {
    redirect("/sign-in");
  }

  // Find the user in PostgreSQL
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  // Check whether the user is an organizer or admin
  if (!user || (user.role !== "ORGANIZER" && user.role !== "ADMIN")) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-black text-purple-700">
          Organizer Dashboard 🎉
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome, {user.name || "Organizer"}!
        </p>

        <p className="mt-2 text-gray-500">
          Manage your events and create exciting experiences with EventSphere.
        </p>
      </div>
    </main>
  );
}
