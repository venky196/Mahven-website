---
name: Mavenix
description: A warm editorial consultancy identity connecting technology, systems, and specialist people.
colors:
  paper: "#f1efe7"
  paper-light: "#faf9f4"
  paper-deep: "#e7e4d9"
  ink: "#17251f"
  ink-soft: "#405049"
  muted: "#56645d"
  line: "#c9cec4"
  cobalt: "#2349c7"
  cobalt-dark: "#173ba9"
  cobalt-pale: "#dce4fa"
  citron: "#d9e56a"
  white: "#fffefa"
typography:
  display:
    fontFamily: '"Space Grotesk", "Arial", sans-serif'
    fontSize: "clamp(3.4rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.99
    letterSpacing: "-0.055em"
  headline:
    fontFamily: '"Space Grotesk", "Arial", sans-serif'
    fontSize: "clamp(2.6rem, 5vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.055em"
  title:
    fontFamily: '"Space Grotesk", "Arial", sans-serif'
    fontSize: "clamp(1.25rem, 2vw, 1.7rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: '"Aptos", "Segoe UI", system-ui, sans-serif'
    fontSize: "1rem"
    lineHeight: 1.65
rounded:
  field: "2px"
  action: "3px"
spacing:
  unit: "4px"
  content: "76rem"
  desktop-gutter: "24px"
  mobile-gutter: "16px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "0.75rem 1.15rem"
    height: "46px"
  input-text:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.85rem 0.9rem"
  navigation-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
  service-row:
    padding: "1.75rem 0.25rem"
  pathway-art:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
  retail-status:
    textColor: "{colors.ink}"
  quick-guide-trigger:
    textColor: "{colors.cobalt-dark}"
    padding: "0"
---

# Design System: Mavenix

## Overview

**Creative North Star: "Warm Editorial Pathways"**

Mavenix is a warm, mineral-paper editorial consultancy: deep green-black ink, confident contemporary typography, generous open space, and crisp ruled structures. Cobalt creates a bold field for the homepage's pathway illustration; citron marks key points within that composition and small wayfinding details. The overall voice is human-centered and direct without relying on people photography.

The opening pairs an asymmetrical, left-aligned proposition and contact route with a locally authored abstract pathway illustration. It depicts connected disciplines, not customers, staff, or evidence. Elsewhere, open section introductions, ruled service rows, a dark about band, and a pale-blue retail area create distinct reading chapters without turning the page into a stack of floating cards.

**Key Characteristics:**
- Mineral ivory and warm off-white ground deep green-black text and surfaces.
- Cobalt is the main action color and the illustration's uninterrupted field; citron is a sparing signifier.
- Space Grotesk leads display type; system sans-serif carries navigation, labels, and body copy.
- Fine rules, small corner radii, circular illustration details, and asymmetrical whitespace keep the page crisp and open.

### Named Rules
**The Pathway-Not-Proof Rule.** The abstract pathway is a locally authored visual metaphor, not customer or team imagery, a case study, or proof of outcomes.

## Colors

The palette moves from warm mineral papers and deep green-black ink to a decisive cobalt field, with citron reserved for small points of emphasis.

### Primary
- **Cobalt**: Primary calls to action, focused links, and the pathway illustration field.

### Secondary
- **Citron**: Small wayfinding highlights, pathway nodes, and the retail navigation marker; never a substitute for the primary action color.

### Neutral
- **Mineral Paper**: Warm section backgrounds, especially the hero and contact section.
- **Soft Paper**: The page canvas, navigation surface, fields, and light content areas.
- **Pale Paper**: Supporting copy on the deep ink surfaces.
- **Deep Green-Black Ink**: Main text and the contrasting about and footer bands.
- **Soft Ink** and **Muted Ink**: Supporting prose, descriptions, and quiet metadata.
- **Rule Gray**: Fine section, navigation, and form divisions.
- **Pale Cobalt**: A distinct soft-color field for the planned retail section.
- **Warm White**: Text against the deep ink and cobalt surfaces.

### Named Rules
**The Cobalt-Action Rule.** Reserve saturated cobalt for clear actions, active navigation, and the illustration field; keep most reading surfaces quiet.

## Typography

**Display Font:** Space Grotesk (with Arial, sans-serif fallback)

**Body Font:** Aptos (with Segoe UI, system-ui, sans-serif fallback)

**Character:** Space Grotesk's contemporary, weighty forms give the proposition and section titles confidence; the system sans keeps navigation, controls, and longer copy familiar and legible. The implementation does not introduce a separate monospaced label voice.

