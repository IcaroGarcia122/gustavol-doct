import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Award, Zap, TrendingUp } from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/gymData';

export const Diferenciais: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Award':
        return Award;
      case 'Zap':
        return Zap;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Dumbbell;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#F7F8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Strategic Handwritten Phrase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 inline-block"
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#0B7BEA] font-bold tracking-wide -rotate-1 inline-block">
              Você não treina sozinho.
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0F1115] tracking-tight"
          >
            Diferenciais que fazem a diferença na sua rotina
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed"
          >
            Esqueça fichas genéricas e salas lotadas. Oferecemos o ecossistema ideal para a sua transformação física.
          </motion.p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DIFFERENTIALS_DATA.map((item, index) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0B7BEA]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Outline Blue Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B7BEA]/5 border border-[#0B7BEA]/20 flex items-center justify-center text-[#0B7BEA] mb-6 group-hover:bg-[#0B7BEA] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1115] mb-3 group-hover:text-[#0B7BEA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#0B7BEA] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Metodologia CT</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
