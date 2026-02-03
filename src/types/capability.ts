export interface Capability {
  id: string;
  title: string;
  description: string;
  items: string[];
  constraints?: string[];
}

export interface CategoryData {
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  capabilities: Capability[];
}

export interface BoundaryRule {
  icon: string;
  text: string;
}
