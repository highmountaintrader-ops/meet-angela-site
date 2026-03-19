/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: contactinquiries
 * Interface for ContactInquiries
 */
export interface ContactInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  visitorName?: string;
  /** @wixFieldType text */
  visitorEmail?: string;
  /** @wixFieldType text */
  inquiryMessage?: string;
  /** @wixFieldType datetime */
  submissionDateTime?: Date | string;
  /** @wixFieldType text */
  status?: string;
}


/**
 * Collection ID: features
 * Interface for Features
 */
export interface Features {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  featureName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isCoreFeature?: boolean;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featureImage?: string;
}


/**
 * Collection ID: howitworks
 * Interface for HowItWorks
 */
export interface HowItWorks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  stepNumber?: number;
  /** @wixFieldType text */
  stepDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  stepImage?: string;
  /** @wixFieldType text */
  calloutText?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
}


/**
 * Collection ID: targetindustries
 * Interface for TargetIndustries
 */
export interface TargetIndustries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  industryName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  exampleUseCase?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  industryImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}
