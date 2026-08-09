import React, { useState } from 'react';
import { WorkSample, WorkCategory } from '../types';
import { WorkSampleModal } from './WorkSampleModal';
import { FileCheck, ExternalLink, Eye, ArrowRight, Sparkles } from 'lucide-react';

interface WorkSamplesProps {
  samples: WorkSample[];
}

export const WorkSamples: React.FC<WorkSamplesProps> = ({ samples }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalSample, setActiveModalSample] = useState<WorkSample | null>(null);

  const categories = ['All', 'Spreadsheets', 'Research', 'Calendar & Travel', 'Social Media'];

  const filteredSamples = samples.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <section id="samples" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Proof of Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Samples & Case Studies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world executive deliverables—inspect actual spreadsheet structures, itinerary briefings, and research synthesis.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-2xl whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/60 hover:bg-white/90 text-slate-700 backdrop-blur-md border border-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Work Samples Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="bg-white/50 backdrop-blur-xl rounded-[32px] p-7 sm:p-8 border border-white/70 hover:border-blue-300 hover:bg-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-blue-800 bg-blue-100/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-blue-200/60">
                    {sample.category}
                  </span>
                  
                  <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1">
                    <span>✓</span> {sample.impactMetric}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 mb-4">
                  {sample.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {sample.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {sample.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-bold bg-white/70 backdrop-blur-md text-slate-700 px-3 py-1 rounded-xl border border-white shadow-2xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button to Launch Modal */}
              <button
                onClick={() => setActiveModalSample(sample)}
                className="w-full py-3.5 px-5 bg-white/80 backdrop-blur-md hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-xs rounded-2xl border border-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <Eye className="w-4 h-4 text-blue-600 group-hover/btn:text-white transition-colors" />
                <span>Inspect Interactive Work Sample</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

        {/* Modal Render */}
        <WorkSampleModal
          sample={activeModalSample}
          onClose={() => setActiveModalSample(null)}
        />

      </div>
    </section>
  );
};
