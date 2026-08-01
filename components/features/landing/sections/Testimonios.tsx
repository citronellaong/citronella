import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';

interface TestimoniosProps {
  ref?: React.RefObject<HTMLElement>;
}

const testimonios = [
  {
    nombre: 'María C.',
    rol: 'Paciente dispensado',
    avatar: '👩',
    quote: 'Desde que estoy en Citronela nunca más me faltó mi medicina. La calidad es superior y tengo la tranquilidad de saber que todo es legal y analizado en laboratorio.',
    tag: 'Paciente',
    tagCls: 'text-lime-400 bg-lime-400/10',
  },
  {
    nombre: 'Carlos R.',
    rol: 'Cultivador solidario',
    avatar: '👨‍🌾',
    quote: 'Nunca imaginé que mi patio podía cambiar la vida de otras personas. Citronela me instaló todo y ahora 4 pacientes reciben su medicina mensual. Es un orgullo.',
    tag: 'Cultivador',
    tagCls: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    nombre: 'Laura M.',
    rol: 'Familiar de paciente',
    avatar: '👩‍⚕️',
    quote: 'Cuidar a mi madre era desgastante. Delegar el suministro en Citronela le devolvió la paz a toda la familia. Atención humana y profesional en todo momento.',
    tag: 'Familiar',
    tagCls: 'text-amber-400 bg-amber-400/10',
  },
];

export const Testimonios = React.forwardRef<HTMLElement, TestimoniosProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/cta.jpg" position="center" />
      <AnimatedOrb className="top-[10%] right-[10%] w-[400px] h-[400px] blur-[100px]" color="rgba(163,230,53,0.06)" delay={-4} />
      <AnimatedOrb className="bottom-[20%] left-[5%] w-[300px] h-[300px] blur-[80px]" color="rgba(251,191,36,0.05)" delay={-8} />
      <div className="absolute inset-0 bg-grid-weed opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4`}>
            Quienes ya están <span className="text-lime-400">aquí</span>
          </h2>
          <p className="text-zinc-400 text-xl">
            Historias reales de personas que confiaron en nuestra asociación civil.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="group relative p-6 rounded-2xl border bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 border-white/5"
            >
              <div className="relative">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${t.tagCls} mb-4`}>
                  {t.tag}
                </span>
                <p className="text-zinc-300 text-base leading-relaxed mb-6 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <div className="text-white font-medium text-sm">{t.nombre}</div>
                    <div className="text-zinc-500 text-xs">{t.rol}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonios.displayName = 'Testimonios';