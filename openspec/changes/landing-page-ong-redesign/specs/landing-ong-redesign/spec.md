# Landing ONG Redesign Specification

## Purpose

Convert the Citronela landing page from a hydroponic crop management tool into a conversion-focused ONG landing page that communicates the mission of cannabis medicinal legal, científico y solidario, driving visitors to become pacientes dispensados or cultivadores solidarios.

## Requirements

### Requirement: Mobile-first responsive layout

The landing page MUST be fully functional and visually polished on viewports from 360px to 1440px+. All sections MUST stack vertically on mobile with no horizontal scroll. Touch targets MUST be ≥ 44px.

#### Scenario: 375px viewport (iPhone SE)
- GIVEN a viewport width of 375px
- WHEN the landing page loads
- THEN all sections render in a single column with no horizontal overflow
- AND CTAs are full-width buttons
- AND text is readable without zooming

#### Scenario: 414px viewport (iPhone 14 Pro)
- GIVEN a viewport width of 414px
- WHEN the landing page loads
- THEN sections render cleanly with appropriate spacing
- AND hero text scales appropriately

#### Scenario: Desktop viewport
- GIVEN a viewport width ≥ 1024px
- WHEN the landing page loads
- THEN multi-column layouts are used where appropriate
- AND animations are fully enabled

### Requirement: Hero section with dual CTAs

The hero MUST communicate the ONG mission within 3 seconds of load. It MUST display two primary CTAs: "Postulate como paciente" and "Conocé nuestro modelo". Stats MUST show pacientes, laboratorio, and marco legal.

#### Scenario: Hero renders correctly
- GIVEN the landing page loads
- WHEN the hero section is visible
- THEN the headline "Cannabis medicinal legal, científico y solidario" is visible
- AND the subtitle explains the ONG mission
- AND both CTAs are visible and clickable
- AND the three stats are displayed

### Requirement: "Qué es Citronela" explanatory section

The page MUST include a section explaining the ONG: its mission, legal framework (Ley 27.357), physical sede (9 de Julio 1196, Córdoba), and the solidarity model.

#### Scenario: Explanatory section content
- GIVEN the landing page renders
- WHEN the "Qué es Citronela" section is visible
- THEN it explains the ONG's mission clearly
- AND mentions Ley 27.357 and REPROCAN
- AND shows the sede address

### Requirement: Dos Modelos comparison section

The page MUST display two compare cards: Paciente Dispensado ($300k/mes) and Cultivador Solidario ($500k/mes) with their respective benefits and features.

#### Scenario: Paciente Dispensado card
- GIVEN the Dos Modelos section renders
- WHEN the Paciente Dispensado card is visible
- THEN it shows $300k/mes, 40g garantidos, REPROCAN incluido, acompañamiento médico

#### Scenario: Cultivador Solidario card
- GIVEN the Dos Modelos section renders
- WHEN the Cultivador Solidario card is visible
- THEN it shows $500k/mes, indoor instalado, 4 líneas de 9 plantas, 1 línea para el usuario y 3 para la red

### Requirement: Laboratorio & Ciencia section

The page MUST include a section about the laboratory, analitos, trazabilidad, and the Parkinson clinical trial.

#### Scenario: Laboratory section content
- GIVEN the landing page renders
- WHEN the Laboratorio section is visible
- THEN it explains the lab analysis process
- AND mentions the Parkinson clinical trial
- AND communicates scientific credibility

### Requirement: Red Solidaria section

The page MUST explain the solidarity model: how cultivators help patients who cannot grow themselves.

#### Scenario: Solidarity section content
- GIVEN the landing page renders
- WHEN the Red Solidaria section is visible
- THEN it explains how the cultivator network works
- AND shows the impact (450 personas, 150 pacientes + 150 cultivadores + 150 socios)

### Requirement: Testimonios section

The page MUST include 3 testimonial cards from patients, cultivators, and family members.

#### Scenario: Testimonials render
- GIVEN the landing page renders
- WHEN the Testimonios section is visible
- THEN 3 testimonial cards are displayed
- AND each has an author, avatar, and quote

### Requirement: Proceso de Admisión timeline

The page MUST show a 4-step timeline: Formulario → Entrevista → Alta → Membresía.

#### Scenario: Admission process visible
- GIVEN the landing page renders
- WHEN the Proceso de Admisión section is visible
- THEN a 4-step timeline is displayed
- AND each step has a clear description

### Requirement: PROXIMAMENTE — Ecommerce section

The page MUST include a section indicating that the ecommerce marketplace for cannabis-derived products and garden articles is under construction.

#### Scenario: Ecommerce "coming soon" section
- GIVEN the landing page renders
- WHEN the PROXIMAMENTE section is visible
- THEN it says the ecommerce is "En construcción"
- AND lists planned products: derivados cannábicos, artículos de jardín, equipos de cultivo
- AND shows a CTA to be notified when it launches

### Requirement: PROXIMAMENTE — Plant tracking for pacientes dispensados

The page MUST indicate that pacientes dispensados will soon be able to view THC levels and all types of plant analysis in the system.

#### Scenario: Plant tracking preview
- GIVEN the landing page renders
- WHEN the PROXIMAMENTE section is visible
- THEN it explains that pacientes will see THC and cannabinoid analysis of their plants
- AND mentions the tracking dashboard is being built
- AND shows a CTA for early access

### Requirement: Final CTA section

The page MUST have a final conversion CTA with "Postulate ahora" and "Agendar entrevista" buttons.

#### Scenario: Final CTA renders
- GIVEN the landing page renders
- WHEN the final CTA section is visible
- THEN the headline "Sumate a Citronela" is visible
- AND both CTAs are prominent and clickable

### Requirement: 3D scene simplification

The 3D background scene MUST be simplified to subtle particles only, removing phone mockups and device frames.

#### Scenario: 3D scene on mobile
- GIVEN the landing page loads on mobile
- WHEN the 3D scene renders
- THEN particle count is reduced (≤ 40 particles)
- AND no phone mockups are visible
- AND the scene is lightweight and non-blocking

### Requirement: Mobile animation optimization

Animations MUST be optimized for mobile performance. Parallax effects MUST be disabled on mobile. `prefers-reduced-motion` MUST be respected.

#### Scenario: Reduced motion preference
- GIVEN the user has `prefers-reduced-motion` enabled
- WHEN the landing page loads
- THEN all animations are disabled or minimized
- AND the page is still fully functional

### Requirement: GSAP animations preserved on desktop

All GSAP scroll animations MUST work correctly on desktop (Hero orchestration, parallax, section reveals).

#### Scenario: Desktop animations work
- GIVEN a desktop viewport (≥ 1024px)
- WHEN the landing page loads and user scrolls
- THEN Hero text animates on load
- THEN parallax orbs move on scroll
- THEN sections reveal with scroll-triggered animations

## Success Criteria

- [ ] Landing page communicates ONG mission within 3 seconds on mobile
- [ ] Two primary CTAs visible above the fold on 375px viewport
- [ ] All sections render correctly on 360px, 375px, 414px, and ≥1024px
- [ ] No horizontal scroll on any viewport
- [ ] 3D phone mockups removed
- [ ] PROXIMAMENTE section visible and clear
- [ ] Build compiles without errors
- [ ] All GSAP animations work on desktop
- [ ] `prefers-reduced-motion` respected on mobile