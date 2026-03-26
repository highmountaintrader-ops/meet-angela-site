import { StartRequestData } from '@/lib/start-flow';

interface CheckoutSessionResult {
  checkout_url?: string;
  session_id?: string;
  error?: string;
  details?: unknown;
}

const WEBSITE_CHECKOUT_FUNCTION_URL =
  import.meta.env.PUBLIC_WEBSITE_CHECKOUT_FUNCTION_URL;

export async function createWebsiteCheckoutSession(
  payload: StartRequestData
): Promise<CheckoutSessionResult> {
  if (!WEBSITE_CHECKOUT_FUNCTION_URL) {
    return {
      error:
        'Missing PUBLIC_WEBSITE_CHECKOUT_FUNCTION_URL. The website is not connected to the Supabase checkout function yet.',
    };
  }

  const response = await fetch(WEBSITE_CHECKOUT_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plan_family: payload.planFamily,
      business_name: payload.businessName,
      owner_name: payload.ownerName,
      work_email: payload.workEmail,
      assistant_name: payload.assistantName,
      industry: payload.industry,
      other_industry: payload.otherIndustry,
      notes: payload.notes,
    }),
  });

  const data = (await response.json()) as CheckoutSessionResult;

  if (!response.ok) {
    return {
      error: data.error || 'Unable to create checkout session',
      details: data.details,
    };
  }

  return data;
}
