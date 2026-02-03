 I'll create a comprehensive technical specification for a high-end, architectural portfolio website that reflects the precision and structured thinking essential to systems analysis.

---

# Technical Specification: Systems Analyst Portfolio Website

## 1. Design Philosophy & Aesthetic Direction

**Concept**: "Architectural Blueprint" — Precision, structure, and systematic elegance. The design communicates analytical rigor through rigid geometry and generous negative space.

**Core Principles**:
- **Brutalist Elegance**: Raw structural elements exposed as design features
- **Zero Radius Orthodoxy**: Absolute geometric purity — no curves, only planes and intersections
- **Diagrammatic Clarity**: Content hierarchy mimics technical documentation (systems diagrams, flow charts)
- **Material Honesty**: Borders are structural, not decorative; whitespace is active, not passive

---

## 2. Visual Design System

### Color Palette
```
Background Primary:    #F7F7F5 (Warm white, architectural paper)
Background Secondary:  #FFFFFF (Pure white for cards/containers)
Background Tertiary:   #EFEFEC (Subtle contrast for sections)

Line/Border Primary:   #0A0A0A (Near-black, 90% contrast)
Line/Border Secondary: #D4D4D4 (Light grey for subtle divisions)
Line/Border Accent:    #1A1A1A (Hover states)

Text Primary:          #0A0A0A (Maximum readability)
Text Secondary:        #666666 (Captions, metadata)
Text Tertiary:         #999999 (Timestamps, tags)

Accent/Highlight:      #C4A77D (Muted gold — use sparingly for CTAs only)
```

**Usage Rules**:
- All structural divisions use 1px solid `#0A0A0A` borders
- No box shadows (violates flat geometry principle)
- No gradients (violates material honesty)
- Accent color limited to hover states and primary CTAs only (max 5% of viewport)

### Typography
**Font Stack**: `Inter` (Google Fonts) — geometric, technical, excellent at small sizes
- **Alternative**: `Space Grotesk` for more character, `IBM Plex Mono` for code/artifacts

```
Hierarchy:
H1 (Page Title):       48px/600/tracking -0.02em/line-height 1.1
H2 (Section):          24px/600/tracking -0.01em/line-height 1.2
H3 (Project Title):    20px/600/tracking 0/line-height 1.3
H4 (Artifact Label):   14px/600/tracking 0.05em/uppercase/line-height 1.4
Body:                  16px/400/tracking 0/line-height 1.6
Caption/Meta:          12px/500/tracking 0.02em/uppercase/line-height 1.4
Code/Technical:        14px/400/IBM Plex Mono/line-height 1.5
```

### Spacing System (8px Base Grid)
```
Unit: 8px
Micro:    8px   (tight groupings)
Small:    16px  (internal padding)
Medium:   32px  (component separation)
Large:    64px  (section breaks)
XLarge:   128px (page sections)
```

### Border Specifications
**Universal Rule**: `border-radius: 0px` enforced globally. No exceptions.

```
Standard Border:     1px solid #0A0A0A
Subtle Border:       1px solid #D4D4D4
Thick Border:        2px solid #0A0A0A (active states)
```

---

## 3. Information Architecture

### Site Structure
```
/
├── / (Index/Projects Grid)
├── /project/[slug] (Case Study Detail)
├── /about (Credentials/Background)
└── /contact (Minimal form)
```

**Navigation**: Fixed top bar, minimal.
- Logo (monogram) left
- Links center: [Work, About, Contact]
- No mobile hamburger — uses visible text links even on mobile (simplified list)

---

## 4. Page Specifications

### 4.1 Index Page (Project Grid)
**Layout**: CSS Grid, 12-column system
- **Desktop**: 2-column asymmetric grid (left column 60%, right 40%, staggered vertical rhythm)
- **Tablet**: Single column, full width
- **Mobile**: Single column, reduced margins

**Components**:
1. **Hero Section** (Full viewport height minus nav)
   - Large typographic statement: "Systems Analysis & Business Architecture"
   - Subtitle: Brief positioning statement (max 12 words)
   - Scroll indicator: Simple line with text "Selected Work"

2. **Project Grid**
   Each project card:
   ```
   Structure:
   - Container: Square aspect ratio (1:1) or 4:3, strict border 1px #0A0A0A
   - Thumbnail: Grayscale filter, hover removes filter
   - Title Block: Below image, separated by 1px border-top
     - Project Title (H3)
     - Category tags (caption style, comma separated)
   - Hover State: Background shifts to #EFEFEC, border thickens to 2px
   ```

