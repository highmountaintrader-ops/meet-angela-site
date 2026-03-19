import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full py-24">
        <div className="max-w-[56rem] mx-auto px-6">
          <h1 className="text-5xl font-heading font-black text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-base font-paragraph text-foreground">
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-secondary">
                By accessing or using Meet Angela's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Service Description
              </h2>
              <p className="text-secondary">
                Meet Angela provides AI-powered virtual receptionist services for service businesses. Our service includes call answering, message capture, call transcription, and customer request management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                User Responsibilities
              </h2>
              <p className="text-secondary mb-4">
                As a user of Meet Angela, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Provide accurate business and contact information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the service only for legitimate business purposes</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                SMS and Communication Terms
              </h2>
              <p className="text-secondary mb-4">
                By using Meet Angela:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>You consent to receive text messages related to service requests</li>
                <li>Messages are sent only in response to customer-initiated requests</li>
                <li>No marketing or promotional messages will be sent</li>
                <li>Message frequency varies based on customer interactions</li>
                <li>Standard message and data rates may apply</li>
                <li>You can opt out at any time by replying STOP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Service Availability
              </h2>
              <p className="text-secondary">
                While we strive to provide continuous service, we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-secondary">
                Meet Angela is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount paid by you for the service in the preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-secondary">
                All content, features, and functionality of Meet Angela are owned by us and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute any part of our service without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-secondary">
                We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason. You may terminate your account at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-secondary">
                We may update these Terms of Service from time to time. We will notify you of significant changes via email or through the service. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-secondary">
                These terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-secondary">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:hello@meetangela.ai" className="text-primary hover:opacity-80">
                  hello@meetangela.ai
                </a>
              </p>
            </section>

            <section>
              <p className="text-sm text-secondary">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
