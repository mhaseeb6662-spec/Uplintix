import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Video, 
  TrendingUp, 
  Code, 
  Cpu, 
  Layers, 
  Target, 
  Compass, 
  Rocket, 
  BarChart, 
  Building2, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  Utensils, 
  Stethoscope, 
  HomeIcon, 
  Users 
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function HomePage({ onOpenProject }) {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: 'Creative & Content',
      icon: Video,
      items: ['Video Production', 'Video Editing', 'Graphic Design', 'Branding', 'Product Content'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Digital Growth',
      icon: TrendingUp,
      items: ['Social Media Management', 'Social Media Marketing', 'Performance Marketing', 'Influencer Marketing', 'UGC Marketing'],
      gradient: 'from-emerald-600 to-emerald-700'
    },
    {
      title: 'Technology',
      icon: Code,
      items: ['Website Design', 'Website Development', 'Web Applications', 'Custom Software', 'Business Dashboards'],
      gradient: 'from-slate-800 to-slate-950'
    },
    {
      title: 'AI & Automation',
      icon: Cpu,
      items: ['AI Solutions', 'Business Automation', 'Workflow Automation', 'AI-powered Digital Solutions'],
      gradient: 'from-slate-900 to-emerald-950'
    }
  ];

  const whyUplintix = [
    {
      num: '01',
      title: 'One Team',
      desc: 'Creative, marketing, and technology expertise under one roof.'
    },
    {
      num: '02',
      title: 'Strategy Before Execution',
      desc: "We don't just ask what you want created. We understand why it needs to be created."
    },
    {
      num: '03',
      title: 'Built for Growth',
      desc: 'Our work is designed to help you build visibility, credibility, leads, and long-term digital value.'
    },
    {
      num: '04',
      title: 'Flexible & Scalable',
      desc: "Whether you're starting small or scaling fast, we build solutions that grow with you."
    }
  ];

  const processSteps = [
    { num: '01', step: 'Discover', desc: 'We understand your business, audience, goals, and challenges.' },
    { num: '02', step: 'Strategize', desc: 'We develop a clear strategy and execution roadmap.' },
    { num: '03', step: 'Create', desc: 'Our creative and technical team brings the strategy to life.' },
    { num: '04', step: 'Launch', desc: 'We deliver, launch, and optimize your digital assets.' },
    { num: '05', step: 'Grow', desc: 'We use data, feedback, and continuous improvement to help you move forward.' }
  ];

  const industries = [
    { name: 'Healthcare & Medical', icon: Stethoscope },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Restaurants & Hospitality', icon: Utensils },
    { name: 'Education', icon: GraduationCap },
    { name: 'Real Estate', icon: HomeIcon },
    { name: 'Professional Services', icon: Briefcase },
    { name: 'Startups', icon: Rocket },
    { name: 'Local Businesses', icon: Building2 },
    { name: 'Growing Brands', icon: Users }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Digital Growth Partner Section */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow"></div>
              
              <div className="max-w-3xl space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NOT JUST AN AGENCY. YOUR DIGITAL GROWTH PARTNER.</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Your business doesn't need another vendor.<br />
                  <span className="text-gradient-green">It needs a team that understands the bigger picture.</span>
                </h2>

                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    At Uplintix, we bring creative, technology, and marketing under one roof to help businesses build a stronger digital presence and create meaningful growth.
                  </p>
                  <p>
                    From the first idea to the final execution, we help you plan, create, launch, and grow.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3.5 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-white font-extrabold text-xs tracking-wider hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    About Uplintix
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 3. WHAT WE DO */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>WHAT WE DO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                One Team. Multiple Capabilities. <span className="text-gradient-green">One Goal: Growth.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {capabilities.map((cap, i) => {
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
                      <h3 className="text-xl font-extrabold text-slate-900 mb-4">{cap.title}</h3>
                      <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                        {cap.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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

      {/* 4. SELECTED WORK */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SELECTED WORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                We Don't Just Talk About What We Can Do. <span className="text-gradient-green">We Show It.</span>
              </h2>
            </div>

            <PortfolioSection onOpenProject={onOpenProject} />

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 5. WHY UPLINTIX? */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>WHY UPLINTIX?</span>
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
                    <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 6. OUR PROCESS */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>OUR PROCESS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                From Idea to <span className="text-gradient-green">Impact.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all">
                  <span className="text-emerald-400 font-mono font-black text-xs">{step.num}</span>
                  <h3 className="text-lg font-extrabold text-white mt-1 mb-2">{step.step}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 7. WHO WE WORK WITH */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>WHO WE WORK WITH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Empowering Businesses Across <span className="text-gradient-green">Diverse Industries</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
              {industries.map((ind, idx) => {
                const IconC = ind.icon;
                return (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <IconC className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900">{ind.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-center space-y-4">
              <p className="text-slate-600 text-sm font-bold">
                Don't see your industry? Let's talk about your project.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all cursor-pointer shadow-md"
              >
                <span>Talk About Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 8. FINAL CTA */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-10 sm:p-16 rounded-3xl bg-slate-950 text-white text-center space-y-6 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight relative z-10">
                Have an Idea? <span className="text-gradient-green">Let's Build It.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                Whether you need a stronger brand, better content, a high-converting website, or a complete digital growth strategy — we're ready to help.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4 relative z-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/work')}
                  className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-white font-extrabold text-xs tracking-wider hover:bg-slate-800 transition-all cursor-pointer"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
