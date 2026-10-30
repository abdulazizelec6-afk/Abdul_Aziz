import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Wrench, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  FileDown, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { EDUCATION_HISTORY, PERSONAL_INFO } from '../data/portfolioData';

export const TrainingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <span>EDUCATION & VOCATIONAL TRAINING SYLLABUS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education & Practical Electrical Training
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Accurate academic and vocational qualifications. Blending theoretical foundations in electrical machines with intensive hands-on workshop wiring practice.
        </p>
      </div>

      {/* Main Education Timeline / Cards */}
      <div className="space-y-8">
        {EDUCATION_HISTORY.map((edu, idx) => (
          <div
            key={edu.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Header Strip */}
            <div className="bg-slate-950 p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Wrench className="w-6 h-6 text-amber-400" />
                  ) : (
                    <BookOpen className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.qualification}
                  </h2>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                    {edu.field}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                    edu.statusTag === 'Completed'
                      ? 'bg-slate-900 text-emerald-400 border-emerald-900/50'
                      : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/80'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{edu.durationOrStatus}</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 lg:p-8 space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {edu.summary}
              </p>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Core Subjects & Practical Learning Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Dive into First 6 Months Practical Training */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase mb-1">
            <Zap className="w-4 h-4" />
            <span>Industrial Electrician Course Breakdown</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Completed First Six Months Practical Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verified tasks successfully executed in the electrical training workshop:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 block">
              1. MOTOR STARTERS ASSEMBLED
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Assembled, wired, and tested full-scale Direct-On-Line (DOL) and Star-Delta starter circuits, covering both heavy 3-phase power lines and 230V control loops.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 block">
              2. CONTACTORS & RELAYS
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connected electromagnetic contactors, auxiliary NO/NC contacts, timer relays, and thermal overload relays strictly according to engineering schematics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 block">
              3. SAFE ISOLATION & TESTING
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Executed safe electrical isolation procedures, proving dead with multimeters before physical work, and wired distribution boards and lighting circuits.
            </p>
          </div>
        </div>
      </div>

      {/* Verified CV Download Card */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-800/60 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Need verified documentation of this training?
          </h3>
          <p className="text-xs text-slate-400">
            Download the official CV document outlining all coursework and contact details.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            download="Abdul_Aziz_Electrical_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-colors whitespace-nowrap"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
