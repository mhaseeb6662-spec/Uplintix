import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Play, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function WorkPage({ onOpenProject }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Video', 'Design', 'Web', 'Social Media', 'Marketing', 'Technology'];

  // Reusing real verified portfolio projects from existing codebase
  const projects = [
    {
      id: 1,
      title: 'NexGen E-Commerce Platform',
      client: 'KicksStore Global',
      industry: 'E-commerce',
      services: 'Website Design & Development, Custom Web Solutions',
      category: 'Web',
      tag: 'Web',
      image: 'https://images.unsplash.com/photo-1556742049-0a67568d049f?w=800&auto=format&fit=crop&q=80',
      challenge: 'Slow legacy storefront causing high bounce rates and abandoned checkouts on mobile.',
      approach: 'Engineered a modern Next.js e-commerce app with 3D product previews and instant 1-click checkout.',
      delivered: ['Custom React Frontend', '3D WebGL Configurator', 'Payment Gateway Integration'],
      outcome: '+340% Conversion Growth',
      isVideo: false
    },
    {
      id: 2,
      title: 'Botanical Brand Campaign',
      client: 'Verdant Botanicals',
      industry: 'Luxury Cosmetics & Retail',
      services: 'Graphic Design & Branding, Performance Marketing',
      category: 'Design',
      tag: 'Design',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
      challenge: 'Needed a distinctive brand visual identity and product packaging for global retail expansion.',
      approach: 'Created 3D eco-friendly brand assets paired with high-converting Meta paid ad creatives.',
      delivered: ['Complete Brand Guidelines', '3D Product Packaging', 'Paid Social Ad Suite'],
      outcome: '2.4M Social Impressions',
      isVideo: false
    },
    {
      id: 3,
      title: 'AI Quantum Tech Portal',
      client: 'Quantum AI Systems',
      industry: 'Technology & AI',
      services: 'Web Applications & Custom Software, AI & Automation',
      category: 'Technology',
      tag: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      challenge: 'Complex enterprise AI workflow requiring clean real-time dashboard analytics.',
      approach: 'Architected high-tech dark mode portal with interactive WebGL shaders and WebSocket data streams.',
      delivered: ['Real-Time Analytics Dashboard', 'Custom API Integration', 'Internal Workflows'],
      outcome: '1.2s Load Time',
      isVideo: false
    },
    {
      id: 4,
      title: 'Cinematic Product Promo Video',
      client: 'Apex Vision Pro',
      industry: 'Consumer Hardware',
      services: 'Video Production & Editing',
      category: 'Video',
      tag: 'Video',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
      challenge: 'Capturing product details in action for a flagship 4K camera hardware release.',
      approach: 'Filmed high-energy promotional commercial with custom sound design and motion graphics.',
      delivered: ['4K Commercial Reel', 'Short-Form TikTok & Reels Edits', 'Post-Production VFX'],
      outcome: '4.8M Video Views',
      isVideo: true
    },
    {
      id: 5,
      title: 'Fintech Mobile App UI/UX',
      client: 'Veloce Pay',
      industry: 'Professional Services & Finance',
      services: 'Website Design & Development, Graphic Design & Branding',
      category: 'Design',
      tag: 'Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      challenge: 'Clunky interface preventing users from completing quick peer-to-peer payments.',
      approach: 'Redesigned high-contrast dark green mobile app UI focused on 2-tap money transfer.',
      delivered: ['UI/UX Design System', 'Interactive Prototype', 'Component Library'],
      outcome: '500K+ Downloads',
      isVideo: false
    },
    {
      id: 6,
      title: 'Cyberpunk Gaming Community',
      client: 'HyperGrid Studios',
      industry: 'Gaming & Entertainment',
      services: 'Social Media Management, Influencer Marketing, Performance Marketing',
      category: 'Marketing',
      tag: 'Marketing',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
      challenge: 'Building pre-launch viral momentum for a global multiplayer game title.',
      approach: 'Orchestrated multi-creator influencer push and esports tournament campaign.',
      delivered: ['Influencer Matchmaking', 'Community Discord Setup', 'Viral Reels Strategy'],
      outcome: '#1 Trending Campaign',
      isVideo: false
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase() || p.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="pt-28 pb-20 space-y-16 bg-slate-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Work That <span className="text-gradient-green">Speaks for Itself.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore selected projects across creative, marketing, and technology.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-extrabold rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === cat 
                    ? 'bg-gradient-green text-white shadow-lg shadow-emerald-500/30' 
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO INTRO */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-4 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Different Businesses. Different Challenges. <span className="text-gradient-green">One Standard.</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              From healthcare and education to local businesses and growing brands, we've worked across different industries and project types.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-emerald-400 tracking-wider">
              Understand → Strategize → Create → Deliver → Improve
            </div>
          </div>
        </section>
      </SlowScrollReveal>

      {/* PROJECT CASE STUDIES GRID */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={12}
                scale={1.03}
                onClick={() => onOpenProject(project)}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-bold shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {project.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 ml-1 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Case Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-bold mb-1">
                        <span>{project.client}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-[11px]">{project.outcome}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Industry: <span className="text-slate-300 font-semibold">{project.industry}</span></p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                      <p><span className="font-bold text-emerald-400">The Challenge:</span> {project.challenge}</p>
                      <p><span className="font-bold text-emerald-400">Our Approach:</span> {project.approach}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">What We Delivered:</span>
                      <ul className="space-y-1">
                        {project.delivered.map((del, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2">
                    <span>View Project Case</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </TiltCard>
            ))}
          </div>
        </section>
      </SlowScrollReveal>

      {/* CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-900 text-white text-center space-y-6 border border-slate-800 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              Let's create something high-performing for your business.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
