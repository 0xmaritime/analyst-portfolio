import { notFound } from "next/navigation";
import Link from "next/link";
import ArtifactContainer from "@/components/ArtifactContainer";
import { projects, getProjectBySlug, getAllSlugs } from "@/data/projects";
import type { Project } from "@/types/project";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-small py-large">
        <header className="border-t border-b border-architectural-ink py-medium">
          <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight mb-small">
            {project.title}
          </h1>
          <div className="grid grid-cols-2 gap-small text-sm">
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Role</p>
              <p className="text-architectural-ink mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Duration</p>
              <p className="text-architectural-ink mt-1">{project.duration}</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Tools</p>
              <p className="text-architectural-ink mt-1">{project.tools.join(", ")}</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Year</p>
              <p className="text-architectural-ink mt-1">{project.year}</p>
            </div>
          </div>
        </header>

        <section className="py-large border-b border-architectural-ink">
          <div className="grid grid-cols-1 gap-medium">
            {project.artifacts.map((artifact, index) => (
              <ArtifactContainer
                key={index}
                src={artifact.src}
                alt={artifact.title}
                title={artifact.title}
                description={artifact.description}
              />
            ))}
          </div>
        </section>

        {nextProject && (
          <section className="border-t border-b border-architectural-ink py-small hover:bg-architectural-ink hover:text-architectural-white transition-colors duration-200">
            <Link 
              href={`/project/${nextProject.slug}`}
              className="block text-center py-2"
            >
              <p className="text-xs uppercase tracking-[0.1em] mb-1">Next Project</p>
              <p className="text-2xl font-semibold tracking-tight">{nextProject.title}</p>
            </Link>
          </section>
        )}
      </article>
    </div>
  );
}
