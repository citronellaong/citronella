# Tasks: Landing Page ONG Redesign

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~450-550 |
| 400-line budget risk | Medium |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | auto-chain |
| Chain strategy | stacked-to-main |
| Decision needed before apply | No |
| Chained PRs recommended | No |
| Chain strategy | stacked-to-main |
| 400-line budget risk | Medium |

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Data + metadata updates | PR 1 | Foundation: data.ts and page.tsx |
| 2 | Hero + section components | PR 2 | Core UI rewrite |
| 3 | New sections + PROXIMAMENTE | PR 3 | New components |
| 4 | Mobile optimization + 3D simplification | PR 4 | Performance fixes |

## Phase 1: Foundation (Data & Metadata)

- [x] 1.1 Update `components/features/landing/data.ts` with ONG content (heroStats, panelConfig, features, marketItems, communityPosts, ecosystemWords)
- [x] 1.2 Update `app/page.tsx` metadata (title, description for ONG)

## Phase 2: Core Section Rewrites

- [x] 2.1 Rewrite `components/features/landing/sections/Hero.tsx` — mobile-first hero with dual CTAs, ONG messaging
- [x] 2.2 Rewrite `components/features/landing/sections/FeaturesGrid.tsx` — replace with "Qué es Citronela" explanatory section
- [x] 2.3 Rewrite `components/features/landing/sections/CTA.tsx` — final conversion CTA with Google Forms URL
- [x] 2.4 Replace `components/features/landing/sections/EcosystemBand.tsx` — commitment section with ONG words
- [x] 2.5 Replace `components/features/landing/sections/HorizontalShowcase.tsx` — remove phone mockups, replace with DosModelos

## Phase 3: New Components

- [x] 3.1 Create `components/features/landing/sections/DosModelos.tsx` — Paciente Dispensado vs Cultivador Solidario comparison cards
- [x] 3.2 Create `components/features/landing/sections/LaboratorioSection.tsx` — lab analysis, analitos, Parkinson trial section
- [x] 3.3 Create `components/features/landing/sections/RedSolidaria.tsx` — solidarity model explanation section
- [x] 3.4 Create `components/features/landing/sections/Testimonios.tsx` — 3 testimonial cards
- [x] 3.5 Create `components/features/landing/sections/ProcesoAdmision.tsx` — 4-step admission timeline
- [x] 3.6 Create `components/features/landing/sections/Proximamente.tsx` — ecommerce + plant tracking "coming soon" section

## Phase 4: Mobile Optimization & 3D Simplification

- [x] 4.1 Simplify `components/landing/Scene3D.tsx` — reduce particles to 40, remove phone mockup logic, keep subtle background, add pointer-events-none
- [x] 4.2 Add `prefers-reduced-motion` media query support to GSAP animations in `LandingPage.tsx`
- [x] 4.3 Add mobile-specific responsive classes to all new section components
- [x] 4.4 Disable Lenis on mobile/touch devices (prevents scroll blocking)
- [x] 4.5 Add `touch-action: auto` and `overflow-y-auto` to container
- [x] 4.6 Add mobile CSS fixes to globals.css (disable content-visibility, fix fixed background, enable touch scrolling)
- [x] 4.7 Add `pointer-events-none` to 3D canvas on mobile

## Phase 5: Verification

- [x] 5.1 Run `npm run build` and confirm no compilation errors (pre-existing `setUser` error in events page is unrelated)
- [x] 5.2 Clean `.next` cache and restart dev server to verify fresh assets serve correctly
- [ ] 5.3 Verify all sections render on desktop (≥1024px)
- [ ] 5.4 Verify all sections render on mobile (375px, 414px)
- [ ] 5.5 Verify GSAP animations work on desktop
- [ ] 5.6 Verify `prefers-reduced-motion` disables animations
- [ ] 5.7 Verify PROXIMAMENTE section is visible and clear
- [ ] 5.8 Verify Dos Modelos cards show correct pricing and features