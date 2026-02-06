"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ContactPopup({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl mx-4 rounded-xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl mt-16 font-medium text-gray-900 leading-snug">
              We are ready to <br />
              assist you,
              <span className="text-blue-700 font-semibold"> Just Ask!</span>
            </h2>

            <p className="mt-4 text-sm text-gray-600">
              Have questions about our academic courses? We&apos;re here to
              assist you.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Where Dreams Take Flight
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Train and develop future pilots and aviation leaders with us
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                  text-gray-900 placeholder:text-gray-400 placeholder:opacity-100
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Enter Phone no."
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                  text-gray-900 placeholder:text-gray-400 placeholder:opacity-100
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                text-gray-900 placeholder:text-gray-400 placeholder:opacity-100
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Message"
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                text-gray-900 placeholder:text-gray-400 placeholder:opacity-100
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="bg-sky-500 text-white text-sm font-medium px-6 py-2.5 rounded-md
                hover:bg-sky-600 transition"
              >
                Submit My Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
