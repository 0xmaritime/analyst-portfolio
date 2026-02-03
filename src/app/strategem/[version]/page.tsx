import Link from "next/link";
import { notFound } from "next/navigation";

const versionData: Record<string, { title: string; status: string; description: string; link?: string }> = {
  v2: {
    title: "Strategem v2",
    status: "In Progress",
    description: "Advanced features and enhanced gameplay mechanics.",
    link: "/strategem/v3"
  },
  v3: {
    title: "Strategem v3",
    status: "Planned",
    description: "Full-featured platform with multiplayer and analytics."
  }
};

export async function generateStaticParams() {
  return Object.keys(versionData).map((version) => ({ version }));
}

export default function StrategemVersionPage({ params }: { params: { version: string } }) {
  const version = params.version;
  const data = versionData[version];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-small py-large">
        <header className="border-t border-b border-architectural-ink py-medium">
          <div className="flex items-center gap-small mb-2">
            <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
              {version}
            </span>
            <span className="text-architectural-graphite text-xs uppercase tracking-[0.02em]">
              {data.status}
            </span>
          </div>
          <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight">
            {data.title}
          </h1>
        </header>

        <section className="py-large border-b border-architectural-ink">
          <p className="text-architectural-ink text-lg">
            {data.description}
          </p>
        </section>

        <section className="py-large">
          <p className="text-architectural-graphite text-base">
            Detailed analysis and artifacts coming soon.
          </p>
        </section>

        {data.link && (
          <section className="border-t border-b border-architectural-ink py-small hover:bg-architectural-ink hover:text-architectural-white transition-colors duration-200">
            <Link 
              href={data.link}
              className="block text-center py-2"
            >
              <p className="text-xs uppercase tracking-[0.1em] mb-1">Next Version</p>
              <p className="text-2xl font-semibold tracking-tight">{versionData.v3.title}</p>
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
