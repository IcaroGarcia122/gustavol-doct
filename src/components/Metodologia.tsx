import React from 'react';
import { motion } from 'motion/react';
import { FileText, SlidersHorizontal, Target, TrendingUp } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/gymData';

export const Metodologia: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return FileText;
      case 'Sliders':
        return SlidersHorizontal;
      case 'Target':
        return Target;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Target;
    }
  };

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B7BEA]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B7BEA]/20 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider mb-3"
          >
            Nossa Metodologia
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Como funciona o seu acompanhamento no CT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 mt-4 leading-relaxed"
          >
            Quatro passos integrados e metrificados para garantir que seu esforço se transforme em resultados visíveis e sustentáveis.
          </motion.p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0B7BEA]/20 via-[#0B7BEA] to-[#0B7BEA]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">
            {METHODOLOGY_STEPS.map((step, index) => {
              const IconComponent = getIcon(step.iconName);
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-[#1B1B1B] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#0B7BEA]/50 transition-all duration-300 relative group"
                >
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-[#0B7BEA] tracking-tighter">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0B7BEA]/10 text-[#0B7BEA] flex items-center justify-center group-hover:bg-[#0B7BEA] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0B7BEA] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
