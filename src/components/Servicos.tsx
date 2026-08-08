import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Activity, ClipboardCheck, ShieldCheck, Check, Bike, Sun, X, MessageCircle, Play } from 'lucide-react';
import { SERVICES_DATA } from '../data/gymData';
import { ServiceItem } from '../types';

interface ServicosProps {
  onOpenEvaluationModal: () => void;
}

export const Servicos: React.FC<ServicosProps> = ({ onOpenEvaluationModal }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Activity':
        return Activity;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Bike':
        return Bike;
      case 'Sun':
        return Sun;
      default:
        return Dumbbell;
    }
  };

  const handleOpenService = (service: ServiceItem) => {
    if (service.videoUrl || service.whatsappPhone) {
      setActiveModalService(service);
    } else {
      onOpenEvaluationModal();
    }
  };

  const handleServiceWhatsapp = (service: ServiceItem) => {
    const phone = service.whatsappPhone || "5553984377312";
    const text = encodeURIComponent(`Olá! Gostaria de saber mais detalhes e informações sobre ${service.title}.`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setActiveModalService(null);
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#F7F8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B7BEA]/10 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider mb-2">
            Nossos Serviços & Modalidades
          </div>

          <div>
            <span className="font-handwriting text-2xl sm:text-3xl text-[#0B7BEA] font-bold tracking-wide rotate-1 inline-block">
              Seu treino. Seu resultado.
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1115] tracking-tight mt-1"
          >
            Treinamento completo para seus objetivos.
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Soluções personalizadas e modalidades exclusivas em Rio Grande para atender à sua rotina de saúde e alta performance.
          </p>
        </div>

        {/* Services Cards Grid - Compact Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0B7BEA]/30 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0B7BEA]/10 text-[#0B7BEA] flex items-center justify-center group-hover:bg-[#0B7BEA] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0B7BEA]/10 text-[#0B7BEA] border border-[#0B7BEA]/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1115] mb-2 group-hover:text-[#0B7BEA] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-snug mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-gray-100 mb-2">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#0B7BEA] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50">
                  <button
                    onClick={() => handleOpenService(service)}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#0B7BEA] hover:text-white text-gray-800 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {service.videoUrl && <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>Saber Mais</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail / Video Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg sm:max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-4 border border-gray-100 flex flex-col sm:flex-row max-h-[92vh]"
            >
              {/* Close Button (Mobile & Desktop Floating) */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Video Player */}
              {activeModalService.videoUrl ? (
                <div className="w-full sm:w-1/2 bg-black relative flex items-center justify-center h-72 sm:h-auto min-h-[280px] sm:min-h-[420px] shrink-0 overflow-hidden">
                  <video
                    src={activeModalService.videoUrl}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain mx-auto"
                  />
                  {/* Subtle Top Gradient for Close Button readability */}
                  <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                </div>
              ) : null}

              {/* Right Column: Info & WhatsApp CTA */}
              <div className={`w-full ${activeModalService.videoUrl ? 'sm:w-1/2' : 'w-full'} p-5 sm:p-6 flex flex-col justify-between bg-white overflow-y-auto`}>
                <div>
                  {/* Header */}
                  <div className="pr-8 mb-3">
                    {activeModalService.badge && (
                      <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0B7BEA]/10 text-[#0B7BEA] border border-[#0B7BEA]/20 mb-2">
                        {activeModalService.badge}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1115]">
                      {activeModalService.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {activeModalService.description}
                  </p>

                  {/* Highlights */}
                  <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 mb-4">
                    <p className="text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Destaques da Modalidade:
                    </p>
                    <ul className="space-y-1.5">
                      {activeModalService.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#0B7BEA] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2 border-t border-gray-100 mt-auto">
                  <button
                    onClick={() => handleServiceWhatsapp(activeModalService)}
                    className="w-full flex items-center justify-center gap-2 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold py-3.5 px-5 rounded-xl transition-all shadow-lg shadow-[#0B7BEA]/20 text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Falar no WhatsApp {activeModalService.whatsappDisplay ? `(${activeModalService.whatsappDisplay})` : ''}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
