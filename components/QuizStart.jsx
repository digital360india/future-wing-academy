"use client";

import Image from "next/image";
import {
  Clock3,
  Trophy,
  ShieldCheck,
  Monitor,
  Ban,
  ArrowRight,
  FileQuestion,
  GraduationCap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function QuizStart() {
  const router = useRouter();

  return (
    <section className="relative  overflow-hidden flex items-center justify-center px-4 py-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Airbus A319 Corporate.jpg"
          alt="Plane Background"
          width={1000}
          height={1000}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Bottom Glow */}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center text-white">
          <h1 className="text-3xl  font-bold tracking-tight">Aviation Quiz</h1>

          <p className="mt-2 text-sm md:text-lg text-white/90">
            Test your aviation knowledge and earn a scholarship!
          </p>
        </div>

        {/* Scholarship Banner */}
        <div className="mt-6 flex justify-center">
          <div className="w-[320px] rounded-2xl border border-yellow-400/60 bg-[#063B88]/80 backdrop-blur-md px-5 py-4 shadow-2xl">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white/20 bg-linear-to-br from-blue-500 to-blue-700 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="text-lg md:text-xl font-bold text-white">
                  Win a Scholarship
                </p>

                <h2 className="text-3xl  font-bold text-yellow-400 leading-none mt-1">
                  upto 20%
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Questions Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-2xl">
            <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-gray-100 to-transparent rounded-l-full" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                <FileQuestion className="h-10 w-10 text-blue-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2D6B]">
                  20 Questions
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  Multiple Choice Questions
                </p>
              </div>
            </div>
          </div>

          {/* Time Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-2xl">
            <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-purple-50 to-transparent rounded-l-full" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-50">
                <Clock3 className="h-10 w-10 text-purple-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2D6B]">
                  10 Minutes
                </h3>

                <p className="mt-1 text-base text-gray-600">
                  Time is on your side
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Info */}
        <div className="mt-5 rounded-2xl border border-yellow-300 bg-[#FFFDF8] px-6 py-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* Trophy */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-yellow-200 bg-yellow-50">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B2D6B]">
                Scholarship upto <span className="text-blue-600">20%</span>
              </h3>

              <p className="mt-2 text-base text-gray-700 leading-relaxed max-w-2xl">
                Perform your best and unlock a scholarship upto 20% on our
                aviation programs.
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-5 rounded-2xl bg-[#062D68]/90 border border-white/10 p-6 shadow-2xl backdrop-blur-md">
          {/* Title */}
          <div className="flex items-center gap-3 text-white">
            <ShieldCheck className="h-6 w-6 text-blue-300" />

            <h3 className="text-xl font-bold">Important Instructions</h3>
          </div>

          {/* Instruction Items */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Item 1 */}
            <div className="flex gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pink-500/15">
                <Ban className="h-7 w-7 text-pink-400" />
              </div>

              <div>
                <h4 className="text-base font-semibold leading-snug">
                  Switching tabs or opening other windows is not allowed.
                </h4>

                <p className="mt-1 text-sm text-white/70">
                  Doing so may result in disqualification.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3 md:border-x md:border-white/10 md:px-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-500/15">
                <Clock3 className="h-7 w-7 text-yellow-400" />
              </div>

              <div>
                <h4 className="text-base font-semibold leading-snug">
                  The test will auto submit once the time is up.
                </h4>

                <p className="mt-1 text-sm text-white/70">
                  Please manage your time wisely.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
                <Monitor className="h-7 w-7 text-orange-400" />
              </div>

              <div>
                <h4 className="text-base font-semibold leading-snug">
                  Ensure a stable internet connection for a smooth experience.
                </h4>

                <p className="mt-1 text-sm text-white/70">
                  Do not refresh or reload the page.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={() => router.push("/quiz")}
            className="group flex items-center gap-3 rounded-2xl border border-white/30 bg-linear-to-r from-[#1B6DFF] to-[#005BFF] px-14 py-4 text-xl font-bold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105"
          >
            Start Quiz
            <ArrowRight className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <p className="mt-4 text-base text-white/90">
            🛡 Trusted by aspiring aviators
          </p>
        </div>
      </div>
    </section>
  );
}
