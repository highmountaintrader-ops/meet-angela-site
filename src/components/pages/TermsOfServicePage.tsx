import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
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
            <h1 className="font-heading text-4xl sm:text-5xl font-bold">Terms of Service</h1>
            <p className="font-paragraph text-slate-400 text-sm">Last updated: March 19, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">1. Agreement to Terms</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                By accessing and using the Meet Angela website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">2. Use License</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Meet Angela's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">3. Disclaimer</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                The materials on Meet Angela's website are provided on an 'as is' basis. Meet Angela makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">4. Limitations</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                In no event shall Meet Angela or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Meet Angela's website, even if Meet Angela or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">5. Accuracy of Materials</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                The materials appearing on Meet Angela's website could include technical, typographical, or photographic errors. Meet Angela does not warrant that any of the materials on its website are accurate, complete, or current. Meet Angela may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">6. Links</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                Meet Angela has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Meet Angela of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">7. Modifications</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                Meet Angela may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">8. Governing Law</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">9. User Responsibilities</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                As a user of Meet Angela, you are responsible for:
              </p>
              <ul className="font-paragraph text-slate-300 list-disc list-inside space-y-2">
                <li>Maintaining the confidentiality of your account information</li>
                <li>Accepting responsibility for all activities under your account</li>
                <li>Ensuring all information provided is accurate and complete</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using the service for any unlawful purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">10. SMS and Messaging Terms</h2>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 space-y-4">
                <p className="font-paragraph text-slate-300 leading-relaxed font-semibold">
                  By contacting a business using Meet Angela, you agree to receive conversational text messages related to your service request, scheduling, estimates, and support. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.
                </p>
                <p className="font-paragraph text-slate-300 leading-relaxed">
                  All messages are sent only in response to customer-initiated service requests. No marketing or promotional messages are sent.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">11. Intellectual Property Rights</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                All content on the Meet Angela website, including text, graphics, logos, images, and software, is the property of Meet Angela or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">12. Contact Information</h2>
              <p className="font-paragraph text-slate-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
