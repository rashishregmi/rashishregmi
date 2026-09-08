import { Project, Service, Testimonial, PricingPlan, FAQItem, StatItem } from '../types';
import profile from "../assets/profile.jpeg";

export const PERSONAL_INFO = {
  name: 'Rashish Regmi',
  role: 'UI/UX Designer',
  avatar: profile,
  headline: 'I design premium, high-converting digital experiences that drive growth.',
  subtext: 'Helping brands grow through thoughtful design and user experiences that drive engagement, build trust, and deliver results.',
  availability: 'Open for 2 new projects',
  email: 'rashish.regmi100@gmail.com',
  phone: '+977-9811592861',
  location: 'Kathmandu, Nepal',
  aboutBio: "Hey, I'm Rashish Regmi — a strategy-driven product designer creating scalable experiences that improve retention, conversions, and business growth."
};

export const STATS: StatItem[] = [
  { value: '$60M+', label: 'Client Funding Raised' },
  { value: '35+', label: 'Startups Supported' },
  { value: '12+', label: 'Years of experience' },
  { value: '95%', label: 'Client Satisfaction Rate' },
];

export const TRUSTED_BRANDS = [
  { name: 'Logoipsum Alpha', symbol: '✦', label: 'Vortex' },
  { name: 'Logoipsum Beta', symbol: '❖', label: 'Capsule' },
  { name: 'Logoipsum Gamma', symbol: '▲', label: 'Polygon' },
  { name: 'Logoipsum Delta', symbol: '◎', label: 'Spherica' },
  { name: 'Logoipsum Epsilon', symbol: '⬡', label: 'HexaCorp' },
];

