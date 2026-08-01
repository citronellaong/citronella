# Proposal: Landing Page Redesign — ONG Mission & Conversion

## Intent

Convert the landing page from a hydroponic crop management tool into a conversion-focused ONG landing page that communicates Citronela's mission (cannabis medicinal legal, científico y solidario) and drives visitors to become pacientes dispensados or cultivadores solidarios.

## Scope

### In Scope
- Mobile-first responsive overhaul of all landing sections
- Replace 3D phone mockups with explanatory ONG content sections
- New sections: "Qué es Citronela", Dos Modelos (compare), Laboratorio & Ciencia, Red Solidaria, Testimonios, Proceso de Admisión, PROXIMAMENTE (ecommerce + plant tracking)
- Mobile optimization: stacked layout, reduced animations, touch-friendly CTAs
- Ecommerce "PROXIMAMENTE" section with roadmap visibility
- Plant tracking/analysis feature preview for pacientes dispensados

### Out of Scope
- Backend changes or new API routes
- Database schema changes
- New authentication flows
- Ecommerce marketplace implementation (only "coming soon" messaging)

## Capabilities

### New Capabilities
- `landing-ong-redesign`: Complete landing page restructure for ONG conversion
- `mobile-optimization`: Mobile-first responsive improvements across all sections
- `proximamente-section`: Ecommerce and plant tracking preview sections

### Modified Capabilities
- None (all existing landing sections are replaced)

## Approach

1. Rewrite `data.ts` with ONG-focused content and new section data
2. Replace `Hero.tsx` with mobile-first hero with dual CTAs
3. Replace `HorizontalShowcase.tsx` with stacked "Dos Modelos" compare section
4. Replace `FeaturesGrid.tsx` with explanatory sections (Qué es Citronela, Laboratorio, Red Solidaria)
5. Add new `Testimonios.tsx` section component
6. Add new `ProcesoAdmision.tsx` timeline section
7. Add new `Proximamente.tsx` section for ecommerce + plant tracking roadmap
8. Update `CTA.tsx` with final conversion CTA
9. Replace `EcosystemBand.tsx` with commitment section
10. Simplify `Scene3D.tsx` (remove phone mockup 3D, keep subtle background particles)
11. Update `page.tsx` metadata

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `components/features/landing/data.ts` | Modified | All content replaced with ONG messaging |
| `components/features/landing/sections/Hero.tsx` | Modified | Mobile-first hero with dual CTAs |
| `components/features/landing/sections/HorizontalShowcase.tsx` | Replaced | Replaced with Dos Modelos compare section |
| `components/features/landing/sections/FeaturesGrid.tsx` | Replaced | Replaced with explanatory ONG sections |
| `components/features/landing/sections/CTA.tsx` | Modified | Final conversion CTA |
| `components/features/landing/sections/EcosystemBand.tsx` | Replaced | Commitment section |
| `components/features/landing/sections/Header.tsx` | Modified | Mobile-optimized nav |
| `components/features/landing/sections/Footer.tsx` | Modified | Updated footer content |
| `components/features/landing/sections/Testimonios.tsx` | New | Testimonial cards section |
| `components/features/landing/sections/ProcesoAdmision.tsx` | New | Admission process timeline |
| `components/features/landing/sections/Proximamente.tsx` | New | Ecommerce + plant tracking roadmap |
| `components/landing/Scene3D.tsx` | Modified | Simplified background particles only |
| `app/page.tsx` | Modified | Metadata updated |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Mobile layout breaks due to new section components | Medium | Test on 360px, 375px, 414px widths during implementation |
| GSAP animations too heavy on mobile | Medium | Reduce particle count, disable parallax on mobile, use `prefers-reduced-motion` |
| Content length makes landing page very long | Medium | Use collapsible sections or progressive disclosure for mobile |

## Rollback Plan

Revert all modified files to their previous state using git: `git checkout HEAD~1 -- components/features/landing/ app/page.tsx`

## Dependencies

- Existing Tailwind config and theme must remain unchanged
- GSAP/ScrollTrigger/Lenis must remain for animations
- No new npm dependencies required

## Success Criteria

- [ ] Landing page communicates ONG mission clearly within 3 seconds of load
- [ ] Two primary CTAs (paciente / cultivador) are visible above the fold on mobile
- [ ] All sections render correctly on 360px, 375px, and 414px viewports
- [ ] 3D phone mockups removed; replaced with explanatory content
- [ ] PROXIMAMENTE section visible with ecommerce and plant tracking roadmap
- [ ] Build compiles without errors
- [ ] No regressions in existing app functionality