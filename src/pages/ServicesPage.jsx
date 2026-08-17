import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Palette, 
  Share2, 
  TrendingUp, 
  UserCheck, 
  Code, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function ServicesPage() {
  const navigate = useNavigate();

  const creativeServices = [
    {
      title: 'Video Production & Editing',
      tagline: 'Turn your ideas into content people actually want to watch.',
      icon: Video,
      items: [
        'Social Media Videos',
        'Reels & Short-Form Content',
        'Promotional Videos',
        'Product Videos',
        'Corporate Videos',
        'Video Ads',
        'Post-Production & Editing'
      ]
    },
    {
      title: 'Graphic Design & Branding',
      tagline: 'Build a visual identity people remember.',
      icon: Palette,
      items: [
        'Brand Identity',
        'Social Media Designs',
        'Marketing Creatives',
        'Promotional Graphics',
        'Presentation Design',
        'Product Graphics'
      ]
    }
  ];

  const digitalMarketingServices = [
    {
      title: 'Social Media Management',
      tagline: 'We help businesses stay consistent, relevant, and visible across their social platforms.',
      icon: Share2,
      items: [
        'Content Strategy',
        'Content Creation',
        'Scheduling & Publishing',
        'Community Management',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Performance Marketing',
      tagline: "Don't just reach people. Reach the right people.",
      icon: TrendingUp,
      items: [
        'Paid Social Campaigns',
        'Lead Generation',
        'Conversion Campaigns',
        'Campaign Optimization',
        'Performance Tracking'
      ]
    },
    {
      title: 'Influencer Marketing',
      tagline: 'Connect your brand with creators who can influence your target audience.',
      icon: UserCheck,
      items: [
        'Influencer Research',
        'Creator Selection',
        'Campaign Strategy',
        'Campaign Management',
        'Performance Tracking'
      ]
    }
  ];

  const techServices = [
    {
      title: 'Website Design & Development',
      tagline: 'Your website should do more than look good. It should support your business.',
      icon: Code,
      items: [
        'Business Websites',
        'Landing Pages',
        'E-commerce Websites',
        'Custom Web Solutions',
        'Responsive Development',
        'Website Maintenance'
      ]
    },
    {
      title: 'Web Applications & Custom Software',
      tagline: 'We turn business processes and ideas into practical digital products.',
      icon: Layers,
      items: [
        'Web Applications',
        'Custom Software',
        'Business Dashboards',
        'Internal Tools',
        'Client Portals',
        'Workflow Systems'
      ]
    },
    {
      title: 'AI & Automation',
      tagline: 'Use technology to reduce repetitive work and create smarter workflows.',
      icon: Cpu,
      items: [
        'AI Integrations',
        'Workflow Automation',
        'AI Chatbots',
        'Business Automation',
        'AI-powered Tools'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 bg-slate-50">
      
      {/* Services Hero */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Digital Services Built Around <span className="text-gradient-green">Your Business Goals.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            From creative content to technology and growth marketing, Uplintix brings the capabilities you need to build, launch, and grow in one place.
          </p>
        </div>
      </section>

      {/* 1. CREATIVE SERVICES */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              CREATIVE SERVICES
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Content & Visual Identity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeServices.map((srv, idx) => {
              const IconC = srv.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={10}
                  scale={1.02}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <IconC className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900">{srv.title}</h3>
                    <p className="text-emerald-700 text-sm font-bold italic">{srv.tagline}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                      {srv.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>
      </SlowScrollReveal>

      {/* 2. DIGITAL MARKETING */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              DIGITAL MARKETING
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Social, Performance & Influencer Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalMarketingServices.map((srv, idx) => {
              const IconC = srv.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={10}
                  scale={1.02}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <IconC className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900">{srv.title}</h3>
                    <p className="text-emerald-700 text-sm font-bold italic">{srv.tagline}</p>

                    <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                      {srv.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>
      </SlowScrollReveal>

      {/* 3. TECHNOLOGY SERVICES */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              TECHNOLOGY SERVICES
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Websites, Software & AI Systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techServices.map((srv, idx) => {
              const IconC = srv.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={10}
                  scale={1.02}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <IconC className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900">{srv.title}</h3>
                    <p className="text-emerald-700 text-sm font-bold italic">{srv.tagline}</p>

                    <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                      {srv.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Build Your System</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>
      </SlowScrollReveal>

      {/* SERVICE CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white text-center space-y-6 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10">
              Not Sure What You Need?
            </h2>

            <p className="text-slate-300 text-base max-w-xl mx-auto relative z-10 leading-relaxed font-medium">
              Tell us what you're trying to achieve. We'll help you figure out the right solution.
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
