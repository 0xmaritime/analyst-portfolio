export default function ClaimObjectSchemaDiagram() {
  return (
    <div className="bg-white border border-architectural-ink">
      {/* Header */}
      <div className="border-b border-architectural-ink px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-architectural-ink text-sm font-semibold font-mono">Claim</h3>
          <span className="text-architectural-graphite text-xs font-mono">Atomic reasoning unit</span>
        </div>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-2">
          <span className="text-architectural-ink text-xs font-semibold uppercase tracking-[0.05em]">Field</span>
        </div>
        <div className="col-span-2 px-4 py-2">
          <span className="text-architectural-ink text-xs font-semibold uppercase tracking-[0.05em]">Type</span>
        </div>
        <div className="col-span-7 px-4 py-2">
          <span className="text-architectural-ink text-xs font-semibold uppercase tracking-[0.05em]">Description</span>
        </div>
      </div>

      {/* Row 1: claim_id */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">claim_id</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">string</span>
        </div>
        <div className="col-span-7 px-4 py-3">
          <span className="text-architectural-graphite text-sm">Unique identifier (UUID format)</span>
        </div>
      </div>

      {/* Row 2: claim_type */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">claim_type</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">enum</span>
        </div>
        <div className="col-span-7 px-4 py-3">
          <span className="text-architectural-graphite text-sm font-mono">&apos;ASSUMPTION&apos; | &apos;INFERENCE&apos; | &apos;OBSERVATION&apos;</span>
        </div>
      </div>

      {/* Row 3: statement */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">statement</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">string</span>
        </div>
        <div className="col-span-7 px-4 py-3">
          <span className="text-architectural-graphite text-sm">Descriptive assertion — NEVER prescriptive</span>
        </div>
      </div>

      {/* Row 4: scope */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">scope</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">object</span>
        </div>
        <div className="col-span-7 px-4 py-3 space-y-1">
          <div className="text-architectural-graphite text-xs font-mono">
            → scope_type: <span className="text-architectural-ink">&apos;GLOBAL&apos; | &apos;OPTION&apos; | &apos;COMPARATIVE&apos; | &apos;SYSTEM&apos;</span>
          </div>
          <div className="text-architectural-graphite text-xs font-mono">
            → option_ids?: string[] <span className="text-architectural-graphite">(required if OPTION/COMPARATIVE)</span>
          </div>
        </div>
      </div>

      {/* Row 5: originating_framework */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">originating_framework</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">object</span>
        </div>
        <div className="col-span-7 px-4 py-3 space-y-1">
          <div className="text-architectural-graphite text-xs font-mono">
            → framework_id: string
          </div>
          <div className="text-architectural-graphite text-xs font-mono">
            → framework_name: string
          </div>
        </div>
      </div>

      {/* Row 6: confidence_level */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">confidence_level</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">enum</span>
        </div>
        <div className="col-span-7 px-4 py-3 space-y-1">
          <div className="text-architectural-graphite text-sm font-mono">
            &apos;LOW&apos; | &apos;MEDIUM&apos; | &apos;HIGH&apos; <span className="text-architectural-graphite">(qualitative, bounded)</span>
          </div>
          <div className="text-architectural-graphite text-xs">
            HIGH ≠ correctness — reflects internal coherence only
          </div>
        </div>
      </div>

      {/* Row 7: dependencies */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">dependencies</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">object</span>
        </div>
        <div className="col-span-7 px-4 py-3 space-y-1">
          <div className="text-architectural-graphite text-xs font-mono">
            → assumptions: string[] <span className="text-architectural-graphite">(premises this claim relies on)</span>
          </div>
          <div className="text-architectural-graphite text-xs font-mono">
            → input_elements: string[] <span className="text-architectural-graphite">(source input references)</span>
          </div>
        </div>
      </div>

      {/* Row 8: uncertainty_notes */}
      <div className="grid grid-cols-12 border-b border-architectural-ink">
        <div className="col-span-3 px-4 py-3">
          <code className="text-architectural-ink text-sm font-mono">uncertainty_notes</code>
        </div>
        <div className="col-span-2 px-4 py-3">
          <span className="text-architectural-graphite text-xs font-mono">string[]</span>
        </div>
        <div className="col-span-7 px-4 py-3">
          <span className="text-architectural-graphite text-sm">Explicit uncertainty documentation (required if ≠ HIGH)</span>
        </div>
      </div>

      {/* Row 9: constraints (HARD-CODED) */}
      <div className="grid grid-cols-12 bg-architectural-ink">
        <div className="col-span-3 px-4 py-4">
          <code className="text-architectural-white text-sm font-mono">constraints</code>
        </div>
        <div className="col-span-2 px-4 py-4">
          <span className="text-architectural-white text-xs font-mono">object</span>
        </div>
        <div className="col-span-7 px-4 py-4 space-y-2">
          <div className="text-architectural-white text-xs font-mono">
            → non_recommendation: <span className="text-architectural-white">true</span>
          </div>
          <div className="text-architectural-white text-xs font-mono">
            → non_optimization: <span className="text-architectural-white">true</span>
          </div>
          <div className="text-architectural-white opacity-70 text-xs pt-1">
            Hard-coded in v1 — mechanical enforcement
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-architectural-ink px-4 py-2">
        <div className="grid grid-cols-12 text-xs">
          <div className="col-span-6">
            <span className="text-architectural-graphite">Status: FROZEN (v1.0.0) | Total Fields: 9</span>
          </div>
          <div className="col-span-6 text-right">
            <span className="text-architectural-graphite">Dark row = hard-coded constraint</span>
          </div>
        </div>
      </div>
    </div>
  );
}