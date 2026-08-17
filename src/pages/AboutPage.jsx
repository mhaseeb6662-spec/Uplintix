import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Award, 
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
    {
      title: 'Ownership',
      icon: ShieldCheck,
      desc: 'We take responsibility for the work we deliver.'
    },
    {
      title: 'Creativity',
      icon: Heart,
      desc: 'We look for better ways to communicate and solve problems.'
    },
    {
      title: 'Learning',
      icon: BookOpen,
      desc: 'We continuously improve our skills, systems, and processes.'
    },
    {
      title: 'Transparency',
      icon: Eye,
      desc: 'Clear communication. Clear expectations. Clear work.'
    },
    {
      title: 'Growth',
      icon: TrendingUp,
      desc: 'We measure success by the value we create.'
    }
  ];

  const teamDepartments = [
    {
      dept: 'Leadership & Executive Strategy',
      roles: 'Founder / CEO: Strategy • Business Development • Creative Direction',
      lead: 'Abu Bakar & Ubaidullah',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
    },
    {
      dept: 'Technology Team',
      roles: 'Web Development • Software • Digital Solutions',
      lead: 'Haseeb Khan (Lead Architect)',
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
      roles: 'Social Media • Influencer • Performance Marketing',
      lead: 'Zainab & Hamza',
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT UPLINTIX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            We Started With Skills. <span className="text-gradient-green">We're Building Something Bigger.</span>
          </h1>

          <div className="space-y-3 text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            <p>Uplintix was built with a simple idea: Great businesses deserve great digital experiences.</p>
            <p>What started with creative services is growing into a broader digital company combining creative, technology, marketing, and innovation.</p>
            <p className="text-emerald-700 font-bold">Our goal is simple: Help businesses build better, communicate better, and grow faster.</p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              <span>OUR STORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              We believe businesses shouldn't have to work with five different teams to build their digital presence.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-medium">
              That's why Uplintix brings creative production, digital marketing, web development, and emerging technology together under one team.
            </p>
          </div>
        </section>
      </SlowScrollReveal>

      {/* MISSION & VISION */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OUR MISSION */}
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
                Make High-Quality Digital Solutions More Accessible to Growing Businesses.
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We help ambitious businesses turn ideas into brands, digital experiences, and systems that create real value.
              </p>
            </TiltCard>

            {/* OUR VISION */}
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
                Build a Global Digital Company From Pakistan.
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our long-term vision goes beyond traditional agency services. We are building toward a company that combines <span className="font-bold text-slate-900">Creative → Marketing → Technology → AI → Software</span> to serve businesses locally and globally.
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
            <p className="text-slate-600 text-sm">The core principles that guide our work and team culture.</p>
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
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              Whether you need creative content, a high-converting website, or a growth marketing strategy — we're ready to partner with you.
            </p>
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
