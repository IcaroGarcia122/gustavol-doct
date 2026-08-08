import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'color', className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11';

  // Return the official SVG vector asset
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Image Logo */}
      <img
        src="/assets/Logo.png"
        alt="Gustavo Lêdo - Centro de Treinamento Físico"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.includes('Logo.png')) {
            target.src = '/assets/logo.png';
          } else {
            target.src = variant === 'dark' || variant === 'color' ? "/assets/logo-white.svg" : "/assets/logo.svg";
          }
        }}
      />
      {/* Fallback Inline Vector for Guaranteed Instant Render */}
      <svg
        viewBox="0 0 460 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto hidden [img[style*="display: none"]~&]:block`}
      >
        <g id="Emblem">
          <path
            d="M 65 15 C 95 15 120 40 120 70 C 120 100 95 125 65 125 C 35 125 10 100 10 68 C 10 40 30 20 56 13"
            stroke="#0B7BEA"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 15 60 C 12 36 30 16 58 11 C 88 6 118 26 122 58"
            stroke="#38BDF8"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 94 52 C 88 38 75 32 62 32 C 42 32 27 47 27 67 C 27 87 42 102 62 102 C 82 102 94 88 94 68 L 62 68"
            stroke={variant === 'light' ? '#045DB5' : '#FFFFFF'}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        <text
          x="140"
          y="65"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="36"
          fill={variant === 'light' ? '#045DB5' : '#FFFFFF'}
          letterSpacing="-0.5"
        >
          GUSTAVO LÊDO
        </text>
        <text
          x="142"
          y="96"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="700"
          fontSize="15"
          fill={variant === 'light' ? '#0B7BEA' : '#93C5FD'}
          letterSpacing="1"
        >
          CENTRO DE TREINAMENTO FÍSICO
        </text>
      </svg>
    </div>
  );
};
