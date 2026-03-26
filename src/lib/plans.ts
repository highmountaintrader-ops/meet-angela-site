import { Crown, Phone } from 'lucide-react';

export type WebsitePlanFamily = 'basic' | 'premium';

export interface WebsitePlanDefinition {
  family: WebsitePlanFamily;
  label: string;
  priceLabel: string;
  badge: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  missedCallMode: 'basic_ai' | 'premium_ai';
  icon: typeof Phone;
}

export const WEBSITE_PLANS: WebsitePlanDefinition[] = [
  {
    family: 'basic',
    label: 'Basic',
    priceLabel: '$99',
    badge: 'Best for getting started',
    icon: Phone,
    description:
      'Everything Angela already does, plus simple missed-call handling.',
    features: [
      'Answered-call recording and summaries',
      'Contacts and lead capture',
      'Voice review for calls and appointments',
      'SMS and follow-up workflow',
      'Missed calls can go to voicemail or basic Angela intake',
    ],
    cta: 'Start Basic',
    highlight: false,
    missedCallMode: 'basic_ai',
  },
  {
    family: 'premium',
    label: 'Premium',
    priceLabel: '$199',
    badge: 'Best for human-like answering',
    icon: Crown,
    description:
      'Everything in Basic, plus a smarter AI Angela for missed calls.',
    features: [
      'Everything in Basic',
      'Premium AI Angela for missed calls',
      'More natural conversation flow',
      'Better off-script question handling',
      'Industry-aware answering behavior',
    ],
    cta: 'Start Premium',
    highlight: true,
    missedCallMode: 'premium_ai',
  },
];

export const getWebsitePlan = (
  family: string | null | undefined
): WebsitePlanDefinition => {
  return WEBSITE_PLANS.find((plan) => plan.family === family) ?? WEBSITE_PLANS[0];
};
