import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INDUSTRIES } from '@/lib/industries';
import { WebsitePlanFamily, getWebsitePlan } from '@/lib/plans';
import { StartRequestData, submitStartRequest } from '@/lib/start-flow';
import { createWebsiteCheckoutSession } from '@/lib/supabase-functions';

export default function StartPage() {
  const [searchParams] = useSearchParams();
  const initialPlan: WebsitePlanFamily =
    searchParams.get('plan') === 'premium' ? 'premium' : 'basic';
  const [selectedPlan, setSelectedPlan] = useState<WebsitePlanFamily>(initialPlan);
  const [agreeToLegal, setAgreeToLegal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'error'>('idle');
  const [checkoutError, setCheckoutError] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    workEmail: '',
    assistantName: 'Angela',
    industry: '',
    otherIndustry: '',
    notes: '',
  });

  const currentPlan = useMemo(() => getWebsitePlan(selectedPlan), [selectedPlan]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlanChange = (value: string) => {
    if (value === 'basic' || value === 'premium') {
      setSelectedPlan(value);
    }
  };

  const handleIndustryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      industry: value,
      otherIndustry: value === 'Other' ? prev.otherIndustry : '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreeToLegal) {
      setSubmitStatus('error');
      setCheckoutStatus('idle');
      setCheckoutError('');
      return;
    }

    setIsSubmitting(true);
    setIsCreatingCheckout(true);
    setSubmitStatus('idle');
    setCheckoutStatus('idle');
    setCheckoutError('');

    const payload: StartRequestData = {
      planFamily: selectedPlan,
      businessName: formData.businessName,
      ownerName: formData.ownerName,
      workEmail: formData.workEmail,
      assistantName: formData.assistantName,
      industry: formData.industry,
      otherIndustry: formData.otherIndustry,
      notes: formData.notes,
    };

    try {
      await submitStartRequest(payload);

      setSubmitStatus('success');

      const checkoutResult = await createWebsiteCheckoutSession(payload);

      if (checkoutResult.checkout_url) {
        window.location.href = checkoutResult.checkout_url;
        return;
      }

      if (checkoutResult.error) {
        setCheckoutStatus('error');
        setCheckoutError(checkoutResult.error);
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setIsCreatingCheckout(false);
    }
  };

  const PlanIcon = currentPlan.icon;

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      <section className="w-full max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Step 1: Choose your plan and business details
            </div>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
                Start Your Angela Setup
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                This is the clean handoff from pricing into onboarding. We&apos;ll use
                these details to prepare your account, plan setup, and app access.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-blue-300">
                    Selected Plan
                  </p>
                  <h2 className="font-heading text-3xl font-bold mt-2">
                    {currentPlan.label}
                  </h2>
                  <p className="text-slate-300 mt-3 leading-relaxed">
                    {currentPlan.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <PlanIcon className="w-6 h-6 text-blue-300" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <span className="font-heading text-4xl font-bold">
                  {currentPlan.priceLabel}/month
                </span>
              </div>

              <div className="space-y-3">
                {currentPlan.features.slice(0, 3).map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                    <p className="text-slate-200 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-slate-300 leading-relaxed">
                  Next, this page will feed into Stripe checkout and Supabase account
                  creation. For now, it captures the exact setup information we need
                  without faking billing or login logic.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Plan
                  </label>
                  <Select value={selectedPlan} onValueChange={handlePlanChange}>
                    <SelectTrigger className="bg-slate-950 border-slate-700 text-white h-11">
                      <SelectValue placeholder="Choose a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Business name
                  </label>
                  <Input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Gloss Boss Pro Detailing"
                    required
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 h-11"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Owner name
                  </label>
                  <Input
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="Jason"
                    required
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 h-11"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Work email
                  </label>
                  <Input
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="owner@business.com"
                    required
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 h-11"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Assistant name
                  </label>
                  <Input
                    name="assistantName"
                    value={formData.assistantName}
                    onChange={handleInputChange}
                    placeholder="Angela"
                    required
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 h-11"
                  />
                </div>

                <div>
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Industry
                  </label>
                  <Select value={formData.industry} onValueChange={handleIndustryChange}>
                    <SelectTrigger className="bg-slate-950 border-slate-700 text-white h-11">
                      <SelectValue placeholder="Choose your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.industry === 'Other' && (
                  <div className="sm:col-span-2">
                    <label className="block font-heading font-semibold mb-2 text-white">
                      Other industry
                    </label>
                    <Input
                      name="otherIndustry"
                      value={formData.otherIndustry}
                      onChange={handleInputChange}
                      placeholder="Tell us your industry"
                      required
                      className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 h-11"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label className="block font-heading font-semibold mb-2 text-white">
                    Notes
                  </label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Anything important about your business, missed-call preference, or launch timing?"
                    rows={5}
                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeToLegal"
                    checked={agreeToLegal}
                    onCheckedChange={(checked) => setAgreeToLegal(Boolean(checked))}
                    className="mt-1 border-slate-500"
                  />
                  <label
                    htmlFor="agreeToLegal"
                    className="text-sm leading-relaxed text-slate-300"
                  >
                    I agree to the{' '}
                    <Link
                      to="/terms-of-service"
                      className="text-blue-300 hover:text-white underline"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      to="/privacy-policy"
                      className="text-blue-300 hover:text-white underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Angela is for customer service, follow-up, scheduling, and customer
                  care after initial customer contact. It is not for unsolicited
                  marketing or spam messaging.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-2xl border border-green-700 bg-green-900/20 p-4">
                  <p className="text-green-300 text-sm leading-relaxed">
                    Your setup request is in and the website is ready to hand off to
                    Stripe checkout as soon as the billing connection is fully set.
                  </p>
                </div>
              )}

              {checkoutStatus === 'error' && (
                <div className="rounded-2xl border border-amber-700 bg-amber-900/20 p-4">
                  <p className="text-amber-200 text-sm leading-relaxed">
                    {checkoutError}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-2xl border border-red-700 bg-red-900/20 p-4">
                  <p className="text-red-300 text-sm leading-relaxed">
                    We couldn&apos;t submit this step yet. Double-check the required
                    fields and legal checkbox, then try again.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isCreatingCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl text-base disabled:opacity-60"
              >
                {isCreatingCheckout
                  ? 'Preparing Checkout...'
                  : isSubmitting
                    ? 'Saving Setup Request...'
                    : 'Continue Setup'}
                {!isSubmitting && !isCreatingCheckout && (
                  <ArrowRight className="ml-2 w-5 h-5" />
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
