import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

export const Estrutura: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeUnit, setActiveUnit] = useState<'hidraulica' | 'cassino'>('hidraulica');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const videoSrc = activeUnit === 'hidraulica' 
    ? 'https://i.imgur.com/8LMdW1S.mp4' 
    : 'https://i.imgur.com/abhF3Ef.mp4';
  const fallbackVideoSrc = '/assets/video2.mp4';
  const unitLabel = activeUnit === 'hidraulica' ? 'Unidade Hidráulica' : 'Unidade Cassino';

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // When activeUnit changes, load new video source
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isInView) {
        videoRef.current.muted = true;
        setIsMuted(true);
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => {
              setIsPlaying(false);
            });
        }
      }
    }
  }, [activeUnit]);

  // Control video play/pause based on viewport visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.muted = true;
        setIsMuted(true);
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => {
              setIsPlaying(false);
            });
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const features = [
    "Aparelhos com biomecânica avançada",
    "Espaço exclusivo sem filas para treino",
    "Ambiente 100% climatizado e higienizado",
    "Acompanhamento presencial e individual"
  ];

  return (
    <section id="estrutura" ref={sectionRef} className="py-20 sm:py-28 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0B7BEA]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B7BEA]/20 text-[#0B7BEA] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0B7BEA]/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tour Virtual em Vídeo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Conheça a Nossa <span className="text-[#0B7BEA]">Estrutura por Dentro</span>
          </motion.h2>

          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Assista ao vídeo abaixo e veja de perto o ambiente, maquinários e espaço preparado exclusivamente para o seu melhor desempenho.
          </p>
        </div>

        {/* Unit Selection Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto mb-8">
          <button
            onClick={() => setActiveUnit('hidraulica')}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeUnit === 'hidraulica'
                ? 'bg-[#0B7BEA] text-white shadow-xl shadow-[#0B7BEA]/30 sm:scale-105 border border-[#0B7BEA]'
                : 'bg-[#1B1B1B] text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Unidade Hidráulica</span>
          </button>

          <button
            onClick={() => setActiveUnit('cassino')}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeUnit === 'cassino'
                ? 'bg-[#0B7BEA] text-white shadow-xl shadow-[#0B7BEA]/30 sm:scale-105 border border-[#0B7BEA]'
                : 'bg-[#1B1B1B] text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Unidade Balneário Cassino</span>
          </button>
        </div>

        {/* Featured Video Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-black border border-white/15 shadow-[0_0_50px_rgba(11,123,234,0.15)] group">
            
            {/* HTML5 Video Player */}
            <video
              key={activeUnit}
              ref={(el) => {
                videoRef.current = el;
                if (el) {
                  el.muted = isMuted;
                }
              }}
              src={videoSrc}
              poster="/assets/HERO.png"
              loop
              muted={isMuted}
              autoPlay
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] sm:aspect-video object-cover cursor-pointer bg-black"
              onClick={togglePlay}
              onError={(e) => {
                // If Imgur URL fails, try local fallback asset
                const target = e.currentTarget;
                if (target.src !== fallbackVideoSrc) {
                  target.src = fallbackVideoSrc;
                  target.load();
                  target.play().catch(() => {});
                }
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={fallbackVideoSrc} type="video/mp4" />
              Seu navegador não suporta a exibição deste vídeo.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6 sm:p-8">
              
              {/* Top Video Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Gustavo Lêdo CT • {unitLabel}</span>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#0B7BEA] transition-colors"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#0B7BEA] transition-colors"
                    aria-label="Tela cheia"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Center Play Button (Visible when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-[#0B7BEA] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    aria-label="Tocar vídeo"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>
                </div>
              )}

              {/* Bottom Video Footer */}
              <div className="pointer-events-auto flex items-end justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Equipamentos & Ambiente do CT
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-md">
                    Projetado para treinos focados com máxima ergonomia e segurança.
                  </p>
                </div>

                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors shrink-0"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>
              </div>

            </div>

          </div>

          {/* Structure Features Grid Below Video */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B1B1B] p-4 rounded-2xl border border-white/10 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0B7BEA] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200 leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
