import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowUpRight, Sparkles, CheckCircle, Send, X, FileText, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOCIAL_LINKS } from './Navbar';
import TiltCard from './TiltCard';

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '1-3 years',
    message: ''
  });

  const jobs = [
    {
      id: 'frontend-dev',
      title: 'Senior Frontend Engineer (React & 3D WebGL)',
      department: 'Engineering',
      location: 'Multan, Pakistan / Remote',
      type: 'Full-time',
      salary: '$1,200 - $2,500 / month',
      description: 'We are looking for a Senior React Engineer passionate about modern UI/UX, Framer Motion, and 3D Canvas visual effects.'
    },
    {
      id: 'motion-artist',
      title: 'Cinematic Motion Graphics Artist',
      department: 'Video Production',
      location: 'Multan Office',
      type: 'Full-time',
      salary: '$800 - $1,800 / month',
      description: 'Craft high-converting promotional videos, 3D product animations, and viral social media reels.'
    },
    {
      id: 'growth-marketer',
      title: 'Digital Marketing & Meta Ads Manager',
      department: 'Marketing',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salary: '$1,000 - $2,200 / month',
      description: 'Scale ad spend efficiently across Meta, Google, and TikTok for global e-commerce and SaaS clients.'
    },
    {
      id: 'uiux-designer',
      title: 'Lead UI/UX & Product Designer',
      department: 'Design',
      location: 'Multan, Pakistan',
      type: 'Full-time',
      salary: '$900 - $2,000 / month',
      description: 'Design sleek, high-converting web and mobile application interfaces using Figma and 3D asset workflows.'
    }
  ];

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
    <section id="careers" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREERS AT UPLINTIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Build Your Career With <span className="text-gradient-green">The Best</span>
            </h2>

            <p className="text-slate-600 text-base">
              Join our fast-growing agency team in Pakistan. We offer competitive salaries, flexible work culture, and cutting-edge projects.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.careers}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-all self-start md:self-auto hover:scale-105"
          >
            <span>Visit Career Portal</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </a>
        </div>

        {/* Dynamic 3D Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <TiltCard
              key={job.id}
              maxTilt={10}
              scale={1.02}
              className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    {job.department}
                  </span>
                  <span className="text-xs font-extrabold text-slate-600">{job.salary}</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                
                <p className="text-slate-600 text-xs leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span>Actively Hiring</span>
                </div>

                <button
                  onClick={() => { setSelectedJob(job); setSubmitted(false); }}
                  className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-gradient-green text-white font-bold text-xs transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  Apply Now →
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">Job Application</span>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-500">{selectedJob.location} • {selectedJob.type}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Usama Khan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Portfolio / LinkedIn Link</label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/or-behance"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brief Cover Note</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us why you are a great fit for Uplintix..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-green text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-slate-600 text-sm">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our HR team at Uplintix will review your submission for <span className="font-bold text-emerald-600">{selectedJob.title}</span> and reach out shortly via email/WhatsApp.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
