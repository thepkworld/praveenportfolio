import React from 'react';
import { X, CheckCircle, Calendar, FileText, Cpu, GitBranch, TrendingUp } from 'lucide-react';
import { ExperienceItem } from '../data/resumeData';
import { HsbcLogo, TcsLogo, InfosysLogo } from './BrandIcons';

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({ experience, onClose }) => {
  if (!experience) return null;

  const renderCompanyIcon = () => {
    if (experience.company.includes('HSBC')) return <HsbcLogo className="w-5 h-3.5 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />;
    if (experience.company.includes('Tata') || experience.company.includes('TCS')) return <TcsLogo className="w-4 h-4 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />;
    return <InfosysLogo className="w-4 h-4 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
              {renderCompanyIcon()}
              <span>{experience.company}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{experience.duration}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
              {experience.role}
            </h3>
            {experience.domain && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{experience.domain}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Key Metrics / Highlights */}
          {experience.metrics && experience.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {experience.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Role Progression Branch (if applicable) */}
          {experience.progression && experience.progression.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3.5 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Internal Progression</span>
              </h4>
              <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-emerald-500 before:to-emerald-600">
                {experience.progression.map((item, pIdx) => (
                  <div key={pIdx} className="relative group">
                    <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500" />
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{item.role}</span>
                        {item.badge && (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                              item.badge === 'Progressed'
                                ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800'
                                : item.badge === 'Confirmed'
                                ? 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800'
                                : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            <span>{item.badge}</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Contributions & Deliverables</span>
            </h4>
            <ul className="space-y-3">
              {experience.keyContributions.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology & Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Technology Stack & Tooling</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-cyan-300 rounded-md border border-blue-100 dark:border-blue-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Standards Note */}
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl p-4 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Methodology & Quality Standards</span>
            </div>
            <p>
              Strict adherence to enterprise architecture best practices, authoring high-precision AIM MD70 (Technical Design) and MD50 (Functional Design) documents, accompanied by comprehensive regression testing and +60% processing optimization.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
