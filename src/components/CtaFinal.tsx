import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/gymData';

interface CtaFinalProps {
  onOpenEvaluationModal: () => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({ onOpenEvaluationModal }) => {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#0B7BEA] relative overflow-hidden text-white">
      {/* Background Subtle Geometric Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#045DB5] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Strategic Handwritten Phrase 5 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold tracking-wide -rotate-2 inline-block drop-shadow-md">
              Evolua todos os dias.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Pronto para transformar seus resultados?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Agende sua aula experimental e descubra como um treinamento orientado pode acelerar sua evolução.
          </motion.p>

          {/* Big Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="cta-final-whatsapp-button"
              onClick={onOpenEvaluationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#0B7BEA] hover:bg-blue-50 font-extrabold text-lg px-9 py-5 rounded-full transition-all duration-300 shadow-2xl hover:scale-[1.02] active:scale-95 group"
            >
              <MessageCircle className="w-6 h-6 fill-[#0B7BEA] group-hover:scale-110 transition-transform" />
              <span>Agende sua Aula Experimental</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Value Badges */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-blue-100 max-w-2xl mx-auto border-t border-white/20 mt-8">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Aula Experimental Presencial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-white" />
              <span>Horários Flexíveis</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-white" />
              <span>Rio Grande - RS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
