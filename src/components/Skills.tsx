import React, { useState } from 'react';
import { Skill, SkillCategory } from '../types';
import { Award, Search, Sparkles, Filter, CheckCircle } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: string[] = ['All', 'Core Support', 'Technical', 'Organization', 'Communication', 'AI & Automation'];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Core Skills & Specializations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A versatile toolkit built to support fast-moving founders, teams, and business owners.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white/50 backdrop-blur-xl p-3.5 rounded-[28px] border border-white/70 shadow-lg shadow-blue-900/5">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-2xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white/50 backdrop-blur-xl p-6 rounded-[28px] border border-white/70 hover:border-blue-300 hover:bg-white/80 shadow-lg shadow-blue-900/5 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200/60 text-blue-800 shrink-0">
                    {skill.category}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-600 mb-1.5">
                  <span>Proficiency</span>
                  <span className="text-blue-600 font-extrabold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/80 rounded-full overflow-hidden p-0.5 border border-white/60">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm font-medium">
            No skills found matching "{searchQuery}". Try selecting "All".
          </div>
        )}

      </div>
    </section>
  );
};
