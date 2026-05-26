export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  location: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  rating: number; // 1-5 stars
  description: string;
}

export interface LanguageItem {
  name: string;
  rating: number; // 1-5 stars
  code: string;
}

export interface BrandProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  material: string;
  aesthetic: string;
  imageUrl: string;
}
