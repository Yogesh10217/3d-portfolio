import { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[];
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  githubUsername: string;
}

export interface TechCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  type: string;
  description: string;
  tech: string[];
  highlight: boolean;
}

export interface AchievementItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ArchitectureStep {
  step: string;
  label: string;
  desc: string;
  icon: string;
}

export interface DesignDecision {
  title: string;
  reason: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  featured: boolean;
  status: string;
  type: string;
  github: string;
  demo: string | null;
  tech: string[];
  features: string[];
  architecture: ArchitectureStep[];
  challenges: string;
  learnings: string;
  decisions: DesignDecision[];
  metrics: string[];
  col1Images: [string, string];
  col2Image: string;
}

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'article' | 'header' | 'footer' | 'nav' | 'p' | 'h1' | 'h2' | 'h3';
}

export interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}
