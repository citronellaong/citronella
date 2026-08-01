'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Sections
import { Header } from '../features/landing/sections/Header';
import { Hero } from '../features/landing/sections/Hero';
import { FeaturesGrid } from '../features/landing/sections/FeaturesGrid';
import { DosModelos } from '../features/landing/sections/DosModelos';
import { LaboratorioSection } from '../features/landing/sections/LaboratorioSection';
import { RedSolidaria } from '../features/landing/sections/RedSolidaria';
import { Testimonios } from '../features/landing/sections/Testimonios';
import { Proximamente } from '../features/landing/sections/Proximamente';
import { ProcesoAdmision } from '../features/landing/sections/ProcesoAdmision';
import { CTA } from '../features/landing/sections/CTA';
import { Footer } from '../features/landing/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    let lenis: Lenis | null = null;

    if (!isMobile && !isTouchDevice) {
      lenis = new Lenis({ 
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
      
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis!.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      /* ======================================================
         HERO ORCHESTRATION
         ====================================================== */
      if (heroRef.current) {
        const tl = gsap.timeline();
        tl.from(heroRef.current.querySelectorAll('[data-hero-text]'), { 
          y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.5 
        })
        .from(heroRef.current.querySelectorAll('[data-hero-stat]'), { 
          y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' 
        }, '-=0.4');

        const phase1 = gsap.timeline({ 
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 } 
        });
        phase1.to(heroRef.current.querySelectorAll('[data-hero-text]'), { 
          y: -100, opacity: 0.3, stagger: 0.05, ease: 'none', duration: 0.5 
        });
      }

      /* ======================================================
         FEATURES
         ====================================================== */
      if (featuresRef.current) {
        gsap.from(featuresRef.current.querySelectorAll('[data-feat-title]'), {
          y: 50, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
        const cards = featuresRef.current.querySelectorAll('[data-feature]');
        gsap.from(cards, {
          y: 80, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: cards[0]?.parentElement, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }

      /* ======================================================
         CTA
         ====================================================== */
      if (ctaRef.current) {
        gsap.from(ctaRef.current.querySelectorAll('[data-cta]'), {
            y: 60, opacity: 0, scale: 0.95, duration: 0.9, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#07120b] text-zinc-100 overflow-x-hidden overflow-y-auto touch-auto">
      <Header />

      {/* FIXED PARALLAX BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ contain: 'strict' }}>
        <div 
          className="absolute inset-0 animate-ken-burns" 
          style={{ backgroundImage: 'url(/images/imagen-parallax.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} 
        />
        <div className="absolute inset-0 bg-[#07120b]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07120b] via-transparent to-[#07120b]/40" />
      </div>

      <Hero 
        ref={heroRef} 
        textRef={heroTextRef}
      />

      <FeaturesGrid ref={featuresRef} />

      <DosModelos />

      <LaboratorioSection />

      <RedSolidaria />

      <Testimonios />

      <Proximamente />

      <ProcesoAdmision />

      <CTA ref={ctaRef} />

      <Footer />
    </div>
  );
}