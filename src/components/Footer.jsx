"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-300 border-t border-white/10">

      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-12 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 lg:gap-20">

          {/* Column 1 - About */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">About NextEra Trade</h4>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Advanced trading platform with pro charts, AI signals
              and fast execution tools built for modern traders.
            </p>
            <div className="flex items-center gap-5">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Faq</Link></li>
              <li><Link href="/#news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Other Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Other Links</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>

            <p className="text-sm text-gray-400 leading-relaxed">
              Need help with the platform or have any questions?
              Reach out to our support team and we’ll get back to you shortly.
            </p>

            <ul className="space-y-5">
              <li className="flex items-center gap-3">

                <span>support@nexeratrade.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} NextEraTrade. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Designed by{" "}
            <a
              href="https://webseeder.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-300 transition-colors"
            >
              WebSeeder Technologies
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}
