import Link from "next/link";

interface ArtifactPreviewProps {
  title: string;
  description: string;
  artifactType: string;
  href: string;
}

export default function ArtifactPreview({ title, description, artifactType, href }: ArtifactPreviewProps) {
  return (
    <Link href={href} className="block border border-architectural-ink hover:border-2 hover:bg-architectural-tertiary transition-all duration-200 group">
      <div className="aspect-video bg-architectural-tertiary flex flex-col items-center justify-center relative overflow-hidden">
        <span className="text-architectural-graphite text-sm font-mono uppercase tracking-[0.1em] group-hover:text-architectural-ink transition-colors z-10">
          {artifactType}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-architectural-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <div className="p-small bg-architectural-white">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-architectural-ink text-base font-semibold tracking-0 leading-tight">
            {title}
          </h3>
          <span className="text-architectural-accent text-xs uppercase tracking-[0.1em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
        <p className="text-architectural-graphite text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
