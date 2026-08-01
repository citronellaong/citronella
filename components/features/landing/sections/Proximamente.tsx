import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';
import Link from 'next/link';

interface ProximamenteProps {
  ref?: React.RefObject<HTMLElement>;
}

export const Proximamente = React.forwardRef<HTMLElement, ProximamenteProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/market.jpg" position="center" />
      <AnimatedOrb className="top-[20%] left-[-10%] w-[400px] h-[400px] blur-[100px]" color="rgba(163,230,53,0.06)" delay={-2} />
      <AnimatedOrb className="bottom-[10%] right-[-5%] w-[350px] h-[350px] blur-[90px]" color="rgba(251,191,36,0.05)" delay={-6} />
      <div className="absolute inset-0 bg-grid-weed opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 mb-4">
            PROXIMAMENTE
          </span>
          <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4`}>
            Lo que viene <span className="text-lime-400">pronto</span>
          </h2>
          <p className="text-zinc-400 text-xl">
            Estamos construyendo las herramientas que van a potenciar tu experiencia como socio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Ecommerce */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm border-white/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-400/5 blur-2xl" />
            <div className="relative">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className={`${avigea.className} text-2xl font-normal text-white mb-3`}>Ecommerce de productos derivados</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                Marketplace para comprar derivados cannábicos, artículos de jardín, equipos de cultivo y mucho más.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">Derivados cannábicos</span>
                <span className="px-2 py-1 text-xs rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">Artículos de jardín</span>
                <span className="px-2 py-1 text-xs rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">Equipos de cultivo</span>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">
                En construcción
              </span>
            </div>
          </div>

          {/* Plant Tracking */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm border-white/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/5 blur-2xl" />
            <div className="relative">
              <div className="text-4xl mb-4">📊</div>
              <h3 className={`${avigea.className} text-2xl font-normal text-white mb-3`}>Seguimiento y análisis de plantas</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                Los pacientes dispensados podrán ver en nuestro sistema los niveles de THC y todos los tipos de análisis de sus plantas.
                Trazabilidad completa desde la semilla hasta el frasco.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">THC y cannabinoides</span>
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">Niveles de analitos</span>
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">Dashboard personal</span>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                En construcción
              </span>
            </div>
          </div>

          {/* Cultural Events */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm border-white/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-rose-400/5 blur-2xl" />
            <div className="relative">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className={`${avigea.className} text-2xl font-normal text-white mb-3`}>Eventos culturales</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                Charlas, talleres y encuentros comunitarios sobre cultura cannábica, música en vivo y espacios de arte.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-rose-400/10 text-rose-300 border border-rose-400/20">Charlas</span>
                <span className="px-2 py-1 text-xs rounded-full bg-rose-400/10 text-rose-300 border border-rose-400/20">Talleres</span>
                <span className="px-2 py-1 text-xs rounded-full bg-rose-400/10 text-rose-300 border border-rose-400/20">Música en vivo</span>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-rose-400/10 border border-rose-400/20 text-rose-300">
                En construcción
              </span>
            </div>
          </div>

          {/* Thematic Events */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm border-white/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-400/5 blur-2xl" />
            <div className="relative">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className={`${avigea.className} text-2xl font-normal text-white mb-3`}>Eventos temáticos</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-4">
                Cenas de cannabicultura, noches de análisis de terpenos, sesiones de yoga cannábico y mucho más.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20">Cenas temáticas</span>
                <span className="px-2 py-1 text-xs rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20">Yoga cannábico</span>
                <span className="px-2 py-1 text-xs rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20">Análisis de terpenos</span>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-300">
                En construcción
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-base mb-6">
            ¿Querés ser de los primeros en acceder? Dejanos tu correo y te avisamos cuando esté listo.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5Iqxu5JLn7YY2XDooFEpSmTkibDkc_UZq4_DiyxeFBtK50Q/viewform"
            className="group relative inline-block px-8 py-3 rounded-2xl font-bold text-base text-[#07120b] bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] active:scale-95"
          >
            <span className="relative z-10">Quiero ser notificado</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
});

Proximamente.displayName = 'Proximamente';