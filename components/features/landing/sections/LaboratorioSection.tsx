import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';

interface LaboratorioSectionProps {
  ref?: React.RefObject<HTMLElement>;
}

export const LaboratorioSection = React.forwardRef<HTMLElement, LaboratorioSectionProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/cultivo.jpg" position="center" />
      <AnimatedOrb className="top-[20%] left-[-5%] w-[400px] h-[400px] blur-[100px]" color="rgba(163,230,53,0.08)" delay={-2} />
      <AnimatedOrb className="bottom-[10%] right-[-5%] w-[350px] h-[350px] blur-[90px]" color="rgba(6,182,212,0.06)" delay={-6} />
      <div className="absolute inset-0 bg-grid-weed opacity-12 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-4">
              Laboratorio Propio
            </span>
            <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-6 leading-tight`}>
              Ciencia que <span className="text-lime-400">garantiza</span> tu medicina
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Cada genética que entregamos es analizada en nuestro laboratorio de analitos.
              Sabés exactamente qué cannabinoides contiene, en qué concentración y con qué perfil terapéutico.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-cyan-400 mt-0.5">🔬</span>
                <span>Análisis de cromatografía para cada lote</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-cyan-400 mt-0.5">🧪</span>
                <span>Perfiles de cannabinoides verificados</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-cyan-400 mt-0.5">🧬</span>
                <span>Trazabilidad de la semilla al frasco</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-cyan-400 mt-0.5">🏥</span>
                <span>Ensayo clínico propio en Parkinson</span>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-lime-400/10 to-cyan-400/5 border border-lime-400/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔬</div>
                <p className="text-zinc-400 text-lg">Laboratorio de analitos</p>
                <p className="text-zinc-500 text-sm mt-2">Resultados verificables, no promesas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

LaboratorioSection.displayName = 'LaboratorioSection';