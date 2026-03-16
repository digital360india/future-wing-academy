"use client";

import { useState } from "react";
import RegistrationPopup from "./RegistrationPopup";

export default function Hero() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/future wings.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="ml-auto max-w-xl text-left text-white">
            <p className="mb-2 text-[24px] md:text-[38px] italic text-gray-200">
              Where Dreams Take Flight
            </p>

            <h1 className="mb-4 text-[32px] md:text-[38px] font-bold italic leading-tight">
              Learn. Train. Fly
            </h1>

            <div className="mt-6">
              <button
                onClick={handleOpenPopup}
                className="inline-block rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <RegistrationPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </section>
  );
}
