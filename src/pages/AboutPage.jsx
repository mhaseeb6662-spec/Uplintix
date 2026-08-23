import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Eye, 
  TrendingUp, 
  ArrowRight,
  Users,
  Code,
  Video,
  Share2
} from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function AboutPage() {
  const navigate = useNavigate();

  const values = [
    { title: 'Ownership', icon: ShieldCheck, desc: 'We take responsibility for the work we deliver.' },
    { title: 'Creativity', icon: Heart, desc: 'We look for better ways to communicate and solve problems.' },
    { title: 'Learning', icon: BookOpen, desc: 'We continuously improve our skills and systems.' },
    { title: 'Transparency', icon: Eye, desc: 'Clear communication. Clear expectations. Clear work.' },
    { title: 'Growth', icon: TrendingUp, desc: 'We measure success by the value we create.' }
  ];

  const teamDepartments = [
    {
      dept: 'Leadership & Strategy',
      roles: 'Strategy • Business Dev • Creative Direction',
      lead: 'Abu Bakar & Ubaidullah',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
    },
    {
      dept: 'Technology Team',
      roles: 'Web Dev • Software • Solutions',
      lead: 'Haseeb Khan (Lead)',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80'
    },
    {
      dept: 'Creative Team',
      roles: 'Video • Design • Production',
      lead: 'Usama, Ali Raza, Areeba',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80'
    },
    {
      dept: 'Marketing Team',
      roles: 'Social Media • Performance Marketing',
      lead: 'Zainab & Hamza',
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 bg-slate-50">
      
      {/* Hero & Story */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT UPLINTIX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            We Help Businesses <span className="text-gradient-green">Build Better and Grow Faster.</span>
          </h1>

          <div className="space-y-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            <p>
              We believe you shouldn't have to hire five different agencies to build your digital presence. 
              That's why we bring creative, technology, and marketing together under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TiltCard
              maxTilt={10}
              scale={1.02}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">OUR MISSION</h3>
              <h4 className="text-2xl font-extrabold text-slate-900 leading-tight">
                Accessible Digital Growth
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We make high-quality digital solutions accessible to ambitious businesses, turning ideas into scalable systems.
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={10}
              scale={1.02}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">OUR VISION</h3>
              <h4 className="text-2xl font-extrabold text-slate-900 leading-tight">
                A Global Digital Company
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Combining Creative, Marketing, Technology, and AI to serve businesses both locally and globally.
              </p>
            </TiltCard>
          </div>
        </section>
      </SlowScrollReveal>

      {/* OUR VALUES */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">OUR VALUES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const IconC = val.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={12}
                  scale={1.03}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <IconC className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{val.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
                </TiltCard>
              );
            })}
          </div>
        </section>
      </SlowScrollReveal>

      {/* OUR TEAM */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>OUR TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Different Skills. <span className="text-gradient-green">One Direction.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamDepartments.map((dept, idx) => (
              <TiltCard
                key={idx}
                maxTilt={10}
                scale={1.03}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                    <img src={dept.image} alt={dept.dept} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{dept.dept}</h3>
                  <p className="text-xs font-bold text-emerald-700">{dept.roles}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  Team Members: {dept.lead}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </SlowScrollReveal>

      {/* FINAL CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white text-center space-y-6 border border-emerald-500/30 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's Build Something That Matters
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
