import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOCIAL_LINKS } from '../components/Navbar';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../components/SocialIcons';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedServices: [],
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Video Production',
    'Video Editing',
    'Graphic Design',
    'Social Media Management',
    'Performance Marketing',
    'Influencer Marketing',
    'Website',
    'Web Application',
    'Custom Software',
    'AI / Automation',
    'Other'
  ];

  const handleServiceToggle = (srv) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== srv) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, srv] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-28 pb-20 space-y-16 bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Talk About <span className="text-gradient-green">Your Next Project.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Have an idea, a business challenge, or simply want to know what's possible? Tell us what you're working on.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* DIRECT CONTACT */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className="lg:col-span-5 space-y-8 bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow"></div>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">DIRECT CONTACT</span>
              <h2 className="text-2xl font-extrabold text-white">Prefer a Direct Conversation?</h2>
              <p className="text-slate-400 text-sm">
                Reach out to our team directly via WhatsApp, Email, or Socials.
              </p>
            </div>

            <div className="space-y-6 pt-4 relative z-10">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Official Email</span>
                  <a href="mailto:hello@uplintix.com" className="block text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    hello@uplintix.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">WhatsApp / Phone</span>
                  <a href="tel:+923001234567" className="block text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Location</span>
                  <p className="text-base font-bold text-white">
                    Pakistan | Working Globally
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8 border-t border-slate-800 relative z-10">
              <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">
                Connect With Us On Social Media
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </TiltCard>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900">Project Form</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Business / Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                {/* What do you need? */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
                    What do you need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceToggle(srv)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {srv} {isSelected && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Details</label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your goals, requirements, timeline, or budget..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-green text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Let's Build It →</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Project Details Received!</h3>

                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! Our team at <span className="font-bold text-emerald-600">Uplintix</span> will contact you at <span className="font-bold text-slate-900">{formData.email}</span> / <span className="font-bold text-slate-900">{formData.phone}</span> shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
