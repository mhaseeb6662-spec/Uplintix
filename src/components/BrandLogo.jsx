import React from 'react';

export default function BrandLogo({ 
  className = '', 
  imgClassName = '', 
  theme = 'light' 
}) {
  return (
    <div className={`inline-flex items-center group ${className}`}>
      <img 
        src="/uplintix-logo-new.jpg" 
        alt="UPLINTIX Software and Marketing Agency" 
        className={`h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs ${imgClassName}`}
      />
    </div>
  );
}
