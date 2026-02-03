import Image from "next/image";

interface ArtifactContainerProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ArtifactContainer({ src, alt, title, description }: ArtifactContainerProps) {
  return (
    <figure className="border border-architectural-ink bg-architectural-white overflow-hidden">
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <figcaption className="p-small border-t border-architectural-ink">
        <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.05em]">
          {title}
        </h4>
        <p className="text-architectural-graphite text-sm mt-1">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}