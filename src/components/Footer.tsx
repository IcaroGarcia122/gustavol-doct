import React from 'react';
import { Phone, MapPin, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1115] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block">
              <Logo variant="dark" size="lg" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Gustavo Lêdo – Centro de Treinamento Físico. Treinamento 100% orientado, alta performance e acompanhamento individualizado para sua saúde e estética.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0B7BEA] hover:border-[#0B7BEA] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0B7BEA] hover:border-[#0B7BEA] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0B7BEA] hover:border-[#0B7BEA] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-[#0B7BEA] transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#0B7BEA] transition-colors">Sobre o CT</a></li>
              <li><a href="#servicos" className="hover:text-[#0B7BEA] transition-colors">Serviços</a></li>
              <li><a href="#estrutura" className="hover:text-[#0B7BEA] transition-colors">Estrutura</a></li>
              <li><a href="#unidades" className="hover:text-[#0B7BEA] transition-colors">Nossas Unidades</a></li>
              <li><a href="#resultados" className="hover:text-[#0B7BEA] transition-colors">Resultados</a></li>
              <li><a href="#contato" className="hover:text-[#0B7BEA] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Nossas Unidades em Rio Grande - RS
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0B7BEA] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Unidade Hidráulica</span>
                  <span className="text-xs text-gray-400 block mb-1">Rua Primeiro de Maio, 753 • CEP 96202-293</span>
                  <a
                    href={CONTACT_INFO.whatsappUrlHidraulica}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B7BEA] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp: {CONTACT_INFO.phoneHidraulica}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-white/5">
                <MapPin className="w-5 h-5 text-[#0B7BEA] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Unidade Cassino</span>
                  <span className="text-xs text-gray-400 block mb-1">Av. Rio Grande, 98 • CEP 96207-000 • Balneário Cassino • Rio Grande - RS</span>
                  <a
                    href={CONTACT_INFO.whatsappUrlCassino}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B7BEA] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp: {CONTACT_INFO.phoneCassino}</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2025 Gustavo Lêdo CT. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-white transition-colors p-2 rounded-lg bg-white/5"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#0B7BEA]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
