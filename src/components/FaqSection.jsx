"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqSection() {
  const faqs = [
    {
      q: "Is this platform suitable for beginners?",
      a: "Yes. The platform is designed with guided onboarding, built-in indicators and simple order tools so beginners can start safely.",
    },
    {
      q: "Do I need prior trading experience?",
      a: "No prior experience is required. You can start with demo analysis tools and risk controls before placing real trades.",
    },
    {
      q: "What markets can I trade?",
      a: "You can trade major crypto pairs, selected derivatives and multiple supported digital assets.",
    },
    {
      q: "Are advanced charts included?",
      a: "Yes. You get professional charts, indicators, drawing tools and multi-timeframe analysis features.",
    },
    {
      q: "How fast is trade execution?",
      a: "Orders are processed through a low-latency execution engine designed for fast market conditions.",
    },
    {
      q: "Is my account and fund data secure?",
      a: "Security includes encryption, layered protection and multiple verification controls.",
    },
    {
      q: "Do you provide risk management tools?",
      a: "Yes. Position sizing, stop-loss planning and risk-reward tools are built directly into the platform.",
    },
    {
      q: "Can I use the tools before depositing?",
      a: "Yes. Several calculators and planning tools are available without funding your account.",
    },
  ];

  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-black text-white pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Quick answers to common questions about the platform,
            tools and trading workflow.
          </p>
        </div>

        {/* ===== Two Independent Columns ===== */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqs.slice(0, 4).map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                open={open}
                toggle={toggle}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {faqs.slice(4, 8).map((item, i) => (
              <FaqItem
                key={i + 4}
                item={item}
                index={i + 4}
                open={open}
                toggle={toggle}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= FAQ ITEM ================= */

function FaqItem({ item, index, open, toggle }) {
  const isOpen = open === index;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      {/* question */}
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-white/5 transition"
      >
        <span className="font-medium text-lg">
          {item.q}
        </span>

        <FaChevronDown
          className={`transition duration-300 ${
            isOpen ? "rotate-180 text-green-400" : "text-white/50"
          }`}
        />
      </button>

      {/* answer */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-white/70 leading-relaxed">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}
