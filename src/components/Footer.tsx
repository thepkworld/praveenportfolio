import React from 'react';
import { ArrowUp, Linkedin, Printer } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  onOpenPrintModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrintModal, onOpenContactModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {resumeData.personalInfo.name}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {resumeData.personalInfo.role} · Enterprise Oracle Integration & Cloud ERP
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#competencies" className="hover:text-white transition-colors">Competencies</a>
            <a href="#education" className="hover:text-white transition-colors">Academic</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#personal-details" className="hover:text-white transition-colors">Personal Info</a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenPrintModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>View my Resume</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Praveen Kumar Mandhania. Professional Resume Portfolio.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={resumeData.personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 text-slate-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>{resumeData.personalInfo.linkedin}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              {resumeData.personalInfo.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="hover:text-slate-300 transition-colors"
            >
              {resumeData.personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
