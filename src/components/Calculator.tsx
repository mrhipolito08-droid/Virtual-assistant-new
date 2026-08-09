import React, { useState } from 'react';
import { Calculator as CalcIcon, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';

interface CalculatorProps {
  services: Service[];
  hourlyRate: number;
  onBookWithEstimate: (hours: number, selectedServices: string[], monthlyTotal: number) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ services, hourlyRate, onBookWithEstimate }) => {
  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['admin-support', 'research']);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  // Monthly calculation: Weekly hours * 4.33 weeks * base hourly rate
  const monthlyHours = Math.round(weeklyHours * 4.33);
  
  // Apply a subtle volume discount for 30+ hours/week
  const effectiveRate = weeklyHours >= 30 ? Math.round(hourlyRate * 0.9) : hourlyRate;
  const monthlyTotal = Math.round(monthlyHours * effectiveRate);

  return (
    <section id="calculator" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent Investment Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Virtual Assistant Retainer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tailor your weekly support capacity and service scope to fit your exact budget and operational needs.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 rounded-[32px] border border-white/10 shadow-2xl flex flex-col justify-between space-y-8 text-white">
            
            {/* 1. Hours Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Select Weekly Support Hours:</span>
                </label>
                <span className="text-xl font-extrabold text-blue-400 bg-blue-950/80 backdrop-blur-md px-4 py-1 rounded-2xl border border-blue-800">
                  {weeklyHours} Hours / Week
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="40"
                step="5"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />

              <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-2">
                <span>5 hrs (Part-time)</span>
                <span>20 hrs (Half-time)</span>
                <span>40 hrs (Full-time Support)</span>
              </div>
            </div>

            {/* 2. Service Scope Checkboxes */}
            <div>
              <div className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Select Included Service Scope Modules:</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((svc) => {
                  const isChecked = selectedServiceIds.includes(svc.id);

                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-600/30 border-blue-400 text-white backdrop-blur-md shadow-md'
                          : 'bg-slate-800/50 border-white/10 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-blue-500 text-white' : 'border border-slate-600'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>

                      <div>
                        <div className="text-xs font-bold text-white leading-snug">{svc.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{svc.shortDesc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing Breakdown & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600/90 to-indigo-800/90 backdrop-blur-2xl p-8 rounded-[32px] text-white shadow-2xl flex flex-col justify-between border border-white/20">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">
                Estimated Retainer Summary
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Monthly Support Retainer
              </h3>

              {/* Price Display */}
              <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-6 shadow-inner">
                <div className="text-xs font-bold text-blue-200">Estimated Monthly Investment</div>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                  ${monthlyTotal.toLocaleString()}
                  <span className="text-sm font-bold text-blue-200"> / month</span>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-xs font-semibold text-blue-100">
                  <span>Capacity: ~{monthlyHours} hrs/mo</span>
                  <span>Effective Rate: ${effectiveRate}/hr</span>
                </div>
              </div>

              {/* Perks */}
              <div className="space-y-2.5 text-xs font-bold text-blue-100 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Includes {selectedServiceIds.length} Core Service Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Flexible unused hours rollover policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>No long-term contract lock-in (Cancel anytime)</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onBookWithEstimate(weeklyHours, selectedServiceIds, monthlyTotal)}
              className="w-full py-4 bg-white hover:bg-slate-100 text-blue-900 font-extrabold text-sm rounded-2xl shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Lock In Retainer & Book Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
