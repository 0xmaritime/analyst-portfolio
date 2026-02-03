import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
}

export default function ProjectCard({ slug, title, category, thumbnail }: ProjectCardProps) {
  return (
    <Link href={`/project/${slug}`} className="group block border border-architectural-ink hover:border-2 hover:bg-architectural-tertiary transition-all duration-200">
      <div className="aspect-[4/3] relative overflow-hidden bg-architectural-white">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="border-t border-architectural-ink p-small bg-architectural-white">
        <h3 className="text-architectural-ink text-xl font-semibold tracking-0 leading-tight">
          {title}
        </h3>
        <p className="text-architectural-graphite text-xs uppercase tracking-[0.02em] mt-1">
          {category}
        </p>
      </div>
    </Link>
  );
}