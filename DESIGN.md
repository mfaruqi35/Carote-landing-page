# Design System Inspired by Our Place

## 1. Visual Theme & Atmosphere

Our Place embodies a warm, sophisticated aesthetic grounded in culinary tradition and intentional living. The design system celebrates natural materials, muted earth tones, and generous whitespace that evoke the calm, unhurried feeling of gathering around a kitchen table. Typography is elegant and restrained, using serif and humanist fonts to convey both heritage and approachability. The visual language prioritizes clarity and restraint, allowing product photography and user focus to take center stage while maintaining a premium, considered feel that reflects the quality of the cookware and tableware at the brand's heart.

**Key Characteristics**
- Warm, natural color palette anchored in charcoal and taupe
- Elegant serif and humanist typography with generous line heights
- Minimal ornamentation; whitespace as a design element
- Soft, earthy accent colors (terracotta, sage, dusty blue)
- Clean, uncluttered layouts that prioritize content hierarchy
- Premium, intentional aesthetic suggesting craft and quality

## 2. Color Palette & Roles

### Primary
- **Charcoal** (`#35312E`): Primary text, navigation, and interface elements; the dominant neutral establishing visual foundation
- **Pure Black** (`#000000`): High-contrast text, critical UI elements, and dark mode foundations

### Accent Colors
- **Terracotta** (`#AF5A3C`): Call-to-action buttons, highlights, and interactive accents; warm and inviting
- **Sage Taupe** (`#6C674D`): Secondary accent and muted highlights for less prominent actions
- **Dusty Blue** (`#5C707E`): Tertiary accent for supplementary interactive elements

### Interactive
- **Seafoam** (`#AADDDD`): Hover states and secondary interactive feedback on lighter surfaces

### Neutral Scale
- **Off-White** (`#FCFAF6`): Primary background for content areas; warm and soft
- **Pure White** (`#FFFFFF`): Modal backgrounds, card surfaces, and high-contrast areas
- **Light Gray** (`#E6E6E6`): Subtle borders, dividers, and secondary backgrounds
- **Medium Gray** (`#60605E`): Secondary text, labels, and supporting information
- **Cream** (`#EBE5D4`): Tertiary background for soft sectioning and variations

### Surface & Borders
- **Subtle Border** (`#DEDEDE`): Minimal line separators and form field borders
- **Very Dark Gray** (`#1C1A1A`): Alternative text for emphasis on warm backgrounds

## 3. Typography Rules

### Font Family
- **Primary Display & Headings:** Chelt (serif, elegant)
  - Fallback stack: Georgia, 'Times New Roman', serif
- **Body & UI:** Plaid-XS-Web (humanist sans-serif)
  - Fallback stack: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif
- **UI Controls & Links:** Calibre (refined sans-serif)
  - Fallback stack: 'Segoe UI', Tahoma, sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Chelt | 60px | 300 (Light) | 66px | 0px | Hero headlines; maximum visual impact |
| Heading / H3 | Chelt | 48px | 300 (Light) | 52.8px | 0px | Section headings; premium presence |
| Subheading / H4 | Chelt | 28px | 400 (Regular) | 39.2px | 0px | Category and card headings |
| Body / Paragraph | Plaid-XS-Web | 16px | 400 (Regular) | 27.2px | 0px | Main content and descriptions |
| Caption / Small Text | Arial | 13.33px | 400 (Regular) | 16px | 0px | Helper text, metadata, labels |
| Links / UI Text | Calibre | 16px | 400 (Regular) | 27.2px | 0px | Navigation and interactive text |
| Form Input | Calibre | 20px | 400 (Regular) | 24px | 0px | Text input values and placeholders |

### Principles
- Use 300-weight sparingly for dramatic headlines; default to 400-weight for accessibility
- Maintain minimum 16px base size for body text to ensure readability
- Generous line heights (1.1–1.7x) create breathing room and premium feel
- Prefer Chelt for display to establish brand voice; reserve for H1–H4 roles
- Apply consistent capitalization: title case for headings, sentence case for body

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#35312E` (Charcoal)
- **Text Color:** `#FFFFFF` (Pure White)
- **Font:** Calibre, 16px, 400 weight
- **Padding:** `16px 32px`
- **Border Radius:** `0px`
- **Border:** `2px solid #35312E`
- **Line Height:** `27.2px`
- **Hover State:** Background `#1C1A1A`, border `#1C1A1A`
- **Active State:** Background `#000000`
- **Focus State:** Add `outline: 2px solid #AF5A3C` offset `2px`

