export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
  badge?: string;
  videoUrl?: string;
  whatsappPhone?: string;
  whatsappDisplay?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FacilityPhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface BeforeAfterTransformation {
  id: string;
  name: string;
  age: number;
  period: string;
  goal: string;
  resultSummary: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
  stats: {
    weightChange?: string;
    bodyFatChange?: string;
    muscleGain?: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  duration: string;
}

export interface EvaluationFormData {
  name: string;
  phone: string;
  goal: string;
  preferredTime: string;
  notes?: string;
}
