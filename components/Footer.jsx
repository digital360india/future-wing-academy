"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./ContactPopup";

export default function Footer() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-white border-t border-gray-500 md:px-10 px-5 py-14">
        <div className="max-w-7xl flex justify-between">
          
          {/* LEFT SECTION */}
          <div className="max-w-md">
            <div className="flex gap-12">
              <h2 className="text-[28px] font-medium text-gray-900 leading-snug md:block hidden">
                Give your <span className="italic font-normal">future</span> fly{" "}
                <br />
                journey today !
              </h2>

              {/* Button + arrow note */}
              <div className="relative mt-5 md:block hidden">
                <button
                  onClick={() => setPopupOpen(true)}
                  className="rounded-md bg-sky-400 px-6 py-2 text-[18px] font-medium text-white hover:bg-sky-500 transition"
                >
                  Join now
                </button>

                <div className="hidden lg:flex items-center mt-2">
                  <Image
                    src="/waiting graphics 2.png"
                    alt="Your future is waiting"
                    width={120}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Logo (desktop) */}
            <div className="md:block hidden">
              <div className="mt-10 flex items-center gap-3">
                <Image
                  src="/Futurewings-Logo.png"
                  alt="Future Wings Academy"
                  width={130}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-sm text-gray-500">
            <h4 className="mb-4 font-bold text-[18px] text-gray-900">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-sky-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-500 transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="max-w-xs text-sm text-gray-600">
            <h4 className="mb-4 font-bold text-[18px] text-gray-900">
              Contact Us
            </h4>

            <p className="font-semibold text-[18px] text-[#163660] mb-1">
              Office training centre
            </p>
            <p className="leading-relaxed">
              Ground Floor, Digital 360, B-36,
              <br />
              Nehru Colony, Dalanwala,
              <br />
              Dehradun, Uttarakhand
            </p>

            <p className="mt-4 font-semibold text-[18px] text-[#163660]">
              Phone no.
            </p>
            <p>+91-7843257762</p>
          </div>
        </div>

        {/* Logo (mobile) */}
        <div className="md:hidden block">
          <div className="mt-10 flex items-center justify-center">
            <Image
              src="/Futurewings-Logo.png"
              alt="Future Wings Academy"
              width={130}
              height={100}
            />
          </div>
        </div>
      </footer>

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
}
