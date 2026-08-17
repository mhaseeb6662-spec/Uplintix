import React from 'react';
import { ArrowRight, Sparkles, Star, Users, Flame } from 'lucide-react';
import { SOCIAL_LINKS } from './Navbar';
import { InstagramIcon, TikTokIcon, YoutubeIcon } from './SocialIcons';
import TiltCard from './TiltCard';

export default function InfluencersSection({ onOpenEstimate }) {
  const influencers = [
    {
      name: 'Shahveer Jafry',
      role: 'Content Creator',
      platform: 'YouTube & Instagram',
      followers: '3.9M Subscribers',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
      niche: 'Vlogs & Entertainment',
      topSocial: SOCIAL_LINKS.instagram
    },
    {
      name: 'Sistrology',
      role: 'Creator Group',
      platform: 'YouTube',
      followers: '7.2M Subscribers',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
      niche: 'Lifestyle & Family',
      topSocial: SOCIAL_LINKS.instagram
    },
    {
      name: 'Zaid Ali T',
      role: 'Content Creator',
      platform: 'YouTube & Facebook',
      followers: '3.5M Followers',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
      niche: 'Comedy & Lifestyle',
      topSocial: SOCIAL_LINKS.facebook
    },
    {
      name: 'Rabeeca Khan',
      role: 'Digital Creator',
      platform: 'TikTok & Instagram',
      followers: '4.8M Followers',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
      niche: 'Fashion & Music',
      topSocial: SOCIAL_LINKS.tiktok
    },
    {
      name: 'Ducky Bhai',
      role: 'Content Creator',
      platform: 'YouTube',
      followers: '8.7M Subscribers',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
      niche: 'Gaming & Vlogs',
      topSocial: SOCIAL_LINKS.instagram
    }
  ];

  return (
    <section id="influencers" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative 3D Spheres & Shapes Background */}
      <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-emerald-400/20 filter blur-xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-500/20 filter blur-2xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Flame className="w-4 h-4 text-emerald-600 animate-bounce" />
            <span>OUR INFLUENCERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Voices That Inspire, <span className="text-gradient-green">Brands That Grow</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We collaborate with top creators and digital personalities who help brands reach massive audiences and build authentic relationships.
          </p>
        </div>

        {/* Dynamic 3D Influencer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {influencers.map((influencer, idx) => (
            <TiltCard
              key={idx}
              maxTilt={15}
              scale={1.04}
              className="bg-white rounded-3xl p-4 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Niche Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-emerald-400 text-[10px] font-bold shadow-md">
                    {influencer.niche}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {influencer.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {influencer.role}
                  </p>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-xs pt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                    <span>{influencer.followers}</span>
                  </div>
                </div>
              </div>

              {/* Social Platforms Row */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  {influencer.platform}
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-xs hover:scale-110"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-xs hover:scale-110"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

        {/* Dynamic CTA Banner */}
        <TiltCard
          maxTilt={6}
          scale={1.01}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

          <div className="flex items-center gap-4 z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shadow-lg">
              <Star className="w-7 h-7 fill-emerald-400 animate-spin-slow" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-white">Want To Collaborate With Top Influencers?</h4>
              <p className="text-xs text-slate-400">Launch viral campaigns with verified digital personalities.</p>
            </div>
          </div>

          <button
            onClick={onOpenEstimate}
            className="z-10 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-green hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            Let's Talk →
          </button>
        </TiltCard>

      </div>
    </section>
  );
}
