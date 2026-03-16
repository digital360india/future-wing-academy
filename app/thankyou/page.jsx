"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF, FaPlaneDeparture } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <main className="relative bg-linear-to-b from-[#1479CB] to-[#BBE1FF] flex items-center justify-center p-4">
      <div className="w-full relative flex justify-center items-center min-h-screen mt-0 ">
        <div className="relative bg-white backdrop-blur-sm rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden mb-20">
          <div className="bg-white px-8 py-10 text-center relative">
            <div
              className="mb-4 w-20 h-20 absolute 
      left-1/2 -translate-x-1/2 top-2
      md:left-6 md:translate-x-0
      flex items-center justify-center"
            >
              <img
                src="/Futurewings-Logo.png"
                alt="Future Wings"
                className="w-20 h-20 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mt-10 md:mt-0">
              Thank You!!
            </h1>
          </div>
          <div className="px-8 pt-8 pb-10 text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium text-lg">
              Transaction is successful ✓
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Once payment is verified from our end, we'll get back to you
              shortly.
              <br />
              Until then feel free to visit our social media channels to know
              more about us!
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-5">
                Follow Us
              </h3>

              <div className="flex justify-center gap-8">
                <a
                  href="https://instagram.com/futurewingsaviation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#42B2F0] hover:text-[#2b86b7] transition text-4xl"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://facebook.com/futurewingsaviation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#42B2F0] hover:text-[#2b86b7] transition text-4xl"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md"
              >
                Return to Home Now
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute md:block hidden bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <img
            src="/aeroplane full shot 1.png"
            alt="plane background"
            className="w-[60vw] "
          />
        </div>
      </div>
    </main>
  );
}