export const PROJECTS: Project[] = [
  {
    id: 'orbit-saas',
    title: 'Orbit - SaaS Brand Experience',
    category: 'Branding',
    tag: 'Branding',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive brand identity overhaul and product UI design for Orbit, an enterprise data analytics platform that helps teams monitor real-time metrics with zero latency.',
    metrics: '+184% User Engagement, $18M Series B raised',
    year: '2025',
    client: 'Orbit Technologies',
    deliverables: ['Design System', 'Product UI/UX', 'Marketing Website', '3D Asset Direction']
  },
  {
    id: 'nova-brand',
    title: 'Nova™ Brand Identity',
    category: 'Food & Beverage',
    tag: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Tactile minimalist packaging, stationery, and digital presence for Nova™, a specialty organic botanical beverage brand celebrating sustainable brewing.',
    metrics: 'Sold out first batch in 72 hours, featured in Wallpaper*',
    year: '2024',
    client: 'Nova Beverage Co.',
    deliverables: ['Packaging Suite', 'Brand Guidelines', 'E-commerce Architecture', 'Photography Direction']
  },
  {
    id: 'finova-app',
    title: 'Finova Finance App',
    category: 'FinTech / Personal Finance',
    tag: 'FinTech / Personal Finance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Next-generation wealth management application crafted for modern investors, featuring interactive portfolio visualization, automated recurring investments, and intuitive budgeting.',
    metrics: '4.9★ App Store rating, 250k+ active accounts',
    year: '2025',
    client: 'Finova Global Inc.',
    deliverables: ['Mobile App (iOS & Android)', 'Design Tokens', 'Micro-interactions', 'Security User Flow']
  },
  {
    id: 'lunex-redesign',
    title: 'Lunex Website Redesign',
    category: 'Technology',
    tag: 'Technology',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description: 'A high-impact digital editorial redesign for Lunex, articulating their breakthroughs in distributed cloud computing through interactive storytelling and dynamic typography.',
    metrics: '+62% Demo Requests, 3.2x Time on Site',
    year: '2025',
    client: 'Lunex Cloud Systems',
    deliverables: ['Web Redesign', 'Custom Framer Components', 'Interactive 3D Demos', 'Copywriting Alignment']
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Product & Interface Design Systems',
    categories: 'UI Design, UX Design',
    description: 'Crafting scalable, atomic design systems that align your product team, accelerate engineering velocity, and ensure cohesive visual polish across all platforms.',
    features: ['Atomic Component Libraries', 'Cross-Platform Tokens', 'User Journey Mapping', 'Figma to Code Workflows']
  },
  {
    number: '02',
    title: 'Creative Direction & Visual Strategy',
    categories: 'Visual Strategy, Design Planning',
    description: 'Defining high-conviction aesthetic identities and visual narratives that distinguish your brand from competitors and establish market leadership.',
    features: ['Art Direction & Guidelines', 'Brand Positioning Deck', 'Visual Narrative & Tone', 'Creative Audit & Roadmaps']
  },
  {
    number: '03',
    title: 'Branding Strategy for Growth and Scale',
    categories: 'Positioning, Marketing Strategy',
    description: 'Unifying product positioning with memorable brand assets to turn first-time website visitors into loyal long-term brand evangelists.',
    features: ['Logo & Typography Suites', 'Go-To-Market Collateral', 'Pitch Decks & Case Studies', 'Conversion Funnel Auditing']
  },
  {
    number: '04',
    title: 'Website Design & Development Solutions',
    categories: 'Responsive Websites, Landing Pages',
    description: 'Building blazing-fast, responsive web experiences with production-grade animations, crisp micro-interactions, and accessibility baked in.',
    features: ['High-Converting Landing Pages', 'Framer & React Development', 'SEO & Performance Tuning', 'Micro-interactions & Motion']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'willium',
    name: 'Willium jonson',
    handle: '@jonsonwill',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
    content: 'Working with Calib was a fantastic experience. His ability to transform complex ideas into intuitive user experiences helped us launch faster and with greater confidence.'
  },
  {
    id: 'sarah',
    name: 'Sarah Bennett',
    handle: '@bennettsh',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
    content: 'Calib brought clarity and structure to our product. His design process was thoughtful, collaborative, and focused on delivering measurable business results.'
  },
  {
    id: 'michael',
    name: 'Michael Carter',
    handle: '@michaelcart',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
    content: 'From strategy to execution, every detail was carefully considered. The final product exceeded our expectations and significantly improved our user engagement.'
  },
  {
    id: 'emma',
    name: 'Emma Rodriguez',
    handle: '@rodriguez',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    verified: true,
    content: 'A highly skilled designer who understands both user needs and business goals. The designs were clean, scalable, and had a real impact on our growth.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Everything you need to get started.',
    price: '$2,000',
    period: '/ project',
    buttonText: 'Book a Call',
    isPopular: false,
    features: [
      'Web, SaaS & mobile UI design',
      'Dedicated product designer support',
      'UX research & user flow planning',
      'Perfect for MVPs & startups',
      'Fast design iterations & feedback'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Built for growing businesses.',
    price: '$4,000',
    period: '/ project',
    buttonText: 'Book a Call',
    isPopular: true,
    features: [
      'End-to-end product design strategy',
      'Senior designer + design system setup',
      'Advanced UX research & workshops',
      'Best for scaling products & apps',
      'Unlimited iterations during engagement'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you offer?',
    answer: 'I provide product design, UI/UX design, website design, design systems, Framer development, and end-to-end digital product design services.'
  },
  {
    id: 'faq-2',
    question: 'Do you design and develop websites?',
    answer: 'Yes, I design and build responsive, performant websites using Framer, Webflow, and modern React/Tailwind tech stacks with seamless interaction design.'
  },
  {
    id: 'faq-3',
    question: 'Can you redesign an existing product or website?',
    answer: 'Absolutely. I audit your current digital product, identify friction points and drop-offs, and redesign the user experience to maximize conversion and user retention.'
  },
  {
    id: 'faq-4',
    question: 'Do you build websites in Framer?',
    answer: 'Yes, Framer is one of my primary tools for high-fidelity animations, responsive production sites, and rapid client handoffs.'
  }
];
