import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';

export const FeaturesGrid = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/features.jpg" position="center" />
      <AnimatedOrb className="top-[20%] left-[-5%] w-[400px] h-[400px] blur-[100px]" color="rgba(163,230,53,0.08)" delay={-2} />
      <AnimatedOrb className="bottom-[10%] right-[-5%] w-[350px] h-[350px] blur-[90px]" color="rgba(34,197,94,0.06)" delay={-6} />
      <div className="absolute inset-0 bg-grid-weed opacity-12 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 data-feat-title className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4`}>
            ¿Qué es <span className="text-lime-400">Citronella?</span>
          </h2>
          <p data-feat-title className="text-zinc-400 text-xl">
            Una asociación civil que combina ciencia, legalidad y solidaridad para que el cannabis medicinal sea accesible, seguro y transparente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '⚖️',
              title: 'Marco Legal',
              desc: 'Operamos bajo la Ley 27.357 con gestión completa del REPROCAN. Tu membresía tiene respaldo institucional y jurídico.',
              gradient: 'from-lime-300 to-green-600',
              glow: 'rgba(163,230,53,0.3)',
              border: 'border-lime-400/15 hover:border-lime-400/40',
              bg: 'bg-lime-400/10 group-hover:bg-lime-400/25',
            },
            {
              icon: '🏛️',
              title: 'Sede Física',
              desc: 'Nos encontramos en 9 de Julio 1196, Córdoba Capital. Atendimiento presencial con equipo humano que escucha tu caso.',
              gradient: 'from-emerald-300 to-teal-600',
              glow: 'rgba(16,185,129,0.3)',
              border: 'border-emerald-400/15 hover:border-emerald-400/40',
              bg: 'bg-emerald-400/10 group-hover:bg-emerald-400/25',
            },
            {
              icon: '🔬',
              title: 'Laboratorio Propio',
              desc: 'Cada genética es analizada en nuestro laboratorio de analitos. Pureza verificada científicamente, sin sorpresas.',
              gradient: 'from-cyan-300 to-blue-600',
              glow: 'rgba(6,182,212,0.3)',
              border: 'border-cyan-400/15 hover:border-cyan-400/40',
              bg: 'bg-cyan-400/10 group-hover:bg-cyan-400/25',
            },
            {
              icon: '🤝',
              title: 'Red Solidaria',
              desc: 'Sos parte de una comunidad donde cada cultivador alimenta a pacientes que no pueden hacerlo solos.',
              gradient: 'from-violet-300 to-purple-600',
              glow: 'rgba(139,92,246,0.3)',
              border: 'border-violet-400/15 hover:border-violet-400/40',
              bg: 'bg-violet-400/10 group-hover:bg-violet-400/25',
            },
            {
              icon: '👨‍⚕️',
              title: 'Acompañamiento Médico',
              desc: 'Seguimiento clínico continuo con profesionales que ajustan tu tratamiento según evolución.',
              gradient: 'from-amber-300 to-orange-600',
              glow: 'rgba(251,191,36,0.3)',
              border: 'border-amber-400/15 hover:border-amber-400/40',
              bg: 'bg-amber-400/10 group-hover:bg-amber-400/25',
            },
            {
              icon: '💰',
              title: 'Membresía Transparente',
              desc: 'Sabés exactamente dónde va cada peso. Sin costos ocultos ni sorpresas.',
              gradient: 'from-rose-300 to-pink-600',
              glow: 'rgba(244,63,94,0.3)',
              border: 'border-rose-400/15 hover:border-rose-400/40',
              bg: 'bg-rose-400/10 group-hover:bg-rose-400/25',
            },
          ].map((f) => (
            <div
              key={f.title}
              data-feature
              className="group relative p-7 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${f.bg} blur-3xl transition-all duration-500`} />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  style={{ boxShadow: `0 10px 30px -10px ${f.glow}` }}
                >
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className={`${avigea.className} text-2xl font-normal text-white mb-2`}>{f.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesGrid.displayName = 'FeaturesGrid';
