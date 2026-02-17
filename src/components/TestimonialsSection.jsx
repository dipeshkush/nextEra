"use client";

import { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Crypto Swing Trader",
      text: "The chart tools and signal filters are incredibly accurate. My planning is much more structured and risk controlled now.",
      extra: "Best part is the execution speed and clean chart layout.",
    },
    {
      name: "Ananya Gupta",
      role: "Derivatives Trader",
      text: "Execution speed and UI clarity stand out. I can analyze, size and place trades in one smooth flow.",
      extra: "Order panel + indicators combo is excellent.",
    },
    {
      name: "Vikram Shah",
      role: "Full-time Trader",
      text: "Risk tools and position sizing improved my consistency across multiple strategies.",
      extra: "Helped reduce emotional trading mistakes.",
    },
    {
      name: "Neeraj Patel",
      role: "Intraday Trader",
      text: "Live indicators and alerts help me catch moves early with better confirmation.",
      extra: "Signal filters are very practical.",
    },
    {
      name: "Karan Verma",
      role: "Options Trader",
      text: "Strategy testing and risk-reward planning tools are extremely useful.",
      extra: "Backtesting saves a lot of time.",
    },
    {
      name: "Priya Nair",
      role: "Crypto Investor",
      text: "Clean interface and strong analytics tools make long-term tracking easier.",
      extra: "Portfolio view is very clear.",
    },
    {
      name: "Amit Jain",
      role: "Algo Trader",
      text: "Signal filters reduced false entries and improved system accuracy.",
      extra: "Good for rule-based traders.",
    },
    {
      name: "Sneha Roy",
      role: "Part-time Trader",
      text: "Beginner friendly but still pro-grade features available.",
      extra: "Learning curve is smooth.",
    },
    {
      name: "Rohit Das",
      role: "Momentum Trader",
      text: "Fast charts and smooth execution during volatile sessions.",
      extra: "No lag during spikes.",
    },
  ];

  const perSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / perSlide);
  const [slide, setSlide] = useState(0);
  const [pause, setPause] = useState(false);

  const next = () => setSlide((s) => (s + 1) % totalSlides);
  const prev = () => setSlide((s) => (s - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    if (pause) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [pause]);

  const visible = testimonials.slice(
    slide * perSlide,
    slide * perSlide + perSlide
  );

  return (
    <section id="testimonials" className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold">
            Trusted by Active <span className="text-green-400">Traders</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Detailed feedback from traders using our charts, signals,
            execution tools and risk systems daily.
          </p>
        </div>

        {/* controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button onClick={prev} className="p-3 rounded-lg border border-white/15 hover:border-green-400/40 hover:bg-white/10 transition">
            <FaChevronLeft />
          </button>
          <button onClick={next} className="p-3 rounded-lg border border-white/15 hover:border-green-400/40 hover:bg-white/10 transition">
            <FaChevronRight />
          </button>
        </div>

        {/* cards */}
        <div
          className="grid md:grid-cols-3 gap-8"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {visible.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-green-400/40 hover:bg-white/10 transition"
            >
              {/* stars */}
              <div className="flex gap-1 mb-5 text-green-400">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} className="text-sm" />
                ))}
              </div>

              {/* main text */}
              <p className="text-white/85 leading-relaxed">
                “{t.text}”
              </p>

              {/* extra line */}
              <p className="mt-3 text-sm text-white/60">
                {t.extra}
              </p>

              {/* user */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center text-green-400 font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === slide ? "bg-green-400" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* trust strip */}
        <div className="mt-12 text-center text-white/50 text-sm">
          ★ 4.7 average rating • 12,000+ users • Used across 40+ countries
        </div>

      </div>
    </section>
  );
}
