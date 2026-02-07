"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Message sent successfully ✈️");
      setFormData({ name: "", phone: "", email: "", message: "" });
      onClose();
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-medium text-gray-900 leading-snug">
              We are ready to <br />
              assist you,
              <span className="text-blue-700 font-semibold"> Just Ask!</span>
            </h2>

            <p className="mt-4 text-sm text-gray-600">
              Have questions about our academic courses? We&apos;re here to
              assist you.
            </p>
          </div>

          {/* IMAGE */}
          <div className="absolute -bottom-10 left-0 hidden lg:block">
            <div className="relative w-60 h-60">
              <Image
                src="/popupimg.png"
                alt="Customer support illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Where Dreams Take Flight
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Train and develop future pilots and aviation leaders with us
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                  text-gray-900 placeholder:text-gray-400
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone no."
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                  text-gray-900 placeholder:text-gray-400
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                text-gray-900 placeholder:text-gray-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm
                text-gray-900 placeholder:text-gray-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-sky-500 text-white text-sm font-medium px-6 py-2.5 rounded-md
                hover:bg-sky-600 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit My Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
