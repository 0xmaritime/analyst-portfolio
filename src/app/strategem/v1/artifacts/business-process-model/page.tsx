import ArtifactContainer from "@/components/ArtifactContainer";
import Link from "next/link";

export default function BPMNStrategemV1Page() {
  return (
    <div className="pt-16">
      <article className="max-w-5xl mx-auto px-small py-large">
        <header className="border-b border-architectural-ink pb-medium mb-large">
          <div className="flex items-center gap-small mb-2">
            <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
              v1
            </span>
            <span className="text-architectural-graphite text-xs uppercase tracking-[0.02em]">
              BPMN 2.0
            </span>
          </div>
          <h1 className="text-architectural-ink text-4xl font-semibold tracking-[-0.02em] leading-tight mb-2">
            Business Process Model
          </h1>
          <p className="text-architectural-graphite text-base">
            End-to-end process flow from problem intake to artifact generation
          </p>
        </header>

        <section className="mb-large">
          <ArtifactContainer
            src="/bpmn-strategem-v1.svg"
            alt="Strategem Core v1 Business Process Model showing three lanes: Input Intake, Analytical Processing, and Artifact Construction"
            title="Strategem Core v1 Process Flow"
            description="BPMN 2.0 diagram with three swimlanes depicting the complete analysis workflow from initial problem context to final reasoned artifact"
          />
        </section>

        <section className="mb-large">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-medium">
            Process Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
            <div className="border border-architectural-ink p-small">
              <h3 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-3">Lane 1: Input Intake</h3>
              <ul className="space-y-2 text-sm text-architectural-ink">
                <li>• <strong>Start Event:</strong> Problem context received</li>
                <li>• <strong>Normalization:</strong> Internal non-semantic processing</li>
                <li>• <strong>Gateway:</strong> Decision focus validation (optional)</li>
              </ul>
            </div>
            <div className="border border-architectural-ink p-small">
              <h3 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-3">Lane 2: Analytical Processing</h3>
              <ul className="space-y-2 text-sm text-architectural-ink">
                <li>• <strong>Framework Selection:</strong> Determine applicable analytical frameworks</li>
                <li>• <strong>Parallel Execution:</strong> Independent framework inference</li>
                <li>• <strong>Aggregation:</strong> Consolidate claims, assumptions, and inferences</li>
                <li>• <strong>Uncertainty Surfacing:</strong> Identify unknowns and sensitivities</li>
              </ul>
            </div>
            <div className="border border-architectural-ink p-small">
              <h3 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-3">Lane 3: Artifact Construction</h3>
              <ul className="space-y-2 text-sm text-architectural-ink">
                <li>• <strong>Decision Surface:</strong> Structure judgment representation</li>
                <li>• <strong>Assembly:</strong> Compile reasoned artifact with full provenance</li>
                <li>• <strong>End Event:</strong> Output delivered to decision owner</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-large">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-medium">
            Key Process Characteristics
          </h2>
          <div className="space-y-small">
            <div className="border border-architectural-ink p-small">
              <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-2">Conditional Flow</h4>
              <p className="text-architectural-graphite text-sm">
                Decision focus is optional. The process continues with or without explicit decision focus, with the gateway branching only to indicate processing state, not to gate execution.
              </p>
            </div>
            <div className="border border-architectural-ink p-small">
              <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-2">Independent Execution</h4>
              <p className="text-architectural-graphite text-sm">
                Eligible frameworks execute in parallel with no cross-framework communication. Framework failures do not invalidate the overall process—the system gracefully degrades.
              </p>
            </div>
            <div className="border border-architectural-ink p-small">
              <h4 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.02em] mb-2">Zero-Claim Tolerance</h4>
              <p className="text-architectural-graphite text-sm">
                The process accommodates zero-claim outcomes. If no analytical claims can be generated, the system still produces a valid artifact documenting the lack of analytical traction.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-b border-architectural-ink py-small">
          <Link 
            href="/strategem/v1"
            className="block text-center"
          >
            <p className="text-xs uppercase tracking-[0.1em] mb-1 text-architectural-tertiary-text">Return to</p>
            <p className="text-architectural-ink text-lg font-semibold">Strategem v1 Overview</p>
          </Link>
        </section>
      </article>
    </div>
  );
}