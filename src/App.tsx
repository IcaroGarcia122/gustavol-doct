/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Diferenciais } from './components/Diferenciais';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { Metodologia } from './components/Metodologia';
import { Estrutura } from './components/Estrutura';
import { Unidades } from './components/Unidades';
import { Resultados } from './components/Resultados';
import { Depoimentos } from './components/Depoimentos';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { EvaluationModal } from './components/EvaluationModal';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export default function App() {
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'estrutura', 'unidades', 'resultados', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openEvaluationModal = () => setIsEvaluationModalOpen(true);
  const closeEvaluationModal = () => setIsEvaluationModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0F1115] font-sans antialiased selection:bg-[#0B7BEA] selection:text-white">
      {/* Header */}
      <Header
        onOpenEvaluationModal={openEvaluationModal}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenEvaluationModal={openEvaluationModal} />
        <Sobre />
        <Servicos onOpenEvaluationModal={openEvaluationModal} />
        <Estrutura />
        <Unidades onOpenEvaluationModal={openEvaluationModal} />
        <Resultados onOpenEvaluationModal={openEvaluationModal} />
        <Metodologia />
        <Diferenciais />
        <Depoimentos />
        <CtaFinal onOpenEvaluationModal={openEvaluationModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Evaluation Modal */}
      <EvaluationModal
        isOpen={isEvaluationModalOpen}
        onClose={closeEvaluationModal}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsapp
        onOpenEvaluationModal={openEvaluationModal}
      />
    </div>
  );
}
