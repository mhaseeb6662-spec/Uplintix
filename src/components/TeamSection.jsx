import React, { useState } from 'react';
import { Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { SOCIAL_LINKS } from './Navbar';
import { LinkedinIcon, TwitterIcon, GithubIcon } from './SocialIcons';
import TiltCard from './TiltCard';

export default function TeamSection({ onOpenEstimate }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const team = [
    {
      name: 'Abu Bakar',
      role: 'Founder & CEO',
      category: 'Management',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
      bio: 'Visionary strategist driving software innovation and agency expansion.'
    },
    {
      name: 'Ubaidullah',
      role: 'Co-Founder',
      category: 'Management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      bio: 'Operations lead specializing in business growth and client relations.'
    },
    {
      name: 'Haseeb Khan',
      role: 'Lead Developer',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
      bio: 'Full-stack React & WebGL architect crafting high-performance digital apps.'
    },
    {
      name: 'Usama',
      role: 'UI/UX Designer',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
      bio: 'Crafting user-centered interfaces with modern 3D visual language.'
    },
    {
      name: 'Zainab',
      role: 'Social Media Manager',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      bio: 'Social strategist orchestrating viral campaigns across Instagram & TikTok.'
    },
    {
      name: 'Ali Raza',
      role: 'Video Editor',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
      bio: 'Motion graphics expert and cinematic story teller.'
    },
    {
      name: 'Hamza',
      role: 'SEO Specialist',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80',
      bio: 'Data analyst optimizing search visibility and organic acquisition.'
    },
    {
      name: 'Areeba',
      role: 'Graphic Designer',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
      bio: 'Creative designer specializing in 3D brand identity and visuals.'
    }
  ];

  const filterCategories = ['All', 'Management', 'Development', 'Design', 'Marketing'];

  const filteredTeam = activeFilter === 'All'
    ? team
    : team.filter(m => m.category === activeFilter);

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-100/40 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Minds Behind <span className="text-gradient-green">Your Success</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            A passionate team of creative thinkers, developers, and marketers working together to build something extraordinary.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-extrabold rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic 3D Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member, idx) => (
            <TiltCard
              key={idx}
              maxTilt={12}
              scale={1.03}
              className="bg-slate-50/80 hover:bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Member Details */}
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 pt-1 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase">
                  {member.category}
                </span>
                <div className="flex items-center gap-2 text-slate-500">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-all hover:scale-110">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-all hover:scale-110">
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

        {/* Join Our Team Button */}
        <div className="mt-14 text-center">
          <a
            href="#careers"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs tracking-wider transition-all duration-300 shadow-lg group hover:scale-105"
          >
            <span>Join Our Team</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
