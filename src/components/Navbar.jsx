import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Video, TrendingUp, MonitorSmartphone, Code, Box } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/uplintix',
  facebook: 'https://facebook.com/uplintix',
  tiktok: 'https://tiktok.com/@xpbashaofficial',
  careers: 'https://uplintix-agency-webs-1hal.bolt.host/careers'
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsServicesHovered(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceCategories = [
    {
      title: 'Creative & Content',
      icon: Video,
      items: ['Video Editing', 'Videography', 'Graphic Design', 'Content Production'],
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    },
    {
      title: 'Social & Growth',
      icon: TrendingUp,
      items: ['Social Media Management', 'Content Strategy', 'Growth Support'],
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      title: 'Web Solutions',
      icon: MonitorSmartphone,
      items: ['Website Design', 'Website Development', 'Landing Pages', 'Custom Web Solutions'],
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      title: 'Technology Solutions',
      icon: Code,
      items: ['Software Development', 'SaaS Development', 'AI Solutions', 'Automation'],
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Premium Experiences',
      icon: Box,
      items: ['3D Digital Experiences', 'Interactive Brand Experiences'],
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
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
          
          <Link to="/" className="flex items-center group flex-shrink-0">
            <BrandLogo imgClassName="h-9 sm:h-11 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-sm shadow-2xs relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-200 ${
                  isActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:text-emerald-600 hover:bg-white'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                    isActive || isServicesHovered ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:text-emerald-600 hover:bg-white'
                  }`
                }
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
              </NavLink>

              {/* Mega Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform ${
                  isServicesHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                }`}
              >
                <div className="w-[800px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 grid grid-cols-3 gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-bl-[100px] -z-10 opacity-50"></div>
                  
                  {serviceCategories.map((cat, idx) => {
                    const IconC = cat.icon;
                    return (
                      <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}>
                            <IconC className="w-5 h-5" />
                          </div>
                          <h4 className="font-extrabold text-sm text-slate-900">{cat.title}</h4>
                        </div>
                        <ul className="space-y-2.5">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <Link to="/services" className="text-xs font-medium text-slate-500 hover:text-emerald-600 transition-colors block">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  
                  <div className="col-span-3 mt-4 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Need a custom solution?</h4>
                      <p className="text-xs text-slate-500 mt-1">Let's discuss how we can build technology around your business.</p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-emerald-600 transition-colors">
                      Start a Project <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/work"
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-200 ${
                  isActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:text-emerald-600 hover:bg-white'
                }`
              }
            >
              Our Work
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-200 ${
                  isActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:text-emerald-600 hover:bg-white'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div className="hidden xl:flex items-center gap-1.5 border-r border-slate-200 pr-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"><InstagramIcon className="w-4 h-4" /></a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"><TikTokIcon className="w-4 h-4" /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"><FacebookIcon className="w-4 h-4" /></a>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-md group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 text-xs font-bold rounded-full bg-slate-900 text-white shadow-sm"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] max-h-[85vh] overflow-y-auto bg-white border-b border-slate-200 p-5 shadow-xl space-y-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => `px-4 py-3 text-sm font-extrabold rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-800'}`}>Home</NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => `px-4 py-3 text-sm font-extrabold rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-800'}`}>Services</NavLink>
            <NavLink to="/work" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => `px-4 py-3 text-sm font-extrabold rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-800'}`}>Our Work</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => `px-4 py-3 text-sm font-extrabold rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-800'}`}>About</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => `px-4 py-3 text-sm font-extrabold rounded-xl transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-800'}`}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
