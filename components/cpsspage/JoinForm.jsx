"use client";

import { useState } from "react";
import { X, ShieldCheck, Award, Users } from "lucide-react";
import Image from "next/image";

export default function JoinFormPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    city: "",
    qualification: "",
    transactionId: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATE STEP 1
  const validateStep1 = () => {
    let err = {};

    if (!form.name) err.name = "Required";
    if (!form.phone) err.phone = "Required";
    if (!form.email) err.email = "Required";
    if (!form.age) err.age = "Required";
    if (!form.address) err.address = "Required";
    if (!form.city) err.city = "Required";

    if (
      !form.qualification ||
      form.qualification === "Highest Qualification"
    ) {
      err.qualification = "Required";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  // VALIDATE STEP 2
  const validateStep2 = () => {
    let err = {};

    if (!form.transactionId) {
      err.transactionId = "Required";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();

    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-cpss", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Form Submitted Successfully ✅");

        setForm({
          name: "",
          phone: "",
          email: "",
          age: "",
          address: "",
          city: "",
          qualification: "",
          transactionId: "",
        });

        setStep(1);

        onClose();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-[popup_0.3s_ease] grid lg:grid-cols-2">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 hover:bg-red-500 hover:text-white transition flex items-center justify-center shadow-md"
        >
          <X size={20} />
        </button>

        <div className="relative hidden lg:flex flex-col justify-between  p-4 overflow-hidden">

          <div className="absolute inset-0 h-[70vh] ">
            <Image
              src="/cpssform.png"
              alt="Pilot"
              width={1000}
              height={1100} 
              
              className="object-cover"
            />
          </div>

         

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 sm:p-10 lg:p-12 overflow-y-auto max-h-[100vh]">

          {/* TOP HEADER */}
          <div className="mb-7">
          
            <h2 className="text-2xl font-bold text-gray-900">
              {step === 1 ? "CPSS Registration" : "Complete Your Payment"}
            </h2>

          </div>

          {step === 1 && (
            <form onSubmit={nextStep} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Age
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  />

                  {errors.age && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.age}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                />

                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  />

                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Qualification
                  </label>

                  <select
                    name="qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    className="w-full h-13 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                  >
                    <option>Highest Qualification</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                  </select>

                  {errors.qualification && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.qualification}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.01] transition-all"
              >
                Continue to Payment ₹2000
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-2">

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6">
                <img
                  src="/qrcode (2).png"
                  alt="QR Code"
                  className="w-full max-w-[220px] mx-auto object-contain"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Transaction ID
                </label>

                <input
                  type="text"
                  name="transactionId"
                  value={form.transactionId}
                  onChange={handleChange}
                  placeholder="Enter transaction ID"
                  className="w-full h-14 px-4 rounded-2xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none"
                />

                {errors.transactionId && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.transactionId}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Payment"
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-gray-500 hover:text-black text-sm transition"
              >
                ← Go Back
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}