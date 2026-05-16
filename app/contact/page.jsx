"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Message sent successfully ✈️");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] min-h-screen">

      {/* BACKGROUND BLUR */}


      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-10">

        {/* TOP HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs font-medium">
            ✈ Future Wings Aviation Academy
          </div>

          <h1 className="mt-5 text-3xl  font-bold leading-tight text-[#163660]">
            Let&apos;s Connect &
            <span className="text-sky-500"> Build Your Aviation Future</span>
          </h1>

          <p className="mt-4 text-[15px] text-gray-600 leading-7">
            Have questions about pilot training, CPSS preparation, or aviation
            career guidance? Our team is here to assist you.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[28px] shadow-2xl min-h-[620px]">

              {/* IMAGE */}
              <Image
                src="/contactimg.jpg"
                alt="Future Wings"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 text-white">

                {/* TOP */}
                <div>

                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs">
                    Aviation Career Support
                  </div>

                  <h2 className="mt-6 text-2xl font-bold leading-tight">
                    We Are Ready To Assist You
                  </h2>

                  <p className="mt-4 text-white/85 leading-7 text-[14px] max-w-md">
                    Whether you are planning to become a pilot or preparing
                    for CPSS, our experts are available to guide you.
                  </p>
                </div>

                {/* CONTACT CARDS */}
                <div className="space-y-4 mt-8">

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">

                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-base">
                        Office Training Centre
                      </h4>

                      <p className="text-xs text-white/80 mt-1 leading-6">
                        Ground Floor, Digital 360, B-36,
                        <br />
                        Nehru Colony, Dalanwala,
                        <br />
                        Dehradun, Uttarakhand
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">

                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-base">
                        Call Us
                      </h4>

                      <p className="text-xs text-white/80 mt-1">
                        +91-8679234969
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">

                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-base">
                        Email Support
                      </h4>

                      <p className="text-xs text-white/80 mt-1 break-all">
                        futurewingsaviationinfo@gmail.com
                      </p>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">

            <div className="relative bg-white rounded-[28px] shadow-2xl border border-sky-100 overflow-hidden">

              {/* BLUR */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-sky-100 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-9">

                {/* FORM HEADING */}
                <div>

                  <p className="text-sky-500 font-semibold uppercase tracking-widest text-xs">
                    Contact Form
                  </p>

                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#163660] leading-tight">
                    Where Dreams Take Flight
                  </h3>

                  <p className="mt-3 text-[14px] text-gray-600 leading-6">
                    Fill out the form below and our aviation experts will
                    contact you shortly.
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* NAME + PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="text-xs font-medium text-gray-700 mb-2 block">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        required
                        className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-[13px] outline-none focus:ring-2 focus:ring-sky-400 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-700 mb-2 block">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-[13px] outline-none focus:ring-2 focus:ring-sky-400 transition"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-xs font-medium text-gray-700 mb-2 block">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-[13px] outline-none focus:ring-2 focus:ring-sky-400 transition"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-xs font-medium text-gray-700 mb-2 block">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      rows="5"
                      required
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-[13px] outline-none focus:ring-2 focus:ring-sky-400 transition resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full h-12 rounded-2xl bg-sky-500 text-white font-semibold text-[15px] shadow-lg hover:scale-[1.01] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit My Request
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}