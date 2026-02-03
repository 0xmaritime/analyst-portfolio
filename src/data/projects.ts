import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: "legacy-migration",
    title: "Legacy System Migration Analysis",
    category: "Business Process Reengineering",
    thumbnail: "/placeholder-legacy-migration.svg",
    role: "Systems Analyst",
    duration: "12 weeks",
    tools: ["Bizagi", "SQL Server", "Visio", "Jira"],
    year: "2024",
    description: "Comprehensive analysis of legacy mainframe systems to identify migration blockers and opportunities for modernization.",
    artifacts: [
      {
        type: "erd",
        title: "Legacy Database Schema",
        src: "/placeholder-erd-legacy.svg",
        description: "Identified 47 redundant tables and 12 orphaned relationships"
      },
      {
        type: "bpmn",
        title: "Current State Workflow",
        src: "/placeholder-workflow.svg",
        description: "Process bottleneck identified at validation step (avg 3.2 days delay)"
      },
      {
        type: "decision-table",
        title: "Business Rules Matrix",
        src: "/placeholder-rules-matrix.svg",
        description: "Consolidated 156 ad-hoc rules into 23 standardized decision patterns"
      },
      {
        type: "architecture",
        title: "Proposed System Architecture",
        src: "/placeholder-architecture-project.svg",
        description: "Three-tier architecture with microservices approach"
      }
    ]
  },
  {
    slug: "data-warehouse",
    title: "Enterprise Data Warehouse Design",
    category: "Data Architecture",
    thumbnail: "/placeholder-star-schema.svg",
    role: "Data Architect",
    duration: "16 weeks",
    tools: ["PowerCenter", "Snowflake", "Tableau", "ER/Studio"],
    year: "2023",
    description: "Designed and implemented enterprise data warehouse enabling real-time analytics across 12 business units.",
    artifacts: [
      {
        type: "erd",
        title: "Target Schema - Star Architecture",
        src: "/placeholder-star-schema.svg",
        description: "Dimensional model with 15 fact tables and 42 dimensions"
      },
      {
        type: "dfd",
        title: "ETL Data Flow Level 0",
        src: "/placeholder-etl-flow.svg",
        description: "High-level data flow from source systems to warehouse"
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return projects.map(p => p.slug);
};
