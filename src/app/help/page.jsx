"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create an account on NextEra Trade?",
      answer:
        "Sign up is quick and free. Click 'Sign Up' or 'Start Trading' on the homepage, enter your email, create a password, and verify your email. You can start with a demo account immediately. For live trading, complete KYC (ID verification) to unlock full features and withdrawals.",
    },
    {
      question: "What is the minimum deposit required?",
      answer:
        "The minimum deposit is $10 (or equivalent in supported currencies). We support multiple payment methods including bank cards, e-wallets, and crypto. Deposits are instant in most cases.",
    },
    {
      question: "How can I deposit funds into my account?",
      answer:
        "Log in → Go to 'Wallet' or 'Deposit' section → Choose your preferred method (Visa/Mastercard, UPI, crypto, etc.) → Enter amount and follow instructions. Funds usually reflect within minutes.",
    },
    {
      question: "Is NextEra Trade safe and regulated?",
      answer:
        "We prioritize security with 256-bit SSL encryption, segregated client funds, and 2FA protection. While we operate globally, please check local regulations in your country (Indore, MP users – consult RBI/SEBI guidelines for forex/binary trading). Risk warning: Trading involves significant risk of loss.",
    },
    {
      question: "What assets can I trade on the platform?",
      answer:
        "You can trade forex pairs (EUR/USD, GBP/JPY etc.), cryptocurrencies (BTC, ETH), commodities (gold, oil), indices, and stocks. We offer 120+ markets with competitive spreads and leverage up to 1:500 (subject to your account type).",
    },
    {
      question: "How does trading work on NextEra (binary/forex)?",
      answer:
        "For binary-style trades: Choose asset → Select 'Up' or 'Down' → Set trade amount and expiry time → Execute. Win fixed payout or lose stake. For forex: Use advanced charts, indicators, and place market/limit orders with stop-loss/take-profit.",
    },
    {
      question: "How do I withdraw my profits?",
      answer:
        "Go to 'Wallet' → 'Withdraw' → Choose method (same as deposit preferred) → Enter amount → Submit. Verification may be required for first withdrawal. Processing time: 1-3 business days (crypto faster). Minimum withdrawal: $20.",
    },
    {
      question: "What is a demo account and how do I use it?",
      answer:
        "Demo account gives you $10,000 virtual funds to practice risk-free. Access it from dashboard → 'Demo Mode'. Switch to live anytime. Perfect for beginners to test strategies.",
    },
    {
      question: "I forgot my password – what should I do?",
      answer:
        "On login page, click 'Forgot Password?' → Enter your email → Check inbox (or spam) for reset link. If issues, contact support via live chat or email support@nexera.trade.",
    },
    {
      question: "How can I contact support?",
      answer:
        "24/7 live chat available in the platform (bottom right icon). Email: support@nexera.trade. For urgent issues, use in-app chat. Response time: Usually under 5 minutes during business hours.",
    },
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">
            Help <span className="text-green-400">Center</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about trading, accounts, deposits, withdrawals, and platform features. Can't find what you're looking for? Contact our support team 24/7.
          </p>
        </div>

        {/* Search Bar (optional – can add real search later) */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-5 py-4 text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-lg hover:text-green-400 transition focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 pb-5 text-gray-300 text-base leading-relaxed transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any issue. Reach out via live chat, email, or contact form.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-2 rounded-full bg-green-400 text-black font-semibold text-lg hover:bg-green-300 transition shadow-lg shadow-green-500/20"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@nexera.trade"
              className="inline-block px-8 py-2 rounded-full border border-green-400 text-green-400 font-semibold text-lg hover:bg-green-400/10 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}