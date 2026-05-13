"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CpssPopup({ isOpen, onClose }) {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedResearch, setSelectedResearch] = useState("");
  const [whyInterested, setWhyInterested] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    city: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        address: "",
        city: "",
        qualification: "",
      });
      setSelectedInterest("");
      setSelectedResearch("");
      setWhyInterested("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStep1Next = () => {
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

  // STEP 2 NEXT (Original Step 1 - Interest Selection now in Step 2)
  const handleInterestNext = () => {
    if (!selectedInterest) {
      alert("Please select your interest");
      return;
    }
    setStep(3);
  };

  // STEP 3 NEXT
  const handleStep3Next = () => {
    if (!whyInterested.trim()) {
      alert("Please write why you are interested");
      return;
    }
    setStep(4);
  };

  const handleSubmit = async () => {
    if (!selectedResearch) {
      alert("Please select your research status");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/free-consultation-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          interest: selectedInterest,
          whyInterested: whyInterested,
          researchStatus: selectedResearch,
        }),
      });

      const data = await res.json();

      if (data.success) {
        onClose();
        router.push("/thankyou");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  const interestOptions = [
    "Just exploring aviation as a career",
    "Planning to start within 6–12 months",
    "Ready to begin training soon",
    "Looking for cabin crew opportunities",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 overflow-y-auto">
      <div className="relative w-full md:h-[600px] max-w-5xl overflow-hidden rounded-[30px] bg-[#f5f5f5] shadow-2xl flex flex-col lg:flex-row">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg"
        >
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 py-10 flex flex-col justify-center">
          {step === 1 && (
            <>
              <div className="mt-3">
                <h2 className="text-3xl md:text-[24px] font-bold text-[#2f2f2f]">
                  CPSS BATCH 2026 Joining Form
                </h2>

                <p className="mt-3 text-gray-500">
                  Don't miss your chance. join now
                </p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <select
                    name="qualification"
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  >
                    <option value="">Highest Qualification</option>
                    <option>10th Pass</option>
                    <option>12th Pass</option>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                  </select>

                  <textarea
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    className="sm:col-span-2 rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-[#4BAEE5]"
                    rows={4}
                  />
                </div>

                <button
                  onClick={handleStep1Next}
                  className="mt-5 w-full h-[58px] rounded-xl bg-[#4BAEE5] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90"
                >
                  Next
                  <ArrowRight size={18} />
                </button>

                <div className="flex justify-center gap-2 mt-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-[#4BAEE5] text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <div className="mt-3">
                <h2 className="text-xl md:text-[28px] font-bold text-[#2f2f2f] leading-tight">
                  Select Your Interest in Aviation
                </h2>

                <p className="mt-3 text-gray-600 text-[15px]">
                  What Best Describes your current interest level ?
                </p>

                <div className="mt-3 space-y-4">
                  {interestOptions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedInterest(item)}
                      className={`w-full h-[58px] rounded-xl border text-sm transition-all duration-200 px-4
                      ${
                        selectedInterest === item
                          ? "border-[#4BAEE5] bg-[#4BAEE5] text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-[#4BAEE5]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleInterestNext}
                  className="mt-12 w-full h-[58px] rounded-xl bg-[#4BAEE5] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90"
                >
                  Next
                  <ArrowRight size={18} />
                </button>

                <div className="flex justify-center gap-2 mt-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-[#4BAEE5] text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <div className="mt-2">
                <h2 className="text-xl md:text-[28px] font-bold text-[#2f2f2f] leading-tight">
                  Give your Reason
                </h2>

                <p className="mt-4 text-gray-600 text-[15px]">
                  Why are you interested in becoming a commercial pilot?
                </p>

                <textarea
                  value={whyInterested}
                  onChange={(e) => setWhyInterested(e.target.value)}
                  placeholder="Comment your answer"
                  className="mt-6 w-full h-48 rounded-2xl border border-gray-300 bg-white p-5 outline-none focus:border-[#4BAEE5] resize-y"
                />

                <button
                  onClick={handleStep3Next}
                  className="mt-12 w-full h-[58px] rounded-xl bg-[#4BAEE5] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90"
                >
                  Next
                  <ArrowRight size={18} />
                </button>

                <div className="flex justify-center gap-2 mt-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-2 text-[#4BAEE5] text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <div className="mt-3">
                <h2 className="text-xl md:text-[28px] font-bold text-[#2f2f2f]">
                  Select Your Interest in Aviation
                </h2>

                <p className="mt-3 text-gray-600 text-[15px]">
                  Have you researched the commercial pilot training process
                  before?
                </p>

                <div className="mt-3 space-y-4">
                  {[
                    "Yes, I understand the basics",
                    "I know a little about it",
                    "No, I'm just starting to explore",
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedResearch(item)}
                      className={`w-full h-[58px] rounded-xl border text-left px-6 transition-all duration-200
                      ${
                        selectedResearch === item
                          ? "border-[#4BAEE5] bg-[#4BAEE5] text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-[#4BAEE5]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <label className="mt-3 flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 accent-[#4BAEE5]"
                  />
                  <span className="text-sm text-gray-600">
                    I'm interested in learning more about becoming a commercial
                    pilot and agree to be contacted regarding the course.
                  </span>
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="mt-5 w-full h-[58px] rounded-xl bg-[#4BAEE5] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Book my Free consultation Now"}
                </button>

                <div className="flex justify-center gap-2 mt-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4BAEE5]"></div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/cpssform.png"
            alt="Aviation"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}
