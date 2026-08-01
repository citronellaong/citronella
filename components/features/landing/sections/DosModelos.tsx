import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';
import Link from 'next/link';

interface DosModelosProps {
  ref?: React.RefObject<HTMLElement>;
}

export const DosModelos = React.forwardRef<HTMLElement, DosModelosProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/features.jpg" position="center" />
      <AnimatedOrb className="top-[10%] left-[-10%] w-[400px] h-[400px] blur-[100px]" color="rgba(163,230,53,0.08)" delay={-2} />
      <AnimatedOrb className="bottom-[10%] right-[-10%] w-[350px] h-[350px] blur-[90px]" color="rgba(34,197,94,0.06)" delay={-6} />
      <div className="absolute inset-0 bg-grid-weed opacity-12 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4`}>
            Dos formas de <span className="text-lime-400">acceder</span>
          </h2>
          <p className="text-zinc-400 text-xl">
            Elegí el modelo que se adapte a tu situación. Ambos te dan acceso a medicina de calidad con respaldo legal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Paciente Dispensado */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden border-lime-400/10">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-lime-400/10 blur-3xl transition-all duration-500" />
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 mb-4">
                Paciente Dispensado
              </span>
              <h3 className={`${avigea.className} text-3xl font-normal text-white mb-2`}>$300.000<span className="text-zinc-500 text-lg font-normal">/mes</span></h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Tu medicina mensual garantizada con acompañamiento médico y legal.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>40 gramos mensuales garantizados</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Genéticas analizadas en laboratorio propio</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>REPROCAN gestionado por la ONG</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Acompañamiento médico continuo</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 mt-0.5">✓</span>
                  <span>Sin inversión en equipos ni infraestructura</span>
                </li>
              </ul>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5Iqxu5JLn7YY2XDooFEpSmTkibDkc_UZq4_DiyxeFBtK50Q/viewform"
                className="group relative inline-block px-8 py-3 rounded-2xl font-bold text-base text-[#07120b] bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] active:scale-95"
              >
                <span className="relative z-10">Postulate como paciente</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Cultivador Solidario */}
          <div className="group relative p-8 rounded-3xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden border-emerald-400/10">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-500" />
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 mb-4">
                Cultivador Solidario
              </span>
              <h3 className={`${avigea.className} text-3xl font-normal text-white mb-2`}>$500.000<span className="text-zinc-500 text-lg font-normal">/mes</span></h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Tu patio transformado en un polo medicinal. Instalación completa sin costo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Indoor de 4 líneas (9 plantas cada una) instalado gratis</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>1 línea para vos (40g/mes) + 3 para la red solidaria</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Jardineros profesionales con seguimiento diario</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Sin inversión en equipos ni infraestructura</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Tu patio alimenta a 3 pacientes de la comunidad</span>
                </li>
              </ul>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5Iqxu5JLn7YY2XDooFEpSmTkibDkc_UZq4_DiyxeFBtK50Q/viewform"
                className="group relative inline-block px-8 py-3 rounded-2xl font-bold text-base text-[#07120b] bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <span className="relative z-10">Postulate como cultivador</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DosModelos.displayName = 'DosModelos';