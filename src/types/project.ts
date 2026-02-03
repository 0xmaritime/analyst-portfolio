export interface Artifact {
  type: string;
  title: string;
  src: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  role: string;
  duration: string;
  tools: string[];
  year: string;
  description: string;
  artifacts: Artifact[];
}