### Hierarchy
- **Display** (600, `clamp(3.4rem, 7vw, 6rem)`, 0.99 line-height, tight tracking): The large, balanced hero proposition.
- **Headline** (600, `clamp(2.6rem, 5vw, 4.4rem)`, 1.03 line-height): Section, about, and contact headings, with sizes tuned to each section.
- **Title** (600, `clamp(1.25rem, 2vw, 1.7rem)`, 1.2 line-height): Service-row titles.
- **Body** (400, 1rem, 1.65 line-height): Default explanatory copy; section paragraphs open to a relaxed 1.8 line-height.
- **Navigation and utility copy** (600–700, generally 0.82–0.95rem): Compact, plain-case links, field labels, and status details.

### Named Rules
**The Two-Voice Rule.** Use Space Grotesk for prominent headings and Aptos/system sans for the supporting interface and prose; do not imply an additional display or mono face.

## Layout

The centered frame caps at 76rem, with 1.5rem side gutters at wider sizes and 1rem on mobile. The first view is an open two-column composition: proposition and action beside the cobalt pathway artwork. The hero remains stacked on small screens; section introductions and the about, retail, and contact layouts also collapse to one column. Service content is a continuous ruled list, not a collection of separate cards.

Use generous, responsive section padding (typically `clamp(5rem, 10vw, 9rem)`), with a slightly more expansive hero. At the implemented 850px, 700px, and 420px media-query steps, the hero and service layout tighten, then stack; mobile navigation becomes a compact drop-down and form rows stack at the narrowest size. Keep the whitespace asymmetrical and content aligned to the shared frame.

## Elevation & Depth

The page is primarily flat: background-color changes and crisp rules establish section hierarchy. Small hover translations respond to actions and service rows; a restrained shadow separates the fixed quick-guide panel from page content. Its trigger stays inline with the hero copy.

### Named Rules
**The Flat-Field Rule.** Let paper, ink, and rules do the structural work; do not add card-like elevation to ordinary content rows.

## Shapes

Forms are crisp and nearly square: fields use a 2px radius and primary actions a restrained 3px radius. Thin borders and open rules are more prominent than enclosing outlines. Circular shapes belong to the abstract pathway artwork and small arrow affordances, not to pill-shaped controls.

## Components

### Buttons
- **Character:** Clear, cobalt actions that read as part of the editorial flow.
- **Shape:** Slightly eased corners (3px); primary actions have at least 46px height and compact horizontal padding.
- **Primary:** Cobalt face, warm-white text, bold system sans; use for the main contact and email-preparation actions.
- **Hover / Focus:** Darker cobalt and a small upward movement on hover; retain the visible 3px cobalt focus outline with 4px offset.
- **Text links:** Unboxed, bold ink links; cobalt appears on hover.

### Cards / Containers
- **Character:** Open ruled rows and section fields rather than floating service cards.
- **Background:** Paper, soft paper, pale cobalt, and deep ink distinguish content chapters.
- **Shadow Strategy:** No shadow on ordinary rows; only the floating quick guide is lifted.
- **Border:** Thin gray rules define service rows, header boundaries, and form details.

### Inputs / Fields
- **Style:** Soft-paper fill, ink text, a clear gray-green border, and a 2px radius; labels sit above fields.
- **Focus:** Cobalt border with a visible translucent cobalt outline.
- **Behavior:** Contact and retail-interest forms prepare prefilled email drafts; they do not submit or store data on the site.

### Navigation
- **Style:** Plain-case, medium-weight ink links with generous horizontal spacing; hover and current-section states shift to cobalt.
- **Mobile:** A sticky header opens a compact, ruled drop-down menu.
- **Retail marker:** A small citron-backed “In development” signifier accompanies the retail link.

### Pathway Illustration
- **Character:** A locally authored abstract line drawing on a bold cobalt field, with four labeled discipline nodes connected around a citron center.
- **Use:** The decorative composition reinforces connection; it is not customer/team evidence or a claim of measured outcomes. Preserve its role and text alternative.

### Quick Guide
- **Character:** An inline hero text link opens a compact paper panel with an ink header and crisp border.
- **Depth:** Keep the panel's restrained shadow functional and distinct from the flat page sections.

## Do's and Don'ts

### Do:
- **Do** keep the warm mineral-paper, deep ink, cobalt, and citron roles distinct.
- **Do** preserve the open asymmetrical hero and continuous ruled service rows.
- **Do** use the local abstract pathway illustration as a metaphor, not as human or customer evidence.
- **Do** retain visible keyboard focus and reduced-motion support.

### Don't:
- **Don't** revive the superseded dark instrument-panel or aviation styling.
- **Don't** add customer, employee, or stock-photo proof to the illustration or imply that it represents real people.
- **Don't** turn the service list into an unrelated stack of floating cards or overuse citron.
- **Don't** introduce unsupported measurements, claims, or decorative dashboard readouts.
