import React from 'react';
import { ProfileInfo } from '../types';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, Star, Sparkles, Clock, Award, FileText } from 'lucide-react';

interface HeroProps {
  profile: ProfileInfo;
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenBookingModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      
      {/* Background Ambient Radial Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Frosted Glass Hero Container Card */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[36px] lg:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Text & Hero CTA */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 self-center lg:self-start px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span>{profile.availability} • Accepting New Clients</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 underline decoration-blue-300/60 underline-offset-8">{profile.name}</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-3">
                  {profile.title}
                </span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {profile.tagline}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] flex items-center gap-2 group"
                >
                  <span>Hire Me Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenBookingModal}
                  className="px-6 py-4 bg-white/80 hover:bg-white text-slate-800 font-bold text-sm rounded-2xl border border-white/80 hover:border-blue-300 shadow-md backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Book Discovery Call</span>
                </button>

                <a
                  href="#samples"
                  className="px-5 py-4 text-slate-700 hover:text-blue-600 font-bold text-sm rounded-2xl hover:bg-white/60 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>View Samples</span>
                </a>
              </div>

              {/* Quick Metrics Bar in Frosted Card */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-5 rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 shadow-xs">
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900">{profile.yearsExperience}+ Yrs</span>
                  <span className="text-xs text-slate-500 font-semibold">Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900">{profile.hoursSavedMonthly}+ Hrs</span>
                  <span className="text-xs text-slate-500 font-semibold">Saved / Month</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900">{profile.tasksCompleted}+</span>
                  <span className="text-xs text-slate-500 font-semibold">Tasks Completed</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-extrabold text-slate-900">5.0</span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-xs text-slate-500 font-semibold">Client Rating</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Profile Image & Floating Glass Badges */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-92 lg:h-92">
                
                {/* Outer Glass Gradient Ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-sky-400 p-1.5 shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden relative">
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Top Floating Glass Badge: 100% On-Time Delivery */}
                <div className="absolute -top-5 -left-4 sm:-left-8 bg-white/80 backdrop-blur-xl p-3.5 rounded-2xl border border-white/80 shadow-2xl flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">100% On-Time</div>
                    <div className="text-[11px] font-semibold text-slate-500">Delivery Guarantee</div>
                  </div>
                </div>

                {/* Bottom Floating Glass Badge: Confidentiality Guarantee */}
                <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-white/80 backdrop-blur-xl p-3.5 rounded-2xl border border-white/80 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">NDA Protected</div>
                    <div className="text-[11px] font-semibold text-slate-500">Strict Confidentiality</div>
                  </div>
                </div>

                {/* Floating Rate Tag */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-slate-900/90 backdrop-blur-xl text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 text-xs font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>$10-$15/hr Starting</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
