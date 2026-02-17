"use client";

import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";

export default function GetInTouchSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT ================= */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-semibold leading-tight">
            Get in <span className="text-green-400">Touch</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Have questions about trading tools, platform features or
            partnership opportunities? Our team is here to help you with
            the right guidance and quick support.
          </p>

          <p className="mt-4 text-white/60 leading-relaxed">
            Send us your query and we’ll get back with a detailed response.
            Most requests are answered within one business day.
          </p>

          {/* trust points */}
          <div className="mt-10 space-y-8">

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                <FaEnvelope className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold">Direct Email Support</div>
                <div className="text-white/60 text-sm mt-1">
                  Reach our support desk for technical & account help.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                <FaHeadset className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold">Trading Assistance</div>
                <div className="text-white/60 text-sm mt-1">
                  Guidance on tools, charts and risk controls.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                <FaClock className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold">Fast Response Time</div>
                <div className="text-white/60 text-sm mt-1">
                  Typical reply within 12–24 hours.
                </div>
              </div>
            </div>

          </div>

          {/* mini trust strip */}
          <div className="mt-10 text-sm text-white/50">
            Secure communication • No spam • Expert support team
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div>
          <ContactForm title="Send Us a Message" />
        </div>

      </div>
    </section>
  );
}
