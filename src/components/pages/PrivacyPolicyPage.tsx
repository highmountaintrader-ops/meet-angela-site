import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full py-24">
        <div className="max-w-[56rem] mx-auto px-6">
          <h1 className="text-5xl font-heading font-black text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-base font-paragraph text-foreground">
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-secondary mb-4">
                Meet Angela collects information necessary to provide AI receptionist services to service businesses. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Call recordings and transcripts</li>
                <li>Customer contact information (name, phone number, email)</li>
                <li>Service request details</li>
                <li>Business account information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-secondary mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Provide AI receptionist services</li>
                <li>Process and route customer service requests</li>
                <li>Generate call summaries and transcripts</li>
                <li>Improve our AI models and service quality</li>
                <li>Communicate with you about your service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-secondary">
                We implement industry-standard security measures to protect your data. All call recordings and customer information are encrypted in transit and at rest. Access to data is restricted to authorized personnel only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Data Retention
              </h2>
              <p className="text-secondary">
                We retain call recordings and customer data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Third-Party Sharing
              </h2>
              <p className="text-secondary">
                We do not sell or share your personal information with third parties for marketing purposes. We may share data with service providers who assist in delivering our services, subject to strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-secondary mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-secondary">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
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
