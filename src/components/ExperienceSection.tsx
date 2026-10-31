import React, { useState, useMemo } from 'react';
import { Briefcase, Calendar, Search, ChevronRight, CheckCircle2 } from 'lucide-react';
import { resumeData, ExperienceItem } from '../data/resumeData';
import { ExperienceDetailModal } from './ExperienceDetailModal';
import { HsbcLogo, TcsLogo, InfosysLogo } from './BrandIcons';

export const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalExp, setActiveModalExp] = useState<ExperienceItem | null>(null);

  // Filter experiences
  const filteredExperiences = useMemo(() => {
    return resumeData.experiences.filter(exp => {
      // Company filter
      if (selectedCompany !== 'all' && exp.company !== selectedCompany) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesRole = exp.role.toLowerCase().includes(q);
        const matchesCompany = exp.company.toLowerCase().includes(q);
        const matchesTech = exp.technologies.some(t => t.toLowerCase().includes(q));
        const matchesContrib = exp.keyContributions.some(c => c.toLowerCase().includes(q));
        return matchesRole || matchesCompany || matchesTech || matchesContrib;
      }
      return true;
    });
  }, [selectedCompany, searchQuery]);

  // Company logo badges
  const getCompanyBrand = (company: string) => {
    if (company.includes('HSBC')) {
      return {
        bg: 'bg-white dark:bg-slate-900 border-red-200 dark:border-red-900/60 shadow-2xs',
        icon: <HsbcLogo className="w-12 h-8 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
        smallIcon: <HsbcLogo className="w-5 h-3.5 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
        initials: 'HSBC'
      };
    }
    if (company.includes('Tata') || company.includes('TCS')) {
      return {
        bg: 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-900/60 shadow-2xs',
        icon: <TcsLogo className="w-10 h-10 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
        smallIcon: <TcsLogo className="w-4 h-4 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
        initials: 'TCS'
      };
    }
    return {
      bg: 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-900/60 shadow-2xs',
      icon: <InfosysLogo className="w-10 h-10 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
      smallIcon: <InfosysLogo className="w-4 h-4 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />,
      initials: 'INFY'
    };
  };

  return (
    <section id="experience" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Professional Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Chronological enterprise track record across HSBC, Tata Consultancy Services, and Infosys delivering high-throughput Oracle Integration Cloud solutions, PL/SQL architectures, and enterprise feeds.
            </p>
          </div>

          {/* Quick Stats Capsule */}
          <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 shrink-0 self-start md:self-auto">
            <span>3 Enterprise Employers</span>
            <span aria-hidden="true">·</span>
            <span>OIC & ERP Architecture</span>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-4 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technologies, skills (e.g. OIC, REST, HDL, PL/SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Company Segmented Filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto no-scrollbar">
              <button
                onClick={() => setSelectedCompany('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCompany === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All ({resumeData.experiences.length})
              </button>
              {resumeData.experiences.map((exp) => {
                const b = getCompanyBrand(exp.company);
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedCompany(exp.company)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCompany === exp.company
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {b.smallIcon}
                    <span>{b.initials}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience Cards Stream */}
        {filteredExperiences.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No matching experience found.</p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or reset company filter.</p>
            <button
              onClick={() => {
                setSelectedCompany('all');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredExperiences.map((exp) => {
              const brand = getCompanyBrand(exp.company);
              return (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all tech-card-hover"
                >
                  {/* Header row with company insignia */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-14 h-12 rounded-xl flex items-center justify-center p-1.5 border shrink-0 ${brand.bg}`}>
                        {brand.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                          <span className="font-bold text-slate-900 dark:text-white text-base">
                            {exp.company}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 font-mono text-xs">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {exp.duration}
                          </span>
                          {exp.isCurrent && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Present Role
                              </span>
                            </>
                          )}
                          {exp.domain && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-slate-600 dark:text-slate-400 font-medium">{exp.domain}</span>
                            </>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-cyan-400">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto shrink-0 text-xs">
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="hidden md:flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          {exp.metrics.map((metric, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                              <span>{metric.label}: <strong className="text-slate-900 dark:text-white font-mono tabular-nums">{metric.value}</strong></span>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={() => setActiveModalExp(exp)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition-colors"
                      >
                        <span>Deep Dive</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div className="py-4 space-y-2.5">
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                      <span>Key Contributions & Deliverables</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.keyContributions.map((point, pIdx) => {
                        const regex = /(Enhanced 40%|40%|60% efficiency|60%|REST and SOAP|Oracle Integration Cloud|OIC|Domain Value Maps \(DVMs\)|HCM Data Loader \(HDL\)|HCM Extracts|ServiceNow|JIRA)/g;
                        const parts = point.split(regex);

                        return (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 mt-2 shrink-0" />
                            <span>
                              {parts.map((part, i) => {
                                if (part === 'Enhanced 40%' || part === '40%') {
                                  return (
                                    <span key={i} className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-800/50">
                                      {part}
                                    </span>
                                  );
                                }
                                if (part === '60% efficiency' || part === '60%') {
                                  return (
                                    <span key={i} className="font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1 py-0.5 rounded border border-amber-200/50 dark:border-amber-800/50">
                                      {part}
                                    </span>
                                  );
                                }
                                if (part === 'REST and SOAP' || part === 'Oracle Integration Cloud' || part === 'OIC') {
                                  return (
                                    <span key={i} className="font-semibold text-blue-700 dark:text-cyan-400">
                                      {part}
                                    </span>
                                  );
                                }
                                return part;
                              })}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-400 dark:text-slate-500 font-medium mr-1">Technologies & Tools:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => setSearchQuery(tech)}
                        className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-cyan-400 rounded border border-slate-200 dark:border-slate-700 transition-colors"
                        title={`Filter by ${tech}`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ExperienceDetailModal
        experience={activeModalExp}
        onClose={() => setActiveModalExp(null)}
      />
    </section>
  );
};
