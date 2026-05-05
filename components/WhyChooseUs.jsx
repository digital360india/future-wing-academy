"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "A City Built for Focus",
    description:
      "Dehradun offers a calm, disciplined, and distraction-free environment—ideal for intense pilot preparation and concept-driven DGCA studies.",
    icon: "/Clocktower icon.png",
  },
  {
    id: 2,
    title: "Train in Peace",
    description:
      "Away from metro chaos, Dehradun allows students to stay focused, mentally fresh, and fully committed to building strong aviation foundations.",
    icon: "/healthicons_i-training-class-outline-24px.svg",
  },
  {
    id: 3,
    title: "PG Facilities",
    description:
      "We assist students with safe and comfortable PG accommodation during the 3-month ground training programme.",
    icon: "/healthicons_i-training-class-outline-24px.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="bg-white md:py-8 py-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Header */}
        <motion.p
          className="mb-2 text-[18px] font-bold text-[#104E7E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.p>

        <motion.h2
          className="mb-4 text-[22px] font-bold text-gray-800 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Future Doesn&apos;t Wait. Neither Do We.
        </motion.h2>

        <motion.p
          className="mx-auto mb-16 mt-8 max-w-3xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Future Wings Academy is one of Dehradun&apos;s most trusted
          career-focused learning institutes — designed to help students build
          confidence, real skills, and careers they&apos;re passionate about.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#183961]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="mb-2 font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}