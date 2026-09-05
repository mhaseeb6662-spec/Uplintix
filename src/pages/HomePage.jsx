import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Video, 
  TrendingUp, 
  MonitorSmartphone,
  Code, 
  Cpu, 
  Layers, 
  Target,
  Globe,
  Briefcase,
  Lightbulb,
  Settings,
  BarChart,
  Rocket
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
      desc: 'Content designed to capture attention and communicate your brand with clarity.',
      items: ['Video Editing', 'Videography', 'Graphic Design', 'Content Production'],
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Social & Growth',
      icon: TrendingUp,
      desc: 'Consistent digital presence backed by strategy, content and growth thinking.',
      items: ['Social Media Management', 'Content Strategy', 'Growth Support'],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Web Solutions',
      icon: MonitorSmartphone,
      desc: 'Fast, modern and conversion-focused digital experiences built around business goals.',
      items: ['Website Design', 'Website Development', 'Landing Pages', 'Custom Web Solutions'],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Technology Solutions',
      icon: Code,
      desc: 'Custom systems, software and intelligent automation designed to solve real problems.',
      items: ['Software Development', 'SaaS Development', 'AI Solutions', 'Automation'],
      gradient: 'from-emerald-600 to-emerald-800'
    },
    {
      title: 'Premium Digital Experiences',
      icon: Layers,
      desc: 'Immersive digital experiences that help brands stand apart.',
      items: ['3D Digital Experiences', 'Interactive Brand Experiences'],
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'Discover', desc: 'Understand the business, audience, challenges and goals.' },
    { num: '02', title: 'Strategize', desc: 'Define the right creative, digital or technology solution.' },
    { num: '03', title: 'Create & Build', desc: 'Design, produce and develop the solution.' },
    { num: '04', title: 'Launch', desc: 'Deploy, publish or implement the final product.' },
    { num: '05', title: 'Improve & Scale', desc: 'Use feedback, performance and data to continue improving.' },
  ];

  const whyUplintix = [
    { title: 'Creative + Technology Expertise', desc: 'We bring both sides of the digital spectrum together.' },
    { title: 'End-to-End Capabilities', desc: 'From initial branding to custom software development.' },
    { title: 'Business-Problem-First Thinking', desc: 'We design solutions to solve real operational bottlenecks.' },
    { title: 'Scalable Technology Mindset', desc: 'Building systems that can grow alongside your revenue.' },
  ];

  const industries = [
    'Healthcare', 'Doctors & Clinics', 'Laboratories', 'Education', 'Restaurants', 'E-commerce', 'Professional Services', 'Startups', 'SaaS Companies'
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. SERVICES SECTION */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                <span>OUR EXPERTISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Specialized Digital Capabilities.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {coreServices.map((cap, i) => {
                const IconComp = cap.icon;
                return (
                  <TiltCard
                    key={i}
                    maxTilt={8}
                    scale={1.02}
                    className={`bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${cap.title === 'Technology Solutions' ? 'md:col-span-2 lg:col-span-2 ring-2 ring-emerald-500/50 bg-emerald-50/30' : ''}`}
                  >
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} text-white flex items-center justify-center shadow-md mb-6`}>
                        <IconComp className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2">{cap.title}</h3>
                      <p className="text-slate-600 text-sm mb-6">{cap.desc}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {cap.items.map((item, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200/60">
                            {item}
                          </span>
                        ))}
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
                <span>View Full Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 3. CREATIVE + TECH POSITIONING (Flowchart Narrative) */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-[11px] font-extrabold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE UPLINTIX DIFFERENCE</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Where creativity meets <span className="text-gradient-green">technology.</span>
                </h2>
                
                <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                  <p>
                    Great businesses need more than just content. They need strong digital experiences, efficient systems, and technology that supports growth.
                  </p>
                  <p>
                    Uplintix brings creative thinking and technical execution together — helping businesses move seamlessly from ideas to content, websites, custom software, and intelligent automation.
                  </p>
                </div>
              </div>

              {/* Visual Flowchart */}
              <div className="relative">
                <div className="flex flex-col space-y-4">
                  {['IDEA', 'CREATIVE', 'DIGITAL EXPERIENCE', 'TECHNOLOGY', 'GROWTH'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 font-mono font-bold group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors z-10 relative shadow-lg">
                        0{idx + 1}
                      </div>
                      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-4 group-hover:border-emerald-500/50 transition-colors shadow-lg">
                        <span className="font-extrabold text-sm tracking-widest uppercase text-white group-hover:text-emerald-400 transition-colors">{step}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Vertical connecting line */}
                  <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-800 -z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 4. TECHNOLOGY / AI / SOFTWARE SECTION */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-emerald-50 rounded-[40px] p-8 sm:p-16 border border-emerald-100 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Technology built around <span className="text-emerald-600">real business problems.</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    We identify workflow bottlenecks and build practical digital solutions around them. From bespoke SaaS products to AI-driven automation, our software solutions are designed to scale your operations efficiently.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-8 py-4 rounded-full bg-slate-900 text-white font-extrabold text-xs tracking-wider shadow-lg hover:bg-emerald-600 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Discuss a Technology Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Custom Software', icon: Code },
                    { title: 'SaaS Development', icon: Layers },
                    { title: 'AI Solutions', icon: Lightbulb },
                    { title: 'Business Automation', icon: Settings }
                  ].map((tech, idx) => {
                    const IconC = tech.icon;
                    return (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                        <IconC className="w-6 h-6 text-emerald-500 mb-4" />
                        <h4 className="font-extrabold text-slate-900">{tech.title}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 5. FEATURED WORK / PORTFOLIO */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>SELECTED WORK</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Multidisciplinary Execution.
                </h2>
              </div>
              <button
                onClick={() => navigate('/work')}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs tracking-wider transition-colors cursor-pointer"
              >
                <span>View All Cases</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <PortfolioSection onOpenProject={onOpenProject} limit={3} />
            
            <div className="mt-10 md:hidden text-center">
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-800 hover:bg-emerald-600 text-white font-extrabold text-xs tracking-wider transition-colors cursor-pointer w-full justify-center"
              >
                <span>View All Cases</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 6. HOW WE WORK */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-extrabold uppercase tracking-widest">
                <span>OUR PROCESS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How We Deliver Value.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-emerald-500 transition-colors">
                  <div className="text-4xl font-black text-slate-100 absolute -top-2 -right-2 group-hover:text-emerald-50 transition-colors z-0">
                    {step.num}
                  </div>
                  <div className="relative z-10 space-y-2 mt-4">
                    <span className="text-emerald-600 font-mono font-bold text-xs">{step.num}</span>
                    <h3 className="text-base font-extrabold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 7. INDUSTRIES */}
      <SlowScrollReveal>
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">Industries We Serve</h2>
                <p className="text-slate-600 text-sm">We adapt our solutions to real business problems across diverse sectors, rather than forcing every client into the same package.</p>
              </div>
              <div className="lg:w-2/3 flex flex-wrap gap-3">
                {industries.map((ind, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-full shadow-sm hover:shadow-md transition-shadow">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 8. ABOUT / VISION & INTERNATIONAL POSITIONING */}
      <SlowScrollReveal>
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-extrabold uppercase tracking-widest">
                  <Globe className="w-3.5 h-3.5" />
                  <span>INTERNATIONAL CAPABILITY</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  More than a creative agency.
                </h2>
                
                <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                  <p>
                    Uplintix was built around creative and digital services, but our vision goes further. We are building a modern digital solutions company where creativity, software, AI, and automation work together to solve meaningful business problems.
                  </p>
                  <p>
                    Our goal is to create long-term value for ambitious businesses, wherever they operate — from the content people see to the systems that power how companies run.
                  </p>
                  <p className="text-emerald-400 font-bold">
                    Built for ambitious businesses. USA, UK, Canada, Australia, UAE and beyond.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUplintix.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700/50">
                    <h3 className="text-sm font-extrabold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* 9. FINAL CTA */}
      <SlowScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-10 sm:p-16 lg:p-20 rounded-[40px] bg-slate-950 text-white text-center space-y-8 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
              <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight relative z-10 leading-tight">
                Have a challenge worth solving?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                Whether you need better content, a stronger website, custom software or intelligent automation, let's explore what Uplintix can build for your business.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-green text-white font-extrabold text-sm tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-slate-900 border border-slate-700 text-white font-extrabold text-sm tracking-wider hover:bg-slate-800 transition-colors cursor-pointer text-center"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
