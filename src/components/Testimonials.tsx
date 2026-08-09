import React from 'react';
import { Testimonial } from '../types';
import { Star, MessageSquareQuote, ShieldCheck, Sparkles, ArrowRight, Gift, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements & Trial Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client Reviews & Special Trial Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated to delivering exceptional Virtual Assistant support with complete precision and transparency.
          </p>
        </div>

        {/* Special Free Trial for Testimonials Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-[36px] p-8 sm:p-12 text-white border border-white/20 shadow-2xl relative overflow-hidden mb-12">
          {/* Ambient Background Blur Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Special Program • Work for Testimonials</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Get 5-10 Hours of Free Virtual Assistant Work in Exchange for a Review!
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                I am actively building my client portfolio and am offering <strong>complimentary, risk-free Virtual Assistant services</strong> (Inbox Organization, Data Formatting, Web Research, or Calendar Sync) for select founders and business owners in exchange for an honest testimonial.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Cost / No Credit Card Required</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>High-Quality Work Delivered Fast</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA & Confidentiality</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
              <Sparkles className="w-8 h-8 text-amber-300 mb-2" />
              <div className="text-lg font-extrabold text-white">Claim Your Free Task</div>
              <p className="text-xs text-slate-300 mt-1 mb-4 font-medium">
                Send me a brief description of your task and let's get started immediately!
              </p>
              <a
                href="#contact"
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-2xl transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 group"
              >
                <span>Request Free Trial Task</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid if present */}
        {testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white/50 backdrop-blur-xl rounded-[32px] p-8 border border-white/70 hover:border-blue-300 hover:bg-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Client</span>
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-medium">
                    "{test.text}"
                  </p>
                </div>

                {/* Bottom Client Info & Result Badge */}
                <div className="pt-6 border-t border-slate-200/60">
                  
                  {/* Result Pill */}
                  <div className="bg-blue-100/80 backdrop-blur-md text-blue-800 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-blue-200/60 mb-4 inline-block">
                    💡 {test.impactResult}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.clientName}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">{test.clientName}</div>
                      <div className="text-xs text-slate-500 font-medium">
                        {test.role}, <strong className="text-slate-800 font-bold">{test.company}</strong>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

