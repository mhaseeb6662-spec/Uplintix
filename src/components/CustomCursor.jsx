import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const trailingRef = useRef({ x: -100, y: -100 });
  const ringDomRef = useRef(null);

  useEffect(() => {
    // Disable on mobile / touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .tilt-card');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // High-performance RAF animation loop for 60fps lerp
  useEffect(() => {
    let animId;

    const render = () => {
      trailingRef.current.x += (pos.x - trailingRef.current.x) * 0.2;
      trailingRef.current.y += (pos.y - trailingRef.current.y) * 0.2;

      if (ringDomRef.current) {
        ringDomRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0px) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* High-Performance Smooth Trailing Ambient Halo */}
      <div
        ref={ringDomRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-300 ease-out pointer-events-none ${
          isHovered 
            ? 'w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.5)] scale-110' 
            : 'w-10 h-10 bg-emerald-500/10 border border-emerald-500/40 shadow-[0_0_15px_rgba(34,197,94,0.25)]'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Subtle Center UPLINTIX Emerald Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`rounded-full bg-emerald-500 transition-all duration-300 ${isHovered ? 'w-3 h-3 animate-ping' : 'w-1.5 h-1.5'}`} />
        </div>
      </div>

    </div>
  );
}
