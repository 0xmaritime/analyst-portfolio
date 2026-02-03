import StrategemCapabilityMap from "@/components/StrategemCapabilityMap";
import Link from "next/link";

export default function CapabilityMapPage() {
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
                SPECIFICATION
              </span>
              <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight">
                Capability Map
              </h1>
            </div>
            <div className="text-right">
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Artifact Type</p>
              <p className="text-architectural-ink text-sm font-medium">Capability Matrix</p>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mt-2">System</p>
              <p className="text-architectural-ink text-sm font-medium">Strategem Core v1</p>
            </div>
          </div>
          <p className="text-architectural-graphite text-base max-w-3xl">
            Complete specification of implemented capabilities, explicit non-capabilities, and deferred features reserved for future versions
          </p>
        </header>

        <section className="mb-large">
          <StrategemCapabilityMap />
        </section>

        <section className="border-t border-architectural-ink pt-large">
          <h2 className="text-architectural-ink text-xl font-semibold tracking-[-0.01em] mb-medium">
            Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
            <div className="border-l-2 border-emerald-500 pl-small">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-full" />
                <h3 className="text-architectural-ink text-base font-semibold">Implemented</h3>
              </div>
              <p className="text-architectural-graphite text-sm">
                7 capabilities fully supported in Strategem Core v1
              </p>
            </div>
            <div className="border-l-2 border-rose-500 pl-small">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-rose-500 rounded-full" />
                <h3 className="text-architectural-ink text-base font-semibold">Non-Capabilities</h3>
              </div>
              <p className="text-architectural-graphite text-sm">
                5 capabilities intentionally excluded by design
              </p>
            </div>
            <div className="border-l-2 border-amber-500 pl-small">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-amber-500 rounded-full" />
                <h3 className="text-architectural-ink text-base font-semibold">Deferred</h3>
              </div>
              <p className="text-architectural-graphite text-sm">
                4 capabilities reserved for v2+ versions
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