#### Secondary Button
- **Background:** `#FCFAF6` (Off-White)
- **Text Color:** `#35312E` (Charcoal)
- **Font:** Calibre, 16px, 400 weight
- **Padding:** `16px 32px`
- **Border Radius:** `0px`
- **Border:** `2px solid #35312E`
- **Line Height:** `27.2px`
- **Hover State:** Background `#FFFFFF`, border `#35312E`
- **Active State:** Background `#E6E6E6`

#### Ghost / Link Button
- **Background:** `transparent`
- **Text Color:** `#AF5A3C` (Terracotta)
- **Font:** Calibre, 16px, 400 weight
- **Padding:** `8px 0px`
- **Border Radius:** `0px`
- **Border:** `0px`
- **Line Height:** `27.2px`
- **Hover State:** Text color `#8B4A30`, add bottom border `2px solid #AF5A3C`
- **Focus State:** Add underline `2px solid #AF5A3C`

### Cards & Containers

#### Product Card
- **Background:** `#FFFFFF` (Pure White)
- **Border:** `1px solid #E6E6E6`
- **Border Radius:** `0px`
- **Padding:** `24px`
- **Box Shadow:** `0px 2px 8px rgba(53, 49, 46, 0.08)`
- **Hover State:** Box shadow `0px 8px 16px rgba(53, 49, 46, 0.12)`

#### Content Container
- **Background:** `#FCFAF6` (Off-White)
- **Border Radius:** `0px`
- **Padding:** `40px 32px`
- **Max Width:** `1200px`

#### Modal Dialog
- **Background:** `#FFFFFF` (Pure White)
- **Border Radius:** `0px`
- **Padding:** `40px 48px`
- **Box Shadow:** `0px 20px 48px rgba(0, 0, 0, 0.16)`
- **Overlay:** `rgba(0, 0, 0, 0.5)`

### Inputs & Forms

#### Text Input (Default)
- **Background:** `#FFFFFF` (Pure White)
- **Text Color:** `#000000` (Pure Black)
- **Font:** Calibre, 20px, 400 weight
- **Padding:** `12px 16px`
- **Border:** `1px solid #E6E6E6`
- **Border Radius:** `0px`
- **Height:** `48px`
- **Line Height:** `24px`
- **Placeholder Color:** `#60605E` (Medium Gray)
- **Focus State:** Border `2px solid #35312E`, box-shadow `0px 0px 0px 3px rgba(175, 90, 60, 0.1)`

#### Text Input (Error)
- **Background:** `#FFFFFF`
- **Border:** `2px solid #AF5A3C` (Terracotta)
- **Text Color:** `#000000`

#### Select Dropdown
- **Background:** `#FFFFFF` (Pure White)
- **Text Color:** `#000000` (Pure Black)
- **Font:** Calibre, 20px, 400 weight
- **Padding:** `12px 16px 12px 16px`
- **Border:** `1px solid #E6E6E6`
- **Border Radius:** `0px`
- **Height:** `48px`
- **Hover State:** Border `1px solid #35312E`
- **Focus State:** Border `2px solid #35312E`
- **Arrow Icon Color:** `#35312E`

#### Label
- **Font:** Plaid-XS-Web, 16px, 400 weight
- **Color:** `#35312E` (Charcoal)
- **Margin Bottom:** `8px`
- **Line Height:** `27.2px`

### Navigation

#### Primary Navigation Bar
- **Background:** `#FFFFFF` (Pure White)
- **Height:** `65px`
- **Padding:** `16px 32px`
- **Border Bottom:** `1px solid #E6E6E6`
- **Sticky:** Yes, z-index `100`

#### Navigation Link (Default)
- **Font:** Plaid-XS-Web, 16px, 400 weight
- **Color:** `#35312E` (Charcoal)
- **Text Transform:** Uppercase
- **Line Height:** `27.2px`
- **Letter Spacing:** `0.5px`
- **Hover State:** Color `#AF5A3C`, add bottom border `2px solid #AF5A3C`

#### Navigation Link (Active)
- **Color:** `#AF5A3C` (Terracotta)
- **Border Bottom:** `2px solid #AF5A3C`

#### Logo
- **Font:** Chelt, 24px, 400 weight
- **Color:** `#35312E` (Charcoal)
- **Line Height:** `32px`

#### Close Button
- **Background:** `transparent`
- **Size:** `32px × 32px`
- **Icon Color:** `#35312E` (Charcoal)
- **Hover State:** Icon color `#1C1A1A`
- **Border Radius:** `0px`
- **Border:** `0px`

### Badges & Labels

