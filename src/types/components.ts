export interface ArtifactContainerProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface ArtifactPreviewProps {
  title: string;
  description: string;
  artifactType: string;
  href: string;
}

export interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
}
