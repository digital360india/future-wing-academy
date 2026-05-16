"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionValues() {
  return (
    <section className="w-full relative overflow-hidden">
      
      {/* ================= VISION SECTION ================= */}
      <div className="relative h-[450px] w-full">
        <Image
          src="/Our vision 1.png"
          alt="Cockpit view"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-200 max-w-2xl text-sm md:text-base">
            To nurture future commanders of flight decks across the globe
            through disciplined preparation, ethical guidance, and world-class mentorship.
          </p>
        </div>
      </div>

      {/* ================= VALUES SECTION ================= */}
      <div className="bg-[#143A66] md:pt-48 pt-16 pb-20 relative overflow-hidden">

        {/* ✈️ AIRPLANE ANIMATION (SMOOTH + CINEMATIC) */}
        <motion.div
          initial={{
            x: 500,
            y: 40,
            opacity: 0,
            scale: 0.95,
            rotate: -3,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 2,
            ease: [0.25, 0.8, 0.25, 1], // smooth cinematic easing
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute top-2 left-[60%] -translate-x-1/2 w-[85%] max-w-5xl z-10"
        >
          <Image
            src="/aeroplane full shot 1.png"
            alt="Aircraft"
            width={800}
            height={500}
            className="w-[80%] h-auto"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
          
          <h3 className="text-white text-2xl md:text-3xl font-semibold md:mb-14">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* VALUE 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="/vision1.png"
                alt="Excellence"
                width={58}
                height={58}
              />
              <p className="text-white text-sm mt-4">
                Service excellence in pilot training
              </p>
            </div>

            {/* VALUE 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="/vision2.png"
                alt="Teamwork"
                width={58}
                height={58}
              />
              <p className="text-white text-sm mt-4">
                Teamwork and discipline
              </p>
            </div>

            {/* VALUE 3 */}
            <div className="flex flex-col items-center">
              <Image
                src="/vision3.png"
                alt="Commitment"
                width={58}
                height={58}
              />
              <p className="text-white text-sm mt-4">
                Commitment to student satisfaction and success
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}