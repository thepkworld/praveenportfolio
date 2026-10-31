import React, { useState } from 'react';
import { X, Mail, Phone, Linkedin, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onNotify }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [messageTopic, setMessageTopic] = useState('Interview Opportunity');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const copyToClip = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    onNotify(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${messageTopic} for Praveen Kumar Mandhania - ${senderOrg || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Hello Praveen,\n\nMy name is ${senderName || 'Hiring Team'}${senderOrg ? ` from ${senderOrg}` : ''}.\n\n` +
      `${customNote || 'We came across your profile as an Oracle Integration & PLSQL Developer and would like to connect regarding an exciting opportunity.'}\n\n` +
      `Best regards,\n${senderName || 'Recruiter'}`
    );
    window.location.href = `mailto:${resumeData.personalInfo.email}?subject=${subject}&body=${body}`;
    onNotify('Opening your default email client...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Contact Praveen Kumar Mandhania
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Senior Software Engineer · Oracle Integration & PLSQL Developer · Pune, Maharashtra
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Quick Contact Buttons */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Direct Contact Details
            </span>

            {/* Email */}
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="flex items-center gap-2.5 font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate"
              >
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-400 rounded-md">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{resumeData.personalInfo.email}</span>
              </a>
              <button
                onClick={() => copyToClip(resumeData.personalInfo.email, 'Email')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
                title="Copy Email"
              >
                {copiedKey === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
              <a
                href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 rounded-md">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{resumeData.personalInfo.phone}</span>
              </a>
              <button
                onClick={() => copyToClip(resumeData.personalInfo.phone, 'Phone')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
                title="Copy Phone"
              >
                {copiedKey === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
              <a
                href={resumeData.personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-400 rounded-md shrink-0">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{resumeData.personalInfo.linkedin}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
              <button
                onClick={() => copyToClip(resumeData.personalInfo.linkedinUrl, 'LinkedIn URL')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
                title="Copy LinkedIn URL"
              >
                {copiedKey === 'LinkedIn URL' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Quick Email Launcher Form */}
          <form onSubmit={handleComposeEmail} className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Quick Email Message
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400 block mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Financial Tech Ltd"
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400 block mb-1">Inquiry Purpose</label>
              <select
                value={messageTopic}
                onChange={(e) => setMessageTopic(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Interview Opportunity">Interview Opportunity / Job Opening</option>
                <option value="Oracle Consulting Project">Oracle EBS / OIC Consulting Project</option>
                <option value="Freelance & Advisory">Technical Advisory / Freelance Inquiry</option>
                <option value="General Professional Networking">General Professional Networking</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400 block mb-1">Message Note</label>
              <textarea
                rows={3}
                placeholder="Brief message or role requirements..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Compose Email via Client</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