3. **Footer**
   - Simple text links
   - Copyright with year
   - Email only (no social icons unless essential — icons violate square motif)

### 4.2 Project Detail Page (The Critical Component)
**Purpose**: Showcase systems analysis artifacts, diagrams, notations.

**Layout**: Single column, max-width 800px (readable line length), centered.

**Sections** (in order):

1. **Project Header**
   - Title (H1)
   - Metadata grid (2 columns):
     - Role: Systems Analyst
     - Duration: X weeks
     - Tools: List (Visio, Lucidchart, SQL, etc.)
     - Year: 2024
   - **Border**: 1px top and bottom, creating contained block

2. **Context/Problem Statement**
   - Standard text block
   - May include pull quote (indented left border 2px)

3. **Artifact Gallery** (The Core Feature)
   **Grid Layout**: 2-column for diagrams, full-width for complex flows

   **Artifact Card Structure**:
   ```
   Container:
   - Border: 1px solid #0A0A0A
   - Padding: 0 (image bleeds to edges)
   - Background: #FFFFFF

   Content:
   - Image: PNG/SVG diagram (use cases, ERDs, flowcharts, BPMN)
   - Caption Block: Padding 16px, border-top 1px solid #0A0A0A
     - Title (H4): "Entity Relationship Diagram"
     - Description: Brief context (1 sentence)
   ```

   **Types of Artifacts to Display**:
   - Use Case Diagrams (UML)
   - Entity Relationship Diagrams (Crow's Foot notation)
   - Business Process Model & Notation (BPMN 2.0)
   - Data Flow Diagrams (DFD Level 0/1)
   - System Architecture Diagrams
   - User Journey Maps (simplified, grid-based)
   - Decision Tables/Matrices
   - Wireframes (low fidelity, grayscale)

4. **Analysis Narrative**
   - Text interspersed with inline artifacts
   - Side-by-side comparison layout for "Before/After" process flows

5. **Technical Specifications** (Accordion style)
   - Click to expand sections (Requirements, Constraints, Data Models)
   - No rounded corners on expand icons (use + / - symbols instead)

6. **Next Project**
   - Full-width link to next case study
   - Border top and bottom
   - Hover: Background fill #0A0A0A, text invert to #FFFFFF

---

## 5. Component Library

### Buttons
**Primary**:
```
Background: transparent
Border: 1px solid #0A0A0A
Padding: 12px 24px
Font: 12px uppercase tracking 0.1em
Hover: Background #0A0A0A, Color #FFFFFF
Transition: all 0.2s ease
Radius: 0px
```

**Secondary** (Text only):
```
Font: 14px/500
Border-bottom: 1px solid #0A0A0A
Padding-bottom: 2px
Hover: Border-bottom-width 2px
```

### Image Containers
All images must be wrapped in:
```css
.artifact-container {
  border: 1px solid #0A0A0A;
  padding: 0;
  background: #FFFFFF;
}

.artifact-container img {
  display: block;
  width: 100%;
  filter: grayscale(100%); /* Optional: removes color noise */
  transition: filter 0.3s ease;
}

.artifact-container:hover img {
  filter: grayscale(0%);
}
```

### Tables (for requirements/features)
```
Border-collapse: collapse
Cell padding: 12px 16px
Header: border-bottom 2px solid #0A0A0A
Rows: border-bottom 1px solid #D4D4D4
No zebra striping (use whitespace instead)
```

---

## 6. Technical Stack Recommendations

**Static Site Generator**: Next.js 14+ or Astro (for speed and image optimization)
**Styling**: Tailwind CSS with custom configuration enforcing `border-radius: 0`
**Typography**: Inter (variable font for performance)
**Image Handling**: Next.js Image component or Sharp optimization
**Deployment**: Vercel or Netlify (edge CDN for diagram assets)
**CMS (Optional)**: Contentlayer or MDX for markdown-based project management

**Critical CSS Customizations**:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'md': '0',
        'lg': '0',
        'full': '0',
      },
      colors: {
        'architectural': {
          paper: '#F7F7F5',
          ink: '#0A0A0A',
          graphite: '#666666',
          gold: '#C4A77D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  }
}
```

---

## 7. Content Structure for Portfolio Projects

Each project file should contain:

```yaml
title: "Legacy System Migration Analysis"
slug: "legacy-migration"
role: "Systems Analyst"
duration: "12 weeks"
tools: ["Bizagi", "SQL Server", "Visio", "Jira"]
year: "2024"
cover_image: "/projects/migration/cover.png"
artifacts:
  - type: "erd"
    title: "Legacy Database Schema"
    src: "/projects/migration/erd-legacy.png"
    description: "Identified 47 redundant tables and 12 orphaned relationships"
  - type: "bpmn"
    title: "Current State Workflow"
    src: "/projects/migration/workflow-as-is.png"
    description: "Process bottleneck identified at validation step (avg 3.2 days delay)"
  - type: "decision-table"
    title: "Business Rules Matrix"
    src: "/projects/migration/rules-matrix.png"
    description: "Consolidated 156 ad-hoc rules into 23 standardized decision patterns"
```

**Artifact Types to Support**:
- `erd` (Entity Relationship)
- `bpmn` (Process Model)
- `uml` (Use Case/Class/Sequence)
- `dfd` (Data Flow)
- `architecture` (System Context/C4)
- `matrix` (Requirements traceability)
- `chart` (Process flow, non-standard)

---

## 8. Responsive Behavior

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px–1024px
- Desktop: > 1024px

**Mobile Adaptations**:
- Navigation becomes horizontal scroll or stacked vertical (no hamburger)
- Project grid becomes single column
- Diagrams stack vertically (never side-scroll on mobile)
- Reduced margins: 16px instead of 64px
- Font sizes reduce by 10–15%

**Critical Rule**: Diagrams must remain legible on mobile. If text is too small, use click-to-zoom lightbox (square border container, obviously).

---

## 9. Interaction Design

**Micro-interactions**:
- Links: Underline slides in from left (CSS `background-size` transition)
- Images: Subtle scale(1.02) on hover within container (overflow hidden)
- Page transitions: Fade only (0.3s), no sliding (maintains structural stability)

**Scroll Behavior**:
- Smooth scroll enabled
- Sticky section headers possible for long case studies
- Progress indicator optional (thin line at top, 2px height, #0A0A0A)

**No-Go Interactions**:
- No parallax (creates false depth, violates flat aesthetic)
- No cursor following effects
- No modal dialogs (use page transitions or inline expansion)

---

## 10. Assets & Image Guidelines

**Diagram Standards**:
- Export all diagrams as PNG (transparent background) or SVG
- Resolution: 2x for retina displays
- Color palette for diagrams: Monochrome or strict black/white/grey only
- Line weight in diagrams: Minimum 2px for visibility
- Typography in diagrams: Inter or sans-serif only (consistent with site)

**Naming Convention**:
```
/projects/[project-slug]/[artifact-type]-[number]-[description].png
Example: /projects/payroll/erd-01-legacy-schema.png
```

---

## 11. Accessibility Requirements

- Contrast ratio minimum 4.5:1 (current palette achieves 16:1)
- All diagrams require alt text describing key insights (not just "diagram")
- Keyboard navigation fully supported (visible focus outlines: 2px solid #0A0A0A, offset 2px)
- Skip-to-content link
- Semantic HTML: `<article>` for projects, `<figure>` for artifacts with `<figcaption>`

---

## 12. Implementation Checklist

**Phase 1: Foundation**
- [ ] Set up Next.js/Tailwind with zero border-radius config
- [ ] Implement 8px grid system and spacing utilities
- [ ] Create layout shell (header, footer, container max-widths)

**Phase 2: Components**
- [ ] Build project card component
- [ ] Build artifact container with caption
- [ ] Build metadata grid
- [ ] Build typography scale

**Phase 3: Content**
- [ ] Create MDX/content structure for first project
- [ ] Optimize and upload all diagrams
- [ ] Write case study narrative
- [ ] Implement image gallery/lightbox for diagrams

**Phase 4: Polish**
- [ ] Test all interactions at 60fps
- [ ] Verify no border-radius escapes (audit with CSS)
- [ ] Mobile responsiveness testing
- [ ] Performance optimization (Lighthouse 95+)

---

## 13. Future Expansion Hooks

- **Tags/Categories**: Add filterable grid (checkboxes not pills — square checkboxes)
- **Dark Mode**: Invert palette (dark background, light lines) — easily supported via CSS variables
- **PDF Export**: Generate case study PDFs using Puppeteer (maintains square aesthetic)
- **Search**: Command palette style (square container, monospace results)

---

**Deliverable Status**: This specification is ready for handoff to a developer or for self-implementation. It provides exact values, structural logic, and content templates that ensure the final website communicates the precision and systematic thinking expected of a senior systems analyst.

The absolute geometric rigor (zero radius) combined with the architectural color palette will differentiate this from typical rounded, soft portfolio templates, signaling technical competence and attention to structural detail.
