import React from 'react';
import { X, ExternalLink, CheckCircle, Play, ShieldCheck, ArrowRight } from 'lucide-react';

export function ProjectModal({ project, onClose, onStartProject }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-800 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl">
                <Play className="w-8 h-8 ml-1 fill-white" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">{project.metrics}</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
            <p className="text-xs text-slate-400 mt-1">Client: <span className="text-white font-bold">{project.client}</span></p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description} This solution was engineered from scratch by the UPLINTIX agency team using custom scalable architecture, modern design system tokens, and performance optimization.
          </p>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Custom React & Tailwind CSS Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>3D WebGL Shader Animations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>100/100 Mobile Speed & SEO Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Conversion Funnel Optimization</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => { onClose(); onStartProject(); }}
              className="px-6 py-3 rounded-full bg-gradient-green text-white font-bold text-xs shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Build A Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg font-bold text-white">UPLINTIX Agency HQ & Culture Tour</h3>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g208vuh7i_g?autoplay=1"
              title="Uplintix Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
