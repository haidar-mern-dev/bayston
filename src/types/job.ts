export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string[];
  logo?: string;
  contacted?: boolean;
}
