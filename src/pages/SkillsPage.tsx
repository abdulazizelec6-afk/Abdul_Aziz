import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Zap, 
  FileSpreadsheet, 
  ShieldAlert, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Terminal, 
  SlidersHorizontal 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <span>VERIFIED ELECTRICAL COMPETENCIES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills & Capabilities
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Structured around hands-on motor starter assembly, electrical schematic drafting, industrial switchgear installation, and rigorous safety procedures.
        </p>

        {/* Filter Tabs */}
        <div className="pt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Skill Categories Grid */}
      <div className="space-y-10">
        {filteredCategories.map((category) => {
          const getCategoryHeaderIcon = () => {
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
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Category Title Strip */}
              <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryHeaderIcon()}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{category.title}</h2>
                    <p className="text-xs text-slate-400">{category.summary}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded w-fit">
                  {category.skills.length} core competencies
                </span>
              </div>

              {/* Skills Items Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <h3 className="text-sm font-bold text-white leading-snug">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-6 mb-3">
                        {skill.description}
                      </p>
                    </div>

                    <div className="pl-6 pt-2 border-t border-slate-900 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      {skill.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="text-cyan-300/80">
                          {kw}
                          {kwIdx < skill.keywords.length - 1 && (
                            <span className="text-slate-600 mx-1">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Switchgear Technical Identification Matrix */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
              <span>Switchgear & Component Pinout Knowledge</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Practical component terminal identification applied during panel assembly and testing:
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">IEC Standard Notation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Item 1: Contactors */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="text-cyan-400 font-mono text-xs font-bold block">
              1. ELECTROMAGNETIC CONTACTOR
            </span>
            <ul className="text-xs text-slate-400 space-y-1 font-mono">
              <li>• <strong className="text-slate-200">A1 - A2:</strong> 230V / 400V AC Coil</li>
              <li>• <strong className="text-slate-200">1/L1, 3/L2, 5/L3:</strong> Main Line in</li>
              <li>• <strong className="text-slate-200">2/T1, 4/T2, 6/T3:</strong> Main Motor out</li>
              <li>• <strong className="text-slate-200">13 - 14:</strong> Normally Open (NO) latch</li>
              <li>• <strong className="text-slate-200">21 - 22:</strong> Normally Closed (NC) interlock</li>
            </ul>
          </div>

          {/* Item 2: Thermal Overload Relays */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="text-amber-400 font-mono text-xs font-bold block">
              2. THERMAL OVERLOAD RELAY (OLR)
            </span>
            <ul className="text-xs text-slate-400 space-y-1 font-mono">
              <li>• <strong className="text-slate-200">Bimetal Heaters:</strong> Series motor load</li>
              <li>• <strong className="text-slate-200">95 - 96:</strong> NC Control Trip contact</li>
              <li>• <strong className="text-slate-200">97 - 98:</strong> NO Alarm Lamp contact</li>
              <li>• <strong className="text-slate-200">FLA Dial:</strong> Motor current calibration</li>
              <li>• <strong className="text-slate-200">Reset:</strong> Manual/Automatic selector</li>
            </ul>
          </div>

          {/* Item 3: Timer & Breakers */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="text-emerald-400 font-mono text-xs font-bold block">
              3. TIMERS & CIRCUIT BREAKERS
            </span>
            <ul className="text-xs text-slate-400 space-y-1 font-mono">
              <li>• <strong className="text-slate-200">On-Delay Timer:</strong> Star-to-Delta dwell</li>
              <li>• <strong className="text-slate-200">MCB:</strong> 1P/3P Type C/D branch safety</li>
              <li>• <strong className="text-slate-200">MCCB:</strong> High kA plant mains isolation</li>
              <li>• <strong className="text-slate-200">Pushbuttons:</strong> Red Stop (NC), Green (NO)</li>
              <li>• <strong className="text-slate-200">Ferrules:</strong> Wire node IDs (1, 2, 3...)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA to Projects */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Want to see these skills in action?
          </h3>
          <p className="text-xs text-slate-400">
            Explore interactive electrical circuit diagrams with live simulation controls for DOL and Star-Delta starters.
          </p>
        </div>
        <NavLink
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm whitespace-nowrap transition-colors"
        >
          <Layers className="w-4 h-4" />
          <span>Go to Electrical Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>
    </div>
  );
};
