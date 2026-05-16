"use client";

import { useState } from "react";
import RegistrationPopup from "./RegistrationPopup";

export default function Hero() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 h-full w-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/future wings.mp4" type="video/mp4" />
      </video>

      {/* DARK + GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="max-w-2xl text-white">

            {/* SUB TITLE */}
            <p className="mb-3 text-[20px] sm:text-[26px] md:text-[38px] italic text-gray-200 leading-tight drop-shadow-lg">
              Where Dreams Take Flight
            </p>

            {/* MAIN TITLE */}
            <h1 className="mb-6 text-[34px] sm:text-[42px] md:text-[52px] font-bold italic leading-tight drop-shadow-xl">
              Learn. Train. Fly
            </h1>

            {/* BUTTON */}
            <div className="mt-6">
              <button
                onClick={handleOpenPopup}
                className="relative inline-flex items-center justify-center rounded-[5px] bg-sky-500 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] active:scale-95"
              >
                Join Now
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* POPUP */}
      <RegistrationPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </section>
  );
}