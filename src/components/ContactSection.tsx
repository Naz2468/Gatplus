import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, Mail, MapPin, Clock, AlertCircle, ChevronRight } from 'lucide-react';
import { CORPORATE_DATA } from '../data/corporateData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Government Procurement Tender',
    timeline: 'Immediate (Under 30 Days)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all mandatory fields (Name, Email, and Brief).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid official email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-transparent border-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#072118] uppercase tracking-wider mb-3">
            <span className="text-[#8EE263] text-base">✱</span>
            <span>Procurement Secretariat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072118] tracking-tight leading-tight">
            Initiate official procurement engagement
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-light leading-relaxed">
            For expressions of interest (EOI), invitation to tender (ITT), joint venture requests, or executive consultation with CEO Chief Eleduma Gbenga Abiodun and the procurement directorate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Procurement Bureau Details (5 cols) - Smooth Slide + Fade In */}
          <motion.div 
            initial={{ opacity: 0, y: 28, x: -8 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#072118] text-white rounded-none p-8 sm:p-10 flex flex-col justify-between shadow-xl border-0 relative overflow-hidden"
          >
            {/* Ambient subtle green glow in corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8EE263]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-none bg-[#8EE263] text-[#072118] flex items-center justify-center font-black mb-6 border-0">
                GD
              </div>

              <h3 className="text-2xl font-black tracking-tight mb-4">
                Abuja Operations Headquarters
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                Operating from the central commercial hub of Wuse II, our procurement desk coordinates federal supply chains, emergency relief distributions, and statutory tender evaluation responses.
              </p>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3.5 p-3.5 rounded-none bg-white/5 border-0 hover:bg-white/10 transition-colors">
                  <MapPin className="w-4 h-4 text-[#8EE263] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Physical Registered Office</div>
                    <div>{CORPORATE_DATA.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-none bg-white/5 border-0 hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#8EE263] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Direct Procurement Hotlines</div>
                    <div className="font-mono">{CORPORATE_DATA.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-none bg-white/5 border-0 hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-[#8EE263] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Tender Dispatch Email</div>
                    <div>{CORPORATE_DATA.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-none bg-white/5 border-0 hover:bg-white/10 transition-colors">
                  <Clock className="w-4 h-4 text-[#8EE263] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Operating Hours</div>
                    <div>Monday – Friday: 08:30 – 17:30 WAT</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span>Federal Infrastructure & Logistics</span>
              <span className="text-[#8EE263] font-bold">Active Operations</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Form (7 cols) - Smooth Slide + Fade In */}
          <motion.div 
            initial={{ opacity: 0, y: 28, x: 8 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-none p-8 sm:p-10 border-0 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {submitted ? (
              <div className="py-12 px-6 flex flex-col items-center justify-center text-center animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-none bg-[#8EE263]/20 text-[#072118] flex items-center justify-center mb-6 border-0">
                  <CheckCircle2 className="w-8 h-8 text-[#072118]" />
                </div>
                <h3 className="text-2xl font-black text-[#072118] mb-2">
                  Procurement Inquiry Dispatched
                </h3>
                <p className="text-neutral-600 text-sm max-w-md leading-relaxed mb-6">
                  Thank you. Your project brief has been received by the Executive Office of <strong className="text-[#072118]">Gbenga Abiodun Eleduma</strong> and the tender evaluation team.
                </p>
                <div className="p-4 rounded-none bg-[#FAFBF8] border-0 text-xs text-neutral-700 max-w-sm w-full text-left space-y-1 mb-8 shadow-xs">
                  <div><strong>Reference:</strong> GAT-PROC-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Category:</strong> {formData.inquiryType}</div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Government Procurement Tender',
                      timeline: 'Immediate (Under 30 Days)',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-none bg-[#072118] text-white text-xs font-bold cursor-pointer hover:bg-black transition-colors border-0"
                >
                  Submit Another Scope Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#072118]">
                    Procurement & Advisory Specification
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Complete the details below to receive a formal quotation, technical proposal, or schedule an executive session.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-none bg-red-50 text-red-700 text-xs flex items-center gap-2 border-0">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Full Name / Contact Officer *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Engr. Mohammed Aliyu"
                      className="w-full px-4 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      MDA / Enterprise Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Federal Ministry / Contractor"
                      className="w-full px-4 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Official Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@ministry.gov.ng"
                      className="w-full px-4 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 803 000 0000"
                      className="w-full px-4 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Sector / Service Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    >
                      <option value="Government Procurement Tender">Government Procurement Tender</option>
                      <option value="Humanitarian Relief Logistics (NCFRMI)">Humanitarian Relief Logistics (NCFRMI)</option>
                      <option value="Aviation Facility & Ground Equipment">Aviation Facility & Ground Equipment</option>
                      <option value="Executive Manpower & PPA Consulting">Executive Manpower & PPA Consulting</option>
                      <option value="Agricultural Supplies & Specialized Logistics">Agricultural Supplies & Specialized Logistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Execution Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none bg-[#FAFBF8]"
                    >
                      <option value="Immediate (Under 30 Days)">Immediate (Under 30 Days)</option>
                      <option value="Q1 / Q2 Budget Cycle">Q1 / Q2 Budget Cycle</option>
                      <option value="Emergency Relief Mobilization (72h)">Emergency Relief Mobilization (72h)</option>
                      <option value="Annual Retainer Framework">Annual Retainer Framework</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Project Scope / Scope of Work Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide tender reference, delivery locations, volume specifications, or required milestones..."
                    className="w-full px-4 py-2.5 rounded-none border border-neutral-200 focus:border-[#072118] text-xs transition-all outline-none resize-none bg-[#FAFBF8]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Compliant with Nigerian Data Protection Act (NDPA)
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-none bg-[#8EE263] hover:bg-[#7dd650] text-[#072118] text-xs font-black uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-sm hover:shadow border-0"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Brief...</span>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                        <ChevronRight className="w-4 h-4 stroke-[3]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
