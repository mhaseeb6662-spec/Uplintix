import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function HeroSection() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-slate-950 pt-28 lg:pt-0 pb-12 lg:pb-0">
      
      {/* Cinematic Dark Background & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,1)_0%,transparent_80%)]"></div>
        {/* Subtle grid for scale/depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex flex-col lg:flex-row items-center lg:min-h-[100svh]">
        
        {/* Content Column (Normal flow on mobile, left grid col on desktop) */}
        <motion.div 
          className="w-full lg:w-[55%] flex flex-col justify-center space-y-6 sm:space-y-8 z-30 pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-slate-300 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-2xl w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">CREATIVE • TECHNOLOGY • GROWTH</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="leading-[1.1] font-extrabold text-white tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw + 1rem, 4.5rem)' }}>
              Creative Thinking.<br />
              Powerful Technology.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 relative inline-block pb-1 sm:pb-2">
                Real Business Growth.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed font-medium">
              We help businesses grow through creative content, modern websites, software, AI, automation and digital solutions.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4 sm:pt-6">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-emerald-500 px-8 py-4 min-h-[44px] font-bold text-slate-950 text-sm tracking-wide shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)] transition-all duration-500 cursor-pointer flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
            </button>

            <button
              onClick={() => navigate('/work')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 text-white font-bold text-sm hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Explore Our Work</span>
            </button>
          </motion.div>

        </motion.div>

        {/* 3D Visual Column (Below text on mobile, absolute on desktop) */}
        <div className="relative w-full h-[350px] sm:h-[450px] mt-10 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[60%] z-10 opacity-90 lg:opacity-80 mix-blend-screen pointer-events-auto lg:pointer-events-auto">
          <Hero3DCanvas />
        </div>

      </div>

      {/* Cinematic Fade to next section (Mobile bottom fade to hide hard cutoff) */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none"></div>

    </section>
  );
}
