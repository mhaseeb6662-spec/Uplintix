import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SOCIAL_LINKS } from '../components/Navbar';
import { InstagramIcon, TikTokIcon, FacebookIcon } from '../components/SocialIcons';
import SlowScrollReveal from '../components/SlowScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    serviceNeeded: [],
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Creative / Video',
    'Social Media',
    'Website',
    'Software',
    'SaaS',
    'AI / Automation',
    '3D / Interactive',
    'Not Sure Yet'
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    'Flexible'
  ];

  const handleServiceToggle = (srv) => {
    setFormData(prev => {
      const isSelected = prev.serviceNeeded.includes(srv);
      if (isSelected) {
        return { ...prev, serviceNeeded: prev.serviceNeeded.filter(item => item !== srv) };
      } else {
        return { ...prev, serviceNeeded: [...prev.serviceNeeded, srv] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.country || formData.serviceNeeded.length === 0 || !formData.description) {
      setErrorMessage('Please fill in all required fields and select at least one service.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    // Simulate API Call
    setTimeout(() => {
      // Assuming success
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="relative pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Tell us about your <span className="text-gradient-green">challenge.</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Whether you need custom software, a new website, or a complete digital overhaul. Let's discuss how we can help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* CONTACT INFO (Left Side) */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-slate-950 p-10 sm:p-12 rounded-[40px] shadow-2xl text-white space-y-10 sticky top-32 overflow-hidden border border-emerald-900/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div>
                <h3 className="text-2xl font-extrabold mb-4 relative z-10">Direct Contact</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                  Prefer to email or call directly? Our team is available to discuss your requirements.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">Email Us</p>
                    <a href="mailto:hello@uplintix.com" className="text-sm font-bold text-slate-200 hover:text-emerald-400 transition-colors">hello@uplintix.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">Call / WhatsApp</p>
                    <a href="tel:+923233261765" className="text-sm font-bold text-slate-200 hover:text-emerald-400 transition-colors">+92 323 326 1765</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">Global Reach</p>
                    <p className="text-sm font-bold text-slate-200">Serving clients in USA, UK, Canada, Australia, and UAE.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 relative z-10">
                <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">Follow Uplintix</p>
                <div className="flex gap-3">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QUALIFIED LEAD FORM (Right Side) */}
          <div className="lg:col-span-7">
            <SlowScrollReveal>
              <div className="bg-white p-8 sm:p-12 rounded-[40px] border border-slate-200/80 shadow-xl relative overflow-hidden">
                
                {status === 'success' ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Request Received.</h3>
                      <p className="text-slate-600 text-base max-w-md mx-auto">
                        Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our strategy team is reviewing your requirements and will reach out to <span className="font-bold text-slate-900">{formData.email}</span> shortly to discuss the next steps.
                      </p>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setFormData({ name: '', company: '', email: '', phone: '', country: '', serviceNeeded: [], projectType: '', budget: '', timeline: '', description: '' });
                        }}
                        className="px-8 py-3 rounded-full bg-slate-900 text-white font-extrabold text-xs hover:bg-emerald-600 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {status === 'error' && (
                      <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm font-bold rounded-xl flex items-center gap-2">
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="space-y-6">
                      <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2">1. Your Details</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Name *</label>
                          <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Business</label>
                          <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow" placeholder="Company Ltd" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow" placeholder="john@company.com" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number (Optional)</label>
                          <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow" placeholder="+1 234 567 890" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Country *</label>
                        <input type="text" required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow" placeholder="e.g. USA, UK, UAE" />
                      </div>
                    </div>

                    <div className="space-y-6 pt-2">
                      <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2">2. Project Requirements</h3>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-3">Service Needed * (Select all that apply)</label>
                        <div className="flex flex-wrap gap-2.5">
                          {serviceOptions.map((srv) => {
                            const isSelected = formData.serviceNeeded.includes(srv);
                            return (
                              <button
                                key={srv}
                                type="button"
                                onClick={() => handleServiceToggle(srv)}
                                className={`px-4 py-2 rounded-lg text-[13px] font-bold border transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-500 shadow-sm'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                {srv}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Budget</label>
                          <select value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-700 appearance-none cursor-pointer">
                            <option value="">Select a range</option>
                            {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Timeline</label>
                          <select value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-700 appearance-none cursor-pointer">
                            <option value="">Select timeline</option>
                            {timelineOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Description *</label>
                        <textarea required rows={5} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-shadow resize-y" placeholder="Briefly describe your goals, current challenges, and what you're looking to achieve..."></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-5 rounded-2xl bg-gradient-green text-white font-extrabold text-sm tracking-wider shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Project Request</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-4 font-medium">
                        Your information is secure. We typically respond within 24 hours.
                      </p>
                    </div>

                  </form>
                )}
              </div>
            </SlowScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
