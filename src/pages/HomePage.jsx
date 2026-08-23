import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Video, 
  TrendingUp, 
  Code, 
  Cpu, 
  Layers, 
  Target 
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function HomePage({ onOpenProject }) {
  const navigate = useNavigate();

  const coreServices = [
    {
      title: 'Creative & Content',
      icon: Video,
      desc: 'Build a visual identity that captures attention.',
      benefit: 'Stand out with high-quality videos and design.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      desc: 'Reach the right audience across all channels.',
      benefit: 'Turn clicks into loyal customers.',
      gradient: 'from-emerald-600 to-emerald-700'
    },
    {
      title: 'Technology',
      icon: Code,
      desc: 'High-performance websites and custom software.',
      benefit: 'Seamless digital experiences for your users.',
      gradient: 'from-slate-800 to-slate-950'
    },
    {
      title: 'AI & Automation',
      icon: Cpu,
      desc: 'Smart workflows to save time and scale fast.',
      benefit: 'Work faster and smarter, not harder.',
      gradient: 'from-slate-900 to-emerald-950'
    }
  ];

  const whyUplintix = [
    {
      num: '01',
      title: 'All-in-One Team',
      desc: 'Creative, marketing, and tech experts working together.'
    },
    {
      num: '02',
      title: 'Strategy First',
      desc: 'We align every action with your business goals.'
    },
    {
      num: '03',
      title: 'Growth Focused',
      desc: 'Designed to build visibility, leads, and revenue.'
    },
    {
      num: '04',
      title: 'Scalable Solutions',
      desc: 'We build systems that grow alongside your business.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Main Value / Goal */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden text-center sm:text-left">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow"></div>
              
              <div className="max-w-3xl space-y-6 relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Everything you need to grow digitally, <span className="text-gradient-green">under one roof.</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  We bring creative content, digital marketing, and modern technology together to help you build a stronger presence and drive meaningful growth. No more juggling multiple vendors.
                </p>

                <div className="pt-4 flex flex-wrap justify-center sm:justify-start gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3.5 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 3. Core Services */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>CORE SERVICES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                One Team. Multiple Capabilities. <span className="text-gradient-green">One Goal.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coreServices.map((cap, i) => {
                const IconComp = cap.icon;
                return (
                  <TiltCard
                    key={i}
                    maxTilt={12}
                    scale={1.03}
                    className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} text-white flex items-center justify-center shadow-md mb-6`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2">{cap.title}</h3>
                      <p className="text-slate-600 text-sm mb-4">{cap.desc}</p>
                      
                      <div className="border-t border-slate-100 pt-4">
                        <div className="flex items-start gap-2 text-xs font-semibold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{cap.benefit}</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 4. KEY BENEFITS / WHY UPLINTIX? */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Built Around Your Business, <span className="text-gradient-green">Not Just Your Brief.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUplintix.map((item, idx) => (
                <TiltCard
                  key={idx}
                  maxTilt={10}
                  scale={1.03}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-4xl font-black text-emerald-500/40 mb-4">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 5. SELECTED WORK / PROOF */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SELECTED WORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                We Don't Just Talk. <span className="text-gradient-green">We Show It.</span>
              </h2>
            </div>

            <PortfolioSection onOpenProject={onOpenProject} />

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>View All Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 6. FINAL CTA */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-10 sm:p-16 rounded-3xl bg-slate-950 text-white text-center space-y-6 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight relative z-10">
                Ready to Grow? <span className="text-gradient-green">Let's Talk.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                Whether you need a stronger brand, better content, a high-converting website, or a complete growth strategy — we can help.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4 relative z-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
