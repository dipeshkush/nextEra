"use client";

import TradingChart from "./TradingChart";
import { useEffect, useState } from "react";
import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  const words = ["Alpha", "Signal", "Profit"];
const features = [
  {
    title: "Fast Exec",
    desc: "ms orders",
    Icon: FaBolt,
  },
  {
    title: "Signals",
    desc: "AI alerts",
    Icon: FaChartLine,
  },
  {
    title: "Secure",
    desc: "Protected",
    Icon: FaShieldAlt,
  },
];



  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;
    let timeout;

    const currentWord = words[wordIndex];
    let charIndex = 0;

    interval = setInterval(() => {
      if (charIndex < currentWord.length) {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        charIndex++;
        setIsTyping(true);
      } else {
        clearInterval(interval);
        setIsTyping(false);

        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setDisplayed("");
          setIsTyping(true);
        }, 900);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [wordIndex]);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-26 pb-13 grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Build Your Trading Edge With{" "}
            <span className="text-green-400 ">
              {displayed}
              {/* {isTyping && <span className="ml-1 animate-pulse">|</span>} */}
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            Analyze live markets with advanced charts, automated signals,
            and ultra-fast execution engine. Make confident decisions with
            institutional-grade trading tools built for modern traders.
          </p>

          {/* Bullets */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/70">
            <div>✔ Real-time price feeds</div>
            <div>✔ 100+ technical indicators</div>
            <div>✔ One-click buy & sell</div>
            <div>✔ Smart risk controls</div>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-green-400 font-bold text-xl">2M+</div>
              <div className="text-white/60">Active Traders</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-xl">$12B+</div>
              <div className="text-white/60">Monthly Volume</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-xl">120+</div>
              <div className="text-white/60">Markets</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition">
              Start Trading
            </button>
            <button className="px-8 py-3 rounded-full border border-white/25 hover:bg-white/10 transition">
              Watch Platform
            </button>
          </div>
        </div>

        {/* RIGHT - same as before */}
        <div className="flex flex-col gap-6 w-full lg:ml-6 mt-6">
          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur shadow-2xl">
            <TradingChart />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  {features.map((f, i) => {
    const Icon = f.Icon;

    return (
      <div
        key={i}
        className="group rounded-xl border border-white/15 bg-white/10 backdrop-blur p-5 hover:bg-white/15 hover:border-green-400/40 transition"
      >
        <div className="flex items-center gap-4">

          {/* icon */}
          <div className="w-10 h-10 shrink-0 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
            <Icon className="text-green-400 text-lg" />
          </div>

          {/* text */}
          <div className="leading-tight">
            <div className="font-semibold text-base">
              {f.title}
            </div>
            <div className="text-sm text-white/70 mt-1">
              {f.desc}
            </div>
          </div>

        </div>
      </div>
    );
  })}
</div>


        </div>
      </div>
    </section>
  );
}