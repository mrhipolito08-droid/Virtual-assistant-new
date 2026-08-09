import React, { useState } from 'react';
import { Tool, ToolCategory } from '../types';
import { 
  Folder, 
  FileText, 
  BookOpen, 
  MessageSquare, 
  Video, 
  CheckSquare, 
  Layers, 
  Image, 
  Bot, 
  Zap, 
  Table, 
  Camera, 
  Cpu,
  Sparkles
} from 'lucide-react';

interface ToolsProps {
  tools: Tool[];
}

export const Tools: React.FC<ToolsProps> = ({ tools }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Productivity', 'Communication', 'Design & Content', 'Project Management', 'AI & Automation'];

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Folder': return Folder;
      case 'FileText': return FileText;
      case 'BookOpen': return BookOpen;
      case 'MessageSquare': return MessageSquare;
      case 'Video': return Video;
      case 'CheckSquare': return CheckSquare;
      case 'Layers': return Layers;
      case 'Image': return Image;
      case 'Bot': return Bot;
      case 'Zap': return Zap;
      case 'Table': return Table;
      case 'Camera': return Camera;
      default: return Cpu;
    }
  };

  const filteredTools = tools.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  return (
    <section id="tools" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100/80 backdrop-blur-md border border-indigo-200/60 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software & Productivity Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Advanced proficiency across modern cloud workspace tools used by fast-scaling teams and businesses.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-2xl whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white/60 hover:bg-white/90 text-slate-700 backdrop-blur-md border border-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => {
            const IconComp = getToolIcon(tool.iconName);

            return (
              <div
                key={tool.id}
                className="bg-white/50 backdrop-blur-xl p-6 rounded-[28px] border border-white/70 hover:border-blue-300 hover:bg-white/80 shadow-lg shadow-blue-900/5 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md group-hover:bg-blue-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors shadow-xs border border-white">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${
                      tool.proficiency === 'Expert' 
                        ? 'bg-emerald-100/80 text-emerald-800 border border-emerald-200/60' 
                        : 'bg-blue-100/80 text-blue-800 border border-blue-200/60'
                    }`}>
                      {tool.proficiency}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {tool.category}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white/80 font-medium">
                    {tool.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
