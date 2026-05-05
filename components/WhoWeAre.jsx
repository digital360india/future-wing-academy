"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-white md:py-8 py-4">
      <div className="max-w-7xl md:mx-20 px-6 md:px-0">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="overflow-hidden rounded-2xl hidden md:block">
              <Image
                src="/Pilots.png"
                alt="Future Wings Aviation Academy"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="mb-2 text-[18px] font-bold text-[#104E7E] text-center md:text-left">
              Who we are
            </p>

            <h2 className="mb-4 text-[24px] md:text-3xl font-bold text-gray-800 text-center md:text-left">
              Shaping Tomorrow&apos;s Professionals
            </h2>

            <p className="mb-8 text-gray-600 leading-relaxed text-center md:text-left max-w-md md:max-w-none">
              Future Wings Aviation Academy is a commercial Dehradun-based pilot preparation
              and mentorship institute dedicated to guiding aspiring pilots with
              clarity, discipline, and the right foundation. We focus on
              structured preparation, informed decision-making, and personalised
              mentoring ensuring students are fully ready before stepping into
              professional flight training.
            </p>

            <div className="overflow-hidden rounded-2xl md:hidden mb-8">
              <Image
                src="/Pilots.png"
                alt="Future Wings Aviation Academy"
                width={1000}
                height={1000}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-sky-500">5+</h3>
                <p className="text-sm text-gray-600">Year Industry Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">85%</h3>
                <p className="text-sm text-gray-600">
                  success rate in first attempt
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">4.8</h3>
                <p className="text-sm text-gray-600">rated by students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">600+</h3>
                <p className="text-sm text-gray-600">
                  students successfully trained
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-[18px] font-semibold text-sky-500 hover:underline"
            >
              Know more about us <span>→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}