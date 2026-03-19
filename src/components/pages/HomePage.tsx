import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AI Receptionist for Service Businesses
              </h1>
              <p className="font-paragraph text-lg sm:text-xl text-slate-300 leading-relaxed">
                Never miss a call. Angela answers, captures customer requests, and helps you follow up while you're on the job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-400 text-white hover:bg-slate-800 font-semibold px-8 py-6 text-base sm:text-lg rounded-lg"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-slate-800"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-center"
              >
                <Phone className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-blue-300" />
                <p className="text-xl sm:text-2xl font-semibold text-white">Angela</p>
                <p className="text-sm sm:text-base text-blue-200">Your AI Receptionist</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="w-full bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">You're Losing Jobs Every Day</h2>
              <p className="font-paragraph text-lg text-slate-300 max-w-2xl mx-auto">
                The harsh reality of running a service business without a reliable call system
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  title: 'Missed Calls = Lost Revenue',
                  description: 'Every call you miss is money walking out the door. Customers don\'t wait—they call the next provider.'
                },
                {
                  title: 'Customers Move On',
                  description: 'When you don\'t answer, customers don\'t leave messages. They just call your competitor instead.'
                },
                {
                  title: 'No Time for Follow-Up',
                  description: 'You\'re in the field working. Taking notes and managing callbacks isn\'t realistic when you\'re on the job.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="font-paragraph text-slate-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="w-full py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">Angela Handles It For You</h2>
              <p className="font-paragraph text-lg text-slate-300 max-w-2xl mx-auto">
                An AI receptionist that works 24/7, so you don't have to
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  icon: Phone,
                  title: 'Answers Every Call',
                  description: 'Angela picks up when you can\'t. No more missed opportunities.'
                },
                {
                  icon: MessageSquare,
                  title: 'Records & Summarizes',
                  description: 'Every call is recorded and summarized. You get the key details without the noise.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Captures Customer Needs',
                  description: 'Angela understands what customers need and organizes it for you.'
                },
                {
                  icon: Zap,
                  title: 'Organizes Leads Automatically',
                  description: 'Leads are automatically organized and ready for follow-up.'
                },
                {
                  icon: MessageSquare,
                  title: 'Voice or Text Follow-Up',
                  description: 'Follow up with customers by voice or text—whatever works for you.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Works While You Work',
                  description: 'Angela handles calls while you\'re on the job. No interruptions, no stress.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4" />
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="font-paragraph text-slate-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">How It Works</h2>
              <p className="font-paragraph text-lg text-slate-300 max-w-2xl mx-auto">
                Simple, seamless, and built for your workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: 1, title: 'Customer Calls', description: 'A customer calls your business number' },
                { step: 2, title: 'Angela Answers', description: 'Angela picks up and greets them professionally' },
                { step: 3, title: 'Request Captured', description: 'Angela records and summarizes the request' },
                { step: 4, title: 'You Review Later', description: 'Review calls by voice or text at your convenience' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700 text-center h-full flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-heading text-xl sm:text-2xl font-bold">{item.step}</span>
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                      <p className="font-paragraph text-slate-300 text-sm sm:text-base">{item.description}</p>
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice-First Section */}
      <section id="voice-first" className="w-full py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl sm:text-5xl font-bold">Built for the Job Site — Not the Office</h2>
                <p className="font-paragraph text-lg text-slate-300 leading-relaxed">
                  Angela is designed for busy service providers who need a voice-first assistant, not complicated software. No dashboards to learn. No complicated workflows. Just answer your calls and follow up when you're ready.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Voice-first interface designed for field work',
                  'Works offline and syncs when you\'re connected',
                  'Simple, intuitive, no training required',
                  'Integrates with your existing phone number'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-slate-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 order-1 lg:order-2"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center"
                >
                  <Zap className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-blue-400" />
                  <p className="text-lg sm:text-xl font-semibold text-white">Voice-First Design</p>
                  <p className="text-sm sm:text-base text-slate-300">Built for your workflow</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="w-full bg-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">Built for Service Businesses</h2>
              <p className="font-paragraph text-lg text-slate-300 max-w-2xl mx-auto">
                Angela works for any service business that takes calls
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            >
              {[
                'Plumbers',
                'HVAC Technicians',
                'Electricians',
                'Auto Detailers',
                'Landscapers',
                'Contractors'
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-800 p-4 sm:p-6 rounded-xl border border-slate-700 text-center hover:border-blue-600 transition-colors cursor-pointer"
                >
                  <p className="font-heading font-semibold text-sm sm:text-base">{industry}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section id="trust" className="w-full py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 sm:p-12 text-center space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">Your Privacy Matters</h3>
              <p className="font-paragraph text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                All messages are sent only in response to customer-initiated service requests. No marketing or promotional messages are sent.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 sm:p-12 space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold">SMS Disclosure</h3>
              <p className="font-paragraph text-slate-300 leading-relaxed text-sm sm:text-base">
                By contacting a business using Meet Angela, you agree to receive conversational text messages related to your service request, scheduling, estimates, and support. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to Stop Losing Calls?</h2>
            <p className="font-paragraph text-lg text-blue-100 max-w-2xl mx-auto">
              Join service businesses that are already using Angela to capture every opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-blue-600 font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
