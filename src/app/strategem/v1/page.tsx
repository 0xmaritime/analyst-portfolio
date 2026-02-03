import PrimaryButton from "@/components/PrimaryButton";
import StrategemCapabilityMap from "@/components/StrategemCapabilityMap";
import ArtifactContainer from "@/components/ArtifactContainer";
import ArtifactPreview from "@/components/ArtifactPreview";
import Link from "next/link";

export default function StrategemV1Page() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-small py-large">
        <header className="border-t border-b border-architectural-ink py-medium">
          <div className="flex items-center gap-small mb-2">
            <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
              v1
            </span>
            <span className="text-architectural-graphite text-xs uppercase tracking-[0.02em]">
              Complete
            </span>
          </div>
          <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight mb-small">
            Strategem v1
          </h1>
          <div className="grid grid-cols-2 gap-small text-sm">
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Role</p>
              <p className="text-architectural-ink mt-1">Systems Architect</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Duration</p>
              <p className="text-architectural-ink mt-1">Ongoing</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Tools</p>
              <p className="text-architectural-ink mt-1">Python, Pydantic, FastAPI, OpenRouter</p>
            </div>
            <div>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Year</p>
              <p className="text-architectural-ink mt-1">2025</p>
            </div>
          </div>
        </header>

        <section className="py-large border-b border-architectural-ink">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-medium">
            Strategem Core Overview
          </h2>
          
          <div className="space-y-medium">
            <div>
              <p className="text-architectural-ink text-base leading-relaxed mb-3">
                Strategem Core v1.0.0 is a <strong>decision support system</strong> that structures unstructured problem context and runs independent analytical frameworks via LLM inference. It produces <strong>reasoned artifacts, not recommendations</strong>.
              </p>
              <p className="text-architectural-ink text-sm italic">
                The Decision Owner retains full responsibility for all judgments and decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-medium">
              <div className="border border-architectural-ink p-small">
                <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-2">What This System Is</h4>
                <ul className="space-y-1 text-sm text-architectural-ink">
                  <li>• A reasoning scaffold that structures thinking</li>
                  <li>• A multi-lens analysis tool</li>
                  <li>• An uncertainty surfacing mechanism</li>
                  <li>• Decision support (not decision maker)</li>
                </ul>
              </div>
              <div className="border border-architectural-ink p-small">
                <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-2">What This System Is NOT</h4>
                <ul className="space-y-1 text-sm text-architectural-ink">
                  <li>• An oracle or recommendation engine</li>
                  <li>• A learning system</li>
                  <li>• A validator of external reality</li>
                  <li>• A domain expert or authority</li>
                  <li>• A ranking or optimization tool</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-architectural-ink text-lg font-semibold tracking-[-0.01em] mb-3">
                Tech Stack
              </h3>
              <ul className="space-y-1 text-sm text-architectural-ink grid grid-cols-2 md:grid-cols-3 gap-2">
                <li><strong>Language:</strong> Python 3.8+</li>
                <li><strong>Models:</strong> Pydantic v2</li>
                <li><strong>Framework:</strong> FastAPI</li>
                <li><strong>LLM:</strong> OpenRouter API</li>
                <li><strong>Storage:</strong> Local JSON/MD</li>
                <li><strong>CLI:</strong> Click</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-large border-b border-architectural-ink">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-medium">
            Analysis Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-medium">
            <ArtifactPreview
              title="System Context Diagram"
              description="C4 Level 1 diagram showing system boundaries, users, and external dependencies"
              artifactType="C4 Diagram"
              href="/strategem/v1/artifacts/system-context-diagram"
            />
            <ArtifactPreview
              title="Capability Map"
              description="Complete specification of implemented capabilities, non-capabilities, and deferred features"
              artifactType="Capability Matrix"
              href="/strategem/v1/artifacts/capability-map"
            />
            <ArtifactContainer
              src="/placeholder-data-flow.svg"
              alt="Data Flow Diagram"
              title="Data Flow Diagram (Level 0)"
              description="High-level data flow from problem context through analysis orchestration to artifact generation"
            />
            <ArtifactContainer
              src="/placeholder-use-case.svg"
              alt="Use Case Diagram"
              title="Use Case Diagram"
              description="Core user interactions and system boundaries"
            />
            <ArtifactContainer
              src="/placeholder-erd.svg"
              alt="Entity Relationship Diagram"
              title="Entity Relationship Diagram"
              description="Core game state and player data model"
            />
            <ArtifactContainer
              src="/placeholder-bpmn.svg"
              alt="Business Process Model"
              title="Game Loop BPMN"
              description="Turn sequence and state transitions"
            />
            <ArtifactContainer
              src="/placeholder-system-architecture.svg"
              alt="System Architecture"
              title="System Architecture"
              description="Three-tier architecture with WebSocket real-time updates"
            />
          </div>
        </section>

        <section className="py-large border-b border-architectural-ink">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-small">
            Technical Specifications
          </h2>
          <div className="space-y-small">
            <details className="border border-architectural-ink">
              <summary className="cursor-pointer px-small py-3 hover:bg-architectural-tertiary font-medium text-sm">
                Requirements
              </summary>
              <div className="p-small border-t border-architectural-ink">
                <p className="text-architectural-graphite text-sm">
                  Real-time move validation, turn-based game flow, basic AI opponent.
                </p>
              </div>
            </details>
            <details className="border border-architectural-ink">
              <summary className="cursor-pointer px-small py-3 hover:bg-architectural-tertiary font-medium text-sm">
                Data Models
              </summary>
              <div className="p-small border-t border-architectural-ink">
                <p className="text-architectural-graphite text-sm">
                  Game sessions, move history, player states, game configurations.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="py-large border-b border-architectural-ink">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-small">
            Live Demo
          </h2>
          <PrimaryButton href="#">Launch Strategem v1</PrimaryButton>
        </section>

        <section className="border-t border-b border-architectural-ink py-small hover:bg-architectural-ink hover:text-architectural-white transition-colors duration-200">
          <Link 
            href="/strategem/v2"
            className="block text-center py-2"
          >
            <p className="text-xs uppercase tracking-[0.1em] mb-1">Next Version</p>
            <p className="text-2xl font-semibold tracking-tight">Strategem v2</p>
          </Link>
        </section>
      </article>
    </div>
  );
}
