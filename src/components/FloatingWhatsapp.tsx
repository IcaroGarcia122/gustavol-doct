import React, { useState } from 'react';
import { MessageCircle, Building2, Palmtree, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWhatsappProps {
  onOpenEvaluationModal: () => void;
}

export const FloatingWhatsapp: React.FC<FloatingWhatsappProps> = ({ onOpenEvaluationModal }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openWhatsapp = (unit: 'hidraulica' | 'cassino') => {
    const phone = unit === 'hidraulica' ? '5553984377312' : '5553999289890';
    const unitName = unit === 'hidraulica' ? 'Unidade Hidráulica' : 'Unidade Cassino';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre o Gustavo Lêdo CT na ${unitName}.`)}`;
    window.open(url, '_blank');
    setIsOpenMenu(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mb-2 text-gray-900 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0B7BEA]">
                <MessageCircle className="w-4 h-4 fill-[#0B7BEA]/20" />
                <span>Escolha a Unidade</span>
              </div>
              <button
                onClick={() => setIsOpenMenu(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => openWhatsapp('hidraulica')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0B7BEA]/10 hover:border-[#0B7BEA] border border-gray-100 transition-all text-left group"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 group-hover:text-[#0B7BEA]">
                    <Building2 className="w-4 h-4 text-[#0B7BEA]" />
                    <span>Unidade Hidráulica</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">(53) 98437-7312</p>
                </div>
                <span className="text-xs font-bold text-[#0B7BEA] bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">Abrir</span>
              </button>

              <button
                onClick={() => openWhatsapp('cassino')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0B7BEA]/10 hover:border-[#0B7BEA] border border-gray-100 transition-all text-left group"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 group-hover:text-[#0B7BEA]">
                    <Palmtree className="w-4 h-4 text-[#0B7BEA]" />
                    <span>Unidade Cassino</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">(53) 99928-9890</p>
                </div>
                <span className="text-xs font-bold text-[#0B7BEA] bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">Abrir</span>
              </button>

              <button
                onClick={() => {
                  setIsOpenMenu(false);
                  onOpenEvaluationModal();
                }}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-xs transition-all shadow-md shadow-[#0B7BEA]/20 mt-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Avaliação Gratuita</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Trigger Button */}
      <motion.button
        id="floating-whatsapp-trigger"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B7BEA] text-white flex items-center justify-center shadow-2xl shadow-[#0B7BEA]/50 focus:outline-none"
        aria-label="Abrir opções do WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#0B7BEA] opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />
        {isOpenMenu ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 relative z-10" />
        )}
      </motion.button>
    </div>
  );
};
