
export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  points: string[];
  images: string[];
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface Education {
  date: string;
  title: string;
  institution: string;
  details: string;
}
