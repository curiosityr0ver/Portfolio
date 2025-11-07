export type PersonalInfo = {
  name: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  startDate: string;
  endDate: string;
  website: string;
  universityWebsite: string;
  icon?: string;
};

export type Experience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  website: string;
  icon?: string;
  responsibilities: string[];
};

export type Project = {
  name: string;
  technologies: string[];
  github: string;
  description: string;
  thumbnail: string;
  screenshots: string[];
  highlights: string[];
};

export type Skill = {
  name: string;
  icon: string;
  library: 'fa' | 'si';
  color: string;
  url: string;
};

export type TechnicalSkills = {
  languages: Skill[];
  backendFrameworks: Skill[];
  databases: Skill[];
  devops: Skill[];
  other: Skill[];
};

export type Certification = {
  name: string;
  issuer: string;
  certificateUrl: string;
  verificationUrl: string;
};

export type Achievement = {
  platform: string;
  description: string;
};

export type ResumeData = {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  technicalSkills: TechnicalSkills;
  certifications: Certification[];
  achievements: Achievement[];
};
