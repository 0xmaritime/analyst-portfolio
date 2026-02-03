import ClaimObjectSchemaDiagram from "@/components/ClaimObjectSchemaDiagram";
import Link from "next/link";

export default function ClaimObjectSchemaPage() {
  return (
    <div className="pt-16">
      <article className="max-w-5xl mx-auto px-small py-large">
        <header className="border-b border-architectural-ink pb-medium mb-large">
          <div className="flex items-center gap-small mb-2">
            <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
              v1
            </span>
            <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
              FROZEN
            </span>
            <span className="text-architectural-graphite text-xs uppercase tracking-[0.02em]">
              Analytical Data Schema
            </span>
          </div>
          <h1 className="text-architectural-ink text-4xl font-semibold tracking-[-0.02em] leading-tight mb-3">
            Claim Object Schema
          </h1>
          <p className="text-architectural-graphite text-base leading-relaxed max-w-3xl">
            The atomic unit of reasoning output in Strategem Core v1 — a structured, non-decisional assertion with explicit provenance and uncertainty
          </p>
        </header>

        <section className="mb-xlarge">
          <div className="mb-4">
            <div className="flex items-center gap-small mb-2">
              <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
                v1
              </span>
              <span className="bg-architectural-ink text-architectural-white text-xs uppercase tracking-[0.1em] px-2 py-1">
                FROZEN
              </span>
            </div>
            <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-2">
              Canonical Schema
            </h2>
            <p className="text-architectural-graphite text-base">
              Complete field structure with critical fields highlighted and hard-coded constraints
            </p>
          </div>
          <ClaimObjectSchemaDiagram />
        </section>

        <section className="mb-xlarge">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-6">
            What is a Claim?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-architectural-tertiary border border-architectural-ink p-6">
              <h3 className="text-architectural-ink text-sm font-semibold uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-architectural-ink"></span>
                A Claim IS
              </h3>
              <ul className="space-y-3 text-architectural-ink">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-ink">—</span>
                  <span>Explicit reasoning, structured for inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-ink">—</span>
                  <span>Uncertainty preserved and bounded</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-ink">—</span>
                  <span>Provenance — every claim has an originating framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-ink">—</span>
                  <span>Zero-claim outcomes are valid</span>
                </li>
              </ul>
            </div>
            <div className="bg-architectural-ink text-architectural-white p-6">
              <h3 className="text-architectural-white text-sm font-semibold uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-architectural-white"></span>
                A Claim IS NOT
              </h3>
              <ul className="space-y-3 text-architectural-white">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-white">×</span>
                  <span>A recommendation or preference</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-white">×</span>
                  <span>A conclusion or decision signal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-white">×</span>
                  <span>A truth assertion or validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 text-architectural-white">×</span>
                  <span>Rankings, scores, or optimizations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-xlarge">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-6">
            Core Design Principles
          </h2>
          <p className="text-architectural-graphite text-sm mb-4">Six non-negotiable constraints governing all claims in v1:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">01</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">Non-Decisional</h4>
              <p className="text-architectural-graphite text-sm">
                Never implies action, preference, or choice
              </p>
            </div>
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">02</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">Option-Aware</h4>
              <p className="text-architectural-graphite text-sm">
                If options exist, claims reference them explicitly or state neutrality
              </p>
            </div>
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">03</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">Provenance Required</h4>
              <p className="text-architectural-graphite text-sm">
                Every claim declares its originating framework
              </p>
            </div>
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">04</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">Uncertainty Preserved</h4>
              <p className="text-architectural-graphite text-sm">
                Confidence is qualitative (LOW/MEDIUM/HIGH) and never resolves to certainty
              </p>
            </div>
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">05</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">Framework-Scoped</h4>
              <p className="text-architectural-graphite text-sm">
                Claims belong to a framework — never system-global truths
              </p>
            </div>
            <div className="border border-architectural-ink p-5 hover:border-2 transition-all">
              <div className="text-architectural-gold text-xs font-semibold uppercase tracking-[0.1em] mb-2">06</div>
              <h4 className="text-architectural-ink text-sm font-semibold mb-2">No Aggregation</h4>
              <p className="text-architectural-graphite text-sm">
                Claims are never merged, ranked, or reconciled in v1
              </p>
            </div>
          </div>
        </section>

        <section className="mb-xlarge">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-6">
            The Three Claim Types
          </h2>
          <p className="text-architectural-graphite text-sm mb-4">Exactly three claim types exist in v1 — no others permitted:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-architectural-ink p-6">
              <div className="inline-block bg-architectural-ink text-architectural-white text-xs font-semibold uppercase tracking-[0.05em] px-3 py-1 mb-4">
                ASSUMPTION
              </div>
              <p className="text-architectural-graphite text-sm mb-4">
                Explicit or implicit premise required for reasoning
              </p>
              <div className="border-t border-architectural-subtle pt-4">
                <p className="text-xs text-architectural-tertiary-text uppercase tracking-[0.05em] mb-2">Example</p>
                <p className="text-architectural-ink text-sm italic">
                  &ldquo;Supplier agreements remain stable over 12-month horizon&rdquo;
                </p>
              </div>
            </div>
            <div className="border-2 border-architectural-ink p-6">
              <div className="inline-block bg-architectural-ink text-architectural-white text-xs font-semibold uppercase tracking-[0.05em] px-3 py-1 mb-4">
                INFERENCE
              </div>
              <p className="text-architectural-graphite text-sm mb-4">
                Logical conclusion derived from inputs + framework
              </p>
              <div className="border-t border-architectural-subtle pt-4">
                <p className="text-xs text-architectural-tertiary-text uppercase tracking-[0.05em] mb-2">Example</p>
                <p className="text-architectural-ink text-sm italic">
                  &ldquo;Single supplier dependency increases exposure to supply chain disruption&rdquo;
                </p>
              </div>
            </div>
            <div className="border-2 border-architectural-ink p-6">
              <div className="inline-block bg-architectural-ink text-architectural-white text-xs font-semibold uppercase tracking-[0.05em] px-3 py-1 mb-4">
                OBSERVATION
              </div>
              <p className="text-architectural-graphite text-sm mb-4">
                Directly surfaced pattern or structure
              </p>
              <div className="border-t border-architectural-subtle pt-4">
                <p className="text-xs text-architectural-tertiary-text uppercase tracking-[0.05em] mb-2">Example</p>
                <p className="text-architectural-ink text-sm italic">
                  &ldquo;Option A creates 3 new dependencies; Option B creates 1&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-large">
          <h2 className="text-architectural-ink text-2xl font-semibold tracking-[-0.01em] mb-6">
            Critical Field Semantics
          </h2>
          
          <div className="space-y-6">
            <div className="border border-architectural-ink p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="bg-architectural-tertiary px-3 py-1 text-sm font-mono">statement</code>
                <span className="text-architectural-gold text-sm font-semibold">CRITICAL</span>
              </div>
              <p className="text-architectural-graphite text-sm mb-3">Must be descriptive, never prescriptive. Forbidden language:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                <div className="bg-architectural-tertiary p-2 text-center">
                  <code className="text-architectural-ink text-sm">&ldquo;should&rdquo;</code>
                </div>
                <div className="bg-architectural-tertiary p-2 text-center">
                  <code className="text-architectural-ink text-sm">&ldquo;best&rdquo;</code>
                </div>
                <div className="bg-architectural-tertiary p-2 text-center">
                  <code className="text-architectural-ink text-sm">&ldquo;recommended&rdquo;</code>
                </div>
                <div className="bg-architectural-tertiary p-2 text-center">
                  <code className="text-architectural-ink text-sm">&ldquo;optimal&rdquo;</code>
                </div>
              </div>
              <div className="bg-architectural-tertiary border-l-2 border-architectural-gold p-4">
                <p className="text-xs text-architectural-tertiary-text uppercase tracking-[0.05em] mb-2">Valid Example</p>
                <p className="text-architectural-ink text-sm italic">
                  &ldquo;Option A increases dependency on a single supplier under current assumptions.&rdquo;
                </p>
              </div>
            </div>

            <div className="border border-architectural-ink p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="bg-architectural-tertiary px-3 py-1 text-sm font-mono">confidence_level</code>
                <span className="text-architectural-gold text-sm font-semibold">CRITICAL</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-architectural-tertiary p-4">
                  <code className="text-architectural-ink text-sm font-semibold">LOW</code>
                  <p className="text-architectural-graphite text-sm mt-2">Highly assumption-dependent or sparse input</p>
                </div>
                <div className="bg-architectural-tertiary p-4">
                  <code className="text-architectural-ink text-sm font-semibold">MEDIUM</code>
                  <p className="text-architectural-graphite text-sm mt-2">Reasonable inference with gaps</p>
                </div>
                <div className="bg-architectural-tertiary p-4">
                  <code className="text-architectural-ink text-sm font-semibold">HIGH</code>
                  <p className="text-architectural-graphite text-sm mt-2">Strong structural signal within framework</p>
                </div>
              </div>
              <div className="bg-architectural-ink text-architectural-white p-3">
                <p className="text-sm font-semibold">
                  ⚠️ High confidence ≠ correctness — it only reflects internal coherence
                </p>
              </div>
            </div>

            <div className="border border-architectural-ink p-6">
              <div className="flex items-center gap-3 mb-4">
                <code className="bg-architectural-ink text-architectural-white px-3 py-1 text-sm font-mono">constraints</code>
                <span className="text-architectural-gold text-sm font-semibold">HARD-CODED</span>
              </div>
              <p className="text-architectural-graphite text-sm mb-4">These constraints exist to mechanically prevent advisory leakage:</p>
              <div className="bg-architectural-tertiary p-4">
                <pre className="text-architectural-ink text-sm overflow-x-auto">
{'{'}
  &ldquo;non_recommendation&rdquo;: true,
  &ldquo;non_optimization&rdquo;: true
{'}'}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <details className="mb-large border border-architectural-ink">
          <summary className="cursor-pointer px-small py-4 hover:bg-architectural-tertiary font-medium text-sm flex items-center gap-2">
            <span className="text-architectural-graphite text-xs uppercase tracking-[0.05em]">Reference:</span>
            <span>Explicitly Forbidden Properties & Validation Rules</span>
          </summary>
          <div className="p-6 border-t border-architectural-ink">
            <h3 className="text-architectural-ink text-lg font-semibold mb-4">Forbidden Properties (v1)</h3>
            <p className="text-architectural-graphite text-sm mb-4">A Claim must never include:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Scores</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Rankings</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Weights</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Utilities</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Probabilities</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Prescriptive language</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Cross-framework synthesis</p>
              </div>
              <div className="border border-architectural-ink p-2 text-center bg-architectural-tertiary">
                <p className="text-architectural-ink text-sm">Temporal predictions</p>
              </div>
            </div>
            <div className="bg-architectural-tertiary p-3 border-l-2 border-architectural-gold">
              <p className="text-architectural-ink text-sm font-semibold">
                Presence of any = v1 non-compliance
              </p>
            </div>

            <h3 className="text-architectural-ink text-lg font-semibold mt-8 mb-4">Validation Rules (v1 Compliance)</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-architectural-ink mt-2 flex-shrink-0"></div>
                <p className="text-architectural-ink text-sm">Every claim conforms to the schema</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-architectural-ink mt-2 flex-shrink-0"></div>
                <p className="text-architectural-ink text-sm">Every claim has exactly one originating framework</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-architectural-ink mt-2 flex-shrink-0"></div>
                <p className="text-architectural-ink text-sm">No claim implies a decision</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-architectural-ink mt-2 flex-shrink-0"></div>
                <p className="text-architectural-ink text-sm">Claims are never merged or resolved</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-architectural-ink mt-2 flex-shrink-0"></div>
                <p className="text-architectural-ink text-sm">Absence of claims is handled explicitly (zero-claim validity)</p>
              </div>
            </div>
          </div>
        </details>

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