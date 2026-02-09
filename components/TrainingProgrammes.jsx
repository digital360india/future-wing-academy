"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const courses = [
  {
    title: "Air Navigation",
    icon: "/material-symbols_navigation-rounded.png",
    points: [
      "Charts and map reading",
      "Position fixing and plotting",
      "Flight planning and calculations",
      "Radio navigation systems",
      "Practical navigation scenarios",
      "How navigation is actually done in modern aircraft with GPS and FMS",
    ],
  },
  {
    title: "Aviation Meteorology",
    icon: "/material-weather.png",
    points: [
      "Atmospheric physics and weather systems",
      "Reading METARs, TAFs, and weather charts",
      "Weather hazards and avoidance",
      "Climate and seasonal patterns",
      "Real-world weather decision-making and airline dispatch coordination",
    ],
  },
  {
    title: "Air Regulations",
    icon: "/material-symbols_air.png",
    points: [
      "DGCA rules and regulations",
      "ICAO annexes and standards",
      "Aviation law and procedures",
      "Documentation requirements",
      "Practical application of regulations in real flying environments",
    ],
  },
  {
    title: "Technical General",
    icon: "/fa_gears.png",
    points: [
      "Aircraft systems (hydraulic, pneumatic, electrical)",
      "Engines and propulsion",
      "Flight instruments and avionics",
      "Aircraft performance",
      "Common technical issues and how systems operate in real aircraft",
    ],
  },
  {
    title: "Technical Specific",
    icon: "/entypo_aircraft.png",
    points: [
      "Type-specific aircraft knowledge",
      "Advanced systems integration",
      "Operational understanding required before actual flying",
      "Preparation aligned with aircraft type training and future type rating",
    ],
  },
  {
    title: "RTR Aero",
    icon: "/meteor-icons_radio.png",
    points: [
      "Standard radio procedures for controlled and uncontrolled airspace",
      "ICAO phraseology and correct RT terminology usage",
      "Practical ATC communication scenarios and call structure",
      "Building confidence for clear, precise, and professional radio communication",
    ],
  },
];

export default function TrainingProgrammes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-[18px] font-bold text-[#104E7E]">Courses</p>
          <h2 className="mb-4 text-[24px] font-bold text-gray-800 md:text-4xl">
            Training Programmes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our courses programmes designed to help you plan your pilot training
            effectively.
          </p>
        </div>

        {/* 🔹 MOBILE CAROUSEL */}
        <div className="relative md:hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="h-[350px] rounded-2xl bg-[#183961] p-8 text-white">
                  <div className="mb-4">
                    <Image
                      src={course.icon}
                      alt={course.title}
                      width={28}
                      height={28}
                    />
                  </div>

                  <h3 className="mb-4 text-lg font-semibold">
                    {course.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-blue-100">
                    {course.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* MOBILE NAVIGATION BUTTONS */}
          <div className="mt-6 flex justify-center gap-6">
            <button className="swiper-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700">
              ←
            </button>
            <button className="swiper-next flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700">
              →
            </button>
          </div>
        </div>

        {/* 🔹 DESKTOP GRID (UNCHANGED) */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#183961] p-8 text-white"
            >
              <div className="mb-4">
                <Image
                  src={course.icon}
                  alt={course.title}
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="mb-4 text-lg font-semibold">{course.title}</h3>

              <ul className="space-y-2 text-sm text-blue-100">
                {course.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* OPTIONAL CTA */}
        {/*
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[18px] font-semibold text-sky-500 hover:underline"
          >
            Explore our courses →
          </Link>
        </div>
        */}
      </div>
    </section>
  );
}
