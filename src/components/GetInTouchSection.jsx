"use client";

import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GetInTouchSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >

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

          <div className="mt-10 space-y-8">

            {[
              [FaEnvelope, "Direct Email Support", "Reach our support desk for technical & account help."],
              [FaHeadset, "Trading Assistance", "Guidance on tools, charts and risk controls."],
              [FaClock, "Fast Response Time", "Typical reply within 12–24 hours."],
            ].map(([Icon, title, text], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center">
                  <Icon className="text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-white/60 text-sm mt-1">
                    {text}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 text-sm text-white/50"
          >
            Secure communication • No spam • Expert support team
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <ContactForm title="Send Us a Message" />
        </motion.div>

      </div>
    </section>
  );
}
