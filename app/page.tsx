import { Metadata } from 'next';
import LandingPage from '@/components/landing/LandingPage';

export const metadata: Metadata = {
  title: 'Citronela — Cannabis Medicinal Legal y Científico',
  description: 'Asociación Civil Citronela. Acceso legal al cannabis medicinal con respaldo científico, laboratorio propio y red solidaria en Córdoba. Gestión REPROCAN, acompañamiento médico y membresías transparentes.',
};

export default function Home() {
  return <LandingPage />;
}
