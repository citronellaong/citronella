import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';

interface RedSolidariaProps {
  ref?: React.RefObject<HTMLElement>;
}

export const RedSolidaria = React.forwardRef<HTMLElement, RedSolidariaProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/community.jpg" position="center" />
      <AnimatedOrb className="top-[30%] left-[20%] w-[400px] h-[400px] blur-[100px]" color="rgba(251,191,36,0.08)" delay={-3} />
      <AnimatedOrb className="bottom-[10%] right-[10%] w-[350px] h-[350px] blur-[90px]" color="rgba(163,230,53,0.06)" delay={-7} />
      <div className="absolute inset-0 bg-grid-weed opacity-12 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 mb-4">
            Modelo Solidario
          </span>
          <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-6`}>
            Tu patio, <span className="text-lime-400">la medicina de otros</span>
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Cada cultivador solidario alimenta a 3 pacientes de la red.
            Una estructura colaborativa que hace accesible lo que antes era imposible.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl border border-amber-400/10 bg-white/[0.02] backdrop-blur-sm">
            <div className={`${avigea.className} text-4xl font-normal text-amber-400 mb-2`}>150</div>
            <div className="text-zinc-400 text-sm uppercase tracking-wider">Pacientes atendidos</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-amber-400/10 bg-white/[0.02] backdrop-blur-sm">
            <div className={`${avigea.className} text-4xl font-normal text-amber-400 mb-2`}>150</div>
            <div className="text-zinc-400 text-sm uppercase tracking-wider">Cultivadores solidarios</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-amber-400/10 bg-white/[0.02] backdrop-blur-sm">
            <div className={`${avigea.className} text-4xl font-normal text-amber-400 mb-2`}>450</div>
            <div className="text-zinc-400 text-sm uppercase tracking-wider">Personas en la red</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-base max-w-lg mx-auto">
            No cultivás solo para vos. Tu patio se transforma en un polo medicinal que sostiene a toda una comunidad.
          </p>
        </div>
      </div>
    </section>
  );
});

RedSolidaria.displayName = 'RedSolidaria';