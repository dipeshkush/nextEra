"use client";

import {
  FaChartLine,
  FaCalculator,
  FaBalanceScale,
  FaTrophy,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FreeToolsSection() {
  const tools = [
    {
      title: "Market Scanner",
      desc: "Scan live markets and spot momentum & volume spikes instantly.",
      Icon: FaChartLine,
      color: "from-violet-500/20 to-violet-500/5",
      iconColor: "text-violet-400",
    },
    {
      title: "Position Sizer",
      desc: "Calculate ideal trade size based on your risk per trade.",
      Icon: FaCalculator,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      title: "Risk Planner",
      desc: "Plan stop-loss and target levels with smart ratios.",
      Icon: FaBalanceScale,
      color: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-400",
    },
    {
      title: "Performance Tracker",
      desc: "Measure win rate, streaks and strategy performance.",
      Icon: FaTrophy,
      color: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section className="bg-[#050816] text-white py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold">
            Try The Tools Before You Trade
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Explore our built-in trading utilities and calculators to plan
            smarter trades — no signup required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {tools.map((t, i) => {
            const Icon = t.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/25 hover:bg-white/10 transition"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.05 }}
                  className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${t.color}`}
                >
                  <Icon className={`text-2xl ${t.iconColor}`} />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2">
                  {t.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {t.desc}
                </p>

                <div className="mt-4 h-px w-0 bg-white/40 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
