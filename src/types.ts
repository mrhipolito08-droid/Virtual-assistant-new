export type SkillCategory = 'Core Support' | 'Technical' | 'Organization' | 'Communication' | 'AI & Automation';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  description: string;
}

export type ToolCategory = 'Productivity' | 'Communication' | 'Design & Content' | 'Project Management' | 'AI & Automation';

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  iconName: string;
  highlight: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  detailedBullets: string[];
  iconName: string;
  popular?: boolean;
  estimatedHourlyRate?: number;
}

export type WorkCategory = 'Spreadsheets' | 'Research' | 'Calendar & Travel' | 'Social Media' | 'Presentations';

export interface WorkSample {
  id: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  description: string;
  tags: string[];
  impactMetric: string;
  contentType: 'spreadsheet' | 'itinerary' | 'research' | 'social_deck' | 'presentation';
  mockData: any;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  impactResult: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  linkedin: string;
  website: string;
  hourlyRate: number;
  availability: 'Available Immediately' | 'Limited Slots' | 'Booked Out' | 'Free Trial Available';
  weeklyHoursAvailable: number;
  yearsExperience: number;
  tasksCompleted: number;
  hoursSavedMonthly: number;
}

export interface PortfolioData {
  profile: ProfileInfo;
  services: Service[];
  skills: Skill[];
  tools: Tool[];
  workSamples: WorkSample[];
  testimonials: Testimonial[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string[];
  message: string;
  estimatedHours: number;
  preferredContact: 'email' | 'phone' | 'zoom';
  submittedAt: string;
}
