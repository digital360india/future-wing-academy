"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

// The dashboard's API endpoint that saves leads to Firebase.
// This lives on a DIFFERENT domain than this form, so it must be an absolute URL.
const LEADS_ENDPOINT = "https://futurewingslead.vercel.app/api/webleads";

export default function FreeconsultationPopup({ isOpen, onClose }) {
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

  const handleInterestNext = () => {
    if (!selectedInterest) {
      alert("Please select your interest");
      return;
    }
    setStep(3);
  };

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

    const payload = {
      ...formData,
      interest: selectedInterest,
      whyInterested: whyInterested,
      researchStatus: selectedResearch,
      source: "free-consultation-form",
    };

    // Fire both requests at once:
    // 1) your existing local route — sends you the Gmail notification (unchanged, kept as-is)
    // 2) the dashboard's webleads route — saves it into the Firebase leads table
    // Promise.allSettled means if one fails, it doesn't stop or break the other.
    const [emailResult, dashboardResult] = await Promise.allSettled([
      fetch("/api/free-consultation-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json()),
      fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json()),
    ]);

    const emailOk = emailResult.status === "fulfilled" && emailResult.value?.success;
    const dashboardOk = dashboardResult.status === "fulfilled" && dashboardResult.value?.success;

    if (dashboardResult.status === "rejected") {
      console.error("Dashboard submission failed:", dashboardResult.reason);
    } else if (!dashboardOk) {
      console.error("Dashboard submission returned an error:", dashboardResult.value);
    }
    if (emailResult.status === "rejected") {
      console.error("Email notification failed:", emailResult.reason);
    } else if (!emailOk) {
      console.error("Email notification returned an error:", emailResult.value);
    }

    // Keep the original user-facing behavior: proceed as long as the email
    // route (the one you rely on today) succeeded, same as before this change.
    if (emailOk) {
      onClose();
      router.push("/thankyou");
    } else {
      alert("Something went wrong. Please try again.");
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
    <div className="fixed  font-serif inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#f5f5f5] shadow-2xl flex flex-col lg:flex-row">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg"
        >
          ✕
        </button>

        <div className="w-full lg:w-1/2 px-6 flex flex-col justify-center">
          {step === 1 && (
            <>
              <div className="mt-3">
                <h2 className="text-xl md:text-[24px] font-bold text-[#2f2f2f]">
                  Free Consultation Form
                </h2>

                <p className="mt-3 text-gray-500">
                  Fill your details to continue your aviation journey.
                </p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="h-[55px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-[#4BAEE5]"
                  />

                  <select
                    name="qualification"
                    value={formData.qualification}
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
                    value={formData.address}
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
            src="/consultform.png"
            alt="Aviation"
            className="w-[560px] h-[566px] rounded-[30px] "
          />
        </div>
      </div>
    </div>
  );
}