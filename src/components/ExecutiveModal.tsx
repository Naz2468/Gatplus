import React, { useState } from 'react';
import { X, Award, ShieldCheck, Check, UserCheck } from 'lucide-react';
import { EXECUTIVE_PROFILE, GOVERNANCE_DIRECTOR, CORPORATE_DATA } from '../data/corporateData';

interface ExecutiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveModal: React.FC<ExecutiveModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ceo' | 'director' | 'governance'>('ceo');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-none shadow-2xl border-0 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 sm:px-8 border-0 flex items-center justify-between bg-[#F8F9FA]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-none bg-[#0A1913] text-[#84E262] flex items-center justify-center font-bold text-sm border-0">
              GD
            </div>
            <div>
              <h2 className="text-lg font-black text-[#0A1913]">Executive Governance Dossier</h2>
              <div className="text-xs text-neutral-500">{CORPORATE_DATA.name} · Abuja Secretariat</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-none hover:bg-neutral-200 text-neutral-600 transition-colors cursor-pointer border-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 sm:px-8 pt-4 pb-2 border-0 flex gap-2 overflow-x-auto bg-white">
          <button
            onClick={() => setActiveTab('ceo')}
            className={`px-4 py-2 text-xs font-bold rounded-none transition-all cursor-pointer whitespace-nowrap border-0 ${
              activeTab === 'ceo'
                ? 'bg-[#0A1913] text-white shadow-xs'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
          >
            Chief Eleduma Gbenga Abiodun (CEO)
          </button>
          <button
            onClick={() => setActiveTab('director')}
            className={`px-4 py-2 text-xs font-bold rounded-none transition-all cursor-pointer whitespace-nowrap border-0 ${
              activeTab === 'director'
                ? 'bg-[#0A1913] text-white shadow-xs'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
          >
            Oluwatoyin Faderemi Eleduma (Director)
          </button>
          <button
            onClick={() => setActiveTab('governance')}
            className={`px-4 py-2 text-xs font-bold rounded-none transition-all cursor-pointer whitespace-nowrap border-0 ${
              activeTab === 'governance'
                ? 'bg-[#0A1913] text-white shadow-xs'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
          >
            Board Charter & Legal Secretariat
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {activeTab === 'ceo' && (
            <div className="space-y-6">
              {/* Top Bio Banner */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#F8F9FA] rounded-none p-6 border-0">
                <div className="md:col-span-4 relative rounded-none overflow-hidden h-64 sm:h-72 border-0 bg-neutral-200">
                  <img
                    src={EXECUTIVE_PROFILE.image}
                    alt={EXECUTIVE_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#0A1913]/90 text-white text-[11px] p-2 rounded-none font-medium text-center border-0">
                    Chief Executive Officer
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-none border-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Managing Director & Principal Executive</span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-[#0A1913]">
                    {EXECUTIVE_PROFILE.name}
                  </h3>
                  
                  <div className="text-xs font-bold text-neutral-600">
                    {EXECUTIVE_PROFILE.title}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {EXECUTIVE_PROFILE.bio}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-3 py-1 rounded-none border-0 font-semibold text-[#0A1913] shadow-xs">
                      Operations: Wuse II, Abuja
                    </span>
                    <span className="bg-white px-3 py-1 rounded-none border-0 font-semibold text-[#0A1913] shadow-xs">
                      Ondo State Chieftaincy
                    </span>
                    <span className="bg-white px-3 py-1 rounded-none border-0 font-semibold text-[#0A1913] shadow-xs">
                      10+ Years Executive Leadership
                    </span>
                  </div>
                </div>
              </div>

              {/* Leadership Pillars & Distinctions (No Educational Background) */}
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                  Executive Distinctions & Public Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXECUTIVE_PROFILE.leadershipPillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Execution Focus */}
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                  Direct Mandate & Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXECUTIVE_PROFILE.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                      <Check className="w-4 h-4 text-[#84E262] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'director' && (
            <div className="space-y-6">
              <div className="bg-[#F8F9FA] rounded-none p-6 sm:p-8 border-0">
                <div className="flex items-center gap-2 mb-3">
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold text-neutral-600 uppercase tracking-wider">
                    Executive Board of Directors
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0A1913] mb-1">
                  {GOVERNANCE_DIRECTOR.name}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 mb-4">
                  {GOVERNANCE_DIRECTOR.role} · {GOVERNANCE_DIRECTOR.title}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {GOVERNANCE_DIRECTOR.bio}
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-[#0A1913] uppercase tracking-wide">
                    Oversight Responsibilities:
                  </div>
                  {GOVERNANCE_DIRECTOR.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-5">
              <div className="p-6 rounded-none bg-[#0A1913] text-white space-y-4 border-0">
                <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider">
                  Corporate Charter & Governance
                </div>
                <h3 className="text-xl font-bold">
                  Corporate Secretariat & External Legal Counsel
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Gatplus Dynamic Resources Limited maintains certified legal advisors and company secretarial firms based in the Federal Capital Territory to ensure every public tender, procurement contract, and memorandum of understanding complies with federal statutory requirements.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300">
                  <div className="p-3 rounded-none bg-white/5 border-0">
                    <div className="font-bold text-white mb-1">Corporate Secretariat</div>
                    <div>Abuja Corporate Secretarial Practice</div>
                    <div className="text-neutral-400">Abuja FCT</div>
                  </div>
                  <div className="p-3 rounded-none bg-white/5 border-0">
                    <div className="font-bold text-white mb-1">External Statutory Auditors</div>
                    <div>Chartered Accountants & Financial Advisors</div>
                    <div className="text-neutral-400">Certified Partners</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-none bg-neutral-50 border-0 text-xs text-neutral-600 space-y-2">
                <div className="font-bold text-[#0A1913]">Anti-Corruption & Integrity Commitment</div>
                <p>
                  Gatplus Dynamic Resources Limited upholds a strict stance regarding ethical procurement, contract compliance, and transparency across all public and private sector engagements.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:px-8 border-t border-neutral-100 flex items-center justify-between bg-[#F8F9FA]">
          <div className="text-xs text-neutral-500">
            Executive Leadership Dossier
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-none bg-[#0A1913] hover:bg-neutral-800 text-white text-xs font-bold cursor-pointer border-0"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
