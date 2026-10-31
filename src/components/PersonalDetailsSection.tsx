import React, { useState } from 'react';
import { User, Calendar, MapPin, Languages, Music, Film, Trophy, Copy, Check, Download, Mail, Phone, ExternalLink, Compass } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface PersonalDetailsSectionProps {
  onNotify: (msg: string) => void;
  onOpenContactModal: () => void;
}

export const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({ onNotify, onOpenContactModal }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const downloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${resumeData.personalInfo.name}`,
      `TITLE:${resumeData.personalInfo.role}`,
      'ORG:HSBC;Senior Software Engineer',
      `TEL;TYPE=CELL:${resumeData.personalInfo.phone}`,
      `EMAIL:${resumeData.personalInfo.email}`,
      `URL:${resumeData.personalInfo.linkedinUrl}`,
      `ADR;TYPE=HOME:;;6-G-163, Kudi Bhagtasni;Jodhpur;Rajasthan;342005;India`,
      `ADR;TYPE=WORK:;;Hinjewadi Phase 1;Pune;Maharashtra;411057;India`,
      `BDAY:1997-09-03`,
      'NOTE:Senior Software Engineer & Oracle Integration & PLSQL Developer',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Praveen_Kumar_Mandhania.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onNotify('Downloaded Praveen Mandhania contact card (.vcf)');
  };

  return (
    <section id="personal-details" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>Identity & Personal Attributes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Personal Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Verified identity, permanent address, linguistic proficiencies, and personal interests.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg shadow-2xs transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Save vCard</span>
            </button>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg shadow-2xs transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiry</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Attributes and Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Official Records & Details (8 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-700">
              Biographical Information
            </h3>

            {/* Grid of Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                  Full Name
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                  {resumeData.personalInfo.name}
                </span>
              </div>

              {/* Father's Name */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                  Father&apos;s Name
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                  {resumeData.personalInfo.fatherName}
                </span>
              </div>

              {/* Date of Birth */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  Date of Birth
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                  {resumeData.personalInfo.dateOfBirth}
                </span>
              </div>

              {/* Mobile Phone */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-400" />
                    Mobile Phone
                  </span>
                  <a
                    href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-bold text-blue-600 dark:text-cyan-400 hover:underline mt-0.5 block"
                  >
                    {resumeData.personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyText(resumeData.personalInfo.phone, 'Phone number')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  title="Copy Phone"
                >
                  {copiedItem === 'Phone number' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email Address */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                    <Mail className="w-3 h-3 text-slate-400" />
                    Email
                  </span>
                  <a
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 hover:underline mt-0.5 block truncate"
                  >
                    {resumeData.personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => copyText(resumeData.personalInfo.email, 'Email address')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white shrink-0"
                  title="Copy Email"
                >
                  {copiedItem === 'Email address' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn Profile */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                    LinkedIn
                  </span>
                  <a
                    href={resumeData.personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 hover:underline mt-0.5 flex items-center gap-1 truncate"
                  >
                    <span className="truncate">{resumeData.personalInfo.linkedin}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
                <button
                  onClick={() => copyText(resumeData.personalInfo.linkedinUrl, 'LinkedIn Profile URL')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white shrink-0"
                  title="Copy LinkedIn URL"
                >
                  {copiedItem === 'LinkedIn Profile URL' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Current Address */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Current Address</span>
                  <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.2 rounded font-medium border border-emerald-200/50 dark:border-emerald-800/50">Active City</span>
                </span>
                <button
                  onClick={() => copyText(resumeData.personalInfo.currentAddress, 'Current Address')}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {copiedItem === 'Current Address' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedItem === 'Current Address' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800 border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                {resumeData.personalInfo.currentAddress}
              </div>
            </div>

            {/* Permanent Address */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>Permanent Address</span>
                  <span className="text-[10px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-400 px-1.5 py-0.2 rounded font-medium border border-blue-200/50 dark:border-blue-800/50">Hometown</span>
                </span>
                <button
                  onClick={() => copyText(resumeData.personalInfo.permanentAddress, 'Permanent Address')}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {copiedItem === 'Permanent Address' ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedItem === 'Permanent Address' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800 border-l-4 border-l-blue-500 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                {resumeData.personalInfo.permanentAddress}
              </div>
            </div>

            {/* Languages Known */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700 space-y-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-slate-400" />
                Languages Known
              </span>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {resumeData.personalInfo.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-lg text-xs"
                  >
                    <span className="font-bold text-slate-900 dark:text-white">{lang.name}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hobbies & Leisure Interests (4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-700">
                Hobbies & Interests
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Personal pastimes and activities for relaxation, fitness, and analytical rejuvenation outside work:
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-2">
                {/* Travelling & Exploring */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 rounded-md">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Travelling & Exploring</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">New cultures, landscapes & outdoor journeys</p>
                  </div>
                </div>

                {/* Playing Cricket */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-md">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Playing Cricket</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Team strategy, athletic focus & discipline</p>
                  </div>
                </div>

                {/* Listening to Music */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 rounded-md">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Listening to Music</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Focus, relaxation & acoustic melody</p>
                  </div>
                </div>

                {/* Watching Movies */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 rounded-md">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Watching Movies</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Cinematography & narrative storytelling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick Action */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a
                href={`mailto:${resumeData.personalInfo.email}?subject=Career Opportunity for Praveen Kumar Mandhania`}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Send Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
