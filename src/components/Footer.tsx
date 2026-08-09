import React from 'react';
import { ProfileInfo } from '../types';
import { Settings2, ArrowUp, Linkedin, Mail, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  profile: ProfileInfo;
  onOpenEditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenEditModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/90 backdrop-blur-2xl text-slate-400 py-16 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-lg shadow-blue-600/30">
                {profile.name.charAt(0)}
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  {profile.name}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {profile.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-medium">
              Providing top-tier executive support, inbox management, internet research, data hygiene, and social media assistance worldwide.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs font-bold">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#samples" className="hover:text-white transition-colors">Work</a>
            <a href="#calculator" className="hover:text-white transition-colors">Rates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>

            <button
              onClick={onOpenEditModal}
              className="px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-white/10"
            >
              <Settings2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Customize Details</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {currentYear} {profile.name} | Professional Virtual Assistant Portfolio. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NDA Protected</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all border border-white/10"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
