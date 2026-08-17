import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Menu, 
  X
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import BrandLogo from './BrandLogo';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/uplintix?utm_source=qr',
  tiktok: 'https://www.tiktok.com/@xpbashaofficial?_r=1&_t=ZS-98D9EsUEAsS',
  facebook: 'https://www.facebook.com/share/19REnztQbg/?mibextid=wwXIfr',
  careers: 'https://uplintix-agency-webs-1hal.bolt.host/careers'
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on screen resize to lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <BrandLogo imgClassName="h-9 sm:h-11 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-sm shadow-2xs">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 xl:px-4 py-1.5 text-xs font-extrabold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Items & Social Links */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Social Media Quick Icons */}
            <div className="hidden xl:flex items-center gap-1.5 border-r border-slate-200 pr-3">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
                title="Instagram @uplintix"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
                title="TikTok @xpbashaofficial"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
                title="Facebook Uplintix"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-md hover:shadow-emerald-500/25 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-3 py-1.5 text-[11px] sm:text-xs font-bold rounded-full bg-emerald-600 text-white shadow-sm"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[65px] max-h-[85vh] overflow-y-auto bg-white border-b border-slate-200 p-5 sm:p-6 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-xs sm:text-sm font-extrabold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Follow Uplintix</span>
            <div className="flex items-center gap-2">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-100 text-slate-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-100 text-slate-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-100 text-slate-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
