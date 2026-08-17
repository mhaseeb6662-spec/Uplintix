import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  MapPin, 
  Check 
} from 'lucide-react';
import { SOCIAL_LINKS } from './Navbar';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-emerald-500/30 relative overflow-hidden">
      
      {/* Glow Ambient Light */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group cursor-pointer">
              <BrandLogo theme="dark" imgClassName="h-12 sm:h-14" />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We help ambitious businesses build stronger brands, better digital experiences, and scalable growth systems.
            </p>

            {/* Social Links Buttons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all hover:scale-110 shadow-md"
                title="Instagram @uplintix"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all hover:scale-110 shadow-md"
                title="TikTok @xpbashaofficial"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all hover:scale-110 shadow-md"
                title="Facebook Uplintix"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-slate-400 hover:text-emerald-400 transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Video Production & Editing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Graphic Design & Branding</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Social Media Management</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Website Design & Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Web Applications & Custom Software</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-slate-400 text-xs">
              Subscribe to our newsletter for latest digital growth strategies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white transition-colors cursor-pointer flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] font-bold text-emerald-400">Thanks for subscribing!</p>
              )}
            </form>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>hello@uplintix.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>Pakistan | Working Globally</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Uplintix. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="text-emerald-400 hover:underline font-bold">
              Start Your Project
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
