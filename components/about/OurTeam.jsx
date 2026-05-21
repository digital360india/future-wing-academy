"use client";

import Image from "next/image";
import { useState } from "react";

export default function OurTeam() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start md:items-start">
          <div className="rounded-full p-4 md:p-6  md:block hidden">
            <div className="relative w-52 h-52 md:w-96 md:h-96 rounded-full overflow-hidden">
              <Image
                src="/Our Team image.png"
                alt="Captain Rohit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[16px] md:text-[18px] font-semibold text-[#104E7E] mb-3">
            Our Team
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Guided by Experience. <br className="md:hidden" />
            Driven by Mentorship.
          </h2>
          <div className="flex justify-center md:justify-start md:items-start">
            <div className="rounded-full p-4 md:p-6  md:hidden block">
              <div className="relative w-52 h-52 md:w-96 md:h-96 rounded-full overflow-hidden">
                <Image
                  src="/Our Team image.png"
                  alt="Captain Rohit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="md:hidden text-gray-600 leading-relaxed">
            <p>
              Future Wings Aviation Academy is led by{" "}
              <span className="font-semibold text-gray-800">Captain Rohit</span>
              , a seasoned aviation professional with a rare blend of{" "}
              <span className="font-semibold text-gray-800">
                military and commercial flying experience
              </span>
              .
            </p>

            {readMore && (
              <>
                <p className="mt-3">
                  Having served in military aviation and later transitioning to
                  commercial operations, he brings deep operational insight,
                  discipline, and real-world cockpit experience into pilot
                  preparation and mentorship.
                </p>

                <p className="mt-3">
                  Over the years, he has mentored and trained more than{" "}
                  <span className="font-semibold text-gray-800">
                    600 pilot aspirants
                  </span>
                  , helping them navigate DGCA examinations, medical clearances,
                  flying school selection, and long-term career planning with
                  clarity and confidence.
                </p>

                <p className="mt-3">
                  Supporting him is a dedicated core team with{" "}
                  <span className="font-semibold text-gray-800">
                    7–8 years of experience
                  </span>{" "}
                  in pilot training and mentorship across India.
                </p>
              </>
            )}

            <button
              onClick={() => setReadMore(!readMore)}
              className="mt-4 text-[#2DA5FF] text-sm font-medium inline-flex items-center gap-1"
            >
              {readMore ? "Read less" : "Read more our team"}
              <span
                className={`transition-transform ${
                  readMore ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
          </div>

          <div className="hidden md:block">
            <p className="text-gray-600 mb-5 leading-relaxed">
              Future Wings Aviation Academy is led by{" "}
              <span className="font-semibold text-gray-800">Captain Rohit</span>
              , a seasoned aviation professional with a rare blend of military
              and commercial flying experience.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Having served in military aviation and later transitioning into
              commercial operations, he brings deep operational insight,
              discipline, and real-world cockpit experience into pilot
              preparation and mentoring.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Over the years, he has mentored and trained{" "}
              <span className="font-semibold text-gray-800">
                more than 600 pilot aspirants
              </span>
              , helping them navigate DGCA examinations, medical clearances,
              flying school selection, and long-term career planning with
              clarity and confidence.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Supporting him is a dedicated core team with{" "}
              <span className="font-semibold text-gray-800">
                7–8 years of experience
              </span>{" "}
              in pilot training and mentorship across India. Our instructors,
              counsellors, and academic mentors work closely with students to
              ensure personalised guidance at every stage of their journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
