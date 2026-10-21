import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, ArrowDown, Briefcase, ExternalLink, Sparkles, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import portraitImg from '../assets/images/praveen_mandhania_user_portrait.jpg';
import { HsbcLogo } from './BrandIcons';

interface HeroSectionProps {
  onNotify: (msg: string) => void;
  onOpenPrintModal: () => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNotify, onOpenPrintModal, onOpenContactModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="overview" className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic & Career Profile */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Tech Kicker */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-wider text-blue-700 dark:text-cyan-400 uppercase">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-950/60 rounded-md border border-blue-200/60 dark:border-blue-900/60">
                <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Senior Software Engineer</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-700 dark:text-slate-300 font-semibold">Oracle Integration & PLSQL Developer</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              
              {/* Dedicated Active Employee Badge at HSBC */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/70 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <HsbcLogo className="w-5 h-3.5 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight normal-case text-xs">HSBC</span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-200/70 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded-xs">
                  Active
                </span>
              </div>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {resumeData.personalInfo.name}
              </h1>
              <p className="mt-2 text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {resumeData.personalInfo.role}
              </p>
            </div>

            {/* Verbatim Professional Summary */}
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 rounded-xl p-4 sm:p-6 text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base tech-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>Professional Summary</span>
                </span>
                <span className="text-[11px] font-mono text-blue-700 dark:text-cyan-400 font-semibold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/50 dark:border-blue-800/50">
                  6 Years IT · 1.3 Years OIC
                </span>
              </div>
              <p className="leading-relaxed">
                {resumeData.personalInfo.summary}
              </p>
            </div>

            {/* Direct Contact Coordinates Row with Instant Copy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {/* Phone */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <a
                  href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-cyan-400 truncate"
                  title="Call Praveen"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{resumeData.personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.personalInfo.phone, 'Phone number')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded"
                  title="Copy Phone"
                >
                  {copiedField === 'Phone number' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Email */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-cyan-400 truncate"
                  title="Email Praveen"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{resumeData.personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.personalInfo.email, 'Email address')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded"
                  title="Copy Email"
                >
                  {copiedField === 'Email address' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="group flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors">
                <a
                  href={resumeData.personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-cyan-400 truncate"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{resumeData.personalInfo.linkedin}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                </a>
                <button
                  onClick={() => copyToClipboard(resumeData.personalInfo.linkedinUrl, 'LinkedIn URL')}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded"
                  title="Copy LinkedIn URL"
                >
                  {copiedField === 'LinkedIn URL' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore Experience</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>View my Resume</span>
              </button>
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Inquiry</span>
              </button>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span className="font-medium text-slate-700 dark:text-slate-300">Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Candidate Credentials Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm tech-glow">
              {/* Photo Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 mb-4 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={portraitImg}
                    alt="Praveen Kumar Mandhania - Senior Software Engineer"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
                    <span className="text-3xl font-extrabold tracking-wider font-mono text-cyan-400">PKM</span>
                    <span className="text-xs text-slate-300 mt-2 font-medium">Praveen Kumar Mandhania</span>
                    <span className="text-[11px] text-cyan-400 mt-0.5">Senior Software Engineer · Oracle Integration & PLSQL</span>
                  </div>
                )}
                {/* Status Dot Pill: Available for OIC Integration & PLSQL */}
                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for OIC Integration & PLSQL</span>
                </div>
              </div>

              {/* Candidate Info Strip */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5 text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Role</span>
                  <span className="font-bold text-slate-900 dark:text-white">Senior Software Engineer</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5 text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Employer</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50 px-2.5 py-0.5 rounded border border-red-200/50 dark:border-red-900/50">
                    <HsbcLogo className="w-5 h-3.5 rounded-xs shrink-0 border-0 shadow-none bg-transparent" />
                    <span>HSBC</span>
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5 text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Prior Companies</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">TCS · Infosys</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Certifications</span>
                  <span className="font-semibold text-blue-700 dark:text-cyan-400 text-right">
                    OIC Integration Developer Pro 2026 & OIC Associate
                  </span>
                </div>
              </div>

              {/* Candidate Location Strip */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Location
                </span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-900/50">Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics KPI Strip Below Hero Split */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {resumeData.stats.map((stat, idx) => {
              const accents = [
                { text: 'text-blue-600 dark:text-cyan-400', border: 'border-t-2 border-t-blue-500 dark:border-t-cyan-400', bg: 'hover:border-blue-300 dark:hover:border-cyan-500/50' },
                { text: 'text-indigo-600 dark:text-indigo-400', border: 'border-t-2 border-t-indigo-500 dark:border-t-indigo-400', bg: 'hover:border-indigo-300 dark:hover:border-indigo-500/50' },
                { text: 'text-emerald-600 dark:text-emerald-400', border: 'border-t-2 border-t-emerald-500 dark:border-t-emerald-400', bg: 'hover:border-emerald-300 dark:hover:border-emerald-500/50' },
                { text: 'text-amber-600 dark:text-amber-400', border: 'border-t-2 border-t-amber-500 dark:border-t-amber-400', bg: 'hover:border-amber-300 dark:hover:border-amber-500/50' },
                { text: 'text-sky-600 dark:text-sky-400', border: 'border-t-2 border-t-sky-500 dark:border-t-sky-400', bg: 'hover:border-sky-300 dark:hover:border-sky-500/50' }
              ];
              const accent = accents[idx % accents.length];

              return (
                <div
                  key={idx}
                  className={`bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 rounded-xl p-3.5 sm:p-4 transition-all shadow-2xs hover:shadow-xs tech-card-hover ${accent.border} ${accent.bg}`}
                >
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-mono tabular-nums ${accent.text}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {stat.context}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