#### Primary Badge
- **Background:** `#6C674D` (Sage Taupe)
- **Text Color:** `#FFFFFF` (Pure White)
- **Font:** Plaid-XS-Web, 13.33px, 400 weight
- **Padding:** `6px 12px`
- **Border Radius:** `0px`
- **Text Transform:** Uppercase
- **Letter Spacing:** `0.5px`

#### Savings Badge
- **Background:** `#AF5A3C` (Terracotta)
- **Text Color:** `#FFFFFF` (Pure White)
- **Font:** Plaid-XS-Web, 13.33px, 700 weight
- **Padding:** `8px 12px`
- **Border Radius:** `0px`

## 5. Layout Principles

### Spacing System
- **Base Unit:** `8px`
- **Scale:** `8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px, 48px, 64px, 80px, 148px`

**Usage Context:**
- `8px` / `12px`: Micro spacing (button padding, icon gaps, form inputs)
- `16px` / `20px`: Component spacing (card padding, text spacing)
- `24px` / `28px`: Section spacing (margins between components)
- `32px` / `40px`: Container padding and medium section gaps
- `48px` / `64px`: Major section dividers and layout rhythm
- `80px` / `148px`: Hero spacing and full-page layout sections

### Grid & Container
- **Max Container Width:** `1200px`
- **Column Strategy:** 12-column grid with `16px` gutters on desktop
- **Margin:** `32px` horizontal on desktop, `16px` on tablet, `12px` on mobile
- **Section Pattern:** Content sections use `40px` top/bottom padding with full-width backgrounds; nested content uses `32px` horizontal margins

### Whitespace Philosophy
Whitespace is treated as a design material, not empty space. Generous margins and padding create visual breathing room and emphasize content hierarchy. Sections are separated by substantial gaps (40px–80px) rather than lines or dividers, establishing rhythm and rest points for the eye. This approach reflects the brand's philosophy of intentional living and unhurried pacing.

### Border Radius Scale
- **`0px`:** All interactive elements (buttons, inputs, cards, modals) — reflects the sharp, modern precision of the brand
- No rounded corners are used; the design favors clean, geometric edges consistent with minimalist tableware aesthetic

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Z0) | No shadow | Base surfaces: containers, sections, backgrounds |
| Raised (Z1) | `0px 2px 8px rgba(53, 49, 46, 0.08)` | Standard cards, product tiles, subtle elevation |
| Elevated (Z2) | `0px 8px 16px rgba(53, 49, 46, 0.12)` | Hovered cards, floating action elements, modals |
| Modal (Z3) | `0px 20px 48px rgba(0, 0, 0, 0.16)` | Dialog boxes, overlays, top-most interactive layers |

**Shadow Philosophy:**
Shadows are subtle and warm-toned, using dark charcoal with low opacity to create perceived depth without visual heaviness. Shadows increase proportionally with interaction (hover, focus), signaling state change. The system avoids harsh black shadows, instead employing the brand's charcoal (`#35312E`) at 8–16% opacity to maintain the warm, approachable aesthetic. No element uses more than one shadow; when layered, only the highest Z-level shadow is visible.

## 7. Do's and Don'ts

### Do
- Use Chelt serif font exclusively for Display (H1) and Heading (H3–H4) roles to establish premium brand voice
- Apply 300-weight typography for headline drama; use 400-weight as the default for accessibility and legibility
- Maintain minimum `16px` base font size for all body text and UI labels
- Use `#AF5A3C` (Terracotta) as the primary accent for calls-to-action and interactive highlights
- Set all border radii to `0px` to maintain the sharp, intentional design language
- Create visual hierarchy through font size, weight, and color rather than decoration or ornament
- Group related form inputs with `24px` vertical spacing between fields
- Use whitespace (40px–80px margins) as a primary layout tool between major sections
- Apply subtle shadows (Z1–Z2) only on hover/interaction to signal state change
- Stack modals at z-index `1000` with a semi-transparent overlay (`rgba(0, 0, 0, 0.5)`) at z-index `999`

### Don't
- Mix multiple typefaces within a single heading or body text block
- Use font weights lighter than 300 for body text; it diminishes accessibility
- Apply bright, saturated colors outside the established palette; maintain the warm, muted aesthetic
- Use rounded corners on any UI element; this contradicts the brand's geometric, minimal philosophy
- Truncate body copy to fewer than 12 characters per line; aim for 50–75 characters for optimal readability
- Center-align body text in sections longer than three lines; use left alignment for better scanning
- Nest more than three levels of buttons or interactive elements without visual separation
- Apply color-only state indication; combine color changes with border, shadow, or text weight changes
- Use generic system fonts; always load Chelt, Plaid-XS-Web, and Calibre for brand consistency
- Add decorative borders, gradients, or patterns; the clean, minimal aesthetic rejects unnecessary ornamentation

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|------------|
| Mobile | `320px–639px` | Single-column layout; `12px` margins; 40px section padding; h1 reduces to `40px`; h3 reduces to `32px` |
| Tablet | `640px–1023px` | Two-column grid; `16px` horizontal margins; h1 reduces to `48px`; h3 remains `48px`; modal max-width `90vw` |
| Desktop | `1024px+` | 12-column grid; `32px` horizontal margins; max container width `1200px`; h1 `60px`; h3 `48px` |
| Large | `1440px+` | Centering with max-width constraint; 16px gutters; full spacing scale applied |

