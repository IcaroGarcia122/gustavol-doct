import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/gymData';

export const Depoimentos: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B7BEA]/10 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider mb-3"
          >
            ★ Avaliações Reais no Google Maps
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1115] tracking-tight"
          >
            O que dizem sobre a experiência CT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed"
          >
            Confira os depoimentos e experiências reais dos nossos alunos deixados no Google Maps em Rio Grande - RS.
          </motion.p>
        </div>

        {/* Testimonial Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F7F8FA] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0B7BEA]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-gray-600 ml-1.5">5.0</span>
                  </div>
                  <Quote className="w-8 h-8 text-[#0B7BEA]/20 group-hover:text-[#0B7BEA]/40 transition-colors" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0B7BEA] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#0F1115] truncate">
                      {item.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#0B7BEA] shrink-0" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                    <span className="text-emerald-600 font-semibold">{item.role}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
