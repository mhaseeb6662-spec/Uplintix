import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Palette, 
  Share2, 
  TrendingUp, 
  Code, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import SlowScrollReveal from '../components/SlowScrollReveal';
import TiltCard from '../components/TiltCard';

export default function ServicesPage() {
  const navigate = useNavigate();

  const creativeServices = [
    {
      title: 'Video Production',
      desc: 'Turn your ideas into engaging video content.',
      benefit: 'Capture attention and drive higher engagement.',
      icon: Video
    },
    {
      title: 'Graphic Design & Branding',
      desc: 'Build a memorable and professional visual identity.',
      benefit: 'Stand out and build trust with your audience.',
      icon: Palette
    }
  ];

  const digitalMarketingServices = [
    {
      title: 'Social Media Management',
      desc: 'Stay consistent, relevant, and visible across all platforms.',
      benefit: 'Grow a loyal community around your brand.',
      icon: Share2
    },
    {
      title: 'Performance Marketing',
      desc: 'Data-driven ad campaigns designed for high ROI.',
      benefit: 'Reach the right people and increase sales.',
      icon: TrendingUp
    }
  ];

  const techServices = [
    {
      title: 'Website Design & Development',
      desc: 'High-performing websites that look great and convert.',
      benefit: 'Turn website visitors into paying customers.',
      icon: Code
    },
    {
      title: 'Web Apps & Software',
      desc: 'Custom digital products to run your business.',
      benefit: 'Streamline operations with powerful tools.',
      icon: Layers
    },
    {
      title: 'AI & Automation',
      desc: 'Smart workflows to handle repetitive tasks.',
      benefit: 'Save time and scale your business effortlessly.',
      icon: Cpu
    }
  ];

  const renderServiceSection = (title, subtitle, services) => (
    <SlowScrollReveal>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconC = srv.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={10}
                scale={1.02}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <IconC className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900">{srv.title}</h3>
                  <p className="text-slate-600 text-sm font-medium">{srv.desc}</p>

                  <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-sm font-bold text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{srv.benefit}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>
    </SlowScrollReveal>
  );

  return (
    <div className="pt-28 pb-20 space-y-20 bg-slate-50">
      
      {/* Services Hero */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Digital Services Built Around <span className="text-gradient-green">Your Goals.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We provide everything you need to build, launch, and grow in one place. Focus on your business; we handle the digital side.
          </p>
        </div>
      </section>

      {renderServiceSection('Creative Services', 'Content & Visual Identity', creativeServices)}
      {renderServiceSection('Digital Marketing', 'Growth & Reach', digitalMarketingServices)}
      {renderServiceSection('Technology Services', 'Websites, Software & AI', techServices)}

      {/* SERVICE CTA */}
      <SlowScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-950 text-white text-center space-y-6 relative overflow-hidden border border-emerald-500/30 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10">
              Not Sure What You Need?
            </h2>

            <p className="text-slate-300 text-base max-w-xl mx-auto relative z-10 leading-relaxed font-medium">
              Tell us what you're trying to achieve. We'll help you figure out the right solution.
            </p>

            <div className="pt-2 relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-gradient-green text-white font-extrabold text-xs tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </SlowScrollReveal>

    </div>
  );
}
