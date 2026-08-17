import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, Sparkles, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectEstimatorModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService?.title || 'Web Development');
  const [budgetRange, setBudgetRange] = useState('$1,000 - $3,000');
  const [timeline, setTimeline] = useState('2-4 Weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Web Development',
    'Video Editing',
    'Digital Marketing & Meta Ads',
    'Brand Identity & 3D Design',
    'AI Solutions & Chatbots',
    'SEO & Organic Growth',
    'Social Media Management',
    'Influencer Campaign'
  ];

  const budgetOptions = [
    '$500 - $1,500',
    '$1,500 - $3,500',
    '$3,500 - $8,000',
    '$8,000+'
  ];

  const timelineOptions = [
    'ASAP (1-2 Weeks)',
    '2-4 Weeks',
    '1-2 Months',
    'Ongoing Retainer'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Project Quote & Estimator</h3>
              <p className="text-xs text-slate-500">Fast 2-minute project scoping for UPLINTIX</p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div>
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8 px-2">
              <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-emerald-600' : 'text-slate-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
                <span>Select Service</span>
              </div>
              <div className="h-0.5 flex-1 mx-4 bg-slate-200">
                <div className={`h-full bg-emerald-500 transition-all duration-300 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-emerald-600' : 'text-slate-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
                <span>Budget & Details</span>
              </div>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    What service are you looking for?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {servicesList.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                          selectedService === srv
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm ring-2 ring-emerald-500/20'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Estimated Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setBudgetRange(bg)}
                        className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          budgetRange === bg
                            ? 'bg-slate-900 border-slate-900 text-white'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Target Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((tl) => (
                      <button
                        key={tl}
                        type="button"
                        onClick={() => setTimeline(tl)}
                        className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                          timeline === tl
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {tl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-full bg-gradient-green text-white font-bold text-xs tracking-wide shadow-md hover:opacity-95 cursor-pointer"
                  >
                    Next Step: Enter Details →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Brand or Website"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Goals</label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your requirements, goals, or reference links..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-gradient-green text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Submit Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">Proposal Request Received!</h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! Our team at <span className="font-bold text-emerald-600">UPLINTIX</span> has received your inquiry for <span className="font-bold text-slate-900">{selectedService}</span> (Budget: {budgetRange}).
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 inline-block text-left max-w-sm">
              <p className="font-bold text-slate-800 mb-1">What Happens Next?</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>We review your project specs in 2 hours.</li>
                <li>Our lead strategist will WhatsApp / Email you directly.</li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
