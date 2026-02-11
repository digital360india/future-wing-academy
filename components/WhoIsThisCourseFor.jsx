"use client";

import Image from "next/image";

export default function WhoIsThisCourseFor() {
  return (
    <section className="bg-white md:py-20">
      <div className=" max-w-7xl md:mx-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden md:block hidden ">
            <Image
              src="/Course for whom (1).png"
              alt="Students ready for aviation career"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left max-w-85 md:max-w-none mx-auto md:mx-0">
            <p className="mb-2 text-[18px] font-bold text-[#104E7E]">
              Who is this course for
            </p>

            <h2 className="mb-4 text-[24px] md:text-3xl lg:text-4xl font-bold text-gray-800">
              Ready to Build a Career in Aviation
            </h2>

            <p className="mb-6 text-gray-600">
              Our courses programmes designed to help you plan your pilot
              training effectively.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 justify-center md:justify-start text-left md:text-left">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                <p>
                  <strong>12th Pass Students (Physics & Mathematics)</strong>{" "}
                  looking to begin their pilot journey with proper guidance and
                  a strong academic base.
                </p>
              </li>

              <li className="flex items-start gap-3 justify-center md:justify-start text-left md:text-left">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                <p>
                  <strong>Science & Technical Graduates</strong> aiming to
                  transition into aviation with clear direction and informed
                  career planning.
                </p>
              </li>

              <li className="flex items-start gap-3 justify-center md:justify-start text-left md:text-left">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                <p>
                  Aspirants aged <strong>17 to 65 years</strong> who are
                  motivated to pursue aviation with discipline, commitment, and
                  long-term vision.
                </p>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden md:hidden block px-6 ">
            <Image
              src="/Course for whom (1).png"
              alt="Students ready for aviation career"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
