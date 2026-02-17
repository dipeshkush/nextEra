"use client";

import { FaUserPlus, FaWallet, FaChartLine, FaLock, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      no: "01",
      title: "Create Your Account",
      desc: "Sign up in minutes with email or mobile and complete quick identity verification to unlock full platform access.",
      points: [
        "Instant registration",
        "Secure KYC process",
        "Two-factor protection",
      ],
      Icon: FaUserPlus,
    },
    {
      no: "02",
      title: "Fund Your Wallet",
      desc: "Deposit crypto or supported fiat methods with fast settlement and transparent fee structure.",
      points: [
        "Multiple payment options",
        "Fast confirmations",
        "Zero hidden charges",
      ],
      Icon: FaWallet,
    },
    {
      no: "03",
      title: "Analyze & Trade",
      desc: "Use advanced charts, AI signals and strategy tools to execute trades with precision and speed.",
      points: [
        "Live charts & indicators",
        "Smart trade signals",
        "One-click execution",
      ],
      Icon: FaChartLine,
    },
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          <h2 className="text-4xl font-semibold leading-tight">
            Start Trading in <span className="text-green-400">3 Simple Steps</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            Begin your trading journey with a fast, secure and beginner-friendly
            onboarding flow. Our platform is built to help you move from account
            creation to confident execution with powerful tools and guided steps.
          </p>

          <p className="mt-4 text-white/60 max-w-xl leading-relaxed">
            No complex setup, no technical barriers — just a streamlined process,
            professional charts and smart trading features ready from day one.
          </p>

          {/* bullets */}
          <div className="mt-8 space-y-3 text-white/70">
            <div>✔ Guided signup & verification flow</div>
            <div>✔ Built-in charts, signals & indicators</div>
            <div>✔ Secure wallet & fund protection layers</div>
            <div>✔ Works on desktop & mobile devices</div>
            <div>✔ Designed for both beginners and pros</div>
          </div>

          {/* mini stats */}
          <div className="mt-8 flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-green-400 font-bold text-lg mb-2">5 min</div>
              <div className="text-white/50">Avg. setup time</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg mb-2">100+</div>
              <div className="text-white/50">Indicators ready</div>
            </div>
            <div>
              <div className="text-green-400 font-bold text-lg mb-2">24/7</div>
              <div className="text-white/50">Market access</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/50 italic">
            No deposit required • Instant access after signup
          </div>

          {/* trust strip with icons */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <FaLock className="text-green-400" /> Encrypted security
            </span>
            <span className="flex items-center gap-2">
              <FaBolt className="text-green-400" /> Fast execution
            </span>
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" /> Risk controls
            </span>
          </div>

          <div className="mt-4 text-sm text-white/60">
            ★★★★★ 4.7 average user rating
          </div>

        </div>

        {/* ===== RIGHT STEPS ===== */}
        <div className="space-y-8">

          {steps.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.no}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-green-400/40 transition"
              >
                <div className="flex items-start gap-6">

                  {/* icon + number */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                      <Icon className="text-green-400 text-2xl" />
                    </div>
                    <div className="mt-3 text-xs text-green-400 font-semibold">
                      STEP {s.no}
                    </div>
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-white/70 leading-relaxed">
                      {s.desc}
                    </p>

                    <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-white/60">
                      {s.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
