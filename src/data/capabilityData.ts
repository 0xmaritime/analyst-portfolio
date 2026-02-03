import { CategoryData, BoundaryRule } from '@/types/capability';

export const capabilityData: CategoryData[] = [
  {
    title: "Implemented Capabilities",
    subtitle: "Fully supported in Strategem Core v1",
    color: "text-architectural-ink",
    bgColor: "bg-architectural-tertiary",
    borderColor: "border-architectural-ink",
    capabilities: [
      {
        id: "input",
        title: "Input Handling & Normalization",
        description: "Accepts and processes problem context",
        items: [
          "Unstructured problem context as free-form text",
          "Optional structured decision focus inputs",
          "No requirement for decision focus to proceed",
          "Internal non-semantic normalization"
        ],
        constraints: [
          "No validation of factual correctness",
          "No enrichment from external sources"
        ]
      },
      {
        id: "enforcement",
        title: "Decision-Bound Reasoning Enforcement",
        description: "Hard rules against advisory functions",
        items: [
          "No recommendations",
          "No option ranking",
          "No optimization",
          "No choice selection",
          "Advisory language detection & suppression"
        ],
        constraints: [
          "Preserves decision ownership with user",
          "All outputs are reasoning artifacts"
        ]
      },
      {
        id: "framework",
        title: "Framework Application",
        description: "Independent analytical framework execution",
        items: [
          "Porter's Five Forces (Operating Environment)",
          "Systems Dynamics (Target System)",
          "Conditional execution on input sufficiency",
          "Framework disagreement allowed & surfaced"
        ],
        constraints: [
          "No arbitration between frameworks",
          "Framework failure doesn't invalidate artifact"
        ]
      },
      {
        id: "claims",
        title: "Analytical Claim Generation",
        description: "Structured claim output with provenance",
        items: [
          "Assumptions, inferences, and input-based claims",
          "Source type attribution",
          "Confidence level (low/medium/high)",
          "Originating framework identification",
          "Zero-claim outcomes permitted"
        ]
      },
      {
        id: "uncertainty",
        title: "Uncertainty & Sensitivity Surfacing",
        description: "Explicit uncertainty documentation",
        items: [
          "Unknowns explicitly identified",
          "Assumption dependence flagged",
          "Human judgment areas marked",
          "No attempt to resolve uncertainty"
        ]
      },
      {
        id: "surface",
        title: "Decision Surface Construction",
        description: "Structured judgment representation",
        items: [
          "Judgment points identified",
          "Dominant unknowns listed",
          "Trade-off axes (if identifiable)",
          "No option privileging"
        ]
      },
      {
        id: "artifact",
        title: "Artifact Assembly & Output",
        description: "Self-contained analytical reports",
        items: [
          "Schema-validated output structure",
          "Always produces artifact (regardless of input)",
          "Explicit system limitations included",
          "Hardcoded disclaimers"
        ]
      }
    ]
  },
  {
    title: "Explicit Non-Capabilities",
    subtitle: "Intentionally excluded by design",
    color: "text-architectural-ink",
    bgColor: "bg-architectural-tertiary",
    borderColor: "border-architectural-ink",
    capabilities: [
      {
        id: "decision",
        title: "Decision & Advisory Functions",
        description: "Making choices for users",
        items: [
          "Making recommendations",
          "Selecting options",
          "Ranking alternatives",
          "Defending preferred choices",
          "Providing action guidance"
        ]
      },
      {
        id: "optimization",
        title: "Optimization & Evaluation",
        description: "Quantitative decision support",
        items: [
          "Objective optimization",
          "Cost-benefit maximization",
          "Utility scoring",
          "Multi-criteria decision analysis"
        ]
      },
      {
        id: "learning",
        title: "Learning & Adaptation",
        description: "Improvement over time",
        items: [
          "Learning from outcomes",
          "Model improvement",
          "Feedback incorporation",
          "Memory across runs"
        ]
      },
      {
        id: "validation",
        title: "External Validation",
        description: "Truth verification",
        items: [
          "Fact checking",
          "Domain verification",
          "Ground truth comparison",
          "Empirical correctness claims"
        ]
      },
      {
        id: "authority",
        title: "Authority & Expertise Claims",
        description: "Expert proxy behavior",
        items: [
          "Subject-matter expertise claims",
          "Expert proxy behavior",
          "Overriding user judgment"
        ]
      }
    ]
  },
  {
    title: "Deferred Capabilities",
    subtitle: "Reserved for v2+ versions",
    color: "text-architectural-ink",
    bgColor: "bg-architectural-tertiary",
    borderColor: "border-architectural-ink",
    capabilities: [
      {
        id: "enhanced",
        title: "Enhanced Decision Support (v2+)",
        description: "Deeper decision exploration",
        items: [
          "Guided decision exploration",
          "Structured option comparison",
          "User-directed trade-off navigation"
        ]
      },
      {
        id: "arbitration",
        title: "Cross-Framework Arbitration (v2+)",
        description: "Resolving analytical conflicts",
        items: [
          "Resolving framework disagreements",
          "Weighting analytical lenses",
          "Synthesizing composite views"
        ]
      },
      {
        id: "interactive",
        title: "Iterative & Interactive Analysis (v2+)",
        description: "Multi-turn refinement",
        items: [
          "Multi-turn refinement",
          "Progressive deepening",
          "Scenario iteration"
        ]
      },
      {
        id: "operational",
        title: "Operational & Production Features (v3)",
        description: "Enterprise readiness",
        items: [
          "Observability & monitoring",
          "Performance tuning",
          "Reliability guarantees",
          "Governance and versioning"
        ]
      }
    ]
  }
];

export const boundaryRules: BoundaryRule[] = [
  { icon: "shield", text: "Every output must be non-decisional" },
  { icon: "check", text: "Missing inputs may reduce depth, not validity" },
  { icon: "clock", text: "Framework failure must degrade gracefully" },
  { icon: "eye", text: "No capability may imply hidden intelligence" },
  { icon: "doc", text: "All limitations must be explicit" }
];

export const validationItems = [
  "All implemented capabilities are present",
  "All non-capabilities are explicitly excluded",
  "No deferred capability leaks into behavior",
  "No output contradicts decision-ownership constraints"
];
