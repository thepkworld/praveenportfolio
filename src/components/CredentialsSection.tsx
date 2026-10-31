import React from 'react';
import { Calendar, School, Award, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Formal Education</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Engineering & Foundations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Academic
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Formal academic foundation in engineering from Rajasthan Technical University and CBSE higher secondary education.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 shrink-0 self-start sm:self-auto">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>3 Degrees & Diplomas</span>
          </div>
        </div>

        {/* Responsive Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {resumeData.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-blue-400 dark:hover:border-cyan-500 hover:shadow-sm transition-all tech-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Level / Badge & Year */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">{edu.level}</span>
                  <span className="flex items-center gap-1 font-mono text-[11px] sm:text-xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {edu.year}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {edu.degree}
                </h3>

                {/* Institute & Board */}
                <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <p className="flex items-start gap-2 font-medium text-slate-800 dark:text-slate-200">
                    <School className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{edu.institute}</span>
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 pl-6 text-[11px] sm:text-xs">
                    {edu.boardUniversity}
                  </p>
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {edu.details}
                  </p>
                )}
              </div>

              {/* Score Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Score Achieved</span>
                </span>
                <span className="text-base font-extrabold text-blue-700 dark:text-cyan-400 font-mono tabular-nums">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
