"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import FreeconsultationPopup from "./FreeConsltationPopup";
import JoinFormPopup from "./cpsspage/JoinForm";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Desktop Dropdowns
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showFeeDropdown, setShowFeeDropdown] = useState(false);

  // Mobile Dropdown
  const [mobileFeeDropdown, setMobileFeeDropdown] = useState(false);

  // Popups
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);
  const [isJoinFormPopupOpen, setIsJoinFormPopupOpen] = useState(false);

  return (
    <>
      <header className="w-full font-serif bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="md:max-w-360 mx-auto h-19.5 px-4 lg:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Futurewings-Logo.png"
              alt="Future Wings"
              width={135}
              height={60}
              priority
              className="w-auto h-13done"
            />
          </Link>

          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center gap-12 text-[16px] font-medium text-gray-700">
              <Link href="/" className="hover:text-sky-500 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-sky-500 transition">
                About
              </Link>

              <Link
                href="/howtobecomepilot"
                className="hover:text-sky-500 transition"
              >
                How to Become Pilot
              </Link>

              <div
                className="relative h-19.5 flex items-center"
                onMouseEnter={() => setShowCoursesDropdown(true)}
                onMouseLeave={() => setShowCoursesDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition">
                  Courses
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white border border-gray-200 shadow-lg transition-all duration-200 ${
                    showCoursesDropdown
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <Link
                    href="/cpss"
                    className="block px-4 py-4 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-sky-500"
                  >
                    CPSS (Computerised Pilot Selection System)
                  </Link>
                </div>
              </div>

              <div
                className="relative h-19.5 flex items-center"
                onMouseEnter={() => setShowFeeDropdown(true)}
                onMouseLeave={() => setShowFeeDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition">
                  Fee 
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-55 bg-white border border-gray-200 shadow-lg transition-all duration-200 ${
                    showFeeDropdown
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <Link
                    href="/feestructure"
                    className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-sky-500"
                  >
                    Fee Structure
                  </Link>

                  <Link
                    href="/educationloan"
                    className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-sky-500"
                  >
                    CPSS Loan Structure
                  </Link>

                   <Link
                    href="/bankdetails"
                    className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-sky-500"
                  >
                    Banking Details
                  </Link>
                </div>
              </div>

              <Link href="/contact" className="hover:text-sky-500 transition">
                Contact
              </Link>
            </div>
          </nav>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center border-l border-gray-200 pl-8 gap-4">
              <button
                onClick={() => setIsJoinFormPopupOpen(true)}
                className="h-[44px] px-8 border border-sky-400 text-sky-500 rounded-[4px] flex items-center justify-center text-[14px] font-semibold hover:bg-sky-50 transition"
              >
                Apply CPSS
              </button>

              <button
                onClick={() => setIsConsultationPopupOpen(true)}
                className="h-[44px] px-7 bg-sky-400 text-white rounded-[4px] flex items-center justify-center text-[14px] font-semibold hover:bg-sky-500 transition"
              >
                Free Consultation
              </button>
            </div>
          </div>

          <button onClick={() => setMobileMenu(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition ${
          mobileMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileMenu(false)}
        />

        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white p-6 transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/Futurewings-Logo.png"
              alt="Future Wings"
              width={120}
              height={50}
              className="w-auto h-[45px]"
            />

            <button onClick={() => setMobileMenu(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-[16px] font-medium text-gray-700">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMobileMenu(false)}>
              About
            </Link>

            <Link href="/howtobecomepilot" onClick={() => setMobileMenu(false)}>
              How to Become Pilot
            </Link>

            <Link href="/cpss" onClick={() => setMobileMenu(false)}>
              Courses
            </Link>

            <div>
              <button
                onClick={() => setMobileFeeDropdown(!mobileFeeDropdown)}
                className="flex items-center justify-between w-full"
              >
                <span>Fee </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileFeeDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileFeeDropdown && (
                <div className="ml-4 mt-4 flex flex-col gap-3 text-[15px] text-gray-600">
                  <Link
                    href="/feestructure"
                    onClick={() => setMobileMenu(false)}
                  >
                    Fee Structure
                  </Link>

                  <Link
                    href="/educationloan"
                    onClick={() => setMobileMenu(false)}
                  >
                    CPSS Loan Structure
                  </Link>

                   <Link
                    href="/bankdetails"
                    onClick={() => setMobileMenu(false)}
                  >
                    Bank Details
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>

            <div className="flex flex-col gap-4 pt-6">
              <button
                onClick={() => {
                  setIsJoinFormPopupOpen(true);
                  setMobileMenu(false);
                }}
                className="h-[45px] border border-sky-400 text-sky-500 rounded-md flex items-center justify-center font-semibold"
              >
                Apply CPSS
              </button>

              <button
                onClick={() => {
                  setIsConsultationPopupOpen(true);
                  setMobileMenu(false);
                }}
                className="h-[45px] bg-sky-400 text-white rounded-md flex items-center justify-center font-semibold"
              >
                Free Consultation
              </button>
            </div>
          </nav>
        </div>
      </div>

      <FreeconsultationPopup
        isOpen={isConsultationPopupOpen}
        onClose={() => setIsConsultationPopupOpen(false)}
      />

      <JoinFormPopup
        isOpen={isJoinFormPopupOpen}
        onClose={() => setIsJoinFormPopupOpen(false)}
      />
    </>
  );
}
