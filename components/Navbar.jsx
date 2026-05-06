"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegistrationPopup from "./RegistrationPopup";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-gray-500 bg-white overflow-visible">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 min-h-18 md:min-h-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Open menu"
          >
            <span className="h-[3px] w-6 bg-gray-700" />
            <span className="h-[3px] w-6 bg-gray-700" />
            <span className="h-[3px] w-6 bg-gray-700" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Image
              src="/Futurewings-Logo.png"
              alt="Future Wings Academy"
              width={130}
              height={110}
              priority
              className="h-[48px] w-auto md:h-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-20 text-[18px] font-medium text-gray-700">
            <Link href="/" className="text-[#183961]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#183961]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#183961]">
              Contact
            </Link>
              <Link href="/cpss" className="border-2 p-2 rounded-[10px] border-sky-500 hover:bg-sky-500 hover:text-white transition text-sky-500">
             Apply CPSS
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setPopupOpen(true)}
              className="rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Join now
            </button>

            <div className="hidden lg:flex items-center">
              <Image
                src="/waiting graphics.png"
                alt="Your future is waiting"
                width={120}
                height={30}
              />
            </div>
          </div>
        </div>
      </header>

      <RegistrationPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-white p-8 border-b border-gray-500
        transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/Futurewings-Logo.png"
            alt="Future Wings Academy"
            width={150}
            height={120}
            className="w-auto h-12.5"
          />

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-[18px] font-medium text-gray-700">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setSidebarOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setSidebarOpen(false)}>
            Contact
          </Link>
           <Link href="/cpss" onClick={() => setSidebarOpen(false)}>
            CPSS
          </Link>


          <button
            onClick={() => {
              setSidebarOpen(false);
              setPopupOpen(true);
            }}
            className="mt-6 rounded-md bg-sky-500 py-3 text-center text-white font-semibold"
          >
            Join now
          </button>
        </nav>
      </aside>
    </>
  );
}
