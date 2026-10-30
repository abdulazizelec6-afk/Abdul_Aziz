import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, FileDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Bio */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                AA
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized in motor starter wiring, electrical control circuits, switchgear, and technical schematic drafting. Seeking an entry-level industrial electrical maintenance role in a factory, mill or contractor.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <NavLink to="/" className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-cyan-400 transition-colors">
                  About Background
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-cyan-400 transition-colors">
                  Electrical Projects & Schematics
                </NavLink>
              </li>
              <li>
                <NavLink to="/training" className="hover:text-cyan-400 transition-colors">
                  Education & Practical Training
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Inquiries
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Technical Focus */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Core Competencies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• DOL & Star-Delta Starters</li>
              <li>• Forward-Reverse Motor Wiring</li>
              <li>• Contactor NO/NC Interlocking</li>
              <li>• Power & Control Circuit Drafting</li>
              <li>• Switchgear & Thermal Overloads</li>
              <li>• Safe Electrical Isolation (LOTO)</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Available for Full-Time / Shift Roles</span>
              </div>

              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.cvPdfUrl}
                  download="Abdul_Aziz_Electrical_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 rounded-md hover:bg-cyan-900/60 transition-colors"
                >
                  <FileDown className="w-3 h-3" />
                  <span>Download Verified CV (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All technical data reflects verified academic and vocational coursework.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>DAE Electrical Technology</span>
            <span>·</span>
            <span>Industrial Electrician Program</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
