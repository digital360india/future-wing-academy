"use client";

import { useState } from "react";
import {
  Landmark,
  Copy,
  Check,
  Info,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Building2,
  Hash,
  User,
  MapPin,
} from "lucide-react";

// ── Banking fields ──────────────────────────────────────────────
const fields = [
  {
    icon: User,
    label: "Account Name",
    value: "Future Wings Aviation Pvt. Limited",
    full: true,
    highlight: false,
    copyable: true,
  },
  {
    icon: CreditCard,
    label: "Account Number",
    value: "50200122209882",
    highlight: true,
    copyable: true,
  },
  {
    icon: Hash,
    label: "IFSC Code",
    value: "HDFC0001399",
    highlight: true,
    copyable: true,
  },
  {
    icon: Hash,
    label: "Customer ID",
    value: "360951928",
    highlight: true,
    copyable: true,
  },
  {
    icon: Building2,
    label: "Bank Name",
    value: "HDFC Bank",
    highlight: false,
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Branch",
    value: "Dehradun, Uttarakhand",
    highlight: false,
    copyable: false,
  },
];

// ── Payment methods ─────────────────────────────────────────────
const paymentMethods = [
  {
    name: "NEFT",
    desc: "National Electronic Funds Transfer",
    timing: "Processed in batches. Credited within 2 hours on banking days.",
    limit: "No upper limit",
  },
  {
    name: "RTGS",
    desc: "Real Time Gross Settlement",
    timing: "Instant settlement during banking hours (8 AM – 4:30 PM).",
    limit: "Min ₹2,00,000",
  },
  {
    name: "IMPS",
    desc: "Immediate Payment Service",
    timing: "24 × 7 instant transfer including holidays.",
    limit: "Up to ₹5,00,000",
  },
];


// ── CopyButton ──────────────────────────────────────────────────
function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={handle}
      title="Copy"
      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-lg border border-[#dce7f3] bg-white text-[#143c73] hover:bg-[#143c73] hover:text-white hover:border-[#143c73] transition-all duration-150 font-serif"
    >
      {copied ? (
        <>
          <Check size={13} /> Copied
        </>
      ) : (
        <>
          <Copy size={13} /> Copy
        </>
      )}
    </button>
  );
}

// ── FAQ Item ────────────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#dce7f3] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#f7f9fc] text-left gap-4 hover:bg-[#eef3fb] transition-colors"
      >
        <span className="text-[14px] md:text-[15px] font-semibold text-[#0f2442] font-serif leading-snug">
          {q}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-[#143c73] flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-[#143c73] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 py-4 bg-white border-t border-[#dce7f3]">
          <p className="text-[14px] text-[#555] font-serif leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────
export default function BankingDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] py-8 px-4">
      <div className="w-full max-w-7xl mx-auto space-y-6">

        {/* ── HERO CARD ── */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-[#dce7f3]">
          {/* Header */}
          <div className="bg-[#082c59] px-6 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f4b32b]/20 flex-shrink-0">
              <Landmark size={28} className="text-[#f4b32b]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f4b32b] mb-1 font-serif">
                Future Wings Aviation Academy
              </p>
              <h1 className="text-[22px] md:text-[28px] font-bold text-white font-serif leading-tight">
                Banking Details
              </h1>
              <p className="text-[13px] text-white/55 mt-1 font-serif">
                Transfer your fees securely via NEFT · RTGS · IMPS
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 self-start sm:self-auto">
              <ShieldCheck size={16} className="text-[#f4b32b]" />
              <span className="text-[12px] font-semibold text-white font-serif">
                Verified Account
              </span>
            </div>
          </div>

          {/* Gold accent */}
          <div
            className="h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, #f4b32b 0%, rgba(244,179,43,0.1) 100%)",
            }}
          />

          {/* Fields grid */}
          <div className="p-5 md:p-7 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields.map((field, i) => {
                const Icon = field.icon;
                return (
                  <div
                    key={i}
                    className={`relative bg-[#f7f9fc] border border-[#dce7f3] rounded-xl px-4 py-4 flex items-start gap-3 ${
                      field.full ? "sm:col-span-2" : ""
                    }`}
                    style={{ borderLeft: "3px solid #143c73" }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef3fb] text-[#143c73] flex-shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a94b0] mb-1 font-serif">
                        {field.label}
                      </p>
                      <p
                        className={`text-[15px] md:text-[16px] font-bold font-serif break-all ${
                          field.highlight ? "text-[#143c73]" : "text-[#0f2442]"
                        }`}
                      >
                        {field.value}
                      </p>
                    </div>
                    {field.copyable && (
                      <div className="flex-shrink-0 mt-1">
                        <CopyButton value={field.value} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Warning note */}
            <div className="mt-5 flex items-start gap-3 bg-[#fff8e9] border border-[#ead9a7] rounded-xl px-4 py-4">
              <AlertTriangle
                size={18}
                className="text-[#c9951a] flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-[13px] font-bold text-[#7a5c1e] font-serif mb-0.5">
                  Important — Always verify before transferring
                </p>
                <p className="text-[13px] italic text-[#7a5c1e] font-serif leading-relaxed">
                  Double-check the account number and IFSC before initiating any
                  transfer. Future Wings Aviation Academy will never ask you to
                  transfer fees to a personal account. For queries, contact us
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>

      

        {/* ── CONTACT STRIP ── */}
        <div className="rounded-2xl bg-[#082c59] px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#f4b32b] font-serif mb-1">
              Need Help?
            </p>
            <h3 className="text-[18px] md:text-[22px] font-bold text-white font-serif leading-snug">
              Contact our Admissions Team
            </h3>
            <p className="text-[13px] text-white/55 font-serif mt-1">
              We're available Mon – Sat, 9 AM to 6 PM
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+9186792 34969"
              className="flex items-center gap-2.5 bg-white/10 border border-white/20 hover:bg-white/20 transition rounded-xl px-5 py-3"
            >
              <Phone size={16} className="text-[#f4b32b]" />
              <div>
                <p className="text-[10px] text-white/50 font-serif uppercase tracking-wide">
                  Call Us
                </p>
                <p className="text-[13px] font-bold text-white font-serif">
                  +91-86792 34969
                </p>
              </div>
            </a>
            <a
              href="mailto:admissions@futurewingsacademy.com"
              className="flex items-center gap-2.5 bg-white/10 border border-white/20 hover:bg-white/20 transition rounded-xl px-5 py-3"
            >
              <Mail size={16} className="text-[#f4b32b]" />
              <div>
                <p className="text-[10px] text-white/50 font-serif uppercase tracking-wide">
                  Email Us
                </p>
                <p className="text-[13px] font-bold text-white font-serif">
                  admissions@futurewingsacademy.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Processing time note */}
        <div className="flex items-center gap-3 bg-white border border-[#dce7f3] rounded-xl px-5 py-4">
          <Clock size={16} className="text-[#143c73] flex-shrink-0" />
          <p className="text-[13px] text-[#555] font-serif leading-relaxed">
            Payment confirmation is typically sent within{" "}
            <span className="font-bold text-[#0f2442]">24 working hours</span>{" "}
            after the transfer is received. Please share your payment
            screenshot with our team to expedite the process.
          </p>
        </div>
      </div>
    </div>
  );
}