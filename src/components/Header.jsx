"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger & close icons (npm install react-icons agar nahi hai)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            NextEra
          </Link>

          {/* Desktop / Tablet Pill Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/download"
              className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors"
            >
              Download App
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/help"
              className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors"
            >
              Help
            </Link>
          </nav>

          {/* Right Side - CTA + Hamburger (mobile only) */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-green-400 text-black text-sm font-semibold hover:bg-green-300 transition shadow-md shadow-green-500/20"
            >
              Contact Us
            </Link>

            {/* Hamburger Button - only on mobile */}
            <button
              className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-7 w-7" />
              ) : (
                <HiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
          <nav className="flex flex-col items-center gap-6 py-8 px-4">
            <Link
              href="/"
              className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/download"
              className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors"
              onClick={toggleMenu}
            >
              Download App
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/help"
              className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors"
              onClick={toggleMenu}
            >
              Help
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 rounded-full bg-green-400 text-black text-base font-semibold hover:bg-green-300 transition w-full max-w-xs text-center"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}