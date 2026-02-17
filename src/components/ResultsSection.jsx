"use client";

export default function ResultsSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <div className="mb-14">
          <div className="text-green-400 text-4xl">Performance</div>
          <h2 className="text-4xl md:text-5xl text-gray-500 mt-2">
            Results Achieved With Platform Upgrades
          </h2>
        </div>

        {/* ===== Top 2 Column Points ===== */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <ul className="space-y-6 text-white/80">
            <li className="flex gap-4">
              <span className="text-green-400 text-xl">↗</span>
              <p>
                Improved trade execution latency by <b>42%</b> with optimized
                order routing and faster matching engine response.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-green-400 text-xl">↗</span>
              <p>
                Increased strategy deployment speed using reusable indicator
                blocks and modular chart components.
              </p>
            </li>
          </ul>

          <ul className="space-y-6 text-white/80">
            <li className="flex gap-4">
              <span className="text-green-400 text-xl">↗</span>
              <p>
                Boosted user trade success ratio by <b>27%</b> using signal
                filters and risk-control presets.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="text-green-400 text-xl">↗</span>
              <p>
                Reduced onboarding friction with simplified KYC and smart
                verification flow.
              </p>
            </li>
          </ul>

        </div>

        {/* ===== Stats Cards ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            ["+42%", "Faster order execution after engine optimization."],
            ["+27%", "Higher strategy win rate with signal filters."],
            ["+35%", "User retention growth after UX upgrades."],
            ["-48%", "Onboarding time reduced with flow redesign."],
          ].map(([num, text], i) => (
            <div
              key={i}
              className="rounded-2xl border border-green-400/20 bg-gradient-to-b from-green-400/5 to-transparent p-8 hover:border-green-400/40 transition"
            >
              <div className="text-5xl font-bold text-green-400 mb-4">
                {num}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
