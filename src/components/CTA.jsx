"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full  bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-8xl mx-auto px-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

          <div className="md:col-span-3 mx-auto md:mx-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Ready to Start Smarter Trading?
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Join our platform and get access to advanced charts, AI-powered
              signals, and fast execution tools — everything you need to trade
              with confidence and precision.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-end">
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
