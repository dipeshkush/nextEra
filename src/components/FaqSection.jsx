"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section id="faq" className="bg-black text-white py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Quick answers to common questions about the platform,
            tools and trading workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {faqs.slice(0, 4).map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                open={open}
                toggle={toggle}
                delay={i * 0.06}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {faqs.slice(4, 8).map((item, i) => (
              <FaqItem
                key={i + 4}
                item={item}
                index={i + 4}
                open={open}
                toggle={toggle}
                delay={i * 0.06}
              />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function FaqItem({ item, index, open, toggle, delay }) {
  const isOpen = open === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-white/5 transition"
      >
        <span className="font-medium text-lg">
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FaChevronDown
            className={`transition duration-300 ${
              isOpen ? "text-green-400" : "text-white/50"
            }`}
          />
        </motion.div>
      </button>

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
    </motion.div>
  );
}
