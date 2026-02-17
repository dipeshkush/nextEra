"use client";

import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ===== Top Grid ===== */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* ===== Brand ===== */}
          <div>
            <div className="text-2xl font-bold">
              NextEra <span className="text-green-400">Trade</span>
            </div>

            <p className="mt-5 text-white/80 leading-relaxed text-sm max-w-sm">
              Advanced trading platform with pro charts, AI signals
              and fast execution tools built for modern traders.
            </p>

            <div className="flex gap-4 mt-6 text-white/80">
              <a className="hover:text-green-400 transition"><FaTwitter /></a>
              <a className="hover:text-green-400 transition"><FaLinkedin /></a>
              <a className="hover:text-green-400 transition"><FaGithub /></a>
              <a className="hover:text-green-400 transition"><FaTelegramPlane /></a>
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <div className="font-semibold mb-5 text-white/80">
              Quick Links
            </div>

            <div className="space-y-3 text-sm text-white/50">
              <Link href="/" className="block hover:text-white transition">Home</Link>
              <Link href="/faq" className="block hover:text-white transition">FAQ</Link>
              <Link href="/news" className="block hover:text-white transition">News</Link>
              <Link href="/testimonials" className="block hover:text-white transition">Testimonials</Link>
              <Link href="/contact" className="block hover:text-white transition">Contact</Link>
            </div>
          </div>

          {/* ===== More ===== */}
          <div>
            <div className="font-semibold mb-5 text-white/80">
              More
            </div>

            <div className="space-y-3 text-sm text-white/50">
              <Link href="/privacy" className="block hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-white transition">
                Terms
              </Link>
              <Link href="/about" className="block hover:text-white transition">
                About Us
              </Link>
            </div>
          </div>

          {/* ===== Newsletter ===== */}
          <div>
            <div className="font-semibold mb-5 text-white/80">
              Market Updates
            </div>

            <p className="text-sm text-white/50 mb-4">
              Get trading insights and platform updates.
            </p>

            <div className="flex gap-3">
              <input
                placeholder="Email address"
                className="flex-1 rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-green-400/60"
              />
              <button className="rounded-lg bg-green-400 text-black px-5 py-3 text-sm font-semibold hover:bg-green-300 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-16 p-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">

          <div>
            © {new Date().getFullYear()} NextEraTrade. All rights reserved.
          </div>

          <div className="text-white/30">
            Design by{" "}
            <span className="text-green-400 font-medium">
              WebSeeder Technologies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
