"use client";

import {
  FileText,
  ShieldCheck,
  BadgeDollarSign,
  HandCoins,
  ClipboardCheck,
  CircleHelp,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function EducationLoanSection() {
  const benefits = [
    {
      title: "Funding for Eligible Courses",
      text: "Loans available for approved aviation and pilot training programs.",
    },
    {
      title: "Covers Key Expenses",
      text: "Tuition fees, flying hours, exam fees, and other training-related expenses.",
    },
    {
      title: "Flexible Repayment Options",
      text: "Choose repayment plans that suit your future income and financial goals.",
    },
    {
      title: "Loan Amount Based on Eligibility",
      text: "Loan amount is decided based on your profile and credit assessment.",
    },
    {
      title: "Dedicated Support",
      text: "Guidance throughout the loan application process from Credila.",
    },
    {
      title: "Early Application Option",
      text: "Start your loan process even before admission confirmation.",
    },
  ];

  const documents = [
    "Student KYC Documents (ID & Address Proof)",
    "Academic records & educational certificates",
    "Admission letter & fee structure",
    "Co-applicant KYC & income documents",
    "Additional documents as required by the lender",
  ];

  return (
    <section className="bg-[#f5f6f8] py-10">
      <div className="mx-auto max-w-360 overflow-hidden border border-gray-200 bg-white shadow-lg">
        {/* HERO */}
        <div className="relative h-112 overflow-hidden">
          <img
            src="/loanplan.jpg"
            alt="Education Loan"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 max-w-120 p-6">
            <h1 className="text-[32px] font-black uppercase leading-none tracking-tight text-white font-serif">
              Education Loan
            </h1>

            <h2 className="text-[22px] font-extrabold uppercase tracking-wide text-white font-serif">
              Assistance For Pilot Training
            </h2>

            <div className="mt-2 h-[3px] w-36 bg-[#d8a437]" />

            <p className="mt-4 text-[16px] leading-6 text-white font-serif">
              At Future Wings Aviation Academy, we believe that financial
              constraints should not stop you from chasing your dream of
              becoming a pilot.
            </p>

            <p className="mt-3 text-[16px] leading-6 text-white font-serif">
              We assist students in exploring education loan opportunities
              through Credila (an HDFC Credila partner) and India's leading
              education finance companies.
            </p>

            <div className="mt-5 inline-block rounded bg-white p-3 shadow-md">
              <div className="text-xl font-black text-[#0d4f9c]">CREDILA</div>
              <div className="text-[10px] text-gray-600">
                Powered by HDFC Credila
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="border-r border-gray-200 p-6 font-serif">
            <div className="mb-6 flex items-center gap-2">
              <CircleHelp size={18} className="text-[#163457]" />
              <h3 className="text-[24px] font-bold uppercase text-[#163457]">
                Why Choose An Education Loan?
              </h3>
            </div>

            <p className="mb-6 text-[16px] leading-6 text-gray-700">
              Pilot training is a significant investment in your future. An
              education loan helps you manage your training expenses and focus
              on achieving your goals.
            </p>

            <div className="space-y-4 font-serif">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-gray-200 pb-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163457] text-white">
                    <BadgeDollarSign size={18} />
                  </div>

                  <div>
                    <h4 className="text-[18px] font-bold text-[#163457]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[16px] leading-5 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-6 font-serif">
            <div className="mb-6 flex items-center gap-2">
              <ClipboardCheck size={18} className="text-[#163457]" />
              <h3 className="text-[24px] font-bold uppercase text-[#163457]">
                Simple Loan Process
              </h3>
            </div>

            <div className="space-y-5">
              {[
                {
                  no: "1",
                  title: "Apply",
                  text: "Submit your education loan application online with Credila.",
                },
                {
                  no: "2",
                  title: "Documents & Assessment",
                  text: "Submit required documents and complete credit assessment.",
                },
                {
                  no: "3",
                  title: "Loan Sanction",
                  text: "Once approved, you will receive the sanction letter with loan terms.",
                },
                {
                  no: "4",
                  title: "Disbursement",
                  text: "Loan amount is disbursed directly to the academy as per the agreed terms.",
                },
              ].map((step) => (
                <div key={step.no} className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8a437] text-sm font-bold text-white">
                    {step.no}
                  </div>

                  <div>
                    <h4 className="text-[16px] font-bold uppercase text-[#163457]">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-[16px] leading-5 text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DOCUMENTS */}
            <div className="mt-8 rounded-xl bg-[#eef3fb] p-5 font-serif">
              <div className="mb-4 flex items-center gap-2">
                <FileText size={18} className="text-[#163457]" />
                <h4 className="text-[18px] font-bold uppercase text-[#163457]">
                  Documents Generally Required
                </h4>
              </div>

              <ul className="space-y-2">
                {documents.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[16px] text-gray-700"
                  >
                    <ShieldCheck size={14} className="mt-0.5 text-[#163457]" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid border-t border-gray-200 md:grid-cols-2 font-serif">
          <div className="border-r border-gray-200 p-6">
            <div className="mb-4 flex items-center gap-2">
              <HandCoins size={18} className="text-[#163457]" />
              <h3 className="text-[18px]  font-bold uppercase text-[#163457]">
                Our Assistance
              </h3>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-[16px] leading-6 text-gray-700">
              <li>Course details and fee structure</li>
              <li>Admission & aviation-related documents</li>
              <li>Information required by the lender</li>
              <li>Assistance in coordinating with loan representatives</li>
            </ul>
          </div>

          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#163457]" />
              <h3 className="text-[18px]  font-bold uppercase text-[#163457]">
                Important Disclaimer
              </h3>
            </div>

            <p className="text-[16px] leading-6 text-gray-700">
              Education loans are provided at the sole discretion of Credila
              Financial Services Limited and are subject to their eligibility
              criteria, documentation requirements, credit assessment and
              prevailing policies.
            </p>

            <p className="mt-4 text-[16px] font-bold text-gray-800">
              Future Wings Aviation Academy does not guarantee loan approval,
              loan amount, interest rate, or sanction terms.
            </p>
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="bg-[#163457] px-6 py-5 text-white font-serif">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white">
                <Phone size={22} />
              </div>

              <div>
                <h4 className="font-bold uppercase text-[18px]">
                  Ready To Take The Next Step?
                </h4>

                <p className="text-[16px] text-gray-200">
                  Our team is here to guide you on your education loan journey.
                </p>

                <Link
                  href="https://wa.me/918679234969?text=Hi,%20I%20want%20to%20know%20about%20education%20loan%20assistance%20for%20aviation%20pilot%20training."
                  target="_blank"
                  className="mt-3 inline-block rounded bg-[#d8a437] px-4 py-2 text-xs font-bold uppercase text-black hover:opacity-90"
                >
                  Contact Admissions Team
                </Link>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={15} />
                +91 86792 34969
              </div>

              <div className="flex items-center gap-2">
                <Mail size={15} />
                admissions@futurewingsacademy.com
              </div>

              <div className="flex items-center gap-2">
                <Globe size={15} />
                www.futurewingsavn.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
