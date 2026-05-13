"use client";

import { useRouter } from "next/navigation";

export default function QuizStart() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Aviation Quiz
        </h1>

        <p className="text-lg text-gray-600 mb-4">
          Total Questions: 20
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Time: 10 Minutes
        </p>

        <button
          onClick={() => router.push("/quiz")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}