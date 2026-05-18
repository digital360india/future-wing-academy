"use client";

import Link from "next/link";

export default function TopMarquee() {
  return (
    <div className="w-full bg-linear-to-r from-sky-500 via-sky-400 to-sky-500 overflow-hidden relative">

      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-sky-500 to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-sky-500 to-transparent z-10" />

      <div className="marquee flex whitespace-nowrap py-2 text-white text-xs sm:text-sm font-medium">

        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-3 mx-10 shrink-0"
          >
            <span className="tracking-wide">
               CPSS COACHING STARTING SOON CLICK TO
            </span>

            <Link
              href="/cpss"
              className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-semibold hover:bg-white hover:text-sky-600 transition"
            >
              JOIN NOW
            </Link>

            <span className="opacity-90">
              • BATCH COMMENCE ON 05 MAY 26
            </span>

            <Link
              href="/cpss"
              className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-md font-semibold hover:bg-white hover:text-sky-600 transition"
            >
              ENROLL NOW
            </Link>

          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}