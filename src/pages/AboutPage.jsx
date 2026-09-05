import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Globe, 
  Users, 
  ArrowRight,
  Code,
  Video,
  Layers,
  Heart,
  TrendingUp,
  Cpu
} from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function AboutPage() {
  const navigate = useNavigate();

  const philosophy = [
    {
      title: 'Business-First Thinking',
      desc: 'We do not just create for the sake of creating. Every design, video, and line of code is written to solve a real business problem.',
      icon: TrendingUp
    },
    {
      title: 'Creative + Technical',
      desc: 'We bridge the gap between stunning visual execution and robust backend technology to deliver a complete digital experience.',
      icon: Code
    },
    {
      title: 'Long-Term Partnerships',
      desc: 'We are not just a vendor. We aim to be a long-term digital growth partner for businesses that want to scale sustainably.',
      icon: Users
    }
  ];

  const teamValues = [
    {
      title: 'Multidisciplinary Collaboration',
      desc: 'Our creatives, marketers, and engineers work in the same room. This means your website looks great and performs perfectly.',
      icon: Layers
    },
    {
      title: 'Practical Innovation',
      desc: 'We embrace AI and modern software, not as buzzwords, but as practical tools to improve efficiency and reduce client costs.',
      icon: Cpu
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 bg-white text-slate-900">
      
      {/* Hero & Story */}
      <section className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE UPLINTIX STORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            More than a <span className="text-gradient-green">creative agency.</span>
          </h1>

          <div className="space-y-4 text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            <p>
              Uplintix was built around creative and digital services, but our vision goes much further. We are building a modern digital solutions company where creativity, software, AI, and automation work seamlessly together.
            </p>
            <p>
              Our goal is to create long-term value for businesses — from the content people see on the surface to the deep systems that power how those companies operate.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <TiltCard
              maxTilt={5}
              scale={1.01}
              className="bg-emerald-950 p-10 sm:p-14 rounded-[40px] border border-emerald-900 shadow-2xl space-y-6 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xs font-extrabold text-emerald-500 uppercase tracking-widest">OUR MISSION</h3>
              <p className="text-2xl sm:text-3xl font-bold leading-relaxed text-slate-100">
                "To help businesses grow through practical, high-quality creative and technology-driven solutions while building a scalable company capable of serving clients internationally."
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={5}
              scale={1.01}
              className="bg-slate-950 p-10 sm:p-14 rounded-[40px] border border-slate-800 shadow-2xl space-y-6 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">OUR VISION</h3>
              <p className="text-2xl sm:text-3xl font-bold leading-relaxed text-slate-100">
                "To build Uplintix into a modern international digital solutions company that combines creativity, technology, software, AI, and scalable products to create high-value solutions for businesses."
              </p>
            </TiltCard>
          </div>
        </section>
      </SlowScrollReveal>

      {/* BUSINESS PHILOSOPHY */}
      <SlowScrollReveal>
        <section className="py-20 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Business Philosophy</h2>
              <p className="text-slate-600 text-lg">The core principles that drive how we build and deliver.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophy.map((item, idx) => {
                const IconC = item.icon;
                return (
                  <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                      <IconC className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* HOW THE TEAM WORKS & INTERNATIONAL AMBITION */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-extrabold uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5" />
                <span>GLOBAL REACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built for ambitious businesses, <span className="text-emerald-600">wherever they operate.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We operate as a borderless digital partner. Whether you are a startup in the USA, a growing brand in the UAE, or an established company in the UK, Canada, or Australia, our technology and creative standards remain world-class.
              </p>
              
              <div className="pt-4 space-y-4">
                {teamValues.map((val, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex-shrink-0 mt-1">
                      <val.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900">{val.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 h-full relative min-h-[400px]">
              <div className="absolute inset-0 bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center p-12 text-center">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/80 to-slate-900"></div>
                 <div className="relative z-10 space-y-6">
                    <Globe className="w-16 h-16 text-emerald-400 mx-auto opacity-80" />
                    <h3 className="text-2xl font-bold text-white">Serving Clients Internationally</h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                      {['USA', 'UK', 'Canada', 'Australia', 'UAE'].map((country) => (
                        <span key={country} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold tracking-wider">
                          {country}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* FINAL CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="p-10 sm:p-16 rounded-[40px] bg-slate-950 text-white text-center space-y-8 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight relative z-10 leading-tight">
              Ready to work with a partner who understands <span className="text-emerald-400">both creative and tech?</span>
            </h2>

            <div className="pt-4 flex justify-center relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-5 rounded-full bg-gradient-green text-white font-extrabold text-sm tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform cursor-pointer flex items-center gap-2"
              >
                <span>Discuss Your Next Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
