import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="pt-16">
      <section className="h-[calc(100vh-64px)] flex flex-col justify-center items-center px-small bg-architectural-paper">
        <h1 className="text-architectural-ink text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-center leading-tight max-w-4xl">
          Systems Analysis &<br />Business Architecture
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-small py-large bg-architectural-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-large">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
