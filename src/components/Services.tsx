import React, { useState } from 'react';
import { Service } from '../types';
import { 
  Briefcase, 
  Database, 
  Search, 
  Share2, 
  Plane, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Star,
  ArrowUpRight,
  Layers
} from 'lucide-react';

interface ServicesProps {
  services: Service[];
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'Database': return Database;
      case 'Search': return Search;
      case 'Share2': return Share2;
      case 'Plane': return Plane;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Virtual Assistant Services Offered
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive administrative, research, data, and social media support designed to save you 20+ hours every week.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);

            return (
              <div
                key={service.id}
                className={`bg-white/50 backdrop-blur-xl rounded-[32px] p-7 border transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 ${
                  service.popular
                    ? 'border-blue-400/80 shadow-2xl shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'border-white/70 shadow-xl shadow-blue-900/5 hover:bg-white/80 hover:border-blue-300'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-1.5 backdrop-blur-md">
                    <Star className="w-3 h-3 fill-white text-white" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div>
                  {/* Service Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.estimatedHourlyRate && (
                      <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-md border border-white px-3 py-1 rounded-full shadow-2xs">
                        ~${service.estimatedHourlyRate}/hr
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Deliverables Include:
                    </div>
                    {service.detailedBullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-3 px-4 bg-slate-900/90 hover:bg-blue-600 text-white font-bold text-xs rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Service Request Banner */}
        <div className="mt-12 bg-slate-900/90 backdrop-blur-2xl rounded-[32px] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-2">Need a Custom Hybrid Support Package?</h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Combine inbox triage, research briefs, Canva graphics, and travel booking into a single flexible monthly retainer.
            </p>
          </div>
          <button
            onClick={() => onSelectService('custom')}
            className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-600/30 transition-all shrink-0 hover:scale-[1.02]"
          >
            Build Custom Retainer
          </button>
        </div>

      </div>
    </section>
  );
};
