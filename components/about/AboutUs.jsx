"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutUs() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative hidden md:block">
          <div className=" overflow-hidden">
            <Image
              src="/about.png"
              alt="Pilots in cockpit"
              width={700}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-[16px] md:text-[18px] font-semibold text-[#104E7E] mb-3">
            About Us
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-snug">
            Preparing Tomorrow&apos;s Pilots
          </h2>

          {/* MOBILE CONTENT */}
          <div className="md:hidden text-gray-600 leading-relaxed">
            <p>
              Future Wings Aviation Academy is India&apos;s first dedicated
              Pilot Preparation & Mentorship Institute in Dehradun, created to
              guide aspiring pilots before they invest heavily in flying
              training.
            </p>

            {readMore && (
              <>
                <p className="mt-3">
                  We exist to ensure that students and parents make informed,
                  timely, and correct decisions at every stage of the pilot
                  journey right from Class 12 to airline selection.
                </p>

                <p className="mt-3">
                  In an industry where misinformation, poor guidance, and rushed
                  decisions often lead to financial and career setbacks, Future
                  Wings stands for transparent preparation and long-term
                  mentorship.
                </p>
              </>
            )}

            <button
              onClick={() => setReadMore(!readMore)}
              className="mt-4 text-[#2DA5FF] text-sm font-medium inline-flex items-center gap-1"
            >
              {readMore ? "Read less" : "Read more about us"}
              <span
                className={`transition-transform ${
                  readMore ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
          </div>

          {/* DESKTOP CONTENT — UNTOUCHED */}
          <div className="hidden md:block">
            <p className="text-gray-600 mb-5 leading-relaxed">
              Future Wings Aviation Academy is India&apos;s first dedicated
              Pilot Preparation & Mentorship Institute in Dehradun, created to
              guide aspiring pilots before they invest heavily in flying
              training.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              We exist to ensure that students and parents make informed,
              timely, and correct decisions at every stage of the pilot journey
              right from Class 12 to airline selection.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In an industry where misinformation, poor guidance, and rushed
              decisions often lead to financial and career setbacks, Future
              Wings stands for transparent preparation and long-term mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
