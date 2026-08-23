import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function HeroSection({ onOpenVideo }) {
  const navigate = useNavigate();

  const clientLogos = [
    { name: 'Google', symbol: 'G' },
    { name: 'Meta', symbol: '∞' },
    { name: 'Microsoft', symbol: '田' },
    { name: 'Amazon', symbol: 'a' },
    { name: 'TikTok', symbol: '🎵' },
    { name: 'Shopify', symbol: '🛍️' },
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section id="home-hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/50">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-extrabold tracking-wider uppercase shadow-xs">
              <span className="font-mono text-emerald-700 font-black">YOUR DIGITAL PARTNER</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              We Build Digital Experiences That <span className="text-gradient-green">Drive Growth.</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We help businesses create powerful brands, high-performing websites, and effective marketing campaigns. Everything you need to grow, under one roof.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Line & Social Proof */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2 overflow-hidden">
                  {avatars.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="Client review avatar"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                    />
                  ))}
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-extrabold text-slate-900">5.0</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    <span className="text-slate-900 font-bold">50+ Happy Clients</span> Worldwide
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Hero Canvas */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center overflow-visible">
            <Hero3DCanvas />
          </div>

        </div>

        {/* Client Marquee / Trust Badges Banner */}
        <div className="mt-16 pt-10 border-t border-slate-200/70">
          <p className="text-center text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-6">
            Trusted By Innovative Businesses & High-Growth Brands
          </p>

          <div className="relative overflow-hidden w-full py-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {client.symbol}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
