import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  TrendingUp, 
  MonitorSmartphone,
  Code, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Target,
  Briefcase,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'creative',
      title: 'Creative & Content',
      icon: Video,
      gradient: 'from-rose-500 to-rose-600',
      bgClass: 'bg-rose-50',
      textClass: 'text-rose-600',
      whatItIs: 'High-quality visual production including video editing, videography, graphic design, and full-scale content production.',
      whoItsFor: 'Brands, creators, and businesses needing to capture attention, tell their story, and stand out in crowded markets.',
      problemSolved: 'Poor quality content that fails to engage the audience or reflect the true premium value of the brand.',
      deliverables: ['Video Editing', 'Corporate Videography', 'Brand Identity & Graphic Design', 'Social Media Content Creation']
    },
    {
      id: 'social',
      title: 'Social & Growth',
      icon: TrendingUp,
      gradient: 'from-amber-500 to-orange-600',
      bgClass: 'bg-amber-50',
      textClass: 'text-amber-600',
      whatItIs: 'Strategic social media management, content strategy, and digital growth support designed to build communities.',
      whoItsFor: 'Companies struggling to maintain a consistent, effective digital presence or scale their audience reach.',
      problemSolved: 'Inconsistent posting, lack of strategy, and wasted resources on social media efforts that don\'t generate ROI.',
      deliverables: ['Social Media Management', 'Content Strategy & Planning', 'Community Management', 'Growth Optimization']
    },
    {
      id: 'web',
      title: 'Web Solutions',
      icon: MonitorSmartphone,
      gradient: 'from-blue-500 to-blue-700',
      bgClass: 'bg-blue-50',
      textClass: 'text-blue-600',
      whatItIs: 'Modern, fast, and conversion-optimized websites and landing pages custom-built to achieve specific business goals.',
      whoItsFor: 'Businesses needing a digital storefront that drives sales, captures leads, and provides a seamless user experience.',
      problemSolved: 'Outdated, slow, or generic websites that leak traffic and fail to convert visitors into customers.',
      deliverables: ['Custom Website Design', 'Full-Stack Web Development', 'High-Converting Landing Pages', 'E-commerce Solutions']
    },
    {
      id: 'tech',
      title: 'Technology Solutions',
      icon: Code,
      gradient: 'from-emerald-600 to-emerald-800',
      bgClass: 'bg-emerald-50',
      textClass: 'text-emerald-700',
      whatItIs: 'Bespoke software development, SaaS products, AI integrations, and workflow automation systems.',
      whoItsFor: 'Ambitious businesses facing operational bottlenecks, or entrepreneurs building scalable digital products.',
      problemSolved: 'Manual data entry, inefficient operational workflows, and the lack of proprietary technology to scale the business.',
      deliverables: ['Custom Software Development', 'SaaS Architecture & Development', 'AI Implementation', 'Business Process Automation']
    },
    {
      id: 'premium',
      title: 'Premium Digital Experiences',
      icon: Layers,
      gradient: 'from-purple-500 to-purple-700',
      bgClass: 'bg-purple-50',
      textClass: 'text-purple-600',
      whatItIs: 'Immersive digital environments, 3D web experiences, and interactive brand touchpoints.',
      whoItsFor: 'Premium brands, innovative product companies, and organizations wanting to create unforgettable digital moments.',
      problemSolved: 'Boring, static presentations of products or ideas that fail to convey innovation and premium quality.',
      deliverables: ['3D Web Experiences', 'Interactive Storytelling', 'AR/VR Assets', 'Premium UI/UX Design']
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 bg-white">
      
      {/* Services Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Digital solutions designed to <span className="text-gradient-green">solve real problems.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            From creative production and web presence to scalable software and AI automation, we build capabilities that help your business grow.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {services.map((srv, idx) => {
          const IconC = srv.icon;
          const isEven = idx % 2 === 0;

          return (
            <SlowScrollReveal key={srv.id}>
              <div id={srv.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Visual / Title Side */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="sticky top-32 space-y-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${srv.gradient} text-white flex items-center justify-center shadow-lg`}>
                      <IconC className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {srv.title}
                    </h2>
                    
                    <button
                      onClick={() => navigate('/contact')}
                      className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs tracking-wider transition-colors cursor-pointer mt-4"
                    >
                      <span>Inquire About {srv.title.split('&')[0].split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* What it is */}
                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      <Target className="w-4 h-4 text-emerald-500" />
                      What It Is
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {srv.whatItIs}
                    </p>
                  </div>

                  {/* Who it is for */}
                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      <Briefcase className="w-4 h-4 text-emerald-500" />
                      Who It Is For
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {srv.whoItsFor}
                    </p>
                  </div>

                  {/* Problem Solved */}
                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      <Wrench className="w-4 h-4 text-rose-500" />
                      Business Problem Solved
                    </h3>
                    <p className="text-slate-700 font-medium italic">
                      "{srv.problemSolved}"
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.deliverables.map((item, i) => (
                        <div key={i} className={`p-4 rounded-xl ${srv.bgClass} border border-white/50 shadow-sm`}>
                          <span className={`font-bold text-sm ${srv.textClass}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="lg:hidden pt-4">
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-white font-extrabold text-sm tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </SlowScrollReveal>
          );
        })}
      </div>

      {/* SERVICE CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white text-center space-y-6 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10">
              Need a custom mix of services?
            </h2>

            <p className="text-slate-300 text-base max-w-xl mx-auto relative z-10 leading-relaxed font-medium">
              We often combine creative production, web development, and software to deliver a complete end-to-end solution. Let's discuss your goals.
            </p>

            <div className="pt-2 relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
