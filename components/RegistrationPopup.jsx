"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    city: "",
    qualification: "",
  });

  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const { name, phone, email, age, address, city, qualification } = formData;

    if (
      !name ||
      !phone ||
      !email ||
      !age ||
      !address ||
      !city ||
      !qualification
    ) {
      alert("Please fill all fields");
      return;
    }

    setStep(2);
  };

  const handleSubmit = async () => {
    if (!transactionId) {
      alert("Enter Transaction ID");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          transactionId,
        }),
      });

      const data = await res.json();

      if (data.success) {
        onClose(); 
        router.push("/thankyou"); 
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          {step === 1 && (
            <>
              <h2 className="text-2xl md:text-[32px] font-bold text-gray-800">
                Where Dreams Take Flight
              </h2>

              <p className="text-xl md:text-[28px] mt-1">
                Registration fee starts at{" "}
                <span className="text-[#51B6E7] font-bold">₹5000</span>
              </p>

              <p className="text-xs text-gray-400">
                Reserve your seats in future wings aviation academy.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <input
                  name="phone"
                  placeholder="Phone No."
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <input
                  name="age"
                  placeholder="Age"
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <input
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />

                <select
                  name="qualification"
                  onChange={handleChange}
                  className="sm:col-span-2 border rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Highest Qualification</option>
                  <option>12th Pass</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                </select>
              </div>

              <button
                onClick={handleNext}
                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md"
              >
                Proceed with Payment Next →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-sm ">
                <span className="font-bold">Payment To:</span> Mass Management
                of Contract affiliated by future wings aviation academy
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-blue-500 mb-4 text-sm underline"
              >
                ← Back
              </button>

              <p className="text-sm text-gray-500 mt-1">Total Amount:</p>
              <h3 className="text-[#4EADE3] text-2xl font-bold mb-5">₹5000</h3>

              <div className="flex flex-col items-center sm:items-start gap-10 md:flex-row md:items-start">
                {/* QR code area – centered on mobile */}
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src="/qrcode (2).png"
                    className="w-40 h-40 sm:w-36 sm:h-36 md:w-60 md:h-40"
                    alt="QR Code"
                  />

                  <div className="mt-3 text-center md:hidden">
                    <p className="text-sm">
                      <span className="font-semibold">UPI ID:</span>{" "}
                      masspal@ibl
                    </p>
                  </div>
                </div>

                {/* Instructions – stack below QR on mobile */}
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-3 text-base md:text-lg">
                    Here's How it works?
                  </h4>

                  <ol className="text-sm list-decimal pl-5 md:pl-4 space-y-2.5 mx-auto md:mx-0 max-w-xs md:max-w-none">
                    <li>Scan the QR code with your camera.</li>
                    <li>Pay the amount.</li>
                    <li>
                      Once payment is done copy & paste the Transaction ID in
                      the field below.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Transaction ID input + button – full width on mobile */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <input
                  placeholder="Enter Transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4EADE3]"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-[#4EADE3] text-white px-8 py-3 rounded-md font-medium disabled:opacity-50 whitespace-nowrap"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/image (3).png"
            alt="pilot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
