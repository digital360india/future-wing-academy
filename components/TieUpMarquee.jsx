"use client";

import Image from "next/image";

const logos = [
  "/tieuplogo/avyanna aviation academy.png",
  "/tieuplogo/bihar flying club.png",
  "/tieuplogo/bombay flying club.png",
  "/tieuplogo/carver aviation.png",
  "/tieuplogo/chimes aviation academy.png",
  "/tieuplogo/delhi flying club.png",
  "/tieuplogo/flytech aviation academy.png",
  "/tieuplogo/fstc.png",
  "/tieuplogo/Govt bhub.png",
  "/tieuplogo/Indra gandhi logo (1).png",
  "/tieuplogo/madhya pradesh flying club bhopal.png",
  "/tieuplogo/orient flight school mysore.png",
  "/tieuplogo/Rajiv gandhi av ac.png",
  "/tieuplogo/vision flying training institute.png",
];

export default function TieUpMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 mt-3">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top flying schools
        </h2>

        <p className="text-gray-500 mt-2">
          Trusted aviation and training partners
        </p>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee items-center gap-12">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex h-28 w-52 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm px-6"
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={180}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}

          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex h-28 w-52 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm px-6"
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={180}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
