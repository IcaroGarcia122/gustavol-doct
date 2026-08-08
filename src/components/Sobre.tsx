import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_GYM_IMAGE } from '../data/gymData';

export const Sobre: React.FC = () => {
  const highlights = [
    "Atendimento individualizado e presencial em cada treino",
    "Ambiente seleto sem filas em aparelhos",
    "Estrutura moderna planejada para biossegurança e biomecânica",
    "Professores dedicados à correção de movimento e evolução"
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B7BEA]/10 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider">
              Sobre o CT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1115] tracking-tight leading-[1.15]">
              Mais que uma academia.<br />
              <span className="text-[#0B7BEA]">Um centro de transformação.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              No Gustavo Lêdo CT cada aluno recebe atenção individual, planejamento personalizado e acompanhamento constante para alcançar seus objetivos com segurança.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Eliminamos o modelo ultrapassado das academias convencionais, onde você fica perdido com uma ficha genérica na mão. Aqui, a sua meta é levada a sério por uma equipe focada na sua postura, na sua força e na sua constância.
            </p>

            {/* Feature Bullets */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="p-1 rounded-full bg-[#0B7BEA]/10 text-[#0B7BEA] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B7BEA]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1B1B1B] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-4">
              <a
                href="#estrutura"
                className="inline-flex items-center gap-3 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#0B7BEA]/20 hover:shadow-[#0B7BEA]/35 hover:-translate-y-0.5 group"
              >
                <span>Conheça Nossa Estrutura</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src={ABOUT_GYM_IMAGE}
                alt="Ambiente do Gustavo Lêdo Centro de Treinamento Físico"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              {/* Floating Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl bg-[#0F1115]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs text-[#0B7BEA] font-bold uppercase tracking-wider">Acompanhamento 100%</p>
                    <h3 className="text-sm sm:text-lg font-bold text-white mt-0.5 leading-snug">Metodologia de Alta Performance</h3>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B7BEA] flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg shrink-0">
                    CT
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Decorative Glow */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#0B7BEA]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
