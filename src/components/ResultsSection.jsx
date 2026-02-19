"use client";

import { motion } from "framer-motion";

export default function ResultsSection() {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-green-400 text-4xl">Performance</div>
          <h2 className="text-4xl md:text-5xl text-gray-200 mt-4">
            Results Achieved With Platform Upgrades
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >

          <ul className="space-y-8 text-white/80">
            {[
              "Improved trade execution latency by 42% with optimized order routing and faster matching engine response.",
              "Increased strategy deployment speed using reusable indicator blocks and modular chart components.",
            ].map((t, i) => (
              <motion.li
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-green-400 text-xl">↗</span>
                <p dangerouslySetInnerHTML={{ __html: t.replace("42%", "<b>42%</b>") }} />
              </motion.li>
            ))}
          </ul>

          <ul className="space-y-6 text-white/80">
            {[
              "Boosted user trade success ratio by 27% using signal filters and risk-control presets.",
              "Reduced onboarding friction with simplified KYC and smart verification flow.",
            ].map((t, i) => (
              <motion.li
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-green-400 text-xl">↗</span>
                <p dangerouslySetInnerHTML={{ __html: t.replace("27%", "<b>27%</b>") }} />
              </motion.li>
            ))}
          </ul>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["+42%", "Faster order execution after engine optimization."],
            ["+27%", "Higher strategy win rate with signal filters."],
            ["+35%", "User retention growth after UX upgrades."],
            ["-48%", "Onboarding time reduced with flow redesign."],
          ].map(([num, text], i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-green-400/20 bg-gradient-to-b from-green-400/5 to-transparent p-8 hover:border-green-400/40 transition"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-4">
                {num}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
