export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  metrics?: string;
  year: string;
  client: string;
  deliverables: string[];
}

export interface Service {
  number: string;
  title: string;
  categories: string;
  description?: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
  content: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  buttonText: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}
