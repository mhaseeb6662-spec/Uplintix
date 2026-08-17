import React, { useState } from 'react';
import { ExternalLink, Play, Eye, ArrowRight, Sparkles, Filter, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function PortfolioSection({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'NexGen E-Commerce Platform',
      category: 'Web Development',
      tag: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0a67568d049f?w=800&auto=format&fit=crop&q=80',
      description: 'Ultra-fast Next.js e-commerce storefront with custom 3D product previews and instant checkout.',
      metrics: '+340% Conversion Growth',
      client: 'KicksStore Global',
      isVideo: false
    },
    {
      id: 2,
      title: 'Botanical Brand Campaign',
      category: 'Branding',
      tag: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
      description: 'Sustainable luxury cosmetics brand launch featuring 3D visual mockups and viral Meta ad creatives.',
      metrics: '2.4M Social Impressions',
      client: 'Verdant Botanicals',
      isVideo: false
    },
    {
      id: 3,
      title: 'AI Quantum Tech Portal',
      category: 'Web Development',
      tag: 'Web Development',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      description: 'High-tech dark corporate website with interactive WebGL shaders and real-time API integrations.',
      metrics: '1.2s Load Time',
      client: 'Quantum AI Systems',
      isVideo: false
    },
    {
      id: 4,
      title: 'Cinematic Product Promo Video',
      category: 'Video',
      tag: 'Video Editing',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
      description: 'High-energy 4K promotional commercial for camera hardware launch with custom sound design.',
      metrics: '4.8M Video Views',
      client: 'Apex Vision Pro',
      isVideo: true
    },
    {
      id: 5,
      title: 'Fintech Mobile App UI/UX',
      category: 'UI/UX Design',
      tag: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      description: 'Modern high-contrast dark green mobile app interface for crypto trading and wallet management.',
      metrics: '500K+ Downloads',
      client: 'Veloce Pay',
      isVideo: false
    },
    {
      id: 6,
      title: 'Cyberpunk Gaming Community',
      category: 'Marketing',
      tag: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
      description: 'Multi-platform influencer push & esports tournament campaign driving over 150K active signups.',
      metrics: '#1 Trending Campaign',
      client: 'HyperGrid Studios',
      isVideo: false
    }
  ];

  const categories = ['All', 'Web Development', 'Video Editing', 'Digital Marketing', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tag.toLowerCase().includes(activeFilter.toLowerCase()) || p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Glow Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Nav */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR PORTFOLIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Work That <span className="text-gradient-green">Speaks For Itself</span>
            </h2>

            <p className="text-slate-400 text-base">
              Explore our recent success stories, high-converting digital products, and brand transformations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFilter === cat 
                    ? 'bg-gradient-green text-white shadow-lg shadow-emerald-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={12}
              scale={1.03}
              onClick={() => onOpenProject(project)}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-bold shadow-md">
                    {project.tag}
                  </span>
                </div>

                {/* Video Play Overlay */}
                {project.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-16 h-16 rounded-full bg-emerald-500/40 animate-ping"></div>
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-bold mb-1">
                    <span>{project.client}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-[11px]">{project.metrics}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1">
                    View Project Case
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-800 group-hover:bg-emerald-500 text-slate-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenProject(projects[0])}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 text-white font-extrabold text-xs tracking-wider hover:bg-slate-800 transition-all duration-300 cursor-pointer shadow-xl"
          >
            <span>Explore All Showcase Projects</span>
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
