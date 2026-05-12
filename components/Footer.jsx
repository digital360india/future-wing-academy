"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

import ContactPopup from "./ContactPopup";

export default function Footer() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <footer className=" overflow-hidden bg-[#16375f] text-white">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
            <div className="lg:col-span-2">
              <p className="text-sky-300 text-sm uppercase tracking-[3px] mb-3">
                Where Dreams Take Flight
              </p>

              <h2 className="text-3xl md:text-4xl leading-tight font-semibold">
                Learn. Train. Fly.
                <br />
                <span className="italic text-sky-300">
                  Your aviation journey starts here.
                </span>
              </h2>

              <p className="text-white/70 mt-5 text-[15px] leading-7 max-w-md">
                Future Wings provides professional pilot guidance, CPSS
                preparation, and aviation career consultation to help students
                achieve their dream of becoming pilots.
              </p>

              <button
                onClick={() => setPopupOpen(true)}
                className="mt-7 inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 transition-all duration-300 px-7 py-3 rounded-full text-white font-semibold shadow-lg shadow-sky-500/20 hover:scale-105"
              >
                Join Now
                <ArrowRight size={18} />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

              <ul className="space-y-4 text-[15px] text-white/75">
                <li>
                  <Link
                    href="/"
                    className="hover:text-sky-300 transition duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-sky-300 transition duration-300"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/howtobecomepilot"
                    className="hover:text-sky-300 transition duration-300"
                  >
                    How To Become Pilot
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cpss"
                    className="hover:text-sky-300 transition duration-300"
                  >
                    CPSS Training
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-sky-300 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between lg:col-span-2">
              <h3 className="text-lg font-semibold mb-5">
                Contact Information
              </h3>

              <div className="space-y-6 flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      Office Training Centre
                    </p>

                    <p className="text-sm text-white/70 leading-6 mt-1">
                      Ground Floor, Digital 360, B-36,
                      <br />
                      Nehru Colony, Dalanwala,
                      <br />
                      Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Phone size={18} />
                  </div>

                  <div className="text-sm text-white/80 space-y-1">
                    <p>+91-7843257762</p>
                    <p>+91-7843257762</p>
                    <p>+91-7843257762</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Mail size={18} />
                  </div>

                  <div className="text-sm text-white/80 break-all">
                    info@futurewingsaviation.com
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>

              <div className="flex items-center gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-400 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Instagram size={18} />
                </Link>

                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-400 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Facebook size={18} />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-400 transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <Image
                src="/Futurewings-Logo.png"
                alt="Future Wings"
                width={160}
                height={80}
                className="w-auto h-[60px]"
              />

              <div className="hidden md:block w-px h-10 bg-white/20" />

              <p className="text-sm text-white/60 max-w-xs">
                Empowering future pilots with aviation guidance and professional
                training.
              </p>
            </div>

            <div>
              <Image
                src="/aeroplane footer.png"
                alt="plane"
                width={320}
                height={140}
                className="object-contain animate-pulse"
              />
            </div>

            <div className="text-center lg:text-right">
              <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
                Give your{" "}
                <span className="italic text-sky-300">future flying</span>{" "}
                journey wings today!
              </h2>
{/* 
              <p className="text-white/60 text-sm mt-3">
                © 2026 Future Wings Aviation. All rights reserved.
              </p> */}
            </div>
          </div>
        </div>
      </footer>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
