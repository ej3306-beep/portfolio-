/** C-ID 기반 콘텐츠 인벤토리 타입 (docs/content.md 정본) */

export type HeroContentId =
  | "C-HERO-01"
  | "C-HERO-02"
  | "C-HERO-03"
  | "C-HERO-04a"
  | "C-HERO-04b"
  | "C-HERO-04c"
  | "C-HERO-04d";

export type AboutContentId =
  | "C-ABOUT-00"
  | "C-ABOUT-01"
  | "C-ABOUT-02"
  | "C-ABOUT-03";

export type ExperienceContentId = "C-EXP-01" | "C-EXP-02" | "C-EXP-03";

export type ProjectContentId =
  | "C-PROJECT-01"
  | "C-PROJECT-02"
  | "C-PROJECT-03"
  | "C-PROJECT-02-NOTE";

export type SkillContentId =
  | "C-SKILL-01"
  | "C-SKILL-02"
  | "C-SKILL-03"
  | "C-SKILL-04";

export type EducationContentId =
  | "C-EDU-01"
  | "C-EDU-02"
  | "C-EDU-03"
  | "C-EDU-04"
  | "C-EDU-05";

export type ContactContentId =
  | "C-CONTACT-01"
  | "C-CONTACT-02"
  | "C-CONTACT-03"
  | "C-CONTACT-04";

export type ContentId =
  | HeroContentId
  | AboutContentId
  | ExperienceContentId
  | ProjectContentId
  | SkillContentId
  | EducationContentId
  | ContactContentId;

export interface ExperienceCard {
  id: ExperienceContentId;
  title: string;
  period: string;
  problem: string;
  solution: string[];
  result: string[];
}

export interface ProjectCard {
  id: ProjectContentId;
  title: string;
  problem: string;
  solution: string[];
  result: string[];
  note?: string;
}

export interface SkillGroup {
  id: SkillContentId;
  title: string;
  items: string[];
}

export interface EducationFacts {
  school: string;
  major: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SiteContent {
  meta: {
    siteName: string;
    title: string;
    description: string;
    locale: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subcopy: string;
    kpis: { id: HeroContentId; label: string; value: string }[];
    cta: { primary: string; secondary: string };
  };
  about: {
    sectionTitle: string;
    paragraphs: { id: AboutContentId; text: string }[];
  };
  experience: ExperienceCard[];
  projects: ProjectCard[];
  skills: SkillGroup[];
  education: EducationFacts;
  contact: {
    headline: string;
    email: string;
    formLabels: { name: string; email: string; message: string; submit: string };
    snsLabel: string;
  };
  footer: {
    copyright: string;
  };
}
