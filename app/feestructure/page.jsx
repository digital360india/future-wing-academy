"use client";

import Image from "next/image";
import {
  BookOpen,
  Plane,
  Headphones,
  Users,
  Briefcase,
  Building2,
  Quote,
  ClipboardCheck,
  PlaneTakeoff,
} from "lucide-react";
import ContactPopup from "@/components/ContactPopup";
import { useState } from "react";

export default function FeeStructurePage() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const includes = [
    {
      icon: BookOpen,
      text: "Ground Classes & DGCA Preparation",
    },
    {
      icon: Plane,
      text: "Flying Training with Structured Milestones",
    },
    {
      icon: Headphones,
      text: "RTR Guidance & Aviation Documentation Support",
    },
    {
      icon: Users,
      text: "Experienced Aviation Mentors & Instructors",
    },
    {
      icon: Briefcase,
      text: "End-to-End Career Counselling",
    },
    {
      icon: Building2,
      text: "Airline-Oriented Training Environment",
    },
  ];

  const fees = [
    {
      no: "01",
      particulars: "Registration Fee",
      sub: "(adjustable in ground class fee)",
      amount: "5,000",
    },
    {
      no: "02",
      particulars: "On commencement of Ground Classes",
      amount: "1,45,000",
    },
    {
      no: "03",
      particulars: "Before commencement of\n Flight Training up to 50 Hours",
      amount: "15,50,000",
    },
    {
      no: "04",
      particulars: "Before commencement of\n 51 – 100 Hours or 4th Month",
      amount: "12,00,000",
    },
    {
      no: "05",
      particulars: "Before commencement of\n 101 – 150 Hours or 7th Month",
      amount: "12,00,000",
    },
    {
      no: "06",
      particulars: "Before commencement of\n 151 – 200 Hours or 10th Month",
      amount: "13,25,000",
    },
    {
      no: "07",
      particulars: "DGCA Documentation &\nLicense Documentation",
      amount: "10,000",
    },
    {
      no: "08",
      particulars: "RTR (A) Classes",
      amount: "40,000",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#f2f2f2] flex justify-center py-6 px-3">
        <div className="w-full max-w-360 overflow-hidden rounded-sm bg-white shadow-lg">
          {/* HERO */}
          <div className="relative h-[380px] md:h-112.5 w-full overflow-hidden">
            <Image
              src="/feeheroimg.jpg"
              alt="Pilot Training"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#001633]/60" />

            <div className="absolute inset-0 px-5 py-6 md:px-8">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-[12px] text-[#d4d4d4]">
                <span>Home</span>
                <span>{">"}</span>
                <span className="text-white">Fee Structure</span>
              </div>

              {/* Content */}
              <div className="max-w-117.5">
                <h1 className="font-serif">
                  <span className="block text-3xl md:text-[42px] font-bold text-white leading-tight">
                    Commercial Pilot Training
                  </span>
                  <span className="block text-3xl md:text-[42px] font-bold text-[#f4b32b] leading-tight">
                    Fee Structure
                  </span>
                </h1>

                <p className="mt-4 text-[15px] md:text-[16px] leading-6 md:leading-7 text-[#d7d7d7] font-serif">
                  At Future Wings Aviation Academy, we believe in transparency,
                  clarity and a structured approach to your pilot training
                  journey.
                  <br className="hidden md:block" />
                  Our milestone-based fee structure ensures convenience and
                  aligns payments with your training progress.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 gap-6 bg-[#f6f6f6] p-5 lg:grid-cols-[360px_1fr]">
            {/* LEFT */}
            <div>
              <div className="rounded-md bg-white p-5 shadow-sm">
                <h2 className="text-2xl md:text-[28px] font-bold text-[#0f2442] font-serif">
                  About Our Training Program
                </h2>

                <div className="mt-3 h-[3px] w-16 bg-[#f4b32b]" />

                <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-[#444] font-serif">
                  Our Commercial Pilot Training Program is designed to prepare
                  aspiring pilots for a successful aviation career with
                  industry-standard training, DGCA guidance and complete support
                  throughout the journey.
                </p>

                {/* What's Included */}
                <h3 className="mt-8 text-2xl md:text-[28px] font-bold text-[#0f2442] font-serif">
                  What's Included
                </h3>

                <div className="mt-5 space-y-3">
                  {includes.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-lg border border-[#ececec] bg-[#fafafa] px-4 py-4"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef2f7] text-[#143c73]">
                          <Icon size={20} />
                        </div>
                        <p className="text-[14px] font-medium text-[#333]">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Quote */}
                <div className="mt-6 rounded-xl bg-[#eef3fb] p-5">
                  <Quote size={28} className="mb-3 text-[#143c73]" />
                  <p className="text-[15px] md:text-[16px] italic leading-7 text-[#4b4b4b] font-serif">
                    Our mission is to help aspiring pilots transform their
                    dreams into reality with the right guidance, training and
                    industry exposure.
                  </p>
                  <p className="mt-4 text-[15px] md:text-[16px] font-bold text-[#143c73] font-serif">
                    – Future Wings Aviation Academy
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="rounded-md bg-white p-5 shadow-sm">
                <h2 className="text-[26px] md:text-[32px] font-bold text-[#0f2442] font-serif">
                  Transparent Milestone-Based Payment Structure
                </h2>

                <div className="mt-3 h-[3px] w-20 bg-[#f4b32b]" />

                <p className="mt-4 text-[16px] md:text-[18px] leading-7 text-[#444] font-serif">
                  To ensure convenience and transparency, the training fees are
                  divided into multiple stages based on the progress of
                  training.
                </p>

                {/* TABLE - Mobile Responsive */}
                <div className="mt-6 overflow-x-auto rounded-lg border border-[#dcdcdc]">
                  <div className="min-w-[650px] lg:min-w-full">
                    {/* Header */}
                    <div className="grid grid-cols-[80px_1fr_140px] md:grid-cols-[110px_1fr_150px] bg-[#082c59] text-white">
                      <div className="border-r border-[#284b76] px-3 md:px-4 py-4 text-center text-[14px] font-semibold font-serif">
                        Milestone
                      </div>
                      <div className="border-r border-[#284b76] px-3 md:px-4 py-4 text-[14px] font-semibold font-serif">
                        Particulars
                      </div>
                      <div className="px-3 md:px-4 py-4 text-center text-[14px] font-semibold font-serif">
                        Amount (₹)
                      </div>
                    </div>

                    {/* Rows */}
                    {fees.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[80px_1fr_140px] md:grid-cols-[110px_1fr_150px] border-t border-[#e5e5e5] bg-white"
                      >
                        <div className="flex items-center justify-center border-r border-[#e5e5e5] px-3 py-6 text-[22px] md:text-[24px] font-bold text-[#163c73]">
                          {item.no}
                        </div>

                        <div className="border-r border-[#e5e5e5] px-3 md:px-5 py-5">
                          <p className="whitespace-pre-line text-[15px] md:text-[16px] font-semibold leading-6 text-[#222] font-serif">
                            {item.particulars}
                          </p>
                          {item.sub && (
                            <p className="mt-1 text-[14px] md:text-[16px] italic text-[#666] font-serif">
                              {item.sub}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-center px-3 py-5 text-[17px] md:text-[18px] font-bold text-[#111]">
                          {item.amount}
                        </div>
                      </div>
                    ))}

                    {/* TOTAL */}
                    <div className="grid grid-cols-[1fr_200px] md:grid-cols-[1fr_250px] bg-[#082c59]">
                      <div className="px-5 py-5 text-[22px] md:text-[24px] font-bold text-[#f4b32b] font-serif">
                        Total Course Fee
                      </div>
                      <div className="flex items-center justify-center border-l border-[#2d4c73] px-5 py-5 text-[28px] md:text-[32px] font-extrabold text-[#f4b32b] font-serif">
                        ₹ 54,75,000
                      </div>
                    </div>
                  </div>
                </div>

                {/* IMPORTANT NOTE */}
                <div className="mt-7 flex gap-5 rounded-xl border border-[#ead9a7] bg-[#fff8e9] p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#fff1c8] text-[#d89c12] flex-shrink-0">
                    <ClipboardCheck size={30} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#0f2442] font-serif">
                      Important Note
                    </h3>
                    <ul className="mt-3 space-y-2 text-[15px] md:text-[16px] leading-6 text-[#444] font-serif">
                      <li>
                        • Admission is subject to meeting eligibility criteria
                        and document verification.
                      </li>
                      <li>
                        • Training timelines may vary depending on weather
                        conditions, operational factors, and student
                        performance.
                      </li>
                      <li>
                        • Additional expenses such as medicals, examinations,
                        visa charges, and miscellaneous government fees (if
                        applicable) may be charged separately.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-between gap-6 bg-[#082c59] px-6 py-8 md:flex-row md:gap-5 md:px-8 md:py-6">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#163c73] text-white flex-shrink-0">
                <PlaneTakeoff size={28} />
              </div>

              <div>
                <h3 className="text-[22px] md:text-[28px] font-bold text-white font-serif leading-tight">
                  Take the First Step Towards Your Aviation Career
                </h3>
                <p className="mt-1 text-[14px] text-[#d3d9e4] font-serif">
                  Join Future Wings Aviation Academy and begin your journey
                  towards becoming a professional pilot with confidence and
                  clarity.
                </p>
              </div>
            </div>

            <button
              onClick={() => setPopupOpen(true)}
              className="rounded-md bg-[#f4b32b] px-10 py-4 text-[16px] font-bold text-[#0f2442] transition hover:bg-[#ffbf3b] whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
