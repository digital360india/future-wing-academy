"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LEADS_ENDPOINT = "https://futurewingslead.vercel.app/api/webleads";

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
      // 1. Existing email API
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
        // 2. Also send lead to the dashboard
        const leadPayload = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          age: formData.age,
          address: formData.address,
          city: formData.city,
          qualification: formData.qualification,
          transactionId,
          source: "registration-form",
        };

        // Non-blocking – don’t break the success flow if lead API fails
        fetch(LEADS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadPayload),
        }).catch((err) => {
          console.error("Failed to save lead to dashboard:", err);
        });

        onClose();
        router.push("/thankyou");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="fixed font-serif inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          {step === 1 && (
            <>
              <h2 className="text-xl md:text-[24px] font-bold text-gray-800">
                Where Dreams Take Flight
              </h2>

              <p className="text-[16px] md:text-[20px] mt-1">
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
                <span className="font-bold">Payment To:</span> future wings
                aviation academy
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-blue-500 mb-4 text-sm underline"
              >
                ← Back
              </button>

              <p className="text-sm text-gray-500 mt-1">Total Amount:</p>
              <h3 className="text-[#4EADE3] text-2xl font-bold mb-5">₹5000</h3>

              <div className="items-center sm:items-start gap-10 md:flex-row md:items-start">
                <div className="items-center md:items-start">
                  <img
                    src="/avaitionqrcode.jpeg"
                    className="w-60 h-72 sm:w-52 sm:h-52 md:w-60 "
                    alt="QR Code"
                  />

                  <div className="mt-3 text-center md:hidden">
                    <p className="text-sm">
                      <span className="font-semibold">UPI ID:</span> masspal@ibl
                    </p>
                  </div>
                </div>

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

        <div className="hidden md:block md:w-1/2">
          <img
            src="/aviation form image.png"
            alt="pilot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}