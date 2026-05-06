"use client";

import { useState } from "react";

const steps = [
  "Just Researching",
  "Preparing for DGCA exams",
  "Shortlisted a flying school",
  "Already Started Training",
];

export default function PilotJourneyForm() {
  const [step, setStep] = useState(1);
  const [journey, setJourney] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/pilot-journey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, journey }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Request submitted successfully!");
      setStep(1);
      setForm({ name: "", phone: "", email: "" });
      setJourney("");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="text-center font-semibold text-lg">
        What is your current status <br /> in the pilot journey?
      </h2>

      <div className="h-1 bg-gray-200 rounded mt-4 mb-6">
        <div
          className={`h-1 bg-[#42B2F0] rounded transition-all ${
            step === 1 ? "w-1/2" : "w-full"
          }`}
        />
      </div>

      {step === 1 && (
        <div className="space-y-3">
          {steps.map((item) => (
            <button
              key={item}
              onClick={() => setJourney(item)}
              className={`w-full border rounded-lg py-3 text-sm ${
                journey === item
                  ? "border-[#42B2F0] bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            disabled={!journey}
            onClick={() => setStep(2)}
            className="w-full mt-4 bg-[#42B2F0] text-white py-3 rounded-lg disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-5 space-y-4"
        >
          <h3 className="text-center font-semibold text-gray-700">
            Where Dreams Take Flight
          </h3>

          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full border rounded px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Phone no."
            required
            className="w-full border rounded px-3 py-2"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full border rounded px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#42B2F0] text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit my request"}
          </button>
        </form>
      )}
    </div>
  );
}