### Touch Targets
- **Minimum Touch Target:** `44px × 44px` (buttons, links, interactive elements)
- **Recommended:** `48px × 48px` for primary actions and form controls
- **Icon Buttons:** Minimum `32px × 32px` internal padding around icon
- **Form Inputs:** Minimum height `44px`; ideally `48px` for comfortable mobile interaction
- **Spacing Between Targets:** Minimum `8px` between adjacent interactive elements

### Collapsing Strategy
- **Hero Section:** Full viewport height on desktop (`100vh`); `75vh` on tablet; `50vh` on mobile
- **Navigation:** Sticky header with horizontal nav on desktop; hamburger menu triggered at `640px` breakpoint
- **Product Cards:** 4 columns on desktop (1200px+); 3 columns on tablet (640px–1023px); 1 column on mobile (320px–639px)
- **Modal Dialogs:** `90vw` max-width on mobile/tablet; `600px` fixed width on desktop
- **Form Inputs:** Full width on mobile/tablet (`100%`); limited to `400px` max-width on desktop with flex layout
- **Padding Adjustments:** Sections use `40px` padding on desktop, `28px` on tablet, `16px` on mobile
- **Typography Scaling:**
  - Display H1: `60px` (desktop) → `48px` (tablet) → `40px` (mobile)
  - Heading H3: `48px` (desktop/tablet) → `32px` (mobile)
  - Body: `16px` (all sizes) — never reduce base body font below `16px`

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA / Interactive Accent:** Terracotta (`#AF5A3C`)
- **Primary Text / Navigation:** Charcoal (`#35312E`)
- **Background / Content Areas:** Off-White (`#FCFAF6`) or Pure White (`#FFFFFF`)
- **Secondary Accents:** Sage Taupe (`#6C674D`); Dusty Blue (`#5C707E`)
- **Neutral Borders / Dividers:** Light Gray (`#E6E6E6`)
- **Heading Text:** Charcoal (`#35312E`)
- **Supporting Text / Labels:** Medium Gray (`#60605E`)
- **Modal / Card Surfaces:** Pure White (`#FFFFFF`)
- **Success / Positive States:** Sage Taupe (`#6C674D`)
- **Error / Warning States:** Terracotta (`#AF5A3C`)

### Iteration Guide
1. **Typography First:** All headings use Chelt 300-weight; body uses Plaid-XS-Web 400-weight at minimum `16px`; UI controls use Calibre 400-weight.
2. **Color Hierarchy:** Charcoal (`#35312E`) for primary text/navigation, Terracotta (`#AF5A3C`) for CTAs, Medium Gray (`#60605E`) for secondary information.
3. **No Rounded Corners:** Every interactive element (buttons, inputs, cards, modals) uses `0px` border-radius; maintain geometric precision.
4. **Spacing in Multiples:** Apply spacing from the scale (`8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px`); avoid arbitrary values.
5. **Subtle Elevation:** Use shadows sparingly—`0px 2px 8px rgba(53, 49, 46, 0.08)` for cards; `0px 8px 16px rgba(53, 49, 46, 0.12)` for hover; increase on interaction.
6. **Form Field Consistency:** All inputs use `48px` height, `1px solid #E6E6E6` border (default), focus to `2px solid #35312E` with light terracotta shadow.
7. **Navigation Clarity:** Primary nav links are uppercase, `16px` Plaid-XS-Web, with terracotta underline on active/hover states.
8. **Whitespace as Content:** Sections separated by `40px–80px` margins; avoid lines or dividers; let content breathe.
9. **Accessibility Priority:** Never use color alone for state; combine with border, shadow, weight, or pattern changes; maintain `16px` minimum body size; ensure `4.5:1` contrast ratio for all text.
10. **Modal & Overlay Pattern:** Fixed position with z-index `1000`; semi-transparent black overlay (`rgba(0, 0, 0, 0.5)`) at z-index `999`; `0px 20px 48px rgba(0, 0, 0, 0.16)` shadow; `40px–48px` padding.