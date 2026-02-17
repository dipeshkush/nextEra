"use client";

import { FaUserPlus, FaWallet, FaChartLine, FaLock, FaBolt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section className="bg-black text-white py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

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

          <div className="mt-8 space-y-3 text-white/70">
            {[
              "✔ Guided signup & verification flow",
              "✔ Built-in charts, signals & indicators",
              "✔ Secure wallet & fund protection layers",
              "✔ Works on desktop & mobile devices",
              "✔ Designed for both beginners and pros",
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {t}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-8 text-sm">
            {[
              ["5 min", "Avg. setup time"],
              ["100+", "Indicators ready"],
              ["24/7", "Market access"],
            ].map(([n, t], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-green-400 font-bold text-lg mb-2">{n}</div>
                <div className="text-white/50">{t}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm text-white/50 italic"
          >
            No deposit required • Instant access after signup
          </motion.div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
            {[
              [FaLock, "Encrypted security"],
              [FaBolt, "Fast execution"],
              [FaShieldAlt, "Risk controls"],
            ].map(([Icon, text], i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-2"
              >
                <Icon className="text-green-400" /> {text}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-sm text-white/60"
          >
            ★★★★★ 4.7 average user rating
          </motion.div>

        </motion.div>

        <div className="space-y-8">

          {steps.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, x: 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-green-400/40 transition"
              >
                <div className="flex items-start gap-6">

                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                      <Icon className="text-green-400 text-2xl" />
                    </div>
                    <div className="mt-3 text-xs text-green-400 font-semibold">
                      STEP {s.no}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-white/70 leading-relaxed">
                      {s.desc}
                    </p>

                    <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-white/60">
                      {s.points.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: i * 0.05 }}
                        >
                          • {p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
``
