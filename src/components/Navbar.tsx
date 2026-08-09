import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, PhoneCall, Sparkles, Settings2, ShieldCheck } from 'lucide-react';
import { ProfileInfo } from '../types';

interface NavbarProps {
  profile: ProfileInfo;
  onOpenEditModal: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenEditModal, onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'tools', 'samples', 'calculator', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools', href: '#tools' },
    { name: 'Work', href: '#samples' },
    { name: 'Rates', href: '#calculator' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/60 backdrop-blur-xl border-b border-white/60 shadow-lg shadow-blue-900/5 py-3' : 'bg-white/30 backdrop-blur-lg border-b border-white/40 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              {profile.name.charAt(0) || 'V'}
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {profile.name}
              </div>
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                {profile.title}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-white/80 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenEditModal}
              title="Customize Profile Info"
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <Settings2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Edit Details</span>
            </button>

            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEditModal}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white/60 backdrop-blur-md border border-white/80 rounded-lg text-xs flex items-center gap-1 sm:hidden"
            >
              <Settings2 className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-white/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-2xl border-b border-white/60 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'text-slate-700 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditModal();
              }}
              className="w-full py-2.5 bg-white/70 hover:bg-white text-slate-700 font-semibold rounded-xl text-center text-sm border border-white/80 flex items-center justify-center gap-2"
            >
              <Settings2 className="w-4 h-4" />
              <span>Customize Profile Information</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
