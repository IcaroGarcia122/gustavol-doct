import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, MessageCircle, Clock, ShieldCheck, Phone } from 'lucide-react';
import { UNITS_DATA, CONTACT_INFO } from '../data/gymData';

interface UnidadesProps {
  onOpenEvaluationModal?: () => void;
}

export const Unidades: React.FC<UnidadesProps> = ({ onOpenEvaluationModal }) => {
  return (
    <section id="unidades" className="py-20 sm:py-28 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B7BEA]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B7BEA]/20 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0B7BEA]/30"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Duas Unidades para Servir Você</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Escolha a unidade mais perto de você em <span className="text-[#0B7BEA]">Rio Grande - RS</span>
          </motion.h2>

          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Estrutura completa com atendimento 100% orientado, aparelhos modernos e ambiente climatizado no centro e no Cassino.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {UNITS_DATA.map((unit, index) => {
            const phone = unit.phone || "5553984377312";
            const whatsappText = encodeURIComponent(`Olá! Gostaria de agendar uma aula experimental na ${unit.name} (${unit.neighborhood}).`);
            const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#1B1B1B] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#0B7BEA]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#0B7BEA]/20 text-[#0B7BEA] border border-[#0B7BEA]/30">
                    {unit.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Treino Presencial</span>
                  </div>
                </div>

                {/* Unit Details */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#0B7BEA] transition-colors">
                    {unit.name}
                  </h3>

                  <div className="space-y-3 pt-2 text-gray-300 text-sm sm:text-base">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0B7BEA] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">{unit.street}</p>
                        <p className="text-xs text-gray-400">
                          {unit.neighborhood} • CEP {unit.cep}
                        </p>
                        <p className="text-xs font-semibold text-gray-300">{unit.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0B7BEA] shrink-0" />
                      <p className="text-sm font-semibold text-white">
                        WhatsApp: <span className="text-[#0B7BEA]">{unit.phoneDisplay}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#0B7BEA] shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-300">
                        {unit.hours}
                      </p>
                    </div>
                  </div>

                  {/* Embedded Google Map Preview */}
                  <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 h-48 w-full relative">
                    <iframe
                      title={`Mapa da ${unit.name}`}
                      src={unit.embedMapUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all border border-white/10"
                  >
                    <Navigation className="w-4 h-4 text-[#0B7BEA]" />
                    <span>Ver no Mapa</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-[#0B7BEA]/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Agende sua Aula Experimental</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
