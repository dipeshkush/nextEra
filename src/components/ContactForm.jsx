"use client";

import { useState } from "react";

export default function ContactForm({ title = "Contact Us" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // 👉 yaha future me API call lagayenge
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10">

      {/* heading */}
      <h3 className="text-2xl font-semibold mb-6">
        {title}
      </h3>

      {/* success */}
      {success && (
        <div className="mb-6 rounded-lg bg-green-500/15 border border-green-500/30 text-green-400 px-4 py-3 text-sm">
          Message sent successfully. Our team will contact you soon.
        </div>
      )}

      {/* form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* name */}
        <div>
          <label className="text-sm text-white/60 mb-2 block">
            Full Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 outline-none focus:border-green-400/60 focus:ring-1 focus:ring-green-400/30"
          />
        </div>

        {/* email */}
        <div>
          <label className="text-sm text-white/60 mb-2 block">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
            className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 outline-none focus:border-green-400/60 focus:ring-1 focus:ring-green-400/30"
          />
        </div>

        {/* subject */}
        <div>
          <label className="text-sm text-white/60 mb-2 block">
            Subject
          </label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Trading / Support / Partnership"
            className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 outline-none focus:border-green-400/60 focus:ring-1 focus:ring-green-400/30"
          />
        </div>

        {/* message */}
        <div>
          <label className="text-sm text-white/60 mb-2 block">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={2}
            placeholder="Write your message..."
            className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 outline-none focus:border-green-400/60 focus:ring-1 focus:ring-green-400/30 resize-none"
          />
        </div>

        {/* submit */}
        <button
          disabled={loading}
          className="w-full rounded-xl bg-green-400 text-black font-semibold py-3 hover:bg-green-300 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
}
