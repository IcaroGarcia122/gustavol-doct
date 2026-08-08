import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenEvaluationModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvaluationModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1115]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Gustavo Lêdo CT Página Inicial"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive ? 'text-[#0B7BEA]' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B7BEA] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-cta-button"
              onClick={onOpenEvaluationModal}
              className="inline-flex items-center gap-2 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0B7BEA]/20 active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
              <span>Agendar Avaliação</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F1115] border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-gray-200 hover:text-[#0B7BEA] py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-2">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEvaluationModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0B7BEA] hover:bg-[#045DB5] text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Avaliação pelo WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
