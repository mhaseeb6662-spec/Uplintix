import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function HeroSection() {
  const navigate = useNavigate();

  const capabilities = ['Creative', 'Web', 'Software', 'AI', 'Automation'];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-50">
      
      {/* Premium Background Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 mt-12 lg:mt-0 order-2 lg:order-1 relative z-20">
            
            <div className="space-y-6">
              <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight">
                Creative Thinking.<br />
                Powerful Technology.<br />
                <span className="text-emerald-600 relative inline-block">
                  Real Business Growth.
                  {/* Subtle accent line */}
                  <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-emerald-200/60 -z-10 rounded-full"></span>
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl max-w-lg leading-relaxed font-medium">
                Uplintix combines creative content, modern websites, software, AI and automation to build digital solutions that move businesses forward.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-5 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:bg-emerald-600 hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/work')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Capabilities */}
            <div className="pt-8 lg:pt-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-extrabold text-slate-400 tracking-widest uppercase">
                {capabilities.map((cap, idx) => (
                  <React.Fragment key={cap}>
                    <span className="text-slate-700">{cap}</span>
                    {idx < capabilities.length - 1 && <span className="w-1 h-1 rounded-full bg-emerald-400"></span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* 3D Visual Column */}
          <div className="lg:col-span-6 relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center order-1 lg:order-2">
            <Hero3DCanvas />
          </div>

        </div>

        {/* Optional Trust Line */}
        <div className="absolute bottom-6 left-4 sm:left-6 lg:left-8 z-10 hidden sm:block">
          <p className="text-xs font-bold text-slate-500 tracking-wider">
            Creative & technology solutions for ambitious businesses.
          </p>
        </div>

      </div>
    </section>
  );
}
