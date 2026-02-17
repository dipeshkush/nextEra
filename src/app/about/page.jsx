"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Headphones,
  Lock,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section with Heading + Intro Paragraph */}
        <div className="relative flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black pb-8">
          <div className="max-w-5xl mx-auto px-6 text-center mt-24 ">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              About <span className="text-green-400">NextEra</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              NextEra Trade is a next-generation trading platform built for modern traders who demand speed, transparency, and powerful tools.  
              Founded in Indore, Madhya Pradesh, we are committed to democratizing access to financial markets with institutional-grade technology, 
              ultra-fast execution, and a user-first experience — whether you're a beginner or a seasoned professional.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="max-w-5xl mx-auto px-6 py-8 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-green-400">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the most trusted and innovative trading platform in India and beyond — where every trader, regardless of experience or capital, 
                has access to the same advanced tools, fair pricing, lightning-fast execution, and uncompromising security that were once reserved only for institutions.
              </p>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                We envision a future where trading is no longer intimidating or exclusive, but empowering, transparent, and accessible to millions.
              </p>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <blockquote className="text-xl md:text-2xl italic text-gray-200 leading-relaxed">
                "Empowering the next era of traders — one confident decision at a time."
              </blockquote>
              <p className="mt-6 text-right text-green-400 font-medium">
                — NextEra Trade Team
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-b from-gray-950 to-black py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Our <span className="text-green-400">Mission</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300">
                <Zap className="h-12 w-12 mx-auto mb-6 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Deliver Speed</h3>
                <p className="text-gray-300">
                  Sub-second execution, zero slippage on market orders, and real-time data feeds so you never miss an opportunity.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300">
                <ShieldCheck className="h-12 w-12 mx-auto mb-6 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Ensure Trust</h3>
                <p className="text-gray-300">
                  Segregated funds, 256-bit encryption, 2FA, and full regulatory compliance — your security is non-negotiable.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300">
                <BarChart3 className="h-12 w-12 mx-auto mb-6 text-green-400" />
                <h3 className="text-2xl font-bold mb-4">Empower Traders</h3>
                <p className="text-gray-300">
                  Provide powerful charting, AI signals, educational resources, and low-cost trading so every user can trade smarter and grow faster.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose NextEra */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Why Choose <span className="text-green-400">NextEra</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              In a crowded market, here's what sets us apart from traditional brokers and other platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning-Fast Execution",
                desc: "Average order execution under 50ms — no dealing desk, no requotes.",
                icon: Zap,
              },
              {
                title: "Zero Commission on Select Assets",
                desc: "Trade forex, crypto, and indices with competitive spreads and no hidden fees.",
                icon: ShieldCheck,
              },
              {
                title: "Advanced Tools for Everyone",
                desc: "TradingView-powered charts, 100+ indicators, AI signals, copy trading & more.",
                icon: BarChart3,
              },
              {
                title: "24/7 Support in Multiple Languages",
                desc: "Live chat, email, and dedicated account managers — help is always available.",
                icon: Headphones,
              },
              {
                title: "Secure & Regulated Environment",
                desc: "Client funds segregated, strict KYC/AML, and top-tier encryption standards.",
                icon: Lock,
              },
              {
                title: "Start Small, Grow Big",
                desc: "Minimum deposit $10, demo account with $10,000 virtual funds, scalable leverage.",
                icon: Rocket,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <item.icon className="h-12 w-12 mx-auto mb-6 text-green-400" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-950/30 to-black py-16 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to Join the Next Era of Trading?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Create your free account today and experience the difference.
            </p>
            <a
              href="/signup"
              className="inline-block px-10 py-3 rounded-full bg-green-400 text-black font-bold text-xl hover:bg-green-300 transition shadow-2xl shadow-green-500/30"
            >
              Get Started Free →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}