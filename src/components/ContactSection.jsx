import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOCIAL_LINKS } from './Navbar';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import TiltCard from './TiltCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <span className="text-gradient-green">Amazing Together</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className="lg:col-span-5 space-y-8 bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow"></div>

            <div className="space-y-3 z-10 relative">
              <h3 className="text-2xl font-extrabold">Contact Information</h3>
              <p className="text-slate-400 text-sm">
                Fill out the form or reach out directly to our team via WhatsApp, Email, or Social Channels.
              </p>
            </div>

            <div className="space-y-6 pt-4 z-10 relative">
              
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Email Us</span>
                  <a href="mailto:hello@uplintix.com" className="block text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    hello@uplintix.com
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Call / WhatsApp</span>
                  <a href="tel:+923001234567" className="block text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Agency Office</span>
                  <p className="text-base font-bold text-white">
                    Multan, Pakistan
                  </p>
                </div>
              </div>

            </div>

            {/* Official Social Icons */}
            <div className="pt-8 border-t border-slate-800 z-10 relative">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Connect With Us On Social Media
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="Instagram @uplintix"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="TikTok @xpbashaofficial"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 shadow-md hover:scale-110"
                  title="Facebook Uplintix"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </TiltCard>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-extrabold text-slate-900">Send Us A Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Usama Khan"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium shadow-2xs"
                    >
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Influencer Campaign">Influencer Campaign</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-green text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>

                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to <span className="font-bold text-emerald-600">UPLINTIX</span>! Our representative will respond to <span className="font-bold text-slate-900">{formData.email}</span> within 1 business hour.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
