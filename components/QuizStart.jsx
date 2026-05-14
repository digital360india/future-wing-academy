"use client";

import { useRouter } from "next/navigation";

export default function QuizStart() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div
        className="relative w-full max-w-7xl rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-10 md:p-14 text-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Airbus A319 Corporate.jpg')",
        }}
      >
        {/* BLUR OVERLAY */}
        <div className="absolute inset-0 bg-sky-900/60 "></div>

        <div className="relative z-10">
          
          <h1 className="text-3xl font-bold text-white">
            Aviation Quiz
          </h1>

          <p className="text-white text-base sm:text-lg mt-3">
            Test your aviation knowledge and skills
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
            
            <div className="border border-gray-200 rounded-xl p-5 text-left bg-white/90 backdrop-blur-md">
              <div className="text-2xl mb-2">📋</div>

              <div className="text-lg font-semibold text-gray-900">
                20 Questions
              </div>

              <div className="text-sm text-gray-600">
                Multiple Choice Questions
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 text-left bg-white/90 backdrop-blur-md">
              <div className="text-2xl mb-2">⏱️</div>

              <div className="text-lg font-semibold text-gray-900">
                10 Minutes
              </div>

              <div className="text-sm text-gray-600">
                Time Limited Test
              </div>
            </div>

          </div>

          {/* Button */}
          <button
            onClick={() => router.push("/quiz")}
            className="w-full sm:w-auto px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl transition hover:bg-sky-50"
          >
            Start Quiz
          </button>

          <p className="text-white text-sm mt-6">
            Good luck 🚀
          </p>
        </div>
      </div>
    </div>
  );
}