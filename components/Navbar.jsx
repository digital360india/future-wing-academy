"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import FreeconsultationPopup from "./FreeConsltationPopup";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-[78px] px-4 lg:px-6 flex items-center justify-between">
          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Futurewings-Logo.png"
              alt="Future Wings"
              width={135}
              height={60}
              priority
              className="w-auto h-[52px]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center gap-12 text-[14px] font-medium text-gray-700">
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
                How to become pilot
              </Link>

              {/* DROPDOWN */}
              <div
                className="relative h-[78px] flex items-center"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-sky-500 transition">
                  Courses
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[210px] bg-white border border-gray-200 shadow-lg transition-all duration-200 ${
                    showDropdown
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <Link
                    href="/cpss"
                    className="block px-4 py-4 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-sky-500 leading-6"
                  >
                    CPSS (Computerised Pilot Selection System)
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center border-l border-gray-200 pl-8 gap-4">
              <button
                onClick={handleOpenPopup}
                href="/apply-cpss"
                className="h-[44px] px-8 border border-sky-400 text-sky-500 rounded-[4px] flex items-center justify-center text-[14px] font-semibold hover:bg-sky-50 transition"
              >
                Apply CPSS
              </button>

              {/* UPDATED FREE CONSULTATION BUTTON */}
              <button
                onClick={handleOpenPopup}
                className="h-[44px] px-7 bg-sky-400 text-white rounded-[4px] flex items-center justify-center text-[14px] font-semibold hover:bg-sky-500 transition"
              >
                Free consultation
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 transition ${
          mobileMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileMenu(false)}
        />

        {/* Sidebar */}
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/how-to-become-pilot">How to become pilot</Link>
            <Link href="/cpss">CPSS</Link>

            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/apply-cpss"
                className="h-[45px] border border-sky-400 text-sky-500 rounded-md flex items-center justify-center font-semibold"
              >
                Apply CPSS
              </Link>

              {/* UPDATED MOBILE FREE CONSULTATION BUTTON */}
              <button
                onClick={() => {
                  handleOpenPopup();
                  setMobileMenu(false);
                }}
                className="h-[45px] bg-sky-400 text-white rounded-md flex items-center justify-center font-semibold"
              >
                Free consultation
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ADD THIS POPUP COMPONENT */}
      <FreeconsultationPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
}
