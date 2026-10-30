import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Zap, 
  FileSpreadsheet, 
  Layers, 
  Info, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { ELECTRICAL_PROJECTS } from '../data/portfolioData';
import { DOLSchematic } from '../components/schematics/DOLSchematic';
import { StarDeltaSchematic } from '../components/schematics/StarDeltaSchematic';
import { ControlCircuitSchematic } from '../components/schematics/ControlCircuitSchematic';
import { PowerCircuitSchematic } from '../components/schematics/PowerCircuitSchematic';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'starters' | 'diagrams'>('all');

  const filteredProjects = ELECTRICAL_PROJECTS.filter((p) => {
    if (filter === 'starters') return p.category === 'starter';
    if (filter === 'diagrams') return p.category === 'diagram';
    return true;
  });

  const renderSchematic = (diagramType: string) => {
    switch (diagramType) {
      case 'dol':
        return <DOLSchematic />;
      case 'star-delta':
        return <StarDeltaSchematic />;
      case 'control-logic':
        return <ControlCircuitSchematic />;
      case 'power-dist':
        return <PowerCircuitSchematic />;
      default:
        return <DOLSchematic />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <span>INTERACTIVE SCHEMATIC WORKBENCH</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Electrical Projects & Schematics
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Detailed technical specifications, terminal numbering, and interactive electrical schematics for three-phase motor starters and industrial control diagrams.
        </p>

        {/* Note on diagrams */}
        <div className="mt-3 p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-start gap-2.5 max-w-3xl">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Engineering Diagrams:</strong> All circuit graphics below are authentic, interactive vector electrical schematics drawn strictly to IEC 60617 / EN 60204-1 standards with real terminal designations (A1/A2, 13/14, 95/96) and functional simulation buttons.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="pt-4 flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Projects ({ELECTRICAL_PROJECTS.length})
          </button>
          <button
            onClick={() => setFilter('starters')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'starters'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Motor Starters
          </button>
          <button
            onClick={() => setFilter('diagrams')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'diagrams'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Electrical Diagrams
          </button>
        </div>
      </div>

      {/* Projects List with Integrated Interactive Diagrams */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            id={project.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Project Header Bar */}
            <div className="bg-slate-950 p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800/80 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  {project.category === 'starter' ? 'Physical Wiring & Power' : 'Schematic Design & Logic'}
                </span>
              </div>
            </div>

            {/* Interactive Schematic Diagram Box */}
            <div className="p-6 bg-slate-950/40 border-b border-slate-800">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Live Circuit Schematic & Interactive Simulation:
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Click buttons to test logic flow
                </span>
              </div>

              {renderSchematic(project.diagramType)}
            </div>

            {/* Project Technical Details Grid */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Overview & Principle */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Circuit Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Sequence of Operation & Logic
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    {project.operatingPrinciple}
                  </p>
                </div>

                {/* Power & Control Circuit Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-bold font-mono text-cyan-400 block mb-2">
                      POWER CIRCUIT SPECIFICATIONS
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {project.powerCircuitNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-1.5">
                          <span className="text-cyan-500">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-bold font-mono text-blue-400 block mb-2">
                      CONTROL CIRCUIT LOGIC
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {project.controlCircuitNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-500">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Components Table & Applied Skills */}
              <div className="lg:col-span-5 space-y-6">
                {/* Circuit Components Table */}
                <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                  <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800 flex justify-between items-center text-xs">
                    <span className="font-mono font-bold text-white">Circuit Components</span>
                    <span className="font-mono text-slate-400 text-[10px]">IEC Designation</span>
                  </div>
                  <div className="divide-y divide-slate-800/60 text-xs">
                    {project.circuitComponents.map((comp, cIdx) => (
                      <div key={cIdx} className="p-3 space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-200">{comp.name}</span>
                          <span className="font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded text-[10px]">
                            {comp.designation}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {comp.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety & Interlocking */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Safety & Interlocking Protection
                  </span>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {project.safetyAndInterlocking.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied Tags */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Skills Applied in This Project
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skillsApplied.map((skill, skIdx) => (
                      <span
                        key={skIdx}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Need an Electrical Technician on your maintenance team?
          </h3>
          <p className="text-xs text-slate-400">
            Abdul Aziz is ready to bring these practical wiring and troubleshooting skills to your plant floor.
          </p>
        </div>
        <NavLink
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm whitespace-nowrap transition-colors"
        >
          <span>Get in Touch with Abdul Aziz</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>
    </div>
  );
};
