"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const topReview = {
  name: "Ajay Thakur",
  role: "Air India Pilot",
  image: "/reviewimage.jpeg",

  review: `Since my childhood, I have been fascinated by aircraft and always felt a magnetic pull toward airports. The sight of pilots walking confidently in their uniforms used to fill me with awe and a burning desire — one day, that will be me. Today, I'm proud to say that dream is my reality.

None of this would have been possible without the unwavering support of my family, who believed in me even on the days I doubted myself. My journey truly took shape when I joined Future Wings Aviation Academy, where my childhood dream of flying finally began to take flight — quite literally.

It was here that I had the privilege of being guided by Captain Rohit Sir, whose mentorship changed everything for me. His depth of knowledge, patience, and experience of aviation pushed me to become not just a better pilot, but a better aviation professional overall.

After completing my CPL, I went on to complete my type rating on the A320, and today I have the honor of flying for Air India.`,
};

const smallReviews = [
  {
    name: "Aarav Sharma",
    role: "Online Batch Student",

    review: `I am currently a student of the Online batch of Future Wings Aviation Academy, and honestly, the learning experience here has been really good.

Our instructors are well-versed and teach us through some great aviation books like Oxford, Wing Commander RK Bali, IC Joshi, and Keith and Williams.

But what I really enjoy is that they don't just read from the books — they bring in real aviation stories and situations from actual experiences, which makes the lessons a lot more interesting and easy to follow.`,
  },

  {
    name: "Priyanshi Verma",
    role: "CPL Student",

    review: `Future Wings Aviation Academy is the finest place to embark the CPL journey.

The instructors bring real-world experience into the classroom, breaking down complex concepts into clear, practical lessons that are easy to grasp and retain.

The batch sizes are intentionally kept small, so each student receives the focused, individual attention they deserve.`,
  },

  {
    name: "Vivaan Singh",
    role: "DGCA Student",

    review: `Future Wings Aviation Academy has truly transformed my aviation journey and I couldn't be happier with my decision to enroll.

I recently appeared for my Meteorology, Regulations, and Navigation exams and managed to clear all three in my very first attempt.

Rohit Kadyan sir's teaching style is something else entirely. His notes are incredibly well-structured and his way of breaking down complex concepts makes everything so much easier to grasp.`,
  },

  {
    name: "Ananya Kapoor",
    role: "Aviation Student",

    review: `What truly set Future Wings Aviation Academy apart from other academies, for me, was how effortlessly they broke down complex subjects — airspace regulations, meteorology, navigation, and aviation law — into clear, digestible lessons.

The course material was current, well-structured, and delivered through an interactive teaching style that kept every class engaging and focused.`,
  },

  {
    name: "Adiya Mehra",
    role: "Cadet Program Student",

    review: `The ground classes at Future Wings Aviation Academy are genuinely exceptional.

They go well beyond standard pilot theory — the faculty also guide students through CADET program preparation and break down complex exam patterns in a way that's clear and easy to grasp.

The combination of GD and PDP sessions is exceptional.`,
  },

  {
    name: "Kavya Joshi",
    role: "Aviation Student",

    review: `Future Wings Aviation Academy Dehradun has truly been an amazing place for learning and personal growth.

From the very beginning, the trainers and staff created such a friendly and motivating environment that I instantly felt comfortable here.

The simulator training sessions are one of the best parts of the academy.`,
  },
];

function ReviewCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    item.review.length > 180 ? item.review.slice(0, 180) + "..." : item.review;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7 hover:shadow-xl transition duration-300"
    >
      {/* TOP */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* FIRST LETTER */}
          <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
            {item.name.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-[20px] text-gray-900 ">
              {item.name}
            </h4>

            {/* <p className="text-gray-500 text-sm mt-1">{item.role}</p> */}
          </div>
        </div>
      </div>

      {/* STARS */}
      <div className="flex items-center gap-1 mt-7">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* REVIEW */}
      <p className="text-gray-700 leading-8 text-[16px]  ">
        {expanded ? item.review : shortText}
      </p>

      {/* READ MORE */}
      {item.review.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-2 text-sky-500 hover:text-sky-600 transition font-medium"
        >
          {expanded ? "Read Less" : "Read More"}

          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      )}
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [expandedMain, setExpandedMain] = useState(false);

  const shortMainReview =
    topReview.review.length > 500
      ? topReview.review.slice(0, 500) + "..."
      : topReview.review;

  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#111827] leading-tight mb-14 text-center md:text-left">
            Success Stories From Our Students
          </h2>
        </motion.div>

        {/* TOP REVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[260px_1fr] gap-10 items-start"
        >
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[240px] h-[240px]  rounded-full overflow-hidden border border-gray-300 shadow-md">
              <Image
                src={topReview.image}
                alt={topReview.name}
                fill
                className=""
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-start gap-4">
              <Quote
                size={70}
                className="text-sky-500 fill-white min-w-17 hidden md:block"
              />

              <div>
                <p className="text-[14px] md:text-[18px] italic  text-[#1f2937] whitespace-pre-line">
                  {expandedMain ? topReview.review : shortMainReview}
                </p>

                {/* READ MORE */}
                {topReview.review.length > 500 && (
                  <button
                    onClick={() => setExpandedMain(!expandedMain)}
                    className="mt-5 flex items-center gap-2 text-sky-500 hover:text-sky-600 transition font-medium"
                  >
                    {expandedMain ? "Read Less" : "Read More"}

                    {expandedMain ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                )}

                {/* STARS */}
                <div className="flex items-center gap-1 mt-7">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* NAME */}
                <div className="mt-5">
                  <h3 className="text-xl md:text-2xl font-bold text-[#111827]">
                    {topReview.name}
                  </h3>

                  <p className="text-gray-700 text-lg mt-1">{topReview.role}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SMALL REVIEWS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {smallReviews.map((item, index) => (
            <ReviewCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
