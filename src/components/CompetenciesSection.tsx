import React, { useState, useMemo } from 'react';
import { Search, Code2, Database, Globe, Wrench, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface CompetenciesSectionProps {
  onNotify?: (msg: string) => void;
}

export const CompetenciesSection: React.FC<CompetenciesSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryConfig: Record<string, { icon: React.ReactNode; border: string; pillColor: string }> = {
    'Oracle & Cloud Middleware': {
      icon: <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      border: 'border-t-2 border-t-cyan-500 dark:border-t-cyan-400',
      pillColor: 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60'
    },
    'Super Artificial Intelligence & GenAI': {
      icon: <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      border: 'border-t-2 border-t-purple-500 dark:border-t-purple-400',
      pillColor: 'bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/60'
    },
    'Databases & Data Architecture': {
      icon: <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      border: 'border-t-2 border-t-emerald-500 dark:border-t-emerald-400',
      pillColor: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
    },
    'Web Services & APIs': {
      icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      border: 'border-t-2 border-t-blue-500 dark:border-t-blue-400',
      pillColor: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60'
    },
    'Programming Languages & Scripting': {
      icon: <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      border: 'border-t-2 border-t-amber-500 dark:border-t-amber-400',
      pillColor: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
    },
    'Security, DevOps & Enterprise Tools': {
      icon: <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      border: 'border-t-2 border-t-indigo-500 dark:border-t-indigo-400',
      pillColor: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60'
    }
  };

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    return resumeData.competencies
      .filter((cat) => {
        if (activeCategory === 'all') return true;
        return cat.category.toLowerCase().includes(activeCategory.toLowerCase());
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingSkills = cat.skills.filter((s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return resumeData.competencies.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="competencies" className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">
            <span>Technical Matrix</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Cloud, AI, APIs & Database Specialization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Key Competencies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Enterprise technical competencies structured across Oracle Integration Cloud (OIC), Super Artificial Intelligence & GenAI, high-performance databases, and secure API architectures.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 mb-8 space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specific skill (e.g. OIC, Python, REST, Super AI, SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-x-auto text-xs no-scrollbar">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All ({totalSkillsCount})
              </button>
              <button
                onClick={() => setActiveCategory('Oracle & Cloud')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Oracle & Cloud'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Oracle & Middleware
              </button>
              <button
                onClick={() => setActiveCategory('Artificial Intelligence')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Artificial Intelligence'
                    ? 'bg-purple-600 text-white shadow-xs font-semibold'
                    : 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300'
                }`}
              >
                AI & GenAI
              </button>
              <button
                onClick={() => setActiveCategory('Databases')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Databases'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Databases
              </button>
              <button
                onClick={() => setActiveCategory('Web Services')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Web Services'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                APIs & Integration
              </button>
              <button
                onClick={() => setActiveCategory('Programming Languages')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Programming Languages'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Languages
              </button>
              <button
                onClick={() => setActiveCategory('Security')}
                className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'Security'
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tools & Security
              </button>
            </div>
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const config = categoryConfig[cat.category] || {
              icon: <Wrench className="w-4 h-4 text-blue-600 dark:text-cyan-400" />,
              border: 'border-t-2 border-t-blue-500',
              pillColor: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60'
            };

            return (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 rounded-xl p-5 shadow-2xs hover:shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col justify-between ${config.border}`}
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-700/80 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700/80 rounded-lg shrink-0">
                        {config.icon}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded font-semibold shrink-0">
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Clean, Smart Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md border transition-all hover:scale-[1.02] cursor-default ${config.pillColor}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No matching skills found
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try searching for &ldquo;OIC&rdquo;, &ldquo;Python&rdquo;, &ldquo;Super AI&rdquo;, or &ldquo;PL/SQL&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-medium text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
