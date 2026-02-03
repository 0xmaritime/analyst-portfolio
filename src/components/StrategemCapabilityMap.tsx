'use client';

import { useState, useCallback } from 'react';
import { capabilityData, validationItems } from '@/data/capabilityData';
import type { Capability, CategoryData } from '@/types/capability';
import { CheckIcon, XIcon, ClockIcon, ShieldIcon, AlertIcon, PlusIcon, MinusIcon, DotIcon, LockIcon } from './icons';

const CapabilityCard = React.memo(({ 
  capability, 
  category, 
  isExpanded, 
  onToggle
}: { 
  capability: Capability; 
  category: CategoryData;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    'Implemented Capabilities': <CheckIcon className="w-5 h-5" />,
    'Explicit Non-Capabilities': <XIcon className="w-5 h-5" />,
    'Deferred Capabilities': <ClockIcon className="w-5 h-5" />,
  };

  return (
    <div 
      className={`border-2 transition-all duration-200 cursor-pointer ${category.borderColor} ${category.bgColor} hover:bg-architectural-white ${isExpanded ? 'border-architectural-accent' : ''}`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`panel-${capability.id}`}
    >
      <div className="p-small flex items-center justify-between">
        <div className="flex items-center gap-small">
          <span className="text-architectural-ink">{iconMap[category.title]}</span>
          <div>
            <h4 className="text-architectural-ink text-base font-semibold">{capability.title}</h4>
            <p className="text-architectural-graphite text-sm">{capability.description}</p>
          </div>
        </div>
        <span className="text-architectural-ink">{isExpanded ? <MinusIcon /> : <PlusIcon />}</span>
      </div>
      
      {isExpanded && (
        <div id={`panel-${capability.id}`} className="px-small pb-small border-t border-architectural-ink pt-small" role="region">
          <div className="space-y-small">
            <div>
              <h5 className="text-architectural-ink text-sm font-semibold mb-2">Features:</h5>
              <ul className="space-y-1">
                {capability.items.map((item, idx) => (
                  <li key={`feature-${capability.id}-${idx}`} className="text-architectural-ink text-sm flex items-start gap-2">
                    <span className="mt-1.5"><DotIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {capability.constraints && (
              <div className="p-small bg-architectural-white border border-architectural-subtle">
                <h5 className="text-architectural-ink text-sm font-semibold mb-2">Constraints:</h5>
                <ul className="space-y-1">
                  {capability.constraints.map((constraint, idx) => (
                    <li key={`constraint-${capability.id}-${idx}`} className="text-architectural-ink text-sm italic flex items-start gap-2">
                      <span className="text-architectural-accent"><AlertIcon /></span>
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

CapabilityCard.displayName = 'CapabilityCard';

const CategorySection = ({ 
  data, 
  expandedId, 
  onToggle
}: { 
  data: CategoryData; 
  expandedId: string | null;
  onToggle: (id: string) => void;
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Implemented Capabilities': <CheckIcon className="w-6 h-6" />,
    'Explicit Non-Capabilities': <XIcon className="w-6 h-6" />,
    'Deferred Capabilities': <ClockIcon className="w-6 h-6" />,
  };

  return (
    <div className="mb-large">
      <div className={`flex items-center gap-small mb-medium p-small border-2 ${data.bgColor} ${data.borderColor}`}>
        <span className="text-architectural-ink">{iconMap[data.title]}</span>
        <div className="flex-1">
          <h2 className="text-architectural-ink text-lg font-bold">{data.title}</h2>
          <p className="text-architectural-graphite text-sm">{data.subtitle}</p>
        </div>
        <span className={`px-2 py-1 text-sm font-medium ${data.bgColor} text-architectural-ink border ${data.borderColor}`}>
          {data.capabilities.length} capabilities
        </span>
      </div>
      
      <div className="space-y-small">
        {data.capabilities.map((capability) => (
          <CapabilityCard
            key={capability.id}
            capability={capability}
            category={data}
            isExpanded={expandedId === capability.id}
            onToggle={() => onToggle(capability.id)}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react';

export default function StrategemCapabilityMap() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="min-h-screen bg-architectural-paper py-large px-small">
      <div className="max-w-4xl mx-auto">
        <header className="border-2 border-architectural-ink bg-architectural-white p-large mb-large">
          <div className="flex items-start justify-between mb-medium">
            <div>
              <div className="flex items-center gap-small mb-2">
                <span className="px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-mono uppercase tracking-[0.05em]">
                  v1.0
                </span>
                <span className="px-2 py-1 bg-architectural-tertiary text-architectural-ink text-xs font-medium border border-architectural-ink flex items-center gap-2">
                  <LockIcon className="w-3 h-3" />
                  FROZEN
                </span>
              </div>
              <h1 className="text-architectural-ink text-4xl font-bold">Strategem Core</h1>
              <h2 className="text-architectural-ink text-xl mt-1">Capability Map Specification</h2>
            </div>
            <div className="text-right">
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em]">Artifact Type</p>
              <p className="text-architectural-ink text-sm font-medium">Capability Map</p>
              <p className="text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mt-2">System</p>
              <p className="text-architectural-ink text-sm font-medium">Reasoning Scaffold</p>
            </div>
          </div>
          
          <div className="p-small bg-architectural-tertiary border border-architectural-ink">
            <h3 className="text-architectural-ink font-semibold mb-2">Purpose</h3>
            <p className="text-architectural-ink text-base">
              Explicitly define what Strategem Core v1 does, does not, and intentionally defers. 
              This document establishes available system capabilities, explicit non-capabilities, 
              and deferred capabilities reserved for future versions.
            </p>
          </div>
        </header>

        <section className="border border-architectural-ink bg-architectural-white p-small mb-large">
          <h3 className="text-architectural-ink font-semibold mb-small">Capability Taxonomy</h3>
          <div className="grid grid-cols-3 gap-medium text-sm">
            <div className="flex items-center gap-2">
              <span className="text-architectural-ink"><CheckIcon className="w-4 h-4" /></span>
              <span className="text-architectural-ink"><strong>Implemented</strong> — In scope</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-architectural-ink"><XIcon className="w-4 h-4" /></span>
              <span className="text-architectural-ink"><strong>Non-Capability</strong> — Excluded by design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-architectural-ink"><ClockIcon className="w-4 h-4" /></span>
              <span className="text-architectural-ink"><strong>Deferred</strong> — Future versions</span>
            </div>
          </div>
        </section>

        {capabilityData.map((category) => (
          <CategorySection
            key={category.title}
            data={category}
            expandedId={expandedId}
            onToggle={handleToggle}
          />
        ))}

        <section className="border-2 border-architectural-ink bg-architectural-ink p-large mb-large">
          <div className="flex items-center gap-small mb-medium">
            <span className="text-architectural-white"><ShieldIcon className="w-6 h-6" /></span>
            <h2 className="text-architectural-white text-2xl font-bold">Capability Boundary Rules</h2>
          </div>
          <p className="text-architectural-graphite mb-medium">
            The following rules are non-negotiable for v1. Violation of any rule constitutes v1 non-compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-small">
            <div className="flex items-start gap-small bg-architectural-accent p-small">
              <span className="text-architectural-white"><ShieldIcon className="w-5 h-5" /></span>
              <span className="text-architectural-white">Every output must be non-decisional</span>
            </div>
            <div className="flex items-start gap-small bg-architectural-accent p-small">
              <span className="text-architectural-white"><CheckIcon className="w-5 h-5" /></span>
              <span className="text-architectural-white">Missing inputs may reduce depth, not validity</span>
            </div>
            <div className="flex items-start gap-small bg-architectural-accent p-small">
              <span className="text-architectural-white"><ClockIcon className="w-5 h-5" /></span>
              <span className="text-architectural-white">Framework failure must degrade gracefully</span>
            </div>
            <div className="flex items-start gap-small bg-architectural-accent p-small">
              <span className="text-architectural-white"><AlertIcon className="w-5 h-5" /></span>
              <span className="text-architectural-white">No capability may imply hidden intelligence</span>
            </div>
            <div className="flex items-start gap-small bg-architectural-accent p-small">
              <span className="text-architectural-white"><PlusIcon className="w-5 h-5" /></span>
              <span className="text-architectural-white">All limitations must be explicit</span>
            </div>
          </div>
        </section>

        <section className="border-2 border-architectural-ink bg-architectural-white p-large mb-large">
          <div className="flex items-center gap-small mb-medium">
            <span className="text-architectural-ink"><CheckIcon className="w-6 h-6" /></span>
            <h2 className="text-architectural-ink text-xl font-bold">Validation Checklist</h2>
          </div>
          <p className="text-architectural-graphite mb-small">
            Strategem Core v1 is capability-complete if:
          </p>
          <div className="space-y-small">
            {validationItems.map((item, idx) => (
              <div key={`validation-${idx}`} className="flex items-center gap-small p-small bg-architectural-tertiary border border-architectural-ink">
                <span className="text-architectural-ink"><CheckIcon className="w-5 h-5" /></span>
                <span className="text-architectural-ink">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-2 border-architectural-ink bg-architectural-ink p-large text-center">
          <div className="flex items-center justify-center gap-small mb-small">
            <span className="text-architectural-white"><CheckIcon className="w-6 h-6" /></span>
            <h2 className="text-architectural-white text-2xl font-bold">Status: COMPLETE</h2>
          </div>
          <p className="text-architectural-graphite mb-small">
            Strategem Core v1 Capability Map is frozen. All future capability expansion 
            must occur in v2+ under a new capability map.
          </p>
          <div className="inline-flex items-center gap-2 px-small py-2 bg-architectural-accent text-architectural-white text-sm font-mono">
            <LockIcon className="w-4 h-4" />
            CHANGE POLICY: FROZEN
          </div>
        </footer>

        <div className="mt-large text-center text-sm text-architectural-tertiary-text">
          <p>Strategem Core v1.0.0 — A reasoning scaffold, not an oracle.</p>
          <p className="mt-1">Framework disagreement is a valid and expected outcome.</p>
        </div>
      </div>
    </div>
  );
}
