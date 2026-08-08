import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { TRANSFORMATIONS_DATA } from '../data/gymData';

interface ResultadosProps {
  onOpenEvaluationModal: () => void;
}

export const Resultados: React.FC<ResultadosProps> = ({ onOpenEvaluationModal }) => {
  return (
    <section id="resultados" className="py-20 sm:py-28 bg-[#F7F8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Strategic Handwritten Phrase 4 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-1 inline-block"
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#0B7BEA] font-bold tracking-wide -rotate-1 inline-block">
              Resultados reais.
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1115] tracking-tight"
          >
            Resultados reais. Pessoas reais.
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Veja a evolução física de quem decidiu trocar a promessa pela constância no Gustavo Lêdo CT.
          </p>
        </div>

        {/* Single Transformation Card */}
        <div className="max-w-2xl mx-auto">
          {TRANSFORMATIONS_DATA.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Side-by-Side Images (No ANTES/DEPOIS badges as requested) */}
                <div className="relative h-[340px] sm:h-[380px] bg-gray-950 p-1.5 grid grid-cols-2 gap-1.5">
                  {/* First Image (transformação2.png) */}
                  <div className="relative h-full overflow-hidden rounded-2xl group">
                    <img
                      src={item.beforeImage}
                      alt={`Resultado 1 - ${item.name}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('%20')) {
                          target.src = encodeURI(item.beforeImage);
                        }
                      }}
                    />
                  </div>

                  {/* Second Image (transformação 1.png) */}
                  <div className="relative h-full overflow-hidden rounded-2xl group">
                    <img
                      src={item.afterImage}
                      alt={`Resultado 2 - ${item.name}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('%20')) {
                          target.src = encodeURI(item.afterImage);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F1115]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#0B7BEA] font-semibold">
                          @vagnersvitoria
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#0B7BEA] bg-[#0B7BEA]/10 px-3 py-1.5 rounded-full border border-[#0B7BEA]/20">
                        {item.goal}
                      </span>
                    </div>

                    <div className="mt-4 p-3.5 bg-[#F7F8FA] rounded-xl border border-gray-100">
                      <p className="text-sm font-bold text-[#045DB5]">
                        {item.resultSummary}
                      </p>
                    </div>

                    <div className="text-gray-700 text-xs sm:text-sm mt-5 space-y-3 leading-relaxed">
                      {item.testimonial.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {paragraph.split(/(@\w+(?:\.\w+)?)/g).map((part, i) =>
                            part.startsWith('@') ? (
                              <span key={i} className="font-bold text-[#0B7BEA] bg-[#0B7BEA]/10 px-1 py-0.5 rounded">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                    {item.stats.weightChange && (
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-gray-400 font-semibold uppercase">Peso</span>
                        <span className="text-xs font-bold text-gray-900">{item.stats.weightChange}</span>
                      </div>
                    )}
                    {item.stats.bodyFatChange && (
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-gray-400 font-semibold uppercase">Gordura</span>
                        <span className="text-xs font-bold text-gray-900">{item.stats.bodyFatChange}</span>
                      </div>
                    )}
                    {item.stats.muscleGain && (
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="block text-[10px] text-gray-400 font-semibold uppercase">Massa</span>
                        <span className="text-xs font-bold text-[#0B7BEA]">{item.stats.muscleGain}</span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenEvaluationModal}
            className="inline-flex items-center gap-3 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#0B7BEA]/20 hover:shadow-[#0B7BEA]/35"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Quero Alcançar Resultados Como Esses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
