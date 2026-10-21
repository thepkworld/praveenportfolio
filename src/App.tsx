import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { CredentialsSection } from './components/CredentialsSection';
import { AccoladesSection } from './components/AccoladesSection';
import { PersonalDetailsSection } from './components/PersonalDetailsSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { PrintResumeModal } from './components/PrintResumeModal';
import { ContactModal } from './components/ContactModal';
import { Briefcase, Cpu, GraduationCap, Award, User, FileDown, Phone, Linkedin, Mail } from 'lucide-react';
import { resumeData } from './data/resumeData';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Theme state: dark or light, synced with localStorage and html class
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('praveen_portfolio_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('praveen_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('praveen_portfolio_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'experience', 'competencies', 'education', 'certifications', 'personal-details'];
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans transition-colors w-full">
      {/* Toast Notification Container */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* 100% Frozen Top Container: Navbar + Horizontally Slidable Sub-navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full no-print bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-sm transition-colors">
        {/* Panel 1: Top Navigation Bar with Theme Slide Switch & Name */}
        <Navbar
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
        />

        {/* Panel 2: Quick Section Jump Sub-bar - Interactive & Horizontally Slidable */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 w-full bg-slate-50/80 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <nav 
              className="flex items-center gap-1.5 sm:gap-2 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 overflow-x-auto scrollbar-none touch-pan-x whitespace-nowrap select-none"
              aria-label="Section Quick Jump"
            >
              <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider text-[10px] mr-1 shrink-0 hidden sm:inline">
                Jump To:
              </span>
              <a
                href="#overview"
                onClick={() => setActiveSection('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'overview'
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <span>Summary</span>
              </a>
              <a
                href="#experience"
                onClick={() => setActiveSection('experience')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'experience'
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience</span>
              </a>
              <a
                href="#competencies"
                onClick={() => setActiveSection('competencies')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'competencies'
                    ? 'bg-purple-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Competencies</span>
              </a>
              <a
                href="#education"
                onClick={() => setActiveSection('education')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'education'
                    ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic</span>
              </a>
              <a
                href="#certifications"
                onClick={() => setActiveSection('certifications')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'certifications'
                    ? 'bg-amber-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certifications</span>
              </a>
              <a
                href="#personal-details"
                onClick={() => setActiveSection('personal-details')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-xs font-medium cursor-pointer ${
                  activeSection === 'personal-details'
                    ? 'bg-slate-800 text-white shadow-xs font-semibold dark:bg-slate-700 dark:text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Personal Details</span>
              </a>

              {/* Horizontal Action Strip */}
              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 shrink-0 mx-1" aria-hidden="true" />
              
              <button
                onClick={() => setIsPrintModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
                title="Download Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 shrink-0" />
                <span>Download Resume PDF</span>
              </button>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="p-1.5 text-emerald-600 dark:text-emerald-400 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                title="Contact / Phone"
                aria-label="Contact / Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </button>

              <a
                href={resumeData.personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-blue-600 dark:text-blue-400 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="p-1.5 text-red-600 dark:text-red-400 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                title="Gmail / Email"
                aria-label="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer to offset the fixed frozen double-header (Navbar 64px + Sub-bar ~44px = 108px) */}
      <div className="h-[108px] shrink-0 w-full no-print" aria-hidden="true" />

      {/* Main Content Area with Segregated Sections matching Resume */}
      <main className="flex-1 w-full">
        {/* 1. Header & Professional Summary Section */}
        <HeroSection
          onNotify={showToast}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        {/* 2. Professional Experience (HSBC, TCS, Infosys) */}
        <ExperienceSection />

        {/* 3. Key Competencies (Cloud & Middleware, Databases, Web Services, APIs, Languages) */}
        <CompetenciesSection onNotify={showToast} />

        {/* 4. Academic (B.Tech, Senior Secondary, Secondary) */}
        <CredentialsSection />

        {/* 5. Certifications (OCI 2026, Foundations, Associate, Azure, Hackathon, IBM) */}
        <AccoladesSection />

        {/* 6. Personal Details (Father Name, DOB, Address, Languages, Hobbies) */}
        <PersonalDetailsSection
          onNotify={showToast}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Printable ATS Resume Modal */}
      <PrintResumeModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        onNotify={showToast}
      />

      {/* Contact & Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onNotify={showToast}
      />
    </div>
  );
}
