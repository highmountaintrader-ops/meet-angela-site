import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      <section className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
            <p className="font-paragraph text-slate-400 text-sm">Last updated: March 19, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">1. Introduction</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                Meet Angela ("we," "us," "our," or "Company") operates the meetangela.ai website and provides AI receptionist services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Personal Information</h3>
                  <p className="font-paragraph text-slate-300 leading-relaxed">
                    We collect information you voluntarily provide, including:
                  </p>
                  <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2 mt-2">
                    <li>Name and email address</li>
                    <li>Phone number</li>
                    <li>Business information</li>
                    <li>Messages and inquiries</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Call Data</h3>
                  <p className="font-paragraph text-slate-300 leading-relaxed">
                    When you use Angela, we collect and process call data, including:
                  </p>
                  <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2 mt-2">
                    <li>Call recordings and transcripts</li>
                    <li>Customer information from calls</li>
                    <li>Call metadata (date, time, duration)</li>
                    <li>Service request details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Automatic Information</h3>
                  <p className="font-paragraph text-slate-300 leading-relaxed">
                    We automatically collect certain information when you use our website or services:
                  </p>
                  <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2 mt-2">
                    <li>IP address and browser information</li>
                    <li>Device information</li>
                    <li>Usage patterns and analytics</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">3. How We Use Your Information</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                We use the information we collect for various purposes:
              </p>
              <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2">
                <li>Providing and improving our services</li>
                <li>Processing customer service requests</li>
                <li>Sending service-related announcements</li>
                <li>Responding to inquiries and support requests</li>
                <li>Analyzing usage patterns and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">4. Important Notice About Messages</h2>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 space-y-4">
                <p className="font-paragraph text-slate-300 leading-relaxed font-semibold">
                  All messages are sent only in response to customer-initiated service requests. No marketing or promotional messages are sent.
                </p>
                <p className="font-paragraph text-slate-300 leading-relaxed">
                  By contacting a business using Meet Angela, you agree to receive conversational text messages related to your service request, scheduling, estimates, and support. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">5. Data Security</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">6. Data Retention</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. Call recordings and transcripts are retained according to applicable regulations and your preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">7. Sharing Your Information</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
                <li>Other parties as necessary to protect our rights</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">8. Your Rights</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                Depending on your location, you may have rights including:
              </p>
              <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of certain processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">9. Contact Us</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-2">
                <p className="font-paragraph text-slate-300">
                  <span className="font-semibold">Email:</span> hello@meetangela.ai
                </p>
                <p className="font-paragraph text-slate-300">
                  <span className="font-semibold">Website:</span> meetangela.ai
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">10. Changes to This Policy</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
