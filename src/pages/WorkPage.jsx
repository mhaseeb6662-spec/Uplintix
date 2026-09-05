import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, CheckCircle, Briefcase } from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function WorkPage({ onOpenProject }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Creative', 'Video', 'Social', 'Web', 'Software', 'AI / Automation'];

  // Portfolio data matching the premium international brand direction
  const portfolioProjects = [
    {
      id: 1,
      title: 'Global MedTech Analytics Platform',
      client: 'Healthcare Systems Inc.',
      category: 'Software',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      challenge: 'The client struggled with disparate medical data sources causing delays in patient diagnostics and reporting.',
      approach: 'Built a secure, centralized HIPAA-compliant dashboard that unifies data streams into an accessible web interface.',
      outcome: 'Data processing speed improved by 60%',
      delivered: ['Custom Web Application', 'UI/UX Design', 'Database Architecture'],
      isVideo: false,
    },
    {
      id: 2,
      title: 'Luxury Real Estate Brand Film',
      client: 'Aura Properties',
      category: 'Video',
      industry: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?w=800&auto=format&fit=crop&q=80',
      challenge: 'Needed a premium visual showcase to pre-sell $5M+ off-plan properties to international investors.',
      approach: 'Produced a cinematic brand film mixing live-action lifestyle shots with high-end 3D architectural renders.',
      outcome: 'Generated $12M in pre-sales within 30 days',
      delivered: ['Video Production', '3D Rendering', 'Sound Design'],
      isVideo: true,
    },
    {
      id: 3,
      title: 'E-commerce Conversion Redesign',
      client: 'Lumina Fashion',
      category: 'Web',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      challenge: 'High traffic volume but abysmally low checkout completion rates due to a clunky mobile experience.',
      approach: 'Redesigned the entire user journey with a mobile-first headless Shopify build focusing on one-click checkout.',
      outcome: 'Increased conversion rate by 140%',
      delivered: ['Website Redesign', 'Headless Commerce', 'CRO Strategy'],
      isVideo: false,
    },
    {
      id: 4,
      title: 'Automated Lead Routing AI',
      client: 'National Logistics',
      category: 'AI / Automation',
      industry: 'Logistics',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      challenge: 'Manual sorting of thousands of B2B inquiries causing 48-hour delay in response times and lost deals.',
      approach: 'Implemented an AI-driven NLP classification system that routes leads to the correct regional manager instantly.',
      outcome: 'Response time reduced to < 5 minutes',
      delivered: ['AI Integration', 'Zapier/Make Automation', 'CRM Setup'],
      isVideo: false,
    },
    {
      id: 5,
      title: 'Gen Z Audience Acquisition',
      client: 'Vibe Beverages',
      category: 'Social',
      industry: 'FMCG',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
      challenge: 'Legacy brand losing market share to new viral competitors on TikTok and Instagram Reels.',
      approach: 'Created an aggressive short-form content strategy leveraging creator partnerships and trending audio.',
      outcome: '25M+ organic impressions in 6 months',
      delivered: ['Social Media Management', 'Content Creation', 'Influencer Strategy'],
      isVideo: true,
    },
    {
      id: 6,
      title: 'FinTech App Rebranding',
      client: 'PayStream',
      category: 'Creative',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
      challenge: 'The app looked outdated and struggled to build trust with a younger, tech-savvy demographic.',
      approach: 'Executed a complete brand overhaul including a new logo, color system, and modern design guidelines.',
      outcome: 'Awarded Best FinTech App Design 2023',
      delivered: ['Brand Identity', 'Graphic Design', 'UI Kit'],
      isVideo: false,
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-28 pb-20 space-y-20 bg-slate-950 text-white min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] font-extrabold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto">
            Work that drives <span className="text-gradient-green">growth.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore our featured projects across creative production, custom software, and digital marketing.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-300 cursor-pointer ${
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

      {/* PROJECT CASE STUDIES GRID */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={8}
                scale={1.02}
                onClick={() => onOpenProject && onOpenProject(project)}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Tag */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {project.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/90 backdrop-blur-sm text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                          <Play className="w-6 h-6 ml-1 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Case Details */}
                  <div className="p-8 space-y-6">
                    <div>
                      <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-bold mb-2">
                        <span>{project.client}</span>
                        <span className="px-2 py-1 rounded-md bg-emerald-950/50 border border-emerald-800/50 text-[11px] text-emerald-300">{project.outcome}</span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2">Industry: <span className="text-slate-200 font-bold">{project.industry}</span></p>
                    </div>

                    <div className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-5">
                      <p><span className="font-bold text-white block mb-1">The Challenge:</span> {project.challenge}</p>
                      <p><span className="font-bold text-white block mb-1">Our Solution:</span> {project.approach}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest block mb-3">Services Delivered</span>
                      <ul className="flex flex-wrap gap-2">
                        {project.delivered.map((del, i) => (
                          <li key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 text-xs font-bold text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button className="w-full py-4 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white text-xs font-extrabold tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:bg-emerald-600">
                    <span>View Project Details</span>
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="p-10 sm:p-16 rounded-[40px] bg-slate-900 text-white text-center space-y-6 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10">
              Ready to start your project?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed relative z-10 font-medium">
              We're looking for ambitious partners ready to build the next generation of creative and tech solutions.
            </p>
            <div className="pt-4 relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-sm tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Discuss Your Goals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
