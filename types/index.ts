export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface MenuItem {
  name: string;
  href: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  tech: string[];
}