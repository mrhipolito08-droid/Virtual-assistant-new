import React, { useState } from 'react';
import { WorkSample } from '../types';
import { 
  X, 
  Table, 
  MapPin, 
  Plane, 
  Clock, 
  FileText, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Filter, 
  BarChart2, 
  Share2, 
  Calendar,
  Sparkles,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface WorkSampleModalProps {
  sample: WorkSample | null;
  onClose: () => void;
}

export const WorkSampleModal: React.FC<WorkSampleModalProps> = ({ sample, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [sheetSearch, setSheetSearch] = useState('');

  if (!sample) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderMockContent = () => {
    switch (sample.contentType) {
      
      // 1. SPREADSHEET MOCKUP
      case 'spreadsheet': {
        const data = sample.mockData || {};
        const leads = data.leads || [];
        const filteredLeads = leads.filter((l: any) =>
          l.company.toLowerCase().includes(sheetSearch.toLowerCase()) ||
          l.contact.toLowerCase().includes(sheetSearch.toLowerCase()) ||
          l.stage.toLowerCase().includes(sheetSearch.toLowerCase())
        );

        return (
          <div className="space-y-6">
            
            {/* KPI Summary Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-blue-50 border border-blue-200 p-3.5 sm:p-4 rounded-2xl">
                <div className="text-[11px] font-bold text-blue-700 uppercase">Total Tracked Leads</div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{data.totalLeads}</div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-3.5 sm:p-4 rounded-2xl">
                <div className="text-[11px] font-bold text-emerald-700 uppercase">Avg Conversion Rate</div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{data.conversionRate}</div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 p-3.5 sm:p-4 rounded-2xl">
                <div className="text-[11px] font-bold text-indigo-700 uppercase">Pipeline Deal Value</div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{data.pipelineValue}</div>
              </div>
            </div>

            {/* Simulated Sheet Toolbar */}
            <div className="bg-slate-100 p-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Table className="w-4 h-4 text-emerald-600" />
                <span>Active Sheet: <strong className="text-slate-900">Q3_Sales_Pipeline.xlsx</strong></span>
              </div>

              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter company or stage..."
                  value={sheetSearch}
                  onChange={(e) => setSheetSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Lead Contact</th>
                    <th className="px-4 py-3">Pipeline Stage</th>
                    <th className="px-4 py-3">Deal Value</th>
                    <th className="px-4 py-3">Probability</th>
                    <th className="px-4 py-3">Status Tag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredLeads.map((lead: any, i: number) => (
                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-slate-900">{lead.company}</td>
                      <td className="px-4 py-3 text-slate-600">{lead.contact}</td>
                      <td className="px-4 py-3">
                        <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200">
                          {lead.stage}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{lead.dealValue}</td>
                      <td className="px-4 py-3 text-slate-600">{lead.probability}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          lead.status === 'High Priority' || lead.status === 'Urgent'
                            ? 'bg-amber-100 text-amber-800'
                            : lead.status === 'Closed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic text-right">
              * Confidential executive sheet sanitized for portfolio demonstration purposes.
            </p>
          </div>
        );
      }

      // 2. TRAVEL ITINERARY MOCKUP
      case 'itinerary': {
        const data = sample.mockData || {};
        const items = data.items || [];

        return (
          <div className="space-y-6">
            
            {/* Header Trip Card */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-lg border border-slate-800">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Executive Roadshow Briefing</div>
                  <h4 className="text-xl font-bold text-white">{data.tripTitle}</h4>
                  <div className="text-xs text-slate-300 mt-1">Traveler: {data.traveler} • Dates: {data.dates}</div>
                </div>

                <div className="bg-blue-600/30 border border-blue-400/40 text-blue-200 text-xs px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-blue-400" />
                  <span>JAL & Singapore Airlines Flight Sync</span>
                </div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="relative pl-6 border-l-2 border-blue-500 space-y-6">
              {items.map((item: any, i: number) => (
                <div key={i} className="relative bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                  <div className="absolute -left-[31px] top-5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs"></div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {item.time}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-slate-900 mb-1">{item.event}</h5>
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    💡 <strong>VA Note:</strong> {item.note}
                  </p>
                </div>
              ))}
            </div>

          </div>
        );
      }

      // 3. RESEARCH REPORT MOCKUP
      case 'research': {
        const data = sample.mockData || {};
        const takeaways = data.keyTakeaways || [];
        const competitors = data.competitors || [];

        return (
          <div className="space-y-6">
            
            {/* Research Summary Banner */}
            <div className="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl">
              <h4 className="text-base font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Executive Findings Summary</span>
              </h4>
              <ul className="space-y-2">
                {takeaways.map((t: string, i: number) => (
                  <li key={i} className="text-xs text-amber-900/90 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitor Benchmark Grid */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Competitor Pricing & Feature Breakdown:
              </h5>

              <div className="grid sm:grid-cols-3 gap-4">
                {competitors.map((comp: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="font-bold text-slate-900 text-sm">{comp.name}</h6>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {comp.pricing}
                        </span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold mb-1">
                        ✓ {comp.pros}
                      </div>
                      <div className="text-[11px] text-rose-600 font-medium">
                        ✗ {comp.cons}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );
      }

      // 4. SOCIAL MEDIA CONTENT DECK
      case 'social_deck': {
        const data = sample.mockData || {};
        const posts = data.posts || [];

        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-blue-800">Brand Workspace</div>
                <div className="text-sm font-extrabold text-slate-900">{data.brand}</div>
              </div>
              <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">
                Buffer Sync Ready
              </span>
            </div>

            <div className="grid gap-3">
              {posts.map((post: any, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                        {post.day}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {post.platform}
                      </span>
                    </div>
                    <h6 className="text-sm font-bold text-slate-900">{post.topic}</h6>
                  </div>

                  <div className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
                    📊 {post.engagement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return (
          <div className="text-sm text-slate-600">
            Interactive sample preview loaded.
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/80 flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/60 flex items-start justify-between gap-4 sticky top-0 bg-white/80 backdrop-blur-xl z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 bg-blue-100/80 backdrop-blur-md border border-blue-200/60 px-3.5 py-1 rounded-full mb-2">
              <Table className="w-3.5 h-3.5 text-blue-600" />
              <span>{sample.category} Case Study</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {sample.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-bold mt-1">
              {sample.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white/80 rounded-2xl transition-colors shrink-0 border border-transparent hover:border-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Impact Metric Card */}
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-800">Measurable Result Achieved:</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-950">{sample.impactMetric}</div>
              </div>
            </div>
          </div>

          {/* Render Interactive Mockup Component */}
          {renderMockContent()}

          {/* Description & Tags */}
          <div className="pt-4 border-t border-slate-100">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Execution Details</h5>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {sample.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {sample.tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-xl">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/80 rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/80 bg-white border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Share Sample Link'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
          >
            Close Interactive Preview
          </button>
        </div>

      </div>
    </div>
  );
};
