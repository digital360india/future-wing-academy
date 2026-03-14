"use client";

import { useState } from "react";

export default function QRPayment() {
  const [transactionId, setTransactionId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!transactionId.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1479CB] to-[#8db7d8]" />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-between max-w-7xl mx-auto pt-20 px-12">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-8">

          {/* QR Code */}
          <div className="bg-white rounded-xl p-3 shadow-xl">
            <img
              src="/qrcode.png"
              alt="QR"
              className="w-69 h-69 rounded"
            />
            <p className="text-[10px] text-gray-400 tracking-widest text-right pr-1">
              TQRCS
            </p>
          </div>

          {/* Scan text */}
          <div className="flex flex-col items-start">
            <p className="text-white text-sm leading-snug">
              Scan here <br /> for payment
            </p>

            {/* Curved Arrow */}
            <svg
              className="mt-2"
              width="70"
              height="40"
              viewBox="0 0 70 40"
              fill="none"
            >
              <path
                d="M5 20 Q40 0 60 20"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <path
                d="M55 15 L60 20 L55 25"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="max-w-md mt-2">

          <h2 className="text-[32px] font-bold text-[#2E2E2E] mb-6">
            Here&apos;s How it is work ?
          </h2>

          <ol className="list-decimal pl-4 space-y-3 text-[20px] text-[#000000]">
            <li>
              Scan the <b>Qr code</b> with your camera.
            </li>
            <li>
              Pay the amount
            </li>
            <li>
              Once payment is done copy and paste the <b>transaction ID</b> in
              the <b>transaction ID.</b> field
            </li>
          </ol>

          {/* Input */}
          <div className="flex mt-6 shadow-md gap-4 overflow-hidden w-[320px]">
            <input
              type="text"
              placeholder="Enter Transaction ID."
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none bg-white"
            />

            <button
              onClick={handleSubmit}
              className="bg-[#1f3f63] text-white px-6 text-sm hover:bg-[#183450] transition"
            >
              {submitted ? "✓ Sent" : "Submit"}
            </button>
          </div>
        </div>
      </div>

      {/* AIRPLANE */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
        <img
          src="/aeroplane full shot 1.png"
          alt="plane"
          className="w-270  max-w-none"
        />
      </div>
    </div>
  );
}