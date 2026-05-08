"use client";

import { AlertCircle } from "lucide-react";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center z-50">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-3xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-gray-400 mb-8 max-w-lg">
        {error?.message || "An unexpected error caused this page to crash."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}