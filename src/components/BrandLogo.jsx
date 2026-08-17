import React from 'react';

export default function BrandLogo({ 
  className = '', 
  imgClassName = '', 
  theme = 'light' 
}) {
  return (
    <div className={`inline-flex items-center group ${className}`}>
      <img 
        src="/uplintix-logo.png" 
        alt="UPLINTIX Software and Marketing Agency" 
        className={`h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          theme === 'dark' ? 'brightness-120 drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]' : 'drop-shadow-xs'
        } ${imgClassName}`}
      />
    </div>
  );
}
