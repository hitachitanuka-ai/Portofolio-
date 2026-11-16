export type AppRoute = 
  | 'home' 
  | 'about' 
  | 'expertise' 
  | 'projects' 
  | 'project-detail' 
  | 'experience' 
  | 'insights' 
  | 'insight-detail' 
  | 'contact'
  | 'archive';

export interface ProjectCaseStudy {
  overview: string;
  challenge: string;
  objectives: string[];
  strategicApproach: string[];
  execution: {
    steps: string[];
    techStack: string[];
    workflows: string;
  };
  results: {
    metrics: { label: string; value: string; detail: string }[];
    impactNarrative: string;
  };
  keyLearnings: string[];
  relatedProjectIds: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'People & Culture' | 'HR Automation' | 'Org Strategy' | 'Event Operations';
  categoryFilter?: 'HR & People' | 'Business & Strategy' | 'Digital Products' | 'Data & Analytics';
  date: string;
  year?: string;
  image: string;
  videoUrl?: string;
  projectUrl?: string;
  client: string;
  description: string;
  shortSummary?: string;
  location: string;
  exif: {
    camera: string;      // Execution Role / Scope
    lens: string;        // Tech Stack & Framework
    focalLength: string; // Scale & Impact Metric
    aperture: string;    // Quantifiable Outcome
    shutter: string;     // Timeframe & Delivery
    iso: string;         // Diagnostic Method
  };
  additionalImages?: string[];
  quote?: {
    text: string;
    author: string;
  };
  features?: string[];
  caseStudy?: ProjectCaseStudy;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'HR Systems' | 'People Ops' | 'Analytics' | 'Leadership';
  isMustRead?: boolean;
  date: string;
  readTime: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  summary: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  initials?: string;
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  turnaround: string;
  idealFor: string;
}

export interface PhotoArchiveItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  location: string;
  album?: 'myself' | 'Event';
}
