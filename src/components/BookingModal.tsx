import React, { useState } from 'react';
import { ProfileInfo } from '../types';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Video, Globe, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  profile: ProfileInfo;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, profile, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Executive Support Retainer');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const dates = ['Tomorrow', 'Thursday', 'Friday', 'Next Monday'];
  const times = ['09:00 AM', '10:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/80 flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/60 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center font-bold border border-blue-200/60 shadow-xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Schedule 15-Min Discovery Call</h3>
              <p className="text-xs text-slate-500 font-bold">1-on-1 Zoom Consultation with {profile.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white/80 rounded-2xl transition-colors border border-transparent hover:border-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {booked ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Call Confirmed!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                A calendar invitation with the Zoom link has been sent to <strong>{email}</strong> for <strong>{selectedDate} at {selectedTime}</strong> ({profile.timezone}).
              </p>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-1 mt-4">
                <div>📅 <strong>Date:</strong> {selectedDate}</div>
                <div>⏰ <strong>Time:</strong> {selectedTime} ({profile.timezone})</div>
                <div>📹 <strong>Location:</strong> Google Meet / Zoom</div>
                <div>🎯 <strong>Topic:</strong> {topic}</div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors mt-4"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Select Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Preferred Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                        selectedDate === d
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Select Time Slot ({profile.timezone})
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                        selectedTime === t
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Discussion Goal
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Executive Support Retainer (20+ hrs/wk)</option>
                  <option>Data Management & CRM Cleanup Project</option>
                  <option>Research & Travel Logistics Briefing</option>
                  <option>Social Media & Canva Content Management</option>
                </select>
              </div>

              {/* Attendee Info */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="David Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
              >
                <Video className="w-4 h-4" />
                <span>Confirm Meeting Request ({selectedDate} @ {selectedTime})</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
