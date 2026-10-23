---
name: Mavenix
description: A night-flight instrument system connecting business services, specialist talent, and retail interest.
colors:
  panel-black: "#0b0d0f"
  panel-charcoal: "#111516"
  instrument-plate: "#171b1c"
  instrument-rule: "#424849"
  luminous-white: "#f2f5f5"
  muted-readout: "#aeb7b2"
  control-ink: "#07100a"
  radium-green: "#7cff9e"
  caution-amber: "#ffb000"
typography:
  display:
    fontFamily: 'Bahnschrift, "Arial Narrow", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(3.3rem, 6vw, 5.8rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  headline:
    fontFamily: 'Bahnschrift, "Arial Narrow", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(2rem, 3.6vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  title:
    fontFamily: 'Bahnschrift, "Arial Narrow", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.16rem"
    fontWeight: 600
  body:
    fontFamily: 'Bahnschrift, "Arial Narrow", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.04rem"
    lineHeight: 1.75
  label:
    fontFamily: 'ui-monospace, "Cascadia Mono", Consolas, monospace'
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  control: "2px"
  panel: "3px"
  dial: "50%"
spacing:
  unit: "4px"
  content-gutter: "24px"
  section-block: "96px"
components:
  button-primary:
    backgroundColor: "{colors.radium-green}"
    textColor: "{colors.control-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-secondary:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "#e7ece9"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  input-text:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.luminous-white}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  navigation-current:
    backgroundColor: "#151a18"
    textColor: "{colors.radium-green}"
    typography: "{typography.label}"
  service-grid-cell:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.luminous-white}"
  instrument-panel:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.luminous-white}"
    rounded: "{rounded.panel}"
  route-dial:
    backgroundColor: "#171c1a"
    textColor: "{colors.luminous-white}"
    rounded: "{rounded.dial}"
  retail-status:
    textColor: "{colors.caution-amber}"
    typography: "{typography.label}"
---

# Design System: Mavenix

## Overview

**Creative North Star: "Night-Flight Instrument Systems"**

Mavenix presents as a precise, low-light instrument panel: matte dark surfaces, restrained luminous markings, engraved-style labels, and fine rules. Its visual language helps visitors orient between business services, specialist recruitment, and retail interest without turning those routes into generic service cards or suggesting aviation capabilities.

The composition favors a direct proposition and contact action beside one distinctive instrument panel. Elsewhere, ruled grids, compact metadata, and understated surface changes keep information readable; green marks active or actionable states, while amber is reserved for the planned retail status.

**Key Characteristics:**
- Panel black and charcoal establish the low-light field; luminous white and muted readouts carry content.
- Radium green is the active signal; caution amber marks development status.
- Platform system sans-serif carries prose, while platform monospace marks instrument and navigation labels.
- Fine borders and square controls make the interface feel calibrated rather than ornamental.

## Colors

The palette is a restrained instrument-face neutral range with one vivid active signal and one status-only warning accent.

### Primary
- **Radium Green**: Active states, links, signals, focus outlines, and primary actions.

### Secondary
- **Caution Amber**: The in-development retail status only; keep it out of general navigation and primary actions.

### Neutral
- **Panel Black**: The page field, deepest backgrounds, and text-field surfaces.
- **Panel Charcoal**: Service cells, secondary actions, and dark control surfaces.
- **Instrument Plate**: Raised panel headers and supporting plate surfaces.
- **Instrument Rule**: Fine divisions, borders, and panel outlines.
- **Luminous White**: Primary text and high-contrast instrument labels.
- **Muted Readout**: Supporting copy, descriptions, and quiet metadata.
- **Control Ink**: Text on radium-green primary controls.

### Named Rules
**The State-Light Rule.** Green signals active or actionable content; amber is reserved for the in-development retail state.

**The Rule-Line Rule.** Use fine borders and ruled divisions to organize the dark surfaces before introducing extra surface colors or card-like elevation.

## Typography

**Display Font:** Bahnschrift (with "Arial Narrow", ui-sans-serif, system-ui, sans-serif fallbacks)

**Body Font:** Bahnschrift (with "Arial Narrow", ui-sans-serif, system-ui, sans-serif fallbacks)

**Label/Mono Font:** ui-monospace, "Cascadia Mono", Consolas, monospace

**Character:** A condensed system sans gives propositions and section headings a firm, engineered voice; platform monospace makes short labels read like instrument markings. Keep long-form copy in the sans face for legibility.

