export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-small py-large">
        <header className="border-b border-architectural-ink pb-large mb-large">
          <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight">
            About
          </h1>
        </header>

        <section className="space-y-medium mb-large">
          <p className="text-architectural-ink text-base leading-relaxed">
            Systems Analyst with 8 years of experience in business architecture and process optimization.
          </p>
        </section>

        <section className="border-t border-architectural-ink pt-large">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-medium">
            Certifications
          </h2>
          <ul className="space-y-small">
            <li className="text-architectural-ink text-base">
              <span className="text-architectural-graphite">—</span> CBAP® - Certified Business Analysis Professional
            </li>
            <li className="text-architectural-ink text-base">
              <span className="text-architectural-graphite">—</span> TOGAF® 9.2 Certified Enterprise Architect
            </li>
            <li className="text-architectural-ink text-base">
              <span className="text-architectural-graphite">—</span> AWS Certified Solutions Architect
            </li>
            <li className="text-architectural-ink text-base">
              <span className="text-architectural-graphite">—</span> Certified ScrumMaster® (CSM)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}