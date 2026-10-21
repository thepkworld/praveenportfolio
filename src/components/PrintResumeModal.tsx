import React from 'react';
import { X, Printer, Copy, Download, ExternalLink, School, Award, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlaintextResume = () => {
    const lines: string[] = [
      resumeData.personalInfo.name,
      resumeData.personalInfo.role,
      `Phone: ${resumeData.personalInfo.phone} | Email: ${resumeData.personalInfo.email} | LinkedIn: ${resumeData.personalInfo.linkedin}`,
      `Location: ${resumeData.personalInfo.cityStatePincode}`,
      '',
      'PROFESSIONAL SUMMARY',
      resumeData.personalInfo.summary,
      '',
      'EXPERIENCE',
      ...resumeData.experiences.flatMap((exp) => [
        `Role: ${exp.role}`,
        `Company: ${exp.company}`,
        `Duration: ${exp.duration}`,
        `Technology: ${exp.technologies.join(', ')}`,
        'Key Contributions:',
        ...exp.keyContributions.map((c) => `• ${c}`),
        ''
      ]),
      'ACADEMIC',
      ...resumeData.education.map(
        (e) => `• ${e.degree} - ${e.institute} (${e.boardUniversity}) | ${e.grade} | ${e.year}`
      ),
      '',
      'KEY COMPETENCIES',
      ...resumeData.competencies.map(
        (c) => `${c.category}: ${c.skills.map((s) => s.name).join(', ')}`
      ),
      '',
      'CERTIFICATIONS',
      ...resumeData.accolades.map((a) => `• ${a.title} (${a.issuer}, ${a.year})`),
      '',
      'PERSONAL DETAILS',
      `• Father's Name: ${resumeData.personalInfo.fatherName}`,
      `• Date of Birth: ${resumeData.personalInfo.dateOfBirth}`,
      `• Current Address: ${resumeData.personalInfo.currentAddress}`,
      `• Permanent Address: ${resumeData.personalInfo.permanentAddress}`,
      `• Languages Known: ${resumeData.personalInfo.languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}`,
      `• Hobbies and Interests: ${resumeData.personalInfo.hobbies.join(', ')}`
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    onNotify('Plaintext resume copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold tracking-tight">View Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlaintextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              title="Copy plain text for job application forms"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Plaintext</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100">
          <div
            id="printable-cv"
            className="max-w-3xl mx-auto bg-white p-6 sm:p-10 shadow-sm border border-slate-200 text-slate-900 font-sans space-y-6 text-xs sm:text-sm"
          >
            {/* Header / Contact Coordinates */}
            <div className="border-b border-slate-300 pb-4">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-xs font-semibold text-blue-700 mt-0.5">
                {resumeData.personalInfo.role}
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600 mt-2">
                <span>Phone: {resumeData.personalInfo.phone}</span>
                <span>•</span>
                <span>Email: {resumeData.personalInfo.email}</span>
                <span>•</span>
                <a
                  href={resumeData.personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  {resumeData.personalInfo.linkedin}
                </a>
                <span>•</span>
                <span>Location: Pune, Maharashtra</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed text-justify">
                {resumeData.personalInfo.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                      <span>{exp.role}</span>
                      <span className="font-mono text-xs">{exp.duration}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      Company: {exp.company}
                    </div>
                    <div className="text-xs text-slate-600">
                      <span className="font-medium">Technology:</span> {exp.technologies.join(', ')}.
                    </div>
                    <div className="text-xs text-slate-700 pt-1">
                      <div className="font-semibold mb-1">Key Contributions:</div>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
                        {exp.keyContributions.map((contrib, idx) => (
                          <li key={idx} className="leading-snug">
                            {contrib}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic (Clean responsive list layout, no table) */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                ACADEMIC
              </h2>
              <div className="space-y-2.5 pt-1">
                {resumeData.education.map((e, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-100 pb-2 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{e.degree} <span className="font-normal text-slate-500">({e.level})</span></div>
                      <div className="text-slate-600">{e.institute} · {e.boardUniversity}</div>
                    </div>
                    <div className="sm:text-right mt-1 sm:mt-0 shrink-0">
                      <span className="font-bold font-mono text-blue-700">{e.grade}</span>
                      <span className="text-slate-500 font-mono text-[11px] ml-2">{e.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Competencies */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                KEY COMPETENCIES
              </h2>
              <div className="space-y-2 text-xs text-slate-800">
                {resumeData.competencies.map((cat, idx) => (
                  <p key={idx}>
                    <strong className="font-semibold">{cat.category}:</strong>{' '}
                    {cat.skills.map((s) => s.name).join(', ')}.
                  </p>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
                {resumeData.accolades.map((acc, idx) => (
                  <li key={idx} className="leading-snug">
                    {acc.title} ({acc.issuer}, {acc.year})
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Details */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                PERSONAL DETAILS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                <div>
                  <span className="font-semibold">Father's Name:</span> {resumeData.personalInfo.fatherName}
                </div>
                <div>
                  <span className="font-semibold">Date of Birth:</span> {resumeData.personalInfo.dateOfBirth}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold">Current Address:</span> {resumeData.personalInfo.currentAddress}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold">Permanent Address:</span> {resumeData.personalInfo.permanentAddress}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold">Languages Known:</span>{' '}
                  {resumeData.personalInfo.languages.map((l) => `${l.name} (${l.proficiency})`).join(', ')}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold">Hobbies and Interests:</span>{' '}
                  {resumeData.personalInfo.hobbies.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
