"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactPopup from "./ContactPopup";

export default function Footer() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="bg-[#183961] text-white p-20  py-10">
        <div className="max-w-7xl  grid md:grid-cols-5 gap-8 items-start">
          
          <div className="col-span-1 md:col-span-2">
            <p className="text-sm mb-2 opacity-80">
              Where Dreams Take Flight
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold italic">
              Training. Fly. Learn
            </h2>

            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={() => setPopupOpen(true)}
                className="bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-md text-white font-medium transition"
              >
                Join now
              </button>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between " >
           <div>
             <h4 className="font-semibold mb-4">Contact Us</h4>

            <p className="text-sm font-medium mb-1">
              Office training centre
            </p>

            <p className="text-sm opacity-80 leading-relaxed">
              Ground Floor, Digital 360, B-36,
              <br />
              Nehru Colony, Dalanwala,
              <br />
              Dehradun, Uttarakhand
            </p>
           </div>

         
          </div>
           <div>
              <p className="mt-4 font-medium">Phone no.</p>

            <div className="text-sm opacity-90">
              <p>+91-7843257762</p>
              <p>+91-7843257762</p>
              <p>+91-7843257762</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 md:px-16 py-6 rounded-t-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LOGO */}
          <Image
            src="/Futurewings-Logo.png"
            alt="Future Wings"
            width={140}
            height={80}
          />

          {/* PLANE IMAGE */}
          <Image
            src="/aeroplane footer.png" 
            alt="plane"
            width={300}
            height={120}
            className="object-contain"
          />

          {/* TEXT */}
          <h2 className="text-lg md:text-xl text-gray-800 text-center md:text-right">
            Give your <span className="italic">future fly</span> journey today !
          </h2>
        </div>
      </section>

      {/* POPUP */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
}