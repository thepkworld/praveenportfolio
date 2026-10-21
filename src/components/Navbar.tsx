import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Mail, Sun, Moon, Phone, Linkedin, FileDown } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import portraitImg from '../assets/images/praveen_mandhania_user_portrait.jpg';

interface NavbarProps {
  onOpenPrintModal: () => void;
  onOpenContactModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenPrintModal, 
  onOpenContactModal,
  isDark,
  onToggleTheme 
}) => {
  const [slideBarOpen, setSlideBarOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && slideBarOpen) {
        setSlideBarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideBarOpen]);

  // Prevent background scroll when side bar drawer is open
  useEffect(() => {
    if (slideBarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [slideBarOpen]);

  return (
    <>
      <header className="w-full transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-16">
            {/* Top Left: Slide Menu Button + Avatar Favicon + Full Name */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Slide Bar Trigger (Left side drawer toggle) */}
              <button
                onClick={() => setSlideBarOpen(true)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Open slide navigation bar"
                title="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Small Favicon / Avatar in circle beside full candidate name */}
              <a
                href="#overview"
                className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group ml-0.5"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-blue-500/40 dark:border-cyan-400/50 shadow-xs shrink-0 group-hover:ring-2 group-hover:ring-blue-500/50 transition-all bg-slate-200 dark:bg-slate-800">
                  <img
                    src={portraitImg}
                    alt="Praveen Kumar Mandhania"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="font-extrabold tracking-tight uppercase">PRAVEEN KUMAR MANDHANIA</span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300">
              <a
                href="#experience"
                className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Experience
              </a>
              <a
                href="#competencies"
                className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Key Competencies
              </a>
              <a
                href="#education"
                className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Academic
              </a>
              <a
                href="#certifications"
                className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Certifications
              </a>
              <a
                href="#personal-details"
                className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                Personal Details
              </a>
            </nav>

            {/* Top Right Corner: Theme Sliding Switch */}
            <div className="flex items-center shrink-0">
              <button
                onClick={onToggleTheme}
                className="relative flex items-center px-1 py-0.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 rounded-full border border-slate-300/80 dark:border-slate-700 w-15 sm:w-16 h-7.5 transition-all cursor-pointer select-none shrink-0 shadow-2xs group"
                aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                title={isDark ? 'Switch to Light Theme (Currently Dark)' : 'Switch to Dark Theme (Currently Light)'}
              >
                <div
                  className={`absolute top-1 flex items-center justify-center w-5.5 h-5.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200/50 dark:border-slate-700 transition-transform duration-200 ease-in-out ${
                    isDark ? 'translate-x-7 sm:translate-x-8 text-cyan-400' : 'translate-x-0.5 text-amber-500'
                  }`}
                >
                  {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                </div>
                <div className="flex justify-between w-full px-1.5 text-[10px] pointer-events-none">
                  <Sun className={`w-3 h-3 text-amber-500 ml-0.5 ${!isDark ? 'opacity-0' : 'opacity-70'}`} />
                  <Moon className={`w-3 h-3 text-cyan-400 mr-0.5 ${isDark ? 'opacity-0' : 'opacity-70'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide Bar at Left Side - Fully Overlapping Modal Drawer via React Portal */}
      {slideBarOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex" role="dialog" aria-modal="true">
          {/* Full-screen Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setSlideBarOpen(false)}
            aria-hidden="true"
          />

          {/* Full Height Left Slide-over Panel */}
          <aside
            className="relative w-84 max-w-[85vw] h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-left duration-250 ease-out p-5 sm:p-6 overflow-y-auto"
          >
            {/* Top of Slide Bar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 dark:border-cyan-400 shadow-xs shrink-0">
                    <img
                      src={portraitImg}
                      alt="Praveen Kumar Mandhania"
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Praveen Kumar Mandhania
                    </h3>
                    <p className="text-[11px] text-blue-600 dark:text-cyan-400 font-medium">
                      Oracle Integration & PLSQL Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSlideBarOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links list */}
              <nav className="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                <a
                  href="#overview"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Overview & Summary
                </a>
                <a
                  href="#experience"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#competencies"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Key Competencies
                </a>
                <a
                  href="#education"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Academic Credentials
                </a>
                <a
                  href="#certifications"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Certifications
                </a>
                <a
                  href="#personal-details"
                  onClick={() => setSlideBarOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Personal Details
                </a>
              </nav>

              {/* Directly below the last "Personal Details", not subgrouped, rendered horizontally */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Download Resume PDF Button */}
                  <button
                    onClick={() => {
                      setSlideBarOpen(false);
                      onOpenPrintModal();
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
                    title="Download Resume PDF"
                  >
                    <FileDown className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap text-[11px] sm:text-xs">Download Resume PDF</span>
                  </button>

                  {/* Contact / Phone Icon Button */}
                  <button
                    onClick={() => {
                      setSlideBarOpen(false);
                      onOpenContactModal();
                    }}
                    className="p-2 text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Contact / Phone"
                    aria-label="Open contact modal"
                  >
                    <Phone className="w-4 h-4" />
                  </button>

                  {/* LinkedIn Icon */}
                  <a
                    href={resumeData.personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  {/* Gmail Icon */}
                  <a
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="p-2 text-red-600 dark:text-red-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                    title="Gmail / Email"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer note in Slide Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
              <span>HSBC · Senior Software Engineer</span>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
};
