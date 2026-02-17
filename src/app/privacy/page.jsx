"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white">
      <div className=" flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center mt-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Privacy <span className="text-green-400">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At NextEra Trade, we are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data. 
            This Privacy Policy explains our practices regarding your information when you use our trading platform, website, and mobile applications.
          </p>

          <p className="mt-6 text-sm md:text-base text-gray-500">
            Last updated: February 17, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 ">
        <div className="prose prose-invert prose-green max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Identity verification documents (for KYC compliance)</li>
            <li>Financial information (payment method details, transaction history)</li>
            <li>Trading activity and preferences</li>
            <li>Technical data (IP address, browser type, device information)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our trading services</li>
            <li>Process deposits, withdrawals, and trading transactions</li>
            <li>Verify your identity and comply with regulatory requirements</li>
            <li>Send you important service updates, security alerts, and marketing communications (with consent)</li>
            <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. Information Sharing & Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers (payment processors, KYC verification services)</li>
            <li>Regulatory authorities when required by law</li>
            <li>Business partners only with your explicit consent</li>
          </ul>
          <p className="mt-4">
            Client funds are held in segregated accounts with trusted financial institutions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul>
            <li>256-bit SSL encryption for all data transmission</li>
            <li>Two-factor authentication (2FA)</li>
            <li>Regular security audits</li>
            <li>Access controls and monitoring</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data (subject to legal obligations)</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us at privacy@nexera.trade.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">6. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. 
            You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">7. International Data Transfers</h2>
          <p>
            As a global trading platform, your data may be transferred to and processed in countries outside your jurisdiction, 
            including India. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page 
            and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            Email: <a href="mailto:privacy@nexera.trade" className="text-green-400 hover:underline">privacy@nexera.trade</a><br />
          </p>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}