import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  Award, 
  Clock, 
  Play, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function AboutSection({ onOpenVideo, onOpenEstimate }) {
  const stats = [
    { label: 'Happy Clients', value: '50+', icon: Users, desc: 'Trusted by founders globally' },
    { label: 'Projects Completed', value: '100+', icon: CheckCircle2, desc: 'Across web, video & marketing' },
    { label: 'Years Experience', value: '3+', icon: Award, desc: 'Industry excellence' },
    { label: 'Support Available', value: '24/7', icon: Clock, desc: 'Dedicated client support' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Dynamic 3D Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT UPLINTIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We Don't Just Build Solutions,<br />
              <span className="text-gradient-green">We Build Relationships.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Uplintix, we combine creativity, technology, and strategy to deliver digital solutions that drive real business growth. Your success is our mission.
            </p>

            {/* 4 Dynamic 3D Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <TiltCard
                    key={i}
                    maxTilt={10}
                    scale={1.03}
                    className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-800">{stat.label}</p>
                    <p className="text-[11px] text-slate-500">{stat.desc}</p>
                  </TiltCard>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="px-8 py-3.5 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Video Tour Preview */}
          <div className="lg:col-span-6 relative">
            <TiltCard
              maxTilt={8}
              scale={1.02}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80"
                alt="Uplintix Office"
                className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />

              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                {/* Pulsing Ripple Play Button */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-emerald-500/40 animate-ping"></div>
                  <div className="absolute w-32 h-32 rounded-full bg-emerald-500/20 animate-pulse-glow"></div>
                  <button
                    onClick={onOpenVideo}
                    className="relative w-20 h-20 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group/play"
                    aria-label="Play Office Video Tour"
                  >
                    <Play className="w-8 h-8 ml-1 fill-white group-hover/play:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Office Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xl">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">UPLINTIX Agency HQ</h4>
                  <p className="text-xs text-slate-500">Multan, Pakistan • Software & Marketing Hub</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Hub</span>
                </div>
              </div>

            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}