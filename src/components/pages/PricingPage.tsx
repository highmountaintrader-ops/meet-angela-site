import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WEBSITE_PLANS } from '@/lib/plans';

export default function PricingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      <section className="w-full max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto space-y-5"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            Simple pricing for owner-operator service businesses
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Choose the Angela Plan That Fits Your Business
          </h1>

          <p className="font-paragraph text-lg sm:text-xl text-slate-300 leading-relaxed">
            Every plan includes Angela&apos;s core value: summaries, contacts, voice
            review, and follow-up tools. The main difference is what happens
            when you miss a call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          {WEBSITE_PLANS.map((plan, idx) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.family}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={`rounded-3xl border p-8 sm:p-10 ${
                  plan.highlight
                    ? 'border-blue-500 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 shadow-2xl shadow-blue-950/30'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300 mb-4">
                      {plan.badge}
                    </div>
                    <h2 className="font-heading text-3xl font-bold">
                      {plan.label}
                    </h2>
                    <p className="text-slate-300 mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <span className="font-heading text-5xl font-bold">
                      {plan.priceLabel}
                    </span>
                    <span className="text-slate-400 text-lg mb-1">/month</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-slate-200 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-semibold py-6 rounded-xl text-base ${
                      plan.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-white hover:bg-slate-100 text-slate-950'
                    }`}
                  >
                    <Link to={`/start?plan=${plan.family}`}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">
            What changes between Basic and Premium?
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto mt-4">
            Both plans include the same core Angela workflow. The difference is
            missed-call handling. Basic gives users the choice between voicemail
            and a simpler Angela intake. Premium gives them a smarter, more
            human, industry-aware Angela designed to keep callers engaged.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
