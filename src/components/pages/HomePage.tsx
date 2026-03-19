import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Phone,
  Play,
  Zap,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              AI receptionist built for owner-operator service businesses
            </div>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Never Miss Another Call — Or Another Job
              </h1>
              <p className="font-paragraph text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Angela answers when you can’t, captures exactly what your customer
                needs, and helps you follow up while you’re on the job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                className="border-slate-500 text-white hover:bg-slate-800 font-semibold px-8 py-6 text-base sm:text-lg rounded-lg"
              >
                See How It Works
              </Button>
            </div>

            <Button
              variant="ghost"
              size="lg"
              className="text-blue-300 hover:text-white hover:bg-slate-800 font-semibold px-0 sm:px-2 text-base sm:text-lg justify-start"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Hear Angela Answer a Call
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                'Answers missed calls',
                'Captures customer requests',
                'Helps you follow up by voice',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 sm:p-8 shadow-2xl shadow-blue-950/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%)]" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                      Meet Angela
                    </p>
                    <p className="mt-1 text-2xl sm:text-3xl font-bold">
                      Your AI Receptionist
                    </p>
                  </div>
                  <div className="rounded-2xl bg-blue-600/20 p-4 border border-blue-500/20">
                    <Phone className="h-8 w-8 text-blue-300" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-sm text-slate-300">Angela is answering a missed call</p>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
                    <p className="text-sm text-blue-200 mb-2">Angela says:</p>
                    <p className="text-base sm:text-lg leading-relaxed text-white">
                      “Hi, this is Angela. The owner is on a job right now, but I can
                      help. Please let me know what you need, when you’d like it done,
                      and where you’re located.”
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Caller request
                      </p>
                      <p className="mt-2 text-white">
                        Interior detail for SUV tomorrow morning
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Saved lead
                      </p>
                      <p className="mt-2 text-white">
                        John Smith • SUV detail • Tomorrow AM
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                    <p className="text-sm text-blue-100">
                      Later, you say: <span className="font-semibold">“Angela, review calls.”</span>
                    </p>
                  </div>
                </div>
              </div>
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
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">
                You’re Losing Jobs Every Day
              </h2>
              <p className="font-paragraph text-lg text-slate-300">
                Missed calls, no time for notes, forgotten details, and leads slipping
                away while you’re busy working.
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
                  description:
                    'Every call you miss is money walking out the door. Customers often call the next provider instead of waiting.',
                },
                {
                  title: 'Customers Don’t Leave Details',
                  description:
                    'Even when you answer, you usually do not have time to stop working, take notes, and organize the lead properly.',
                },
                {
                  title: 'By Night, You Forget',
                  description:
                    'At the end of a long day, names, job details, timing, and follow-up needs start to blur together.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
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
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">
                Angela Handles It For You
              </h2>
              <p className="font-paragraph text-lg text-slate-300">
                An AI receptionist and call memory system built for real service
                businesses, not office teams.
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
                  title: 'Answers When You are Busy',
                  description:
                    'Angela picks up when you can’t so missed calls stop turning into missed jobs.',
                },
                {
                  icon: MessageSquare,
                  title: 'Records & Summarizes',
                  description:
                    'Every call is captured and turned into a clean summary you can review later.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Captures Customer Needs',
                  description:
                    'Angela organizes who called, what they need, and when they want it done.',
                },
                {
                  icon: Zap,
                  title: 'Organizes Leads Automatically',
                  description:
                    'Customer requests become usable leads instead of forgotten scraps and mental notes.',
                },
                {
                  icon: MessageSquare,
                  title: 'Voice or Text Follow-Up',
                  description:
                    'Follow up the way you actually work: by voice, by call, or by text.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Built for the Field',
                  description:
                    'Angela helps while you are working, driving, or on-site, without adding friction.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4" />
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
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
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">
                How It Works
              </h2>
              <p className="font-paragraph text-lg text-slate-300">
                Angela supports both sides of the job flow — whether you answer the
                customer yourself or you are too busy to get to the phone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Scenario 1 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8"
              >
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 mb-4">
                      Scenario 1
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                      Customer Calls or Texts About a Job — You Handle the Conversation
                    </h3>
                    <p className="font-paragraph text-slate-300 leading-relaxed">
                      When you answer the call or respond to the customer yourself,
                      Angela still works in the background to organize everything for
                      you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'You Answer as Normal',
                        description:
                          'You speak with the customer like you always do, without changing your workflow.',
                      },
                      {
                        step: '2',
                        title: 'Angela Captures the Details',
                        description:
                          'Angela creates a summary of the conversation, extracts the important job information, and creates or updates the contact automatically.',
                      },
                      {
                        step: '3',
                        title: 'Take Action by Voice',
                        description:
                          'Anytime later, you can say: summarize today’s leads, call the customer back, text the customer, remind me to call them, or schedule the appointment.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-heading text-lg sm:text-xl font-bold mb-1">
                              {item.title}
                            </h4>
                            <p className="font-paragraph text-slate-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Scenario 2 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8"
              >
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 mb-4">
                      Scenario 2
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                      You’re Busy and Can’t Get to the Phone — Angela Handles It
                    </h3>
                    <p className="font-paragraph text-slate-300 leading-relaxed">
                      If you are working and cannot answer, Angela responds
                      professionally so the customer is taken care of and the lead is
                      not lost.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Angela Answers Professionally',
                        description:
                          'Angela greets the customer, keeps the interaction professional, and makes sure the caller feels helped instead of sent to voicemail.',
                      },
                      {
                        step: '2',
                        title: 'Vital Information Is Captured',
                        description:
                          'Angela records the call, summarizes the request, captures important details, and creates or updates the customer contact automatically.',
                      },
                      {
                        step: '3',
                        title: 'You Review and Follow Up Later',
                        description:
                          'When you are free, just say: summarize today’s leads, call the customer back, text the customer, remind me to call them, or schedule the appointment.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-heading text-lg sm:text-xl font-bold mb-1">
                              {item.title}
                            </h4>
                            <p className="font-paragraph text-slate-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Example Section */}
      <section className="w-full py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center space-y-5"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Know Exactly What Your Customer Needs
            </h2>
            <p className="font-paragraph text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto">
              “John Smith called. Needs interior detail for SUV tomorrow morning.”
            </p>
            <p className="font-paragraph text-slate-400">
              No notes. No guessing. No missed details.
            </p>
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
                <h2 className="font-heading text-4xl sm:text-5xl font-bold">
                  Built for the Job Site — Not the Office
                </h2>
                <p className="font-paragraph text-lg text-slate-300 leading-relaxed">
                  Angela is built for busy service providers who do not want
                  complicated software. You work. Angela captures the details.
                  Later, you simply ask what you missed.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Voice-first workflow for field work',
                  'Fast review without digging through screens',
                  'Simple enough for owner-operators',
                  'Designed to reduce missed leads and forgotten details',
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
              className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 order-1 lg:order-2"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="text-center px-6"
                >
                  <Zap className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-blue-400" />
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    Voice-First Design
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 max-w-xs mx-auto">
                    Built to help you review calls and follow up without stopping work.
                  </p>
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
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold">
                Built for Service Businesses
              </h2>
              <p className="font-paragraph text-lg text-slate-300">
                Angela is designed for service businesses that depend on calls and
                fast follow-up.
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
                'Contractors',
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-700 text-center hover:border-blue-600 transition-colors"
                >
                  <p className="font-heading font-semibold text-sm sm:text-base">
                    {industry}
                  </p>
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
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                Built for Real Customer Service Communication
              </h3>
              <p className="font-paragraph text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                All messages are sent only in response to customer-initiated
                service requests. No marketing or promotional messages are sent.
                Customers opt in by contacting the business directly by phone or
                text. Calls may be recorded and processed for service and
                follow-up purposes.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 sm:p-12 space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                SMS Disclosure
              </h3>
              <p className="font-paragraph text-slate-300 leading-relaxed text-sm sm:text-base">
                By contacting a business using Meet Angela, you agree to receive
                conversational text messages related to your service request,
                scheduling, estimates, and support. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out. Reply
                HELP for help.
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
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Stop Losing Calls?
            </h2>
            <p className="font-paragraph text-lg text-blue-100 max-w-2xl mx-auto">
              Capture more calls, save every lead, and follow up without breaking
              your workflow.
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
