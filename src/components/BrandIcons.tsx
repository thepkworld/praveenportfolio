import React from 'react';
import hsbcLogoImg from '../assets/images/hsbc_logo.png';
import tcsLogoImg from '../assets/images/tcs_logo.jpg';
import infosysLogoImg from '../assets/images/infosys_icon.webp';

export const HsbcLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 ${className}`}>
    <img
      src={hsbcLogoImg}
      alt="HSBC Logo"
      className="w-full h-full object-contain p-0.5"
    />
  </div>
);

export const TcsLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 ${className}`}>
    <img
      src={tcsLogoImg}
      alt="TCS Logo"
      className="w-full h-full object-contain p-0.5"
    />
  </div>
);

export const InfosysLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 ${className}`}>
    <img
      src={infosysLogoImg}
      alt="Infosys Logo"
      className="w-full h-full object-contain p-0.5"
    />
  </div>
);

export const OracleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Oracle Logo">
    <rect width="32" height="32" rx="6" fill="#EA1B23" fillOpacity="0.1" />
    <path
      d="M11 9H21C24.3137 9 27 12.134 27 16C27 19.866 24.3137 23 21 23H11C7.68629 23 5 19.866 5 16C5 12.134 7.68629 9 11 9Z"
      stroke="#EA1B23"
      strokeWidth="3.2"
      fill="none"
    />
  </svg>
);

export const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Logo">
    <rect x="1.5" y="1.5" width="9.5" height="9.5" fill="#F25022" rx="0.5" />
    <rect x="13" y="1.5" width="9.5" height="9.5" fill="#7FBA00" rx="0.5" />
    <rect x="1.5" y="13" width="9.5" height="9.5" fill="#00A4EF" rx="0.5" />
    <rect x="13" y="13" width="9.5" height="9.5" fill="#FFB900" rx="0.5" />
  </svg>
);
