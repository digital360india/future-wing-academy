"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "Future Wings gave me clarity at the right time. The structured guidance helped me avoid mistakes and build a strong foundation before flying.",
    image: "/testimonials/family1.jpg",
  },
  {
    name: "Riya Mehta",
    text: "The mentors explain concepts practically, not just for exams. Their approach made DGCA subjects easier and boosted my confidence.",
    image: "/testimonials/family2.jpg",
  },
  {
    name: "Ankit Verma",
    text: "As a graduate changing careers, I needed honest advice. Future Wings helped me plan my pilot journey step by step without false promises.",
    image: "/testimonials/family3.jpg",
  },
  {
    name: "Neha Kapoor",
    text: "As a parent, what stood out was transparency. They guided us clearly on medicals, exams, and next steps, which gave us complete peace of mind.",
    image: "/testimonials/family4.jpg",
  },
  {
    name: "Rohit Malhotra",
    text: "From counselling to exam preparation, everything was well organised. Future Wings focuses on preparation and long-term success, not shortcuts.",
    image: "/testimonials/family5.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="text-center">
        {/* Header */}
        <p className="mb-2 text-[18px] font-bold text-[#104E7E]">
          Testimonials
        </p>
        <h2 className="mb-4 md:text-3xl text-[24px] p-4 font-bold text-gray-800">
          What Our Students and Parents Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          slidesPerView="auto"
          centeredSlides
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: "auto",
              centeredSlides: true,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-full md:!w-[50vw] py-10 md:py-14"
            >
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
                  }`}
                >
                  <div className="flex h-[25vh] md:h-[48vh] flex-col md:flex-row rounded-xl bg-white shadow-lg overflow-hidden">
                    {/* Content */}
                    <div className="flex w-full  flex-col justify-center px-6 py-6 md:px-10 md:py-0 text-left">
                      <Image
                        src="/quots.png"
                        alt="Quote"
                        width={26}
                        height={26}
                        className="mb-4 opacity-80"
                      />

                      <p className="mb-6 text-gray-800 leading-relaxed">
                        “{item.text}”
                      </p>

                      <p className="text-sm font-semibold text-gray-800">
                        — {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
