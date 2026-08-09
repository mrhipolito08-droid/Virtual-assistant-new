import React from 'react';
import { ProfileInfo } from '../types';
import { UserCheck, Shield, Zap, Clock, MessageCircle, MapPin, Globe, CheckCircle2, Award } from 'lucide-react';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const coreValues = [
    {
      icon: Shield,
      title: "100% NDA & Confidentiality",
      description: "Your business passwords, emails, financial receipts, and proprietary documents are protected under strict non-disclosure security standards."
    },
    {
      icon: Zap,
      title: "Proactive Problem Solving",
      description: "I don't just complete tasks—I spot operational friction early, streamline repetitive steps, and present solutions before problems escalate."
    },
    {
      icon: Clock,
      title: "Under 2-Hour Response SLA",
      description: "During business hours, expect clear, rapid communication via Slack, Teams, or WhatsApp so you're never left wondering about task status."
    },
    {
      icon: Award,
      title: "Obsessive Attention to Detail",
      description: "From double-checking flight connection layovers to auditing spreadsheet formulas, zero details slip through the cracks."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Dedicated Partner for Your Operational Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I bridge the gap between chaotic to-do lists and calm, organized execution.
          </p>
        </div>

        {/* Grid: Bio Paragraphs & Location/Timezone Overview */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-8 bg-white/50 backdrop-blur-xl p-8 sm:p-10 rounded-[32px] border border-white/70 shadow-xl shadow-blue-900/5 flex flex-col justify-between">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p>
                {profile.bio}
              </p>
              <p>
                Whether you need a reliable Virtual Assistant to clear out a backed-up email inbox, coordinate complex international travel, manage lead lists, or organize Canva assets, I take pride in fast, precise execution.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Ready to integrate into your existing Slack, Notion, or Trello</span>
              </div>
              <div className="text-xs font-bold text-slate-600 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white">
                Weekly Capacity: <span className="text-blue-600 font-bold">{profile.weeklyHoursAvailable} Hours</span>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4 bg-slate-900/90 backdrop-blur-2xl text-white p-8 rounded-[32px] border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-xl font-extrabold mb-6 text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Working Logistics</span>
              </h3>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Location</div>
                    <div className="font-bold text-white">{profile.location}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Timezone Availability</div>
                    <div className="font-bold text-white">{profile.timezone}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Primary Channels</div>
                    <div className="font-bold text-white">Slack, Email, Zoom, WhatsApp</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs text-slate-400 font-semibold mb-1">Response Time SLA</div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Sub 2-Hour Response During Work Hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values 4-Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white/50 backdrop-blur-xl p-6 rounded-[28px] border border-white/70 hover:border-blue-300 hover:bg-white/80 shadow-lg shadow-blue-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 backdrop-blur-md text-blue-600 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
