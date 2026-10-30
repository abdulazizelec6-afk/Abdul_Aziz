import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Zap, 
  FileSpreadsheet, 
  ShieldAlert, 
  Wrench, 
  ArrowRight, 
  FileDown, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Layers, 
  Cpu,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, ELECTRICAL_PROJECTS, EDUCATION_HISTORY } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-8 lg:pt-16 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Typographic Hierarchy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DAE ELECTRICAL & INDUSTRIAL ELECTRICIAN TECHNICIAN</span>
              </div>

              {/* Name & Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide pt-1">
                  Motor Starter Wiring · Electrical Control Circuits · Electrical Diagrams
                </p>
              </div>

              {/* Professional Introduction */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {PERSONAL_INFO.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NavLink
                  to="/skills"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-600/25 transition-all"
                >
                  <span>Explore Technical Skills</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>

                <NavLink
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 hover:text-white rounded-xl transition-all"
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>View Electrical Schematics</span>
                </NavLink>

                <a
                  href={PERSONAL_INFO.cvPdfUrl}
                  download="Abdul_Aziz_Electrical_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono font-medium text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>CV Document</span>
                </a>
              </div>

              {/* Key Quick Facts */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-900">
                <div>
                  <span className="block text-xl font-bold text-white font-mono">1.5-Yr</span>
                  <span className="text-xs text-slate-400">Industrial Electrician Program</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-white font-mono">DAE 1st Yr</span>
                  <span className="text-xs text-slate-400">Electrical Technology Diploma</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-cyan-400 font-mono">Hands-on</span>
                  <span className="text-xs text-slate-400">DOL & Star-Delta Starters</span>
                </div>
              </div>
            </div>

            {/* Right Column: Photo & Engineering Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Tech Frame & Electrical Accent */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyan-500/40 via-blue-600/20 to-transparent blur-sm -z-10" />
                
                <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 p-2 shadow-2xl overflow-hidden">
                  {/* Photo Container */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt="Abdul Aziz - Industrial Electrical Technician"
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim for readable overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold">{PERSONAL_INFO.name}</p>
                          <p className="text-cyan-400 text-[11px] font-mono">Industrial Electrical Technician</p>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-[10px] font-mono">
                          AVAILABLE
                        </span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                        <span>Direct-On-Line & Star-Delta</span>
                        <span className="text-slate-400">·</span>
                        <span>Control Schematics</span>
                      </div>
                    </div>
                  </div>

                  {/* Schematics schematic banner below image */}
                  <div className="mt-2 px-3 py-2 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Cpu className="w-3.5 h-3.5" />
                      IEC 60617 Standard
                    </span>
                    <span>400V 3-Phase Logic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SKILLS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Technical Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Electrical Specializations
            </h3>
          </div>
          <NavLink
            to="/skills"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View all detailed skill categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const getIcon = () => {
              switch (category.id) {
                case 'motor-starter-wiring':
                  return <Zap className="w-5 h-5 text-cyan-400" />;
                case 'electrical-diagrams':
                  return <FileSpreadsheet className="w-5 h-5 text-blue-400" />;
                case 'switchgear-protection':
                  return <ShieldAlert className="w-5 h-5 text-amber-400" />;
                case 'electrical-installation':
                  return <Wrench className="w-5 h-5 text-emerald-400" />;
                default:
                  return <Zap className="w-5 h-5 text-cyan-400" />;
              }
            };

            return (
              <div
                key={category.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                    {getIcon()}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{category.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {category.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {category.skills.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SELECTED ELECTRICAL PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Schematics & Circuit Design
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Practical Electrical Projects
            </h3>
          </div>
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Launch interactive circuit simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ELECTRICAL_PROJECTS.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>{project.category === 'starter' ? 'MOTOR CONTROL' : 'SCHEMATIC DIAGRAM'}</span>
                  <span className="text-slate-500">IEC 60617 Standard</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-xs text-cyan-300/80 font-mono mb-3">{project.subtitle}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.overview}
                </p>

                {/* Key components pill */}
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-400 font-mono text-[11px] block mb-1">KEY COMPONENTS WIRED:</span>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {project.circuitComponents.slice(0, 4).map((comp, idx) => (
                      <span key={idx} className="text-slate-300 font-mono">
                        <strong className="text-cyan-400">{comp.designation}</strong> ({comp.name})
                        {idx < 3 && <span className="text-slate-600 ml-2">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {project.skillsApplied.length} skills demonstrated
                </span>
                <NavLink
                  to="/projects"
                  className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                >
                  <span>Inspect Schematic & Interactive Simulation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION & TRAINING SUMMARY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                Education & Credentials
              </h2>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Academic & Vocational Foundation
              </h3>
            </div>
            <NavLink
              to="/training"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>See full training syllabus & practical hours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_HISTORY.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        edu.statusTag === 'Completed'
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                      }`}
                    >
                      {edu.statusTag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{edu.qualification}</h4>
                  <p className="text-xs text-cyan-400 font-mono mb-2">{edu.field}</p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {edu.summary}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-900 text-[11px] font-mono text-slate-400">
                  {edu.durationOrStatus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CALL-TO-ACTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 p-8 lg:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-cyan-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Ready for Industrial Maintenance & Installation
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Seeking an Entry-Level Industrial Electrical Maintenance Role
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Available to join factories, processing mills, engineering contractors, or commercial facilities. Offering practical motor starter wiring proficiency, schematic diligence, and a genuine eagerness to master automated industrial systems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-600/30 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Abdul Aziz</span>
              </NavLink>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct Call: {PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.cvPdfUrl}
                download="Abdul_Aziz_Electrical_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800 rounded-xl transition-colors"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
