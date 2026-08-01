import React from 'react';
import { BgImage } from '@/components/shared/BgImage';
import { AnimatedOrb } from '@/components/shared/AnimatedOrb';
import { avigea } from '@/lib/fonts';

interface ProcesoAdmisionProps {
  ref?: React.RefObject<HTMLElement>;
}

const pasos = [
  {
    num: '01',
    title: 'Completá el formulario',
    desc: 'Respondé las preguntas sobre tu situación, presupuesto y modelo preferido. Es rápido y sin compromiso.',
  },
  {
    num: '02',
    title: 'Agendá tu entrevista',
    desc: 'Elegí presencial en nuestra sede (9 de Julio 1196, Córdoba) o virtual por Google Meet.',
  },
  {
    num: '03',
    title: 'Alta y membresía',
    desc: 'Validamos tu documentación, te damos de alta y activamos tu membresía con acceso inmediato.',
  },
  {
    num: '04',
    title: 'Comenzá tu tratamiento',
    desc: 'Recibí tu medicina con todos los respaldos legales y el acompañamiento médico que necesitás.',
  },
];

export const ProcesoAdmision = React.forwardRef<HTMLElement, ProcesoAdmisionProps>((props, ref) => {
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden z-[2] bg-[#07120b] gpu-section">
      <BgImage src="/images/bg/features.jpg" position="center" />
      <AnimatedOrb className="top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[120px]" color="rgba(163,230,53,0.06)" />
      <div className="absolute inset-0 bg-grid-weed opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`${avigea.className} text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4`}>
            Cómo <span className="text-lime-400">ingresás</span>
          </h2>
          <p className="text-zinc-400 text-xl">
            Un proceso simple, transparente y sin burocracia innecesaria.
          </p>
        </div>

        <div className="space-y-0">
          {pasos.map((paso, i) => (
            <div key={paso.num} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                  <span className={`${avigea.className} text-lime-400 text-sm font-medium`}>{paso.num}</span>
                </div>
                {i < pasos.length - 1 && (
                  <div className="w-px h-full min-h-[60px] bg-lime-400/10 mt-2" />
                )}
              </div>
              <div className="pb-10">
                <h3 className={`${avigea.className} text-xl font-normal text-white mb-2`}>{paso.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProcesoAdmision.displayName = 'ProcesoAdmision';