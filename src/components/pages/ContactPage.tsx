import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { ContactInquiries } from '@/entities';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    visitorName: '',
    visitorEmail: '',
    inquiryMessage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const inquiry: ContactInquiries = {
        _id: crypto.randomUUID(),
        visitorName: formData.visitorName,
        visitorEmail: formData.visitorEmail,
        inquiryMessage: formData.inquiryMessage,
        submissionDateTime: new Date(),
        status: 'new'
      };

      await BaseCrudService.create('contactinquiries', inquiry);
      setSubmitStatus('success');
      setFormData({ visitorName: '', visitorEmail: '', inquiryMessage: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold">Get in Touch</h1>
          <p className="font-paragraph text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about Angela? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Contact Information</h2>
                <p className="font-paragraph text-slate-300 text-lg leading-relaxed">
                  Reach out to our team and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:hello@meetangela.ai" className="font-paragraph text-slate-300 hover:text-blue-400 transition-colors">
                      hello@meetangela.ai
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">Phone</h3>
                    <p className="font-paragraph text-slate-300">Available during business hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">Response Time</h3>
                    <p className="font-paragraph text-slate-300">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8">
                <h3 className="font-heading font-semibold text-white mb-3">Quick Response</h3>
                <p className="font-paragraph text-slate-300 text-sm">
                  For urgent inquiries, please include "URGENT" in your message subject and we'll prioritize your request.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 sm:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="visitorName" className="block font-heading font-semibold text-white mb-2">
                    Your Name
                  </label>
                  <Input
                    id="visitorName"
                    name="visitorName"
                    type="text"
                    value={formData.visitorName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="visitorEmail" className="block font-heading font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <Input
                    id="visitorEmail"
                    name="visitorEmail"
                    type="email"
                    value={formData.visitorEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryMessage" className="block font-heading font-semibold text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="inquiryMessage"
                    name="inquiryMessage"
                    value={formData.inquiryMessage}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    required
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-900/20 border border-green-700 rounded-lg p-4"
                  >
                    <p className="font-paragraph text-green-300 text-sm">
                      Thank you! We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/20 border border-red-700 rounded-lg p-4"
                  >
                    <p className="font-paragraph text-red-300 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 inline" />}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-slate-900 py-16 sm:py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  q: 'How quickly can I get started?',
                  a: 'Most businesses are up and running within 24 hours. We handle the setup and integration with your existing phone number.'
                },
                {
                  q: 'Does Angela work with my current phone system?',
                  a: 'Yes! Angela integrates with your existing business phone number. No need to change anything.'
                },
                {
                  q: 'What if I have technical issues?',
                  a: 'Our support team is here to help. Reach out via email or contact form and we\'ll get you sorted quickly.'
                },
                {
                  q: 'Can I try Angela before committing?',
                  a: 'Absolutely. We offer a free trial so you can see how Angela works for your business.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8"
                >
                  <h3 className="font-heading font-semibold text-white mb-3">{item.q}</h3>
                  <p className="font-paragraph text-slate-300 text-sm sm:text-base leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