### Hierarchy
- **Display** (600, `clamp(3.3rem, 6vw, 5.8rem)` desktop and `clamp(2.25rem, 9.6vw, 3.2rem)` mobile, 0.98 line-height): The oversized uppercase hero proposition.
- **Headline** (600, `clamp(2rem, 3.6vw, 3.4rem)`, 1.08 line-height): Section headings.
- **Title** (600, 1.16rem): Service names.
- **Body** (400, 1.04rem, 1.75 line-height): Hero description; supporting paragraphs use the same relaxed reading rhythm.
- **Label** (700, 0.68rem, 0.1em tracking, uppercase): Instrument, navigation, and action labels; compact readouts may step down to 0.58–0.63rem.

### Named Rules
**The Instrument-Label Rule.** Reserve monospace, uppercase, tracked type for short labels and metadata; use the system sans for propositions and explanatory copy.

## Layout

Use a centered content frame capped at 80rem with a 1.5rem horizontal gutter. Sections use generous 6rem vertical spacing. At wide widths, the hero pairs its left-aligned copy with the right-side instrument panel; the service grid becomes two columns from 48rem, while the hero becomes two columns from 64rem. The three route dials stay in a single row and scale down on narrow screens. The mobile navigation becomes a compact drop-down; the about readout stacks beneath its copy below 48rem.

The page's content alternates between full-width dark surfaces, ruled service cells, and compact panels. Preserve the generous section rhythm while keeping the functional instrument labels dense and aligned.

## Elevation & Depth

Depth is restrained rather than absent: thin strokes and small tonal shifts define most surfaces, with dark shadows and a subtle inset highlight reserved for the hero instrument panel, form panels, and floating guide. Active dials may gain a faint green halo; avoid using broad shadows as the default separator between sections.

### Named Rules
**The Flat-Plate Rule.** Let borders and surface tone carry the hierarchy; reserve shadows for distinct panels and floating interface elements.

## Shapes

Controls use nearly square corners (2px), panel shells use a subtly eased corner (3px), and the route indicators remain circular. Fine strokes, inset rings, and radial tick marks provide the recurring geometry; avoid pill-shaped controls or rounded-card grids.

## Components

### Buttons
- **Character:** Compact, high-contrast instrument controls.
- **Shape:** Square-edged (2px radius).
- **Primary:** Radium green with control-ink text, uppercase monospace labels, and 16px 24px padding.
- **Hover / Focus:** Hover shifts to the lighter green and lifts by 1px; keyboard focus uses a 2px green outline offset 4px.
- **Secondary:** Charcoal face, luminous text, and an instrument-rule border; hover changes the rule and text to green.

### Cards / Containers
- **Character:** Ruled plates, not floating service-card stacks.
- **Corner Style:** Instrument panels use 3px corners; service grid cells remain square.
- **Background:** Charcoal or instrument plate on a panel-black field.
- **Shadow Strategy:** Keep shadows subtle and focused on the hero instrument panel and distinct form or floating panels.
- **Border:** Thin instrument-rule divisions; service cells join into a continuous ruled grid.
- **Internal Padding:** The instrument panel scales from 16px to 32px; the hero panel uses inset header and footer rules.

### Inputs / Fields
- **Character:** Recessed, dark fields with clear labels.
- **Style:** Panel-black background, instrument-rule stroke, 2px corners, and 12px 16px padding.
- **Focus:** Green border with a restrained 2px translucent green ring.

### Navigation
- **Style:** Uppercase monospace labels in ruled horizontal cells; the current or hovered route uses green text on a subtly lighter charcoal surface.
- **Mobile:** Collapse into a bordered dark drop-down with full-width rows and fine dividers.

### Route Instrument Panel
- **Character:** One signature selector that routes three visitor intents through calibrated circular dials.
- **Structure:** Ruled header and footer frame three equal-width links; each dial uses circular tick marks and a directional needle.
- **State:** Green active light and hover/focus treatment identify readiness and the selected pathway. Keep labels explicit and routes functional.

### Retail Status
- **Style:** A ruled status line uses monospace uppercase labels; amber is limited to the “In development” marker.

## Do's and Don'ts

### Do:
- **Do** use the radium-green signal for active states, actionable links, focus, and primary actions.
- **Do** use thin instrument-rule dividers to define section boundaries, navigation cells, and the service grid.
- **Do** keep the three route dials labeled and linked to business services, recruitment, and retail.
- **Do** preserve a visible keyboard-focus outline and honor reduced-motion preferences.

### Don't:
- **Don't** turn the services into a generic stack of individually floating cards.
- **Don't** use caution amber for ordinary actions or navigation; it marks the in-development state.
- **Don't** add aviation claims, invented measurements, or decorative dashboard readouts.
- **Don't** replace the squared controls and fine ruled geometry with pill buttons or heavily rounded cards.
