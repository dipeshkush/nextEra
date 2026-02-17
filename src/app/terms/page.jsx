"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-black text-white">
        <div className="flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center mt-24">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Terms of <span className="text-green-400">Service</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These Terms of Service govern your use of the NextEra Trade platform, website, mobile applications, and any related services. 
              By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
            </p>

            <p className="mt-6 text-sm md:text-base text-gray-500">
              Last updated: February 17, 2026
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-invert prose-green max-w-none">
            <h2 className="text-2xl font-bold mt-12 mb-6">1. Acceptance of Terms</h2>
            <p>
              By registering an account, accessing, or using NextEra Trade (the "Platform"), you agree to these Terms of Service ("Terms") and our Privacy Policy. 
              If you do not agree with any part of these Terms, you must not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Platform. 
              You represent and warrant that you have the right, authority, and capacity to enter into these Terms and to comply with them.
            </p>
            <p className="mt-4">
              Residents of certain jurisdictions may be prohibited from using our services due to local laws and regulations. 
              It is your responsibility to ensure that your use of the Platform complies with applicable laws.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Account Registration & Security</h2>
            <p>
              To access certain features, you must create an account and provide accurate information. 
              You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>
            <ul>
              <li>Enable two-factor authentication (2FA) where available</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>We are not liable for losses resulting from unauthorized account access</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Trading & Financial Services</h2>
            <p>
              Trading involves significant risk of loss and is not suitable for all investors. 
              Past performance is not indicative of future results.
            </p>
            <ul>
              <li>All trades are executed at your own risk</li>
              <li>We provide execution-only services and do not provide investment advice</li>
              <li>Leverage amplifies both gains and losses</li>
              <li>You may lose more than your initial deposit in leveraged products</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Deposits, Withdrawals & Fees</h2>
            <p>
              Deposits and withdrawals are subject to our verification procedures and applicable fees. 
              We reserve the right to refuse or delay transactions if we suspect fraud or non-compliance.
            </p>
            <ul>
              <li>Minimum deposit: $10 (or equivalent)</li>
              <li>Processing times vary by method</li>
              <li>Withdrawal fees may apply depending on method and amount</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Platform for illegal purposes</li>
              <li>Engage in market manipulation, insider trading, or fraudulent activity</li>
              <li>Attempt to gain unauthorized access or interfere with the Platform</li>
              <li>Copy, modify, or reverse engineer any part of the service</li>
              <li>Use automated scripts or bots without permission</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, software, and materials on the Platform are owned by NextEra Trade or its licensors. 
              You are granted a limited, non-transferable license to use the Platform for personal, non-commercial purposes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, NextEra Trade shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or trading opportunities, even if advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">9. Termination</h2>
            <p>
              We may suspend or terminate your account at any time for violation of these Terms, suspicious activity, or legal requirements. 
              You may terminate your account at any time by contacting support.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">10. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Indore, Madhya Pradesh, 
              in accordance with the Arbitration and Conciliation Act, 1996.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:legal@nexera.trade" className="text-green-400 hover:underline">legal@nexera.trade</a><br />
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}