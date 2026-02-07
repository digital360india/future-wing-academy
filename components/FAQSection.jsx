"use client";
import React, { useState } from "react";
const faqs = [
  {
    question: "Is this a flying school?",
    answer:
      "No. We are a pilot preparation and mentorship institute that guides students before they invest in flying training.",
  },
  {
    question: "Who is eligible to join the programme?",
    answer:
      "Students who have passed 10+2 with Physics and Mathematics, and science or technical graduates aged 17 to 65 years.",
  },
  {
    question: "How long is the ground training programme?",
    answer:
      "The structured ground training programme is completed in approximately three months.",
  },
  {
    question: "Do you help with DGCA exams and medicals?",
    answer:
      "Yes. We provide complete guidance for DGCA theory preparation and Class 1 & Class 2 medical processes.",
  },
  {
    question: "What support do students receive after the course?",
    answer:
      "Students receive continued mentorship for flying school selection, licensing, and airline preparation.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our website contact form, phone, or email. Our team will get back to you promptly with guidance and support.",
  },
  {
    question: "How is the connectivity to Dehradun?",
    answer:
      "Dehradun is well connected by air, rail, and road. Jolly Grant Airport has regular flights from major cities, and the city is easily accessible via trains and highways.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full md:py-10 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[18px] font-bold text-center text-[#104E7E] mb-2">FAQs</h2>
        <p className="text-center md:text-3xl text-[24px] font-bold text-gray-900 mb-8">
          Commonly Asked Questions Answered
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex justify-between items-center font-semibold text-lg"
              >
                <span>
                  {index + 1}. {faq.question}
                </span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
