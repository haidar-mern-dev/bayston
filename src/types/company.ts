import { Job } from "./job";
export interface CompanyDetails {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  tagline: string;
  logo?: string;
  jobTitle: string;
  description: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
  };
  Jobs: Job[];
}
