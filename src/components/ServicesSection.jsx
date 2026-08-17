import React from 'react';
import { 
  Video, 
  Code, 
  TrendingUp, 
  Palette, 
  Cpu, 
  BarChart3, 
  Share2, 
  UserCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: 'video-editing',
      title: 'Video Editing',
      category: 'Creative Production',
      icon: Video,
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Professional cinematic editing, motion graphics, and color grading that tells your brand story and engages viewers.',
      badge: 'High Impact',
      features: ['Reels & TikTok Promo', '4K Commercial Editing', 'Color Grading', 'Sound Design & VFX']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      category: 'Software & Tech',
      icon: Code,
      gradient: 'from-slate-800 to-slate-950',
      description: 'High-performance custom React websites, Next.js web applications, and e-commerce platforms built for speed & conversions.',
      badge: 'Featured',
      features: ['Custom React & Tailwind', '3D WebGL Integration', 'Ultra-fast Optimization', 'CMS & E-commerce']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      category: 'Growth & ROI',
      icon: TrendingUp,
      gradient: 'from-emerald-600 to-emerald-700',
      description: 'Data-backed multi-channel advertising (Meta, Google, TikTok) designed to acquire high-value customers.',
      badge: 'Max ROI',
      features: ['PPC & Meta Ads', 'Sales Funnel Creation', 'Conversion Rate Optimization', 'Performance Analytics']
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity & Design',
      category: 'Creative Branding',
      icon: Palette,
      gradient: 'from-teal-600 to-emerald-500',
      description: 'Unique logo designs, 3D brand guidelines, marketing assets, and visual assets that make your brand stand out.',
      badge: '3D Styling',
      features: ['Logo & Typography', '3D Brand Assets', 'Packaging & Merch', 'Design Systems']
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions & Automation',
      category: 'Next-Gen Tech',
      icon: Cpu,
      gradient: 'from-slate-900 to-emerald-950',
      description: 'Smart AI chatbots, workflow automations, and custom AI tools to streamline operational workflows.',
      badge: 'Next-Gen',
      features: ['AI Voice & Chatbots', 'Workflow Automation', 'Custom LLM Agents', 'Data Extraction']
    },
    {
      id: 'seo-analytics',
      title: 'SEO & Analytics',
      category: 'Organic Growth',
      icon: BarChart3,
      gradient: 'from-emerald-500 to-green-600',
      description: 'Technical SEO audits, rank tracking, backlink strategy, and analytics dashboards to dominate search results.',
      badge: 'Top Rankings',
      features: ['Technical SEO Audit', 'Keyword Strategy', 'Google Rank Guarantee', 'Monthly Reporting']
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      category: 'Brand Awareness',
      icon: Share2,
      gradient: 'from-emerald-700 to-teal-800',
      description: 'Comprehensive content creation, daily posting, community management, and audience growth across all platforms.',
      badge: 'Community',
      features: ['Content Calendar', 'Graphics & Reels', 'Community Moderation', 'Growth Reporting']
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      category: 'Creator Strategy',
      icon: UserCheck,
      gradient: 'from-slate-800 to-emerald-800',
      description: 'Connect with top-tier influencers and content creators to amplify your product launch and drive viral sales.',
      badge: 'Viral Scale',
      features: ['Creator Matching', 'Campaign Management', 'Contracting & Deliverables', 'ROI Tracking']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      
      {/* Dynamic Background Animated Shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100/40 rounded-full filter blur-3xl animate-float pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions That Power Your <span className="text-gradient-green">Growth</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            From powerful web applications to result-driven marketing, we offer everything your brand needs to scale in the digital world.
          </p>
        </div>

        {/* Dynamic 3D Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <TiltCard
                key={service.id}
                maxTilt={14}
                scale={1.03}
                className="bg-slate-50/80 hover:bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-slate-200/60 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Arrow */}
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-gradient-green text-white font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md group-hover:shadow-emerald-500/25 cursor-pointer"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Dynamic Custom Banner */}
        <TiltCard
          maxTilt={6}
          scale={1.01}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden border border-emerald-500/30"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>
          
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" />
              <span>CUSTOM ENTERPRISE SOLUTIONS</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold">Need Something Custom?</h4>
            <p className="text-slate-400 text-sm max-w-xl">
              We build custom enterprise software, WebGL applications, and tailored full-funnel marketing campaigns.
            </p>
          </div>

          <button
            onClick={() => onSelectService({ title: 'Custom Enterprise Solution' })}
            className="z-10 px-8 py-4 rounded-full bg-gradient-green hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/40 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Let's Build It Together →
          </button>
        </TiltCard>

      </div>
    </section>
  );
}
