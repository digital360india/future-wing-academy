"use client";

import { useState } from "react";

export default function JoinForm() {
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

  // ✅ Step 1 Validation
  const validateStep1 = () => {
    let err = {};

    if (!form.name) err.name = "Required";
    if (!form.phone) err.phone = "Required";
    if (!form.email) err.email = "Required";
    if (!form.age) err.age = "Required";
    if (!form.address) err.address = "Required";
    if (!form.city) err.city = "Required";
    if (!form.qualification || form.qualification === "Highest Qualification")
      err.qualification = "Required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ✅ Step 2 Validation
  const validateStep2 = () => {
    let err = {};
    if (!form.transactionId) err.transactionId = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setLoading(true); // start loading

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
        alert("Form Submitted & Email Sent ✅");

        // ✅ Reset form
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

        // ✅ Go back to step 1
        setStep(1);

        // ✅ Optional full page refresh
        window.location.reload();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    } finally {
      setLoading(false); // stop loading
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f3b5c] px-4">
      <div className="bg-[#f3f4f6] rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-[18px] font-semibold text-gray-800">
              CPSS BATCH 2026 Joining Form
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              Starting from{" "}
              <span className="text-blue-600 font-semibold">5th May 2026</span>
            </p>

            <p className="text-xs text-gray-400 mt-3">
              Don't miss your chance. Join now
            </p>

            <form onSubmit={nextStep} className="mt-6 space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone"
                    placeholder="Enter Phone no."
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <input
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-xs">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <input
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">{errors.address}</p>
                )}
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>

                <div>
                  <select
                    name="qualification"
                    onChange={handleChange}
                    className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  >
                    <option>Highest Qualification</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                  </select>
                  {errors.qualification && (
                    <p className="text-red-500 text-xs">
                      {errors.qualification}
                    </p>
                  )}
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-[45px] rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition"
              >
                Pay ₹2000
              </button>
            </form>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-[18px] font-semibold text-gray-800 mb-2">
              Complete Payment
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Scan QR & enter transaction ID
            </p>

            <div className="bg-white p-4 rounded-lg border mb-4">
              <img
                src="/qrcode (2).png"
                alt="QR"
                className="w-full h-44 object-contain"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="transactionId"
                  placeholder="Enter Transaction ID"
                  onChange={handleChange}
                  className="w-full h-[42px] px-3 text-sm bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                />
                {errors.transactionId && (
                  <p className="text-red-500 text-xs">{errors.transactionId}</p>
                )}
              </div>

              <button
                disabled={loading}
                className="w-full h-[45px] rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Payment"
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-gray-500 underline w-full"
              >
                ← Go Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
