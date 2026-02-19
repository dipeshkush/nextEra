"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userName, setUserName] = useState("");

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      setIsLoggedIn(!!token);

      if (user) {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || parsedUser.email?.split('@')[0] || "");
      } else {
        setUserName("");
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Outside click close
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    }

    if (isOpen || showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, showProfileMenu]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:bg-transparent bg-black mt-0 md:mt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            NextEra
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm">
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

          {/* Right Side – Desktop */}
          <div className="hidden md:flex items-center gap-4 relative">
            <Link
              href="/contact-us"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-green-400 text-green-400 text-sm font-semibold hover:bg-green-400 hover:text-black transition shadow-md shadow-green-500/20"
            >
              Contact Us
            </Link>

            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition"
                >
                  <HiUserCircle className="h-5 w-5" />
                  {userName || "Profile"}
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl shadow-black/50 py-2 z-50">
                    <Link
                      href="/profile"
                      className="block px-5 py-3 text-sm text-white/90 hover:bg-gray-800 hover:text-green-400 transition"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Profile
                    </Link>
                    <hr className="border-gray-800 my-1" />
                    <button
                      onClick={() => {
                        handleLogout();
                        setShowProfileMenu(false);
                      }}
                      className="block w-full text-left px-5 py-3 text-sm text-red-400 hover:bg-gray-800 hover:text-red-300 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Login / Register
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
          </button>
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

            {/* Mobile: Conditional Links */}
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="text-white/90 hover:text-green-400 text-lg font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Profile ({userName})
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="text-red-400 hover:text-red-300 text-lg font-medium transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  onClick={toggleMenu}
                  className="px-8 py-3 rounded-full border border-white text-white text-base font-semibold hover:bg-white hover:text-black transition w-full max-w-xs text-center"
                >
                  Login / Register
                </Link>

                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="mt-2 px-8 py-3 rounded-full border border-green-400 text-green-400 text-base font-semibold hover:bg-green-400 hover:text-black transition w-full max-w-xs text-center"
                >
                  Contact Us
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}