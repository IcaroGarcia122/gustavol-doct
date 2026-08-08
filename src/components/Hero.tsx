import React from 'react';
import { MessageCircle, ArrowRight, Target, HeartPulse, UserCheck, ShieldCheck, Sparkles, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_FACADE_IMAGE } from '../data/gymData';

interface HeroProps {
  onOpenEvaluationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluationModal }) => {
  const indicators = [
    {
      icon: Target,
      title: "Treinamento Orientado",
      desc: "Prescrição e acompanhamento individual em cada aula"
    },
    {
      icon: UserCheck,
      title: "Acompanhamento Próximo",
      desc: "Professores sempre presentes corrigindo postura"
    },
    {
      icon: ShieldCheck,
      title: "Resultados Reais",
      desc: "Metodologia cientificamente comprovada"
    },
    {
      icon: HeartPulse,
      title: "Saúde e Performance",
      desc: "Evolução constante livre de dores e lesões"
    }
  ];

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#0F1115]">
      {/* Background Facade Image with high transparency & gradient blend */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          src={HERO_FACADE_IMAGE}
          alt="Gustavo Lêdo Centro de Treinamento Físico"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-110 opacity-35"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('HERO.png')) {
              target.src = '/assets/hero.png';
            }
          }}
        />
        {/* Dark ambient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-black/90" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        {/* Floating Animated Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#0B7BEA]/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#0B7BEA]/15 rounded-full blur-[140px] pointer-events-none"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-10 pb-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8">
            {/* Strategic Handwritten Phrase 1 (Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <span className="font-handwriting text-2xl sm:text-3xl text-[#0B7BEA] font-bold tracking-wide -rotate-2 inline-block drop-shadow-md">
                Como encaixar o treino na rotina?
              </span>
              <Sparkles className="w-5 h-5 text-[#0B7BEA] animate-spin" style={{ animationDuration: '6s' }} />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
            >
              O lugar certo para você{' '}
              <span className="relative inline-block text-[#0B7BEA]">
                evoluir
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-1 left-0 h-1.5 bg-[#0B7BEA]/40 rounded-full"
                />
              </span>{' '}
              todos os dias.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Treinamento físico 100% orientado, acompanhamento próximo e metodologia focada em resultados reais.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
            >
              <button
                id="hero-agendar-cta"
                onClick={onOpenEvaluationModal}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#0B7BEA]/30 hover:shadow-[#0B7BEA]/50 hover:-translate-y-1 active:translate-y-0 group"
              >
                {/* Shine Sweep Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Agendar Avaliação</span>
              </button>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-semibold text-base px-7 py-4 rounded-full transition-all duration-300 hover:border-white/40 hover:-translate-y-0.5 group"
              >
                <span>Conheça o CT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-gray-400 flex items-center gap-2 font-medium"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
              Atendimento via WhatsApp • Resposta rápida em Rio Grande - RS
            </motion.p>
          </div>

          {/* Right Floating Badge Column */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {/* Floating Glassmorphism Stat Card 1 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl text-white flex items-center gap-4 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B7BEA] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#0B7BEA]/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight text-white">100% Presencial</div>
                  <div className="text-xs text-gray-300 font-medium">Acompanhamento de postura e carga</div>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Stat Card 2 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl text-white flex items-center gap-4 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight text-white">2 Unidades</div>
                  <div className="text-xs text-gray-300 font-medium">Hidráulica & Balneário Cassino</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Hero Indicators Row (Bottom Banner) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-[#1B1B1B]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 sm:p-6 shadow-2xl"
        >
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl transition-all duration-300 group cursor-default"
              >
                <div className="p-2.5 rounded-xl bg-[#0B7BEA]/10 text-[#0B7BEA] border border-[#0B7BEA]/20 group-hover:bg-[#0B7BEA] group-hover:text-white transition-all duration-300 shrink-0 shadow-md">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug break-words group-hover:text-[#0B7BEA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-normal break-words">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

