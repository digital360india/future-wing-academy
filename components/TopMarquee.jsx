"use client";

import Link from "next/link";

export default function TopMarquee() {
  return (
    <div className="w-full bg-sky-400 overflow-hidden">
      <div className="flex">
        
        <div className="marquee text-white text-sm font-medium py-2 flex">
          
          {/* Repeat multiple times for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 mx-6 shrink-0">
              CPSS COACHING STARTING SOON CLICK TO

              <Link href="/join" className="font-bold underline hover:text-black">
                JOIN NOW
              </Link>

              . BATCH COMMENCE ON 05 MAY 26

              <Link href="/enroll" className="font-bold underline hover:text-black">
                ENROLL NOW
              </Link>

              .
            </span>
          ))}

        </div>

      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}