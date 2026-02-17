"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:bg-transparent bg-black mt-0 md:mt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            NextEra
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm">
            <Link href="/" className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors">
              Home
            </Link>
            <Link href="/#faq" className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors">
              Faq
            </Link>
            <Link href="/about-us" className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors">
              About
            </Link>
            <Link href="/#testimonials" className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-4">

            <Link
              href="/contact-us"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-green-400 text-green-400 text-sm font-semibold hover:bg-green-400 hover:text-black transition shadow-md shadow-green-500/20"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className="bg-black border-b border-white/10 shadow-xl"
        >
          <nav className="flex flex-col items-center gap-6 py-8 px-4">
            
            <Link href="/" className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors" onClick={toggleMenu}>
              Home
            </Link>

            <Link href="/#faq" className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors" onClick={toggleMenu}>
              Faq
            </Link>

            <Link href="/about-us" className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors" onClick={toggleMenu}>
              About
            </Link>

            <Link href="/#testimonials" className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors" onClick={toggleMenu}>
              Testimonials
            </Link>

            <Link
              href="/contact-us"
              onClick={toggleMenu}
              className="mt-2 px-8 py-3 rounded-full border border-green-400 text-green-400 text-base font-semibold hover:bg-green-400 hover:text-black transition w-full max-w-xs text-center"
            >
              Contact Us
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
