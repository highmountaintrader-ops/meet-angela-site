import { BaseCrudService } from '@/integrations';
import { ContactInquiries } from '@/entities';
import { WebsitePlanFamily, getWebsitePlan } from '@/lib/plans';

export interface StartRequestData {
  planFamily: WebsitePlanFamily;
  businessName: string;
  ownerName: string;
  workEmail: string;
  assistantName: string;
  industry: string;
  otherIndustry?: string;
  notes?: string;
}

export const buildStartRequestMessage = (data: StartRequestData): string => {
  const plan = getWebsitePlan(data.planFamily);
  const resolvedIndustry =
    data.industry === 'Other' && data.otherIndustry?.trim()
      ? `Other: ${data.otherIndustry.trim()}`
      : data.industry;

  return [
    `Plan: ${plan.label}`,
    `Plan Family: ${plan.family}`,
    `Missed Call Mode: ${plan.missedCallMode}`,
    `Business Name: ${data.businessName}`,
    `Owner Name: ${data.ownerName}`,
    `Work Email: ${data.workEmail}`,
    `Assistant Name: ${data.assistantName}`,
    `Industry: ${resolvedIndustry || 'Not provided'}`,
    `Notes: ${data.notes?.trim() || 'None'}`,
    '',
    'Requested next steps: website signup, billing setup, app access, and phone onboarding.',
  ].join('\n');
};

export const submitStartRequest = async (data: StartRequestData): Promise<void> => {
  const inquiry: ContactInquiries = {
    _id: crypto.randomUUID(),
    visitorName: data.ownerName,
    visitorEmail: data.workEmail,
    inquiryMessage: buildStartRequestMessage(data),
    submissionDateTime: new Date(),
    status: 'new',
  };

  await BaseCrudService.create('contactinquiries', inquiry);
};
