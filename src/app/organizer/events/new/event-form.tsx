
"use client";

import { useActionState } from "react";
import { createEvent } from "./actions";

const initialState = {
  error: "",
};

export default function EventForm() {
  const [state, formAction, isPending] = useActionState(
    createEvent,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl shadow-purple-100/50 sm:p-8"
    >
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Event Title *
        </label>
        <input
          name="title"
          type="text"
          required
          placeholder="e.g. Neon Music Festival"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Event Description *
        </label>
        <textarea
          name="description"
          required
          rows={4}
          placeholder="Tell people what your event is about..."
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Location *
          </label>
          <input
            name="location"
            type="text"
            required
            placeholder="e.g. Jalandhar"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Venue
          </label>
          <input
            name="venue"
            type="text"
            placeholder="e.g. Lovely Professional University"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Start Date & Time *
          </label>
          <input
            name="startDate"
            type="datetime-local"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            End Date & Time *
          </label>
          <input
            name="endDate"
            type="datetime-local"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>
      </div>

      {state.error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-4 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Creating Event..." : "Create Event 🎉"}
      </button>

      <p className="text-center text-xs text-gray-500">
        Your event will be saved as a draft.
      </p>
    </form>
  );
}
