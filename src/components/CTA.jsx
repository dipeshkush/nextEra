"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-4">
      <div className="max-w-8xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center rounded-2xl border border-white/10 bg-black/60 p-8">

          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Ready to Start Smarter Trading?
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
              Join our platform and get access to advanced charts, AI-powered
              signals, and fast execution tools — everything you need to trade
              with confidence and precision.
            </p>
          </div>

          <div className="md:col-span-1 flex md:justify-end">
            <Link
              href="/contact-us"
              className="w-full md:w-auto text-center px-8 py-3 rounded-md border border-green-400 text-green-400 font-semibold hover:text-white transition"
            >
              Talk to an Expert
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
