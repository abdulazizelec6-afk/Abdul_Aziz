import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Languages, 
  Laptop, 
  Phone, 
  Mail, 
  FileDown, 
  ArrowRight,
  HardHat,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <span>PROFESSIONAL BIOGRAPHY & MINDSET</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          About Abdul Aziz
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Industrial Electrical Technician focused on reliable motor control circuitry, electrical safety standards, and progressive automation techniques.
        </p>
      </div>

      {/* Main Profile Grid: Photo & Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Key Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 p-3 shadow-xl overflow-hidden">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Abdul Aziz - Industrial Electrical Technician"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-lg font-bold">{PERSONAL_INFO.name}</p>
                <p className="text-xs text-cyan-400 font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            {/* Quick credentials card below photo */}
            <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Current Program:</span>
                <span className="font-semibold text-white">DAE Electrical (1st Year)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Vocational:</span>
                <span className="font-semibold text-cyan-400">Industrial Electrician (1.5-Yr)</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Workshop Stage:</span>
                <span className="font-semibold text-emerald-400">First 6 Months Completed</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Direct Contact:</span>
                <span className="font-mono text-slate-300">{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Languages & Computer Skills Block */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3">
                <Languages className="w-4 h-4" />
                <span>Languages</span>
              </div>
              <div className="space-y-2 text-xs">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-white font-medium">{lang.language}</span>
                    <span className="text-slate-400 font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3">
                <Laptop className="w-4 h-4" />
                <span>Computer & Software Skills</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {PERSONAL_INFO.computerSkills.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Story, Career Objective & Safety */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Professional Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HardHat className="w-5 h-5 text-cyan-400" />
              <span>Technical Background</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Throughout the initial six months of the Industrial Electrician program, I have engaged in rigorous practical bench wiring. I have focused heavily on mastering both power circuits and control circuits for three-phase motor starters, deciphering complex engineering drawings, applying electrical interlocking, and executing neat terminal connections.
            </p>
          </div>

          {/* Section 2: Practical Electrical Training Experience */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Practical Workshop Experience (First Six Months)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Hands-on practical electrical training completed during the first semester of the 1.5-year Industrial Electrician course:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">Motor Starter Assembly:</strong> Assembled and physically wired full Direct-On-Line (DOL) and Star-Delta starter cabinets, covering power and control circuits from incoming breaker to motor terminal box.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">Switchgear & Auxiliary Hookups:</strong> Connected contactors, auxiliary latching contacts (13-14 NO), electronic/pneumatic timer relays, and bimetallic thermal overload relays (95-96 NC) strictly according to circuit schematics.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">Electrical Interlocking:</strong> Applied NO/NC contactor interlocking to prevent cross-phase short circuits, including timed Star-to-Delta changeover transitions and forward-reverse directional control.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">Control Panel Layout & Wire Dressing:</strong> Studied industrial DIN rail layouts, slotted trunking ducts, ferrule numbering tags, and cable routing for clear serviceability and maintenance.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">Domestic & DB Wiring:</strong> Wired lighting circuits, one-way and two-way staircase switching, power sockets, and basic distribution board connections under rigorous safety supervision.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Safety & Professional Philosophy */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Safety Working Practices & Isolation Protocol</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Working with 400V industrial three-phase power demands unconditional respect for safety. I treat safe electrical isolation not as an afterthought, but as the mandatory first step before touching any conductor:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold text-xs font-mono block mb-1">
                  1. SAFE ELECTRICAL ISOLATION
                </span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Disconnecting supply at the upstream isolator, applying Lockout/Tagout (LOTO), and systematically proving dead using a verified voltage tester or multimeter.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold text-xs font-mono block mb-1">
                  2. FAIL-SAFE INTERLOCKING
                </span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Designing all emergency stop and thermal overload trip contacts as Normally Closed (NC) in series, guaranteeing that a wire break stops the machine safely.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Career Goals */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-800/60 rounded-2xl p-6 lg:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Career Interests & Professional Goals</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {PERSONAL_INFO.careerObjective}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm transition-colors"
              >
                <span>Discuss an Opportunity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                download="Abdul_Aziz_Electrical_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
