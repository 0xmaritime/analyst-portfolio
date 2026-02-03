import SystemContextDiagramPNG from "@/components/SystemContextDiagramPNG";
import Link from "next/link";
import { AlertIcon, XIcon } from "@/components/icons";

export default function SystemContextDiagramPage() {
  return (
    <div className="pt-16">
      <article className="max-w-6xl mx-auto px-small py-large">
        <header className="mb-large">
          <Link 
            href="/strategem/v1"
            className="inline-flex items-center gap-2 text-architectural-graphite text-xs uppercase tracking-[0.1em] hover:text-architectural-ink transition-colors mb-4"
          >
            ← Back to v1
          </Link>
          <div className="flex items-start justify-between mb-small">
            <div>
              <span className="inline-block px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-mono uppercase tracking-[0.05em] mb-2">
                C4 Level 1
              </span>
              <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight">
                System Context Diagram
              </h1>
            </div>
            <div className="text-right">
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Artifact Type</p>
              <p className="text-architectural-ink text-sm font-medium">Context Diagram</p>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mt-2">System</p>
              <p className="text-architectural-ink text-sm font-medium">Strategem Core v1</p>
            </div>
          </div>
          <p className="text-architectural-graphite text-base max-w-3xl">
            Shows system boundaries, users, and external dependencies at the highest level of abstraction
          </p>
        </header>

        <section className="mb-large">
          <SystemContextDiagramPNG />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-large mb-large">
          <div className="border-t border-architectural-ink pt-large">
            <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-medium">
              System in Scope
            </h2>
            <div className="space-y-medium">
              <div className="border-l-2 border-architectural-ink pl-small">
                <h3 className="text-architectural-ink text-base font-semibold mb-1">Strategem Core</h3>
                <p className="text-architectural-graphite text-sm leading-relaxed">
                  The reasoning scaffold that processes problem context and generates reasoned artifacts through independent framework analysis
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-medium border border-architectural-ink">
                    Software System
                  </span>
                  <span className="px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-mono border border-architectural-ink">
                    V1.0.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-architectural-ink pt-large">
            <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-medium">
              External Entities
            </h2>
            <div className="space-y-medium">
              <div className="border-l-2 border-architectural-accent pl-small">
                <h3 className="text-architectural-ink text-base font-semibold mb-1">Decision Owner</h3>
                <p className="text-architectural-graphite text-sm leading-relaxed">
                  Human user who provides problem context and receives reasoned artifacts
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-medium border border-architectural-ink">
                  Person
                </span>
              </div>
              <div className="border-l-2 border-architectural-graphite pl-small">
                <h3 className="text-architectural-ink text-base font-semibold mb-1">OpenRouter API</h3>
                <p className="text-architectural-graphite text-sm leading-relaxed">
                  External LLM inference service providing structured analysis output
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-medium border border-architectural-ink">
                  External System
                </span>
              </div>
              <div className="border-l-2 border-architectural-graphite pl-small">
                <h3 className="text-architectural-ink text-base font-semibold mb-1">Local File System</h3>
                <p className="text-architectural-graphite text-sm leading-relaxed">
                  Storage for generated artifacts and analysis results
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-medium border border-architectural-ink">
                  External Storage
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-b border-architectural-ink py-large mb-large">
          <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-medium">
            Data Flows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-medium">
            <div className="bg-architectural-tertiary p-small border border-architectural-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-architectural-accent">→</span>
                <strong className="text-architectural-ink text-sm">Input Flow</strong>
              </div>
              <p className="text-architectural-graphite text-sm">
                Decision Owner provides problem context and materials to Strategem Core
              </p>
            </div>
            <div className="bg-architectural-tertiary p-small border border-architectural-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-architectural-accent">←</span>
                <strong className="text-architectural-ink text-sm">Output Flow</strong>
              </div>
              <p className="text-architectural-graphite text-sm">
                Strategem Core delivers reasoned artifacts (NOT decisions) to Decision Owner
              </p>
            </div>
            <div className="bg-architectural-tertiary p-small border border-architectural-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-architectural-accent">↕</span>
                <strong className="text-architectural-ink text-sm">LLM Query</strong>
              </div>
              <p className="text-architectural-graphite text-sm">
                Deterministic JSON queries exchanged with OpenRouter API
              </p>
            </div>
            <div className="bg-architectural-tertiary p-small border border-architectural-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-architectural-accent">↓</span>
                <strong className="text-architectural-ink text-sm">Persistence</strong>
              </div>
              <p className="text-architectural-graphite text-sm">
                JSON and Markdown artifacts persisted to local file system
              </p>
            </div>
          </div>
        </section>

        <section className="border-2 border-architectural-ink bg-architectural-tertiary p-large mb-large">
          <div className="flex items-start gap-small">
            <span className="text-architectural-accent"><AlertIcon className="w-8 h-8" /></span>
            <div>
              <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-2">
                Explicitly Out of Scope
              </h2>
              <p className="text-architectural-graphite text-sm mb-3">
                The following capabilities are intentionally excluded from Strategem Core v1:
              </p>
              <ul className="space-y-2 text-sm text-architectural-ink">
                <li className="flex items-start gap-2">
                  <span className="text-architectural-accent"><XIcon className="w-5 h-5" /></span>
                  <span><strong>Decision making:</strong> System never makes choices or recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-architectural-accent"><XIcon className="w-5 h-5" /></span>
                  <span><strong>External validation:</strong> System does not verify facts against external reality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-architectural-accent"><XIcon className="w-5 h-5" /></span>
                  <span><strong>Learning:</strong> System does not improve from past outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-architectural-ink pt-large">
          <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-medium">
            Design Notes
          </h2>
          <div className="space-y-medium text-sm">
            <div className="flex gap-2">
              <span className="text-architectural-ink font-semibold min-w-[100px]">Notation:</span>
              <span className="text-architectural-graphite">C4 Model Level 1 (System Context)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-architectural-ink font-semibold min-w-[100px]">Color Code:</span>
              <span className="text-architectural-graphite">In Scope, Accent, Graphite for external</span>
            </div>
            <div className="flex gap-2">
              <span className="text-architectural-ink font-semibold min-w-[100px]">Arrows:</span>
              <span className="text-architectural-graphite">Represent data flow and directionality</span>
            </div>
            <div className="flex gap-2">
              <span className="text-architectural-ink font-semibold min-w-[100px]">Dashed Box:</span>
              <span className="text-architectural-graphite">Explicitly excluded capabilities (accent border)</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
