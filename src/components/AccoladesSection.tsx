import React, { useState } from 'react';
import { ExternalLink, Check, Copy, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { resumeData, AccoladeItem } from '../data/resumeData';
import { OracleLogo, MicrosoftLogo, InfosysLogo } from './BrandIcons';

export const AccoladesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCredentialId = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAccolades = resumeData.accolades.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'oracle') return item.issuer.toLowerCase().includes('oracle');
    if (activeFilter === 'azure') return item.issuer.toLowerCase().includes('microsoft');
    if (activeFilter === 'infosys') return item.issuer.toLowerCase().includes('infosys');
    return true;
  });

  const getBrandIcon = (issuer: string) => {
    const l = issuer.toLowerCase();
    if (l.includes('oracle')) return <OracleLogo className="w-6 h-6 shrink-0" />;
    if (l.includes('microsoft')) return <MicrosoftLogo className="w-6 h-6 shrink-0" />;
    if (l.includes('infosys')) return <InfosysLogo className="w-6 h-6 shrink-0" />;
    return <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0" />;
  };

  const getBrandStyles = (issuer: string) => {
    const l = issuer.toLowerCase();
    if (l.includes('oracle')) {
      return {
        cardBorder: 'border-t-2 border-t-[#EA1B23] dark:border-t-red-500 hover:border-red-300 dark:hover:border-red-500/50',
        badge: 'bg-red-50 dark:bg-red-950/50 text-[#EA1B23] dark:text-red-400 border border-red-200/60 dark:border-red-900/50',
        verifyBtn: 'bg-red-600 hover:bg-red-500 text-white shadow-2xs'
      };
    }
    if (l.includes('microsoft')) {
      return {
        cardBorder: 'border-t-2 border-t-[#00A4EF] dark:border-t-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500/50',
        badge: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50',
        verifyBtn: 'bg-blue-600 hover:bg-blue-500 text-white shadow-2xs'
      };
    }
    if (l.includes('infosys')) {
      return {
        cardBorder: 'border-t-2 border-t-[#007CC3] dark:border-t-sky-400 hover:border-sky-300 dark:hover:border-sky-500/50',
        badge: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/50',
        verifyBtn: 'bg-sky-600 hover:bg-sky-500 text-white shadow-2xs'
      };
    }
    return {
      cardBorder: 'border-t-2 border-t-amber-500 dark:border-t-amber-400',
      badge: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/50',
      verifyBtn: 'bg-amber-600 hover:bg-amber-500 text-white shadow-2xs'
    };
  };

  const countOracle = resumeData.accolades.filter(a => a.issuer.toLowerCase().includes('oracle')).length;
  const countAzure = resumeData.accolades.filter(a => a.issuer.toLowerCase().includes('microsoft')).length;
  const countInfosys = resumeData.accolades.filter(a => a.issuer.toLowerCase().includes('infosys')).length;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">
              <span>Verified Industry Certifications</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Oracle · Microsoft · Infosys</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Certifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Official professional certifications in Oracle Integration Cloud (OIC), Oracle Cloud Infrastructure, Microsoft Azure Associate suite, and Oracle PL/SQL.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs overflow-x-auto select-none shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({resumeData.accolades.length})
            </button>
            <button
              onClick={() => setActiveFilter('oracle')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === 'oracle'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Oracle ({countOracle})
            </button>
            <button
              onClick={() => setActiveFilter('azure')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === 'azure'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Microsoft ({countAzure})
            </button>
            <button
              onClick={() => setActiveFilter('infosys')}
              className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === 'infosys'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Infosys ({countInfosys})
            </button>
          </div>
        </div>

        {/* Certifications Bento Grid - Chronological Latest to Oldest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredAccolades.map((item, idx) => {
            const styles = getBrandStyles(item.issuer);

            return (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all tech-card-hover flex flex-col justify-between ${styles.cardBorder}`}
              >
                <div>
                  {/* Card Header: Brand Icon, Issuer Badge & Year */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xs shrink-0 flex items-center justify-center">
                      {getBrandIcon(item.issuer)}
                    </div>
                    <div className="text-right">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${styles.badge}`}>
                        {item.issuer}
                      </span>
                      {item.issueDate && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 font-medium">
                          {item.issueDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description / Scope */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {/* Footer: Credential ID & Verification Link */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/90 space-y-3">
                  {item.badgeCode && (
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                        Credential ID
                      </span>
                      <div className="flex items-center gap-1.5 max-w-[70%]">
                        <span className="font-mono text-[11px] text-slate-800 dark:text-slate-200 truncate bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200/80 dark:border-slate-700">
                          {item.badgeCode}
                        </span>
                        <button
                          onClick={() => copyCredentialId(item.badgeCode!)}
                          className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                          title="Copy Credential ID"
                          aria-label="Copy Credential ID"
                        >
                          {copiedId === item.badgeCode ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${styles.verifyBtn}`}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
