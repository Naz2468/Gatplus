import React from 'react';
import { X, CheckCircle2, Building, Calendar, MapPin, ShieldCheck, ArrowRight, Truck, Plane, Users } from 'lucide-react';
import { ProjectRecord } from '../data/corporateData';
import { IMAGES } from '../assets';

interface ProjectDrawerProps {
  project: ProjectRecord | null;
  onClose: () => void;
  onRequestTenderQuote: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose, onRequestTenderQuote }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 rounded-none border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="p-6 border-0 flex items-center justify-between bg-[#F8F9FA]">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-[#8EE263]/25 px-2.5 py-1 rounded-none uppercase border-0">
                {project.category} · {project.status}
              </span>
              <div className="text-xs text-neutral-400 mt-1 font-mono">Tender Record Ref: {project.id}</div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-none hover:bg-neutral-200 text-neutral-600 cursor-pointer border-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                <Building className="w-4 h-4 text-neutral-400" />
                <span className="font-semibold text-[#0A1913]">{project.client}</span>
              </div>
              <h2 className="text-2xl font-black text-[#0A1913] tracking-tight leading-snug">
                {project.title}
              </h2>
            </div>

            {/* Quick Meta Cards */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-none bg-[#F8F9FA] border-0 shadow-xs">
                <div className="text-neutral-500 font-medium flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Deployment Location</span>
                </div>
                <div className="font-bold text-[#0A1913]">{project.location}</div>
              </div>

              <div className="p-3.5 rounded-none bg-[#F8F9FA] border-0 shadow-xs">
                <div className="text-neutral-500 font-medium flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Execution Period</span>
                </div>
                <div className="font-bold text-[#0A1913]">{project.year}</div>
              </div>
            </div>

            {/* Impact Metric Strip */}
            <div className="p-4 rounded-none bg-[#0A1913] text-white space-y-1 border-0">
              <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider">
                Audited Milestone Delivery
              </div>
              <div className="text-lg font-bold">{project.metrics}</div>
            </div>

            {/* Narrative Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Project Narrative & Scope
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Scope Deliverables */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Audited Scope Deliverables
              </h3>
              <ul className="space-y-2.5">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audit & Compliance Assurance */}
            <div className="p-4 rounded-none bg-emerald-50 border-0 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong>Procurement Audit Cleared:</strong> Project execution was verified with formal Job Completion Certification (JCC) issued by the client MDA and cleared under federal procurement audit benchmarks.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-100 bg-[#F8F9FA] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-none border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
          >
            Back to Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestTenderQuote();
            }}
            className="px-6 py-2.5 rounded-none bg-[#0A1913] hover:bg-[#142d23] text-white text-xs font-bold tracking-wide inline-flex items-center gap-2 cursor-pointer shadow-sm border-0"
          >
            <span>Request Similar Scope Proposal</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#84E262]" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface CapabilityDrawerProps {
  type: 'supply' | 'aviation' | 'manpower' | null;
  onClose: () => void;
  onContact: () => void;
}

