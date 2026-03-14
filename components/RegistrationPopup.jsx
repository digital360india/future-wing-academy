"use client";

export default function RegistrationPopup({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full grid md:grid-cols-2">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          ✕
        </button>

        {/* Left Section */}
        <div className="p-8">
          <h2 className="text-[32px] font-bold text-gray-800">
            Where Dreams Take Flight
          </h2>

          <p className="text-[28px] text-gray-800 mt-1">
            Registration fee starts at{" "}
            <span className="text-[#51B6E7] font-bold text-[32px]">₹5000</span>
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Reserve your seats in future wings aviation academy.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Enter Phone no."
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select className="col-span-2 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Highest Qualification</option>
              <option>12th Pass</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>

          </div>

          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition">
            Proceed with Payment
          </button>
        </div>

        {/* Right Section */}
        <div className="relative hidden md:block">
          <img
            src="/image (3).png"
            alt="pilot"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}