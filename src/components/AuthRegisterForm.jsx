"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AffiliateRegisterPage({ title = "Affiliate Registration" }) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setCountries([
      { name: "India", code: "IN", dial: "+91" },
      { name: "United States", code: "US", dial: "+1" },
      { name: "United Kingdom", code: "GB", dial: "+44" },
      { name: "United Arab Emirates", code: "AE", dial: "+971" },
      { name: "Canada", code: "CA", dial: "+1" },
      { name: "Australia", code: "AU", dial: "+61" },
      { name: "Germany", code: "DE", dial: "+49" },
      { name: "France", code: "FR", dial: "+33" },
      { name: "Singapore", code: "SG", dial: "+65" },
      { name: "Nepal", code: "NP", dial: "+977" },
    ]);
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`;
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: fullName,
        email: formData.email,
        contact: formData.dialCode + formData.contact,
        role: "affiliate",
      })
    );

    localStorage.setItem("token", "user_logged_in");

    window.dispatchEvent(new Event("storage"));

    router.push("/");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition placeholder:text-white/60 text-white";

  const selectClass =
    "w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 focus:border-green-400 focus:outline-none transition text-white cursor-pointer";

  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm" />

        <div className="relative z-10 py-4">
          <main className="flex items-center justify-center px-0 md:px-4 pt-20 pb-16">
            <div className="w-full max-w-2xl lg:max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-8">

                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <p className="text-white/60 text-sm mt-2">
                    Register your account
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className={inputClass}
                      onChange={handleChange}
                    />
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className={inputClass}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <select
                      name="dialCode"
                      className={selectClass}
                      disabled={loading}
                      onChange={handleChange}
                    >
                      {countries.map((country) => (
                        <option
                          key={country.code}
                          value={country.dial}
                          className="bg-gray-900 text-white"
                        >
                          {country.dial} ({country.name})
                        </option>
                      ))}
                    </select>

                    <input
                      name="contact"
                      placeholder="Contact No"
                      required
                      className={`${inputClass} col-span-2`}
                      onChange={handleChange}
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className={inputClass}
                    onChange={handleChange}
                  />

                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      className={`${inputClass} pr-14`}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/60"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      required
                      placeholder="Confirm Password"
                      className={`${inputClass} pr-14`}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/60"
                    >
                      {showConfirm ? "Hide" : "Show"}
                    </button>
                  </div>

                  <label className="flex items-start gap-3 text-sm text-white/70">
                    <input type="checkbox" required className="accent-green-500 mt-1" />
                    I agree to the
                    <Link href="/terms-and-conditions" className="text-green-400 underline ml-1">
                      Terms & Conditions
                    </Link>
                  </label>

                  <button className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold">
                    Create Account
                  </button>

                  <p className="text-center text-sm text-white/60">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-green-400 underline">
                      Login
                    </Link>
                  </p>

                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
