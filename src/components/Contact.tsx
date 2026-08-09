import React, { useState } from 'react';
import { ProfileInfo, Service } from '../types';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ContactProps {
  profile: ProfileInfo;
  services: Service[];
  preselectedServiceId?: string;
  initialHoursEstimate?: number;
}

export const Contact: React.FC<ContactProps> = ({ 
  profile, 
  services, 
  preselectedServiceId, 
  initialHoursEstimate 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedServiceId ? [preselectedServiceId] : ['admin-support']
  );
  const [estimatedHours, setEstimatedHours] = useState<number>(initialHoursEstimate || 20);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Reclaim 20+ Hours Every Week?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Send a message or schedule a 15-minute discovery call to discuss your administrative support needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 bg-white/50 backdrop-blur-xl p-8 sm:p-10 rounded-[32px] border border-white/70 shadow-xl shadow-blue-900/5">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100/80 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                  Thank you, <strong>{name}</strong>! I have received your message regarding <strong>{selectedServices.length} service module(s)</strong>. I will reply to <strong>{email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-2xl transition-all mt-4 shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-200/60 pb-4">
                  Send a Direct Service Inquiry
                </h3>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-2xs"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sterling Capital"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-2xs"
                    />
                  </div>
                </div>

                {/* Service Interest Tags */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Services You Are Interested In:
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => {
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleService(svc.id)}
                          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                              : 'bg-white/70 hover:bg-white text-slate-700 backdrop-blur-md border border-white'
                          }`}
                        >
                          {svc.title} {isSelected && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Brief Overview of Tasks / Bottlenecks *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a bit about your current bottlenecks, tools used, and ideal start date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-2xs"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Side: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="bg-slate-900/90 backdrop-blur-2xl text-white p-8 rounded-[32px] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Direct Contact Details</span>
              </h3>

              <ul className="space-y-4">
                
                {/* Email Item */}
                <li className="bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-bold">Direct Email</div>
                      <a href={`mailto:${profile.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 truncate block">
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 bg-slate-700/80 hover:bg-slate-600 text-slate-300 rounded-xl transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </li>

                {/* Phone Item */}
                <li className="bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold">Phone / WhatsApp</div>
                    <a href={`tel:${profile.phone}`} className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400">
                      {profile.phone}
                    </a>
                  </div>
                </li>

                {/* LinkedIn Item */}
                <li className="bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-bold">LinkedIn Profile</div>
                    <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-white hover:text-indigo-400 truncate block">
                      {profile.linkedin}
                    </a>
                  </div>
                </li>

              </ul>

              {/* Work Hours Note */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Working Hours: Mon – Fri (8:00 AM – 6:00 PM EST)</span>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="bg-emerald-50/80 backdrop-blur-xl border border-emerald-200/60 p-6 rounded-[28px] flex items-center gap-4 shadow-lg shadow-emerald-900/5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                ✓
              </div>
              <div>
                <h4 className="font-extrabold text-emerald-950 text-sm">{profile.availability}</h4>
                <p className="text-xs text-emerald-800 mt-0.5 font-medium">
                  Currently accepting 1-2 new Virtual Assistant clients and complimentary trial projects.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
