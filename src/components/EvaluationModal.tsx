import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ArrowRight, Building2, Palmtree, MapPin } from 'lucide-react';
import { EvaluationFormData } from '../types';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({ isOpen, onClose }) => {
  const [selectedUnit, setSelectedUnit] = useState<'hidraulica' | 'cassino'>('hidraulica');
  const [formData, setFormData] = useState<EvaluationFormData>({
    name: '',
    phone: '',
    goal: 'Ganhar massa muscular (Hipertrofia)',
    preferredTime: 'Manhã',
    notes: '',
  });

  const goals = [
    "Ganhar massa muscular (Hipertrofia)",
    "Emagrecimento e Definição",
    "Melhorar condicionamento e disposição",
    "Saúde, postura e alívio de dores",
  ];

  const times = ["Manhã (06h às 11h)", "Tarde (12h às 17h)", "Noite (18h às 21h)"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const unitName = selectedUnit === 'hidraulica' ? 'Unidade Hidráulica' : 'Unidade Cassino';
    const phone = selectedUnit === 'hidraulica' ? '5553984377312' : '5553999289890';

    const message = `Olá! Gostaria de agendar uma aula experimental no Gustavo Lêdo CT.%0A%0A*Unidade Desejada:* ${encodeURIComponent(unitName)}%0A*Objetivo:* ${encodeURIComponent(formData.goal)}%0A*Turno de preferência:* ${encodeURIComponent(formData.preferredTime)}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleDirectWhatsapp = (unit: 'hidraulica' | 'cassino') => {
    const phone = unit === 'hidraulica' ? '5553984377312' : '5553999289890';
    const unitName = unit === 'hidraulica' ? 'Unidade Hidráulica' : 'Unidade Cassino';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre o CT na ${unitName}.`)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-gray-100 max-h-[92vh] overflow-y-auto"
            >
              {/* Top Accent Bar */}
              <div className="bg-[#0B7BEA] p-6 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-white/80 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Fechar formulário"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200">
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Atendimento Presencial • Rio Grande - RS</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  Agende sua Aula Experimental
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Escolha a unidade e nos envie uma mensagem direta no WhatsApp.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Unit Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    1. Escolha a Unidade do CT
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedUnit('hidraulica')}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                        selectedUnit === 'hidraulica'
                          ? 'border-[#0B7BEA] bg-[#0B7BEA]/10 text-[#0F1115] font-bold shadow-sm ring-2 ring-[#0B7BEA]'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-extrabold mb-1 text-[#0B7BEA]">
                        <Building2 className="w-4 h-4" />
                        <span>Hidráulica</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-tight">Rua Primeiro de Maio, 753</p>
                      <p className="text-xs font-bold text-[#0B7BEA] mt-1.5">(53) 98437-7312</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedUnit('cassino')}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                        selectedUnit === 'cassino'
                          ? 'border-[#0B7BEA] bg-[#0B7BEA]/10 text-[#0F1115] font-bold shadow-sm ring-2 ring-[#0B7BEA]'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-extrabold mb-1 text-[#0B7BEA]">
                        <Palmtree className="w-4 h-4" />
                        <span>Cassino</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-tight">Av. Rio Grande, 98</p>
                      <p className="text-xs font-bold text-[#0B7BEA] mt-1.5">(53) 99928-9890</p>
                    </button>
                  </div>
                </div>

                {/* Goal Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    2. Seu Principal Objetivo
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#0B7BEA] focus:bg-white transition-all text-gray-900"
                  >
                    {goals.map((g, i) => (
                      <option key={i} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    3. Turno de Preferência
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {times.map((t, i) => {
                      const isSelected = formData.preferredTime === t;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: t })}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                            isSelected
                              ? 'bg-[#0B7BEA] text-white border-[#0B7BEA] shadow-md'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          {t.split(' ')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-bold text-base py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#0B7BEA]/20 hover:shadow-[#0B7BEA]/35"
                  >
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                    <span>Enviar no WhatsApp ({selectedUnit === 'hidraulica' ? 'Hidráulica' : 'Cassino'})</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="pt-2 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 mb-2 font-medium">Ou chame diretamente por unidade sem formulário:</p>
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => handleDirectWhatsapp('hidraulica')}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold transition-colors"
                      >
                        WhatsApp Hidráulica
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDirectWhatsapp('cassino')}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold transition-colors"
                      >
                        WhatsApp Cassino
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