export const CapabilityDrawer: React.FC<CapabilityDrawerProps> = ({ type, onClose, onContact }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 rounded-none border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="p-6 border-0 flex items-center justify-between bg-[#0A1913] text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-white/10 text-[#84E262] flex items-center justify-center border-0">
                {type === 'supply' && <Truck className="w-5 h-5" />}
                {type === 'aviation' && <Plane className="w-5 h-5" />}
                {type === 'manpower' && <Users className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider">
                  Technical Architecture
                </div>
                <h2 className="text-lg font-bold text-white">
                  {type === 'supply' && 'Humanitarian & Procurement Logistics Grid'}
                  {type === 'aviation' && 'Aviation Facility & Airfield Support'}
                  {type === 'manpower' && 'Public Sector Capacity & Consulting'}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-none hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer border-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {type === 'supply' && (
              <div className="space-y-6">
                <div className="rounded-none overflow-hidden h-48 border-0">
                  <img
                    src={IMAGES.humanitarianProcurement}
                    alt="Procurement Logistics"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Logistics Blueprint & Escort Transit
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Operating under emergency frameworks requires zero lag time and strict adherence to humanitarian principles. Gatplus Dynamic Resources maintains active supplier networks across major grain reserves in Kano, Kaduna, and Taraba, paired with multi-axle carrier fleets equipped with active telematics.
                  </p>
                </div>

                <div className="p-4 rounded-none bg-neutral-50 border-0 space-y-3">
                  <div className="text-xs font-bold text-[#0A1913] uppercase tracking-wider">
                    Operational Protocols:
                  </div>
                  <div className="space-y-2 text-xs text-neutral-700">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-emerald-600 mt-1.5 shrink-0" />
                      <span><strong>72-Hour Rapid Mobilization:</strong> Pre-contracted haulage agreements across northern distribution corridors.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-emerald-600 mt-1.5 shrink-0" />
                      <span><strong>Biometric Verification Support:</strong> Field handovers synchronized with NCFRMI displacement data logs.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-emerald-600 mt-1.5 shrink-0" />
                      <span><strong>Quality Pre-Inspection:</strong> Pre-dispatch grain moisture analysis and statutory quality stamps.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === 'aviation' && (
              <div className="space-y-6">
                <div className="rounded-none overflow-hidden h-48 border-0">
                  <img
                    src={IMAGES.aviationLogistics}
                    alt="Aviation Support"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Aviation Facility Support & Spares Provision
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Airports demand continuous, non-negotiable operational uptime. Gatplus supplies specialized replacement components for commercial baggage conveyors, screening equipment, runway perimeter security lighting, and backup generator switchgears to the Federal Ministry of Aviation.
                  </p>
                </div>

                <div className="p-4 rounded-none bg-[#84E262]/10 border-0 space-y-3">
                  <div className="text-xs font-bold text-[#0A1913] uppercase tracking-wider">
                    Aviation Compliance Safeguards:
                  </div>
                  <div className="space-y-2 text-xs text-neutral-800">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#0A1913] mt-1.5 shrink-0" />
                      <span><strong>ICAO Technical Benchmark:</strong> Genuine OEM components with full trace certification.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#0A1913] mt-1.5 shrink-0" />
                      <span><strong>Airside Escort & Safety Clearance:</strong> Certified personnel with active FAAN on-duty protocol clearances.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === 'manpower' && (
              <div className="space-y-6">
                <div className="p-6 rounded-none bg-[#0A1913] text-white space-y-3 border-0">
                  <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider">
                    Executive Masterclasses
                  </div>
                  <h3 className="text-xl font-bold">
                    Public Procurement Act & Transformational Leadership
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Facilitated by certified procurement specialists and senior governance consultants, providing hands-on case studies on procurement planning, statutory bid evaluations, and post-award audit defense.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Modular Training Modules
                  </h3>
                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                      <strong className="block text-[#0A1913] mb-1">Module 01: PPA 2007 Compliance & BPP Tendering Thresholds</strong>
                      Understanding standard bidding documents, bid security calculations, and mandatory qualification criteria.
                    </div>
                    <div className="p-3.5 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                      <strong className="block text-[#0A1913] mb-1">Module 02: Public Financial Management & Anti-Corruption Invariants</strong>
                      Fiscal responsibility frameworks, TSA compliance, and audit trail retention for federal officers.
                    </div>
                    <div className="p-3.5 rounded-none bg-neutral-50 border-0 text-xs text-neutral-800">
                      <strong className="block text-[#0A1913] mb-1">Module 03: Executive Leadership & Strategic Change Management</strong>
                      Building institutional alignment, agile civil service delivery, and public-private synergy.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-100 bg-[#F8F9FA] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-none border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onContact();
            }}
            className="px-6 py-2.5 rounded-none bg-[#0A1913] hover:bg-[#142d23] text-white text-xs font-bold tracking-wide inline-flex items-center gap-2 cursor-pointer border-0"
          >
            <span>Consult Technical Lead</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#84E262]" />
          </button>
        </div>
      </div>
    </div>
  );
};
