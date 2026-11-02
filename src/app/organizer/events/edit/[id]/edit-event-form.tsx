
"use client";

import { useActionState } from "react";
import { updateEvent } from "./actions";

type EventFormProps = {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    venue: string | null;
    startDate: Date;
    endDate: Date;
  };
};

const initialState = {
  error: "",
};

// Convert a date into the format required by datetime-local
function formatDate(date: Date) {
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );

  return localDate.toISOString().slice(0, 16);
}

export default function EditEventForm({ event }: EventFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateEvent,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl shadow-purple-100/50 sm:p-8"
    >
      <input type="hidden" name="eventId" value={event.id} />

      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Event Title *
        </label>

        <input
          name="title"
          type="text"
          required
          defaultValue={event.title}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
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
          defaultValue={event.description}
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
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
            defaultValue={event.location}
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
            defaultValue={event.venue || ""}
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
            defaultValue={formatDate(event.startDate)}
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
            defaultValue={formatDate(event.endDate)}
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
        {isPending ? "Saving Changes..." : "Save Changes 💜"}
      </button>
    </form>
  );
}
