"use client";

// The question + topic form. Visual only for now; submitting gets wired to the
// backend in a later step.

import { useState } from "react";

const suggestedTopics = [
  "🏈 Football",
  "🍳 Cooking",
  "🎵 Music",
  "🎮 Video games",
  "🏀 Basketball",
  "👗 Fashion",
];

export default function AskCard() {
  const [topic, setTopic] = useState("");

  return (
    <div className="overflow-hidden rounded-3xl border border-silver-200 bg-white shadow-xl shadow-forest-900/10">
      <div className="flex items-center gap-2 bg-forest-700 px-6 py-3 text-sm font-medium text-white">
        <span className="h-2.5 w-2.5 rounded-full bg-forest-200" />
        Ask Aristotle anything
      </div>

      <div className="p-6 sm:p-8">
        <label htmlFor="question" className="text-sm font-semibold text-forest-800">
          What&apos;s confusing you?
        </label>
        <textarea
          id="question"
          rows={3}
          placeholder="What is arbitrage pricing?"
          className="mt-2 w-full resize-none rounded-xl border border-silver-300 bg-silver-100 px-4 py-3 text-forest-900 placeholder:text-silver-400 focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-forest-100"
        />

        <label htmlFor="topic" className="mt-6 block text-sm font-semibold text-forest-800">
          Explain it in terms of…
        </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Anything you know well"
          className="mt-2 w-full rounded-xl border border-silver-300 bg-silver-100 px-4 py-3 text-forest-900 placeholder:text-silver-400 focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-forest-100"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestedTopics.map((t) => {
            const name = t.slice(t.indexOf(" ") + 1);
            const selected = topic === name;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(name)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition hover:-translate-y-0.5 ${
                  selected
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-silver-300 bg-white text-forest-700 hover:border-forest-500 hover:bg-forest-50"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-silver-300 px-4 py-3 font-medium text-silver-600 transition hover:border-forest-500 hover:bg-forest-50 hover:text-forest-700"
          >
            <span aria-hidden>📄</span> Upload PDF
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl bg-forest-600 px-4 py-3 font-semibold text-white shadow-lg shadow-forest-600/30 transition hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Ask Aristotle →
          </button>
        </div>
      </div>
    </div>
  );
}
