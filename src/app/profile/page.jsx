"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  User, Mail, Phone, Calendar, Save, CreditCard, CheckCircle2, Edit, LogOut
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dialCode: "+91",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      const [first, ...lastParts] = (parsed.name || "").split(" ");
      setFormData({
        firstName: first || "",
        lastName: lastParts.join(" ") || "",
        dialCode: parsed.dialCode || "+91",
        contact: parsed.contact || parsed.phone?.replace(/^\+\d+\s*/, "") || "",
        email: parsed.email || "",
        password: "",
        confirmPassword: "",
      });
    } else {
      const dummy = {
        name: "Test User",
        email: "test@example.com",
        phone: "+91 78801 70012",
        dialCode: "+91",
        contact: "7880170012",
        joinDate: "Jan 15, 2025",
        plans: [
          {
            name: "Pro Trader",
            price: "$29/month",
            status: "Active",
            startDate: "Feb 01, 2025",
            expiryDate: "Mar 01, 2025",
            features: [
              "Live Trading Access",
              "AI Generated Signals",
              "Basic Support"
            ]
          },
          {
            name: "Elite Trader",
            price: "$99/month",
            status: "Active",
            startDate: "Mar 10, 2025",
            expiryDate: "Apr 10, 2025",
            features: [
              "All Pro features",
              "Unlimited API Access",
              "Priority Support",
              "Custom Strategy Builder",
              "Advanced Risk Analytics"
            ]
          }
        ]
      };
      setUser(dummy);
      setFormData({
        firstName: "null",
        lastName: "null",
        dialCode: "+91",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const updatedUser = {
      ...user,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: `${formData.dialCode} ${formData.contact}`,
      dialCode: formData.dialCode,
      contact: formData.contact,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Heading + Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 mt-10">
              Your <span className="text-green-400">Profile</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Update your personal information, manage your account, and view your active trading plans.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT: Full Editable Form – Sticky on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:sticky lg:top-24 lg:h-fit bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <User className="h-7 w-7 text-green-400" />
                  Personal Information
                </h2>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 transition"
                  >
                    <Edit className="h-5 w-5" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      form="profileForm"
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-black hover:bg-green-400 transition"
                    >
                      <Save className="h-5 w-5" />
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        const [first, ...lastParts] = (user.name || "").split(" ");
                        setFormData({
                          firstName: first || "",
                          lastName: lastParts.join(" ") || "",
                          dialCode: user.dialCode || "+91",
                          contact: user.contact || user.phone?.replace(/^\+\d+\s*/, "") || "",
                          email: user.email || "",
                          password: "",
                          confirmPassword: "",
                        });
                      }}
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <form id="profileForm" onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Dial Code</label>
                    <select
                      name="dialCode"
                      value={formData.dialCode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      <option value="+91">+91 (India)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+1">+1 (USA/Canada)</option>
                      <option value="+44">+44 (UK)</option>
                      {/* Add more countries if needed */}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Contact No</label>
                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                  />
                </div>

                {isEditing && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">New Password (optional)</label>
                      <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Leave blank to keep current"
                        className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                      <input
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Confirm new password"
                        className={`w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition ${!isEditing ? "opacity-70 cursor-not-allowed" : ""}`}
                      />
                    </div>
                  </>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CreditCard className="h-7 w-7 text-green-400" />
                Your Active Plans
              </h2>

              {user.plans && user.plans.length > 0 ? (
                <div className="space-y-6">
                  {user.plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/40 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-green-400">{plan.name}</h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300">
                          {plan.status}
                        </span>
                      </div>

                      <p className="text-gray-300 font-medium mb-4">{plan.price}</p>

                      <div className="text-sm text-gray-400 mb-4">
                        <p>Started: {plan.startDate}</p>
                        <p>Expires: {plan.expiryDate}</p>
                      </div>

                      <ul className="space-y-2 text-sm text-gray-300">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No active plans yet</p>
                  <Link href="/pricing" className="text-green-400 underline hover:text-green-300 mt-2 inline-block">
                    Explore Plans
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}