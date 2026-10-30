import React, { useState } from 'react';
import { Play, Square, AlertOctagon, RotateCcw } from 'lucide-react';

export const DOLSchematic: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isOverloadTripped, setIsOverloadTripped] = useState(false);
  const [viewMode, setViewMode] = useState<'both' | 'control' | 'power'>('both');

  const handleStart = () => {
    if (isOverloadTripped) return;
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleToggleOverload = () => {
    if (isOverloadTripped) {
      setIsOverloadTripped(false);
    } else {
      setIsOverloadTripped(true);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsOverloadTripped(false);
    setIsRunning(false);
  };

  const wireActiveColor = '#06b6d4'; // Cyan live line
  const wireInactiveColor = '#475569'; // Slate inactive
  const phaseL1 = '#ef4444'; // Red phase
  const phaseL2 = '#eab308'; // Yellow phase
  const phaseL3 = '#3b82f6'; // Blue phase

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
      {/* Schematic Header Controls */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">DIAGRAM TYPE:</span>
          <span className="text-cyan-400 font-semibold font-mono">DOL STARTER SCHEMATIC (IEC 60617)</span>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setViewMode('both')}
            className={`px-2.5 py-1 rounded transition-colors ${
              viewMode === 'both' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Full Circuit
          </button>
          <button
            onClick={() => setViewMode('control')}
            className={`px-2.5 py-1 rounded transition-colors ${
              viewMode === 'control' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Control Only
          </button>
          <button
            onClick={() => setViewMode('power')}
            className={`px-2.5 py-1 rounded transition-colors ${
              viewMode === 'power' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Power Only
          </button>
        </div>

        {/* Interactive Simulation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleStart}
            disabled={isOverloadTripped || isRunning}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              isRunning
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 opacity-60 cursor-not-allowed'
                : isOverloadTripped
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>START (SB2)</span>
          </button>

          <button
            onClick={handleStop}
            disabled={!isRunning}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              !isRunning
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm'
            }`}
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>STOP (SB1)</span>
          </button>

          <button
            onClick={handleToggleOverload}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              isOverloadTripped
                ? 'bg-amber-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30'
            }`}
            title="Trip or Reset thermal overload relay contact 95-96"
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>{isOverloadTripped ? 'RESET OLR (95-96)' : 'TRIP OLR'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-200 bg-slate-800 rounded transition-colors"
            title="Reset Simulator"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Circuit Status Strip */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">CONTACTOR KM1:</span>
            <span className={`font-semibold ${isRunning ? 'text-cyan-400' : 'text-slate-500'}`}>
              {isRunning ? 'ENERGIZED (CLOSED)' : 'DE-ENERGIZED (OPEN)'}
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">MOTOR STATUS:</span>
            <span className={`font-semibold ${isRunning ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`}>
              {isRunning ? '3-PHASE RUNNING' : 'STOPPED'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isOverloadTripped && (
            <span className="text-amber-400 font-bold bg-amber-950/60 border border-amber-700/50 px-2 py-0.5 rounded">
              OVERLOAD 95-96 TRIPPED (OPEN)
            </span>
          )}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isRunning ? '#10b981' : '#334155' }} />
            <span className="text-slate-400">RUN LAMP (HL1)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isOverloadTripped ? '#f59e0b' : '#334155' }} />
            <span className="text-slate-400">TRIP LAMP (HL2)</span>
          </div>
        </div>
      </div>

      {/* SVG Circuit Canvas */}
      <div className="p-4 overflow-x-auto flex justify-center bg-slate-950 bg-grid-pattern">
        <svg
          viewBox="0 0 920 540"
          className="w-full max-w-4xl h-auto select-none font-mono"
          style={{ minWidth: '700px' }}
        >
          {/* Background Grid Accent */}
          <rect width="920" height="540" fill="transparent" />

          {/* ================= POWER CIRCUIT (LEFT SIDE) ================= */}
          {(viewMode === 'both' || viewMode === 'power') && (
            <g id="power-circuit" transform="translate(40, 20)">
              {/* Title Header */}
              <text x="140" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">
                POWER CIRCUIT (400V 3-PHASE)
              </text>

              {/* Incoming Lines L1, L2, L3 */}
              <text x="50" y="55" fill={phaseL1} fontSize="11" fontWeight="bold">L1</text>
              <text x="140" y="55" fill={phaseL2} fontSize="11" fontWeight="bold">L2</text>
              <text x="230" y="55" fill={phaseL3} fontSize="11" fontWeight="bold">L3</text>

              {/* Mains MCB / Circuit Breaker QF1 */}
              <rect x="30" y="75" width="220" height="45" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="4" />
              <text x="140" y="93" fill="#cbd5e1" fontSize="11" textAnchor="middle">QF1 (Main Isolator / MCB)</text>
              <text x="140" y="108" fill="#64748b" fontSize="9" textAnchor="middle">3-Pole 400V 50Hz</text>

              {/* Vertical feed lines through QF1 */}
              <line x1="55" y1="60" x2="55" y2="135" stroke={phaseL1} strokeWidth="2.5" />
              <line x1="140" y1="60" x2="140" y2="135" stroke={phaseL2} strokeWidth="2.5" />
              <line x1="225" y1="60" x2="225" y2="135" stroke={phaseL3} strokeWidth="2.5" />

              {/* Main Contactor KM1 Power Contacts */}
              <g transform="translate(0, 140)">
                <rect x="30" y="0" width="220" height="65" fill="#0f172a" stroke={isRunning ? '#06b6d4' : '#334155'} strokeWidth="1.5" rx="4" />
                <text x="140" y="20" fill={isRunning ? '#22d3ee' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">
                  KM1 (Main Contactor Poles)
                </text>
                <text x="140" y="34" fill="#64748b" fontSize="9" textAnchor="middle">
                  {isRunning ? 'CONTACTS CLOSED' : 'CONTACTS OPEN'}
                </text>

                {/* Pole 1: 1/L1 - 2/T1 */}
                <line x1="55" y1="0" x2="55" y2="22" stroke={phaseL1} strokeWidth="2" />
                <circle cx="55" cy="22" r="3" fill={phaseL1} />
                <line
                  x1="55"
                  y1="22"
                  x2={isRunning ? "55" : "67"}
                  y2={isRunning ? "46" : "38"}
                  stroke={isRunning ? phaseL1 : "#64748b"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="55" cy="46" r="3" fill={isRunning ? phaseL1 : '#475569'} />
                <line x1="55" y1="46" x2="55" y2="65" stroke={isRunning ? phaseL1 : wireInactiveColor} strokeWidth="2" />
                <text x="44" y="16" fill="#94a3b8" fontSize="8">1/L1</text>
                <text x="44" y="58" fill="#94a3b8" fontSize="8">2/T1</text>

                {/* Pole 2: 3/L2 - 4/T2 */}
                <line x1="140" y1="0" x2="140" y2="22" stroke={phaseL2} strokeWidth="2" />
                <circle cx="140" cy="22" r="3" fill={phaseL2} />
                <line
                  x1="140"
                  y1="22"
                  x2={isRunning ? "140" : "152"}
                  y2={isRunning ? "46" : "38"}
                  stroke={isRunning ? phaseL2 : "#64748b"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="140" cy="46" r="3" fill={isRunning ? phaseL2 : '#475569'} />
                <line x1="140" y1="46" x2="140" y2="65" stroke={isRunning ? phaseL2 : wireInactiveColor} strokeWidth="2" />
                <text x="127" y="16" fill="#94a3b8" fontSize="8">3/L2</text>
                <text x="127" y="58" fill="#94a3b8" fontSize="8">4/T2</text>

                {/* Pole 3: 5/L3 - 6/T3 */}
                <line x1="225" y1="0" x2="225" y2="22" stroke={phaseL3} strokeWidth="2" />
                <circle cx="225" cy="22" r="3" fill={phaseL3} />
                <line
                  x1="225"
                  y1="22"
                  x2={isRunning ? "225" : "237"}
                  y2={isRunning ? "46" : "38"}
                  stroke={isRunning ? phaseL3 : "#64748b"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="225" cy="46" r="3" fill={isRunning ? phaseL3 : '#475569'} />
                <line x1="225" y1="46" x2="225" y2="65" stroke={isRunning ? phaseL3 : wireInactiveColor} strokeWidth="2" />
                <text x="212" y="16" fill="#94a3b8" fontSize="8">5/L3</text>
                <text x="212" y="58" fill="#94a3b8" fontSize="8">6/T3</text>
              </g>

              {/* Thermal Overload Relay FR1 Elements */}
              <g transform="translate(0, 225)">
                <rect x="30" y="0" width="220" height="55" fill="#0f172a" stroke={isOverloadTripped ? '#f59e0b' : '#334155'} strokeWidth="1.5" rx="4" />
                <text x="140" y="18" fill={isOverloadTripped ? '#fbbf24' : '#cbd5e1'} fontSize="11" textAnchor="middle">
                  FR1 (Thermal Overload Relay)
                </text>
                <text x="140" y="32" fill="#64748b" fontSize="8.5" textAnchor="middle">
                  Current Setting: FLA calibrated
                </text>

                {/* Bimetal heater loops */}
                <path d="M 55,0 L 55,20 C 65,22 65,30 55,32 L 55,55" fill="none" stroke={isRunning ? phaseL1 : wireInactiveColor} strokeWidth="2" />
                <path d="M 140,0 L 140,20 C 150,22 150,30 140,32 L 140,55" fill="none" stroke={isRunning ? phaseL2 : wireInactiveColor} strokeWidth="2" />
                <path d="M 225,0 L 225,20 C 235,22 235,30 225,32 L 225,55" fill="none" stroke={isRunning ? phaseL3 : wireInactiveColor} strokeWidth="2" />
              </g>

              {/* Feed to Motor */}
              <line x1="55" y1="280" x2="55" y2="340" stroke={isRunning ? phaseL1 : wireInactiveColor} strokeWidth="2" />
              <line x1="140" y1="280" x2="140" y2="340" stroke={isRunning ? phaseL2 : wireInactiveColor} strokeWidth="2" />
              <line x1="225" y1="280" x2="225" y2="340" stroke={isRunning ? phaseL3 : wireInactiveColor} strokeWidth="2" />

              {/* Terminal Block labels U1, V1, W1 */}
              <text x="47" y="335" fill="#94a3b8" fontSize="9">U1</text>
              <text x="132" y="335" fill="#94a3b8" fontSize="9">V1</text>
              <text x="217" y="335" fill="#94a3b8" fontSize="9">W1</text>

              {/* 3-Phase Induction Motor M1 */}
              <g transform="translate(140, 400)">
                <circle
                  cx="0"
                  cy="0"
                  r="52"
                  fill="#0b1329"
                  stroke={isRunning ? '#10b981' : '#334155'}
                  strokeWidth={isRunning ? '3' : '2'}
                  className={isRunning ? 'transition-all duration-300' : ''}
                />
                {isRunning && (
                  <circle
                    cx="0"
                    cy="0"
                    r="44"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    className="animate-spin"
                    style={{ transformOrigin: 'center', animationDuration: '4s' }}
                  />
                )}
                <text x="0" y="-8" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
                  M1
                </text>
                <text x="0" y="10" fill={isRunning ? '#34d399' : '#94a3b8'} fontSize="11" textAnchor="middle">
                  3~ Induction
                </text>
                <text x="0" y="25" fill="#64748b" fontSize="8.5" textAnchor="middle">
                  {isRunning ? '1440 RPM · CW' : 'STANDSTILL'}
                </text>

                {/* Motor Terminal connections */}
                <line x1="-85" y1="-60" x2="-25" y2="-45" stroke={isRunning ? phaseL1 : wireInactiveColor} strokeWidth="2" />
                <line x1="0" y1="-60" x2="0" y2="-52" stroke={isRunning ? phaseL2 : wireInactiveColor} strokeWidth="2" />
                <line x1="85" y1="-60" x2="25" y2="-45" stroke={isRunning ? phaseL3 : wireInactiveColor} strokeWidth="2" />

                {/* Ground PE wire */}
                <path d="M 52,0 L 95,0 L 95,30" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="100" y="35" fill="#22c55e" fontSize="9">PE (Ground)</text>
              </g>
            </g>
          )}

          {/* Divider between Power and Control if both visible */}
          {viewMode === 'both' && (
            <line x1="340" y1="40" x2="340" y2="500" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
          )}

          {/* ================= CONTROL CIRCUIT (RIGHT SIDE) ================= */}
          {(viewMode === 'both' || viewMode === 'control') && (
            <g id="control-circuit" transform={viewMode === 'control' ? 'translate(200, 20)' : 'translate(360, 20)'}>
              {/* Title Header */}
              <text x="240" y="25" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">
                CONTROL CIRCUIT (230V 1-PHASE L-N)
              </text>

              {/* Top Supply Rail: Phase Control (Line 1) */}
              <line x1="20" y1="55" x2="480" y2="55" stroke="#ef4444" strokeWidth="2" />
              <text x="5" y="58" fill="#ef4444" fontSize="11" fontWeight="bold">L1</text>
              <text x="490" y="58" fill="#ef4444" fontSize="9">230V Supply</text>

              {/* Bottom Supply Rail: Neutral (N) */}
              <line x1="20" y1="475" x2="480" y2="475" stroke="#3b82f6" strokeWidth="2" />
              <text x="5" y="478" fill="#3b82f6" fontSize="11" fontWeight="bold">N</text>
              <text x="490" y="478" fill="#3b82f6" fontSize="9">Neutral Rail</text>

              {/* Control Fuse / MCB FU1 */}
              <g transform="translate(60, 55)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#ef4444" strokeWidth="2" />
                <rect x="-8" y="20" width="16" height="24" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
                <line x1="0" y1="20" x2="0" y2="44" stroke="#ef4444" strokeWidth="1" />
                <text x="14" y="35" fill="#94a3b8" fontSize="9">FU1 (2A Control Fuse)</text>
                <line x1="0" y1="44" x2="0" y2="65" stroke="#ef4444" strokeWidth="2" />
              </g>

              {/* Thermal Overload Contact FR1 (95-96 NC) */}
              <g transform="translate(60, 120)">
                <text x="-45" y="18" fill="#94a3b8" fontSize="8.5">95</text>
                <text x="-45" y="48" fill="#94a3b8" fontSize="8.5">96</text>
                <circle cx="0" cy="15" r="3" fill={isOverloadTripped ? '#f59e0b' : '#ef4444'} />
                {/* Contact arm: open if overload tripped */}
                <line
                  x1="0"
                  y1="15"
                  x2={isOverloadTripped ? "14" : "0"}
                  y2={isOverloadTripped ? "35" : "45"}
                  stroke={isOverloadTripped ? '#f59e0b' : '#ef4444'}
                  strokeWidth="2.5"
                />
                <circle cx="0" cy="45" r="3" fill={isOverloadTripped ? '#475569' : '#ef4444'} />
                <text x="18" y="32" fill={isOverloadTripped ? '#fbbf24' : '#cbd5e1'} fontSize="10" fontWeight="bold">
                  FR1 (95-96 NC)
                </text>
                <text x="18" y="44" fill="#64748b" fontSize="8">
                  {isOverloadTripped ? 'TRIPPED OPEN' : 'NORMAL CLOSED'}
                </text>
                <line
                  x1="0"
                  y1="45"
                  x2="0"
                  y2="70"
                  stroke={isOverloadTripped ? wireInactiveColor : wireActiveColor}
                  strokeWidth="2"
                />
              </g>

              {/* Wire Node 1 / Ferruling */}
              <circle cx="60" cy="190" r="3" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
              <text x="45" y="193" fill="#64748b" fontSize="8">Wire 1</text>

              {/* Stop Pushbutton SB1 (NC) */}
              <g transform="translate(60, 190)">
                <text x="-45" y="20" fill="#94a3b8" fontSize="8.5">1</text>
                <text x="-45" y="48" fill="#94a3b8" fontSize="8.5">2</text>
                <circle cx="0" cy="20" r="3" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
                <line x1="-12" y1="20" x2="0" y2="20" stroke={isOverloadTripped ? '#475569' : '#06b6d4'} strokeWidth="2" />
                <line x1="-12" y1="20" x2="-12" y2="40" stroke="#f43f5e" strokeWidth="2.5" />
                <circle cx="0" cy="40" r="3" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
                <text x="18" y="32" fill="#cbd5e1" fontSize="10" fontWeight="bold">SB1 (STOP NC)</text>
                <text x="18" y="44" fill="#64748b" fontSize="8">Mushroom / Red Button</text>
                <line
                  x1="0"
                  y1="40"
                  x2="0"
                  y2="65"
                  stroke={isOverloadTripped ? wireInactiveColor : wireActiveColor}
                  strokeWidth="2"
                />
              </g>

              {/* Wire Node 2 (Split point for Start Button & Holding Contact) */}
              <circle cx="60" cy="255" r="3.5" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
              <text x="45" y="258" fill="#64748b" fontSize="8">Wire 2</text>

              {/* Parallel Latch Branch: START BUTTON (SB2) vs AUX CONTACT (KM1 13-14) */}
              {/* Branch Left: SB2 Start NO */}
              <g transform="translate(60, 255)">
                {/* Horizontal branch line */}
                <line x1="0" y1="0" x2="110" y2="0" stroke={isOverloadTripped ? wireInactiveColor : wireActiveColor} strokeWidth="2" />

                {/* Left path: Start button SB2 */}
                <line x1="0" y1="0" x2="0" y2="20" stroke={isOverloadTripped ? wireInactiveColor : wireActiveColor} strokeWidth="2" />
                <text x="-40" y="22" fill="#94a3b8" fontSize="8.5">3</text>
                <circle cx="0" cy="22" r="3" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
                <line x1="-10" y1="26" x2="-10" y2="44" stroke="#10b981" strokeWidth="2.5" />
                <circle cx="0" cy="48" r="3" fill={isRunning ? '#06b6d4' : '#475569'} />
                <text x="-40" y="50" fill="#94a3b8" fontSize="8.5">4</text>
                <text x="-65" y="36" fill="#cbd5e1" fontSize="9" fontWeight="bold">SB2 (START)</text>
                <line x1="0" y1="48" x2="0" y2="70" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />

                {/* Right path: Auxiliary holding contact KM1 (13-14 NO) */}
                <line x1="110" y1="0" x2="110" y2="20" stroke={isOverloadTripped ? wireInactiveColor : wireActiveColor} strokeWidth="2" />
                <text x="120" y="22" fill="#94a3b8" fontSize="8.5">13 (NO)</text>
                <circle cx="110" cy="22" r="3" fill={isOverloadTripped ? '#475569' : '#06b6d4'} />
                {/* Contact arm: closes when KM1 is running */}
                <line
                  x1="110"
                  y1="22"
                  x2={isRunning ? "110" : "122"}
                  y2={isRunning ? "48" : "36"}
                  stroke={isRunning ? '#06b6d4' : '#64748b'}
                  strokeWidth="2.5"
                />
                <circle cx="110" cy="48" r="3" fill={isRunning ? '#06b6d4' : '#475569'} />
                <text x="120" y="50" fill="#94a3b8" fontSize="8.5">14 (NO)</text>
                <text x="135" y="34" fill={isRunning ? '#22d3ee' : '#cbd5e1'} fontSize="9.5" fontWeight="bold">
                  KM1 (13-14)
                </text>
                <text x="135" y="44" fill="#64748b" fontSize="7.5">
                  {isRunning ? 'HOLD-IN CLOSED' : 'LATCH OPEN'}
                </text>
                <line x1="110" y1="48" x2="110" y2="70" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />

                {/* Rejoin nodes */}
                <line x1="0" y1="70" x2="110" y2="70" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />
                <circle cx="0" cy="70" r="3" fill={isRunning ? '#06b6d4' : '#475569'} />
              </g>

              {/* Wire Node 3 (Output of parallel start latch) */}
              <text x="45" y="330" fill="#64748b" fontSize="8">Wire 3</text>
              <line x1="60" y1="325" x2="60" y2="360" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />

              {/* Contactor Coil KM1 (Terminals A1-A2) */}
              <g transform="translate(60, 360)">
                <text x="-40" y="10" fill="#94a3b8" fontSize="9" fontWeight="bold">A1</text>
                <circle cx="0" cy="0" r="3" fill={isRunning ? '#06b6d4' : '#475569'} />
                <rect
                  x="-25"
                  y="10"
                  width="50"
                  height="40"
                  fill="#0f172a"
                  stroke={isRunning ? '#06b6d4' : '#475569'}
                  strokeWidth={isRunning ? '2.5' : '1.5'}
                  rx="4"
                  className={isRunning ? 'shadow-lg' : ''}
                />
                <text x="0" y="28" fill={isRunning ? '#22d3ee' : '#cbd5e1'} fontSize="11" fontWeight="bold" textAnchor="middle">
                  KM1
                </text>
                <text x="0" y="42" fill="#64748b" fontSize="8" textAnchor="middle">
                  230V Coil
                </text>
                <circle cx="0" cy="60" r="3" fill="#3b82f6" />
                <text x="-40" y="62" fill="#94a3b8" fontSize="9" fontWeight="bold">A2</text>
                {/* To Neutral rail */}
                <line x1="0" y1="60" x2="0" y2="115" stroke="#3b82f6" strokeWidth="2" />
              </g>

              {/* ================= PARALLEL INDICATOR LAMPS ================= */}
              {/* RUN LAMP BRANCH (HL1 - Green) */}
              <g transform="translate(260, 335)">
                <line x1="-200" y1="-10" x2="0" y2="-10" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />
                <line x1="0" y1="-10" x2="0" y2="35" stroke={isRunning ? wireActiveColor : wireInactiveColor} strokeWidth="2" />
                <circle
                  cx="0"
                  cy="50"
                  r="16"
                  fill="#0f172a"
                  stroke={isRunning ? '#10b981' : '#334155'}
                  strokeWidth={isRunning ? '2.5' : '1.5'}
                />
                <line x1="-10" y1="40" x2="10" y2="60" stroke={isRunning ? '#10b981' : '#475569'} strokeWidth="1.5" />
                <line x1="10" y1="40" x2="-10" y2="60" stroke={isRunning ? '#10b981' : '#475569'} strokeWidth="1.5" />
                <text x="24" y="52" fill={isRunning ? '#34d399' : '#94a3b8'} fontSize="10" fontWeight="bold">HL1 (RUN)</text>
                <text x="24" y="64" fill="#64748b" fontSize="8">Green LED</text>
                <line x1="0" y1="66" x2="0" y2="140" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="0" cy="140" r="3" fill="#3b82f6" />
              </g>

              {/* TRIP LAMP BRANCH (HL2 - Amber/Red, powered via 97-98 NO overload contact) */}
              <g transform="translate(390, 120)">
                <line x1="-330" y1="15" x2="0" y2="15" stroke="#ef4444" strokeWidth="2" />
                <line x1="0" y1="15" x2="0" y2="80" stroke="#ef4444" strokeWidth="2" />
                {/* Overload NO contact 97-98 */}
                <circle cx="0" cy="80" r="3" fill="#ef4444" />
                <text x="-40" y="82" fill="#94a3b8" fontSize="8.5">97 (NO)</text>
                <line
                  x1="0"
                  y1="80"
                  x2={isOverloadTripped ? "0" : "12"}
                  y2={isOverloadTripped ? "106" : "96"}
                  stroke={isOverloadTripped ? '#f59e0b' : '#64748b'}
                  strokeWidth="2.5"
                />
                <circle cx="0" cy="106" r="3" fill={isOverloadTripped ? '#f59e0b' : '#475569'} />
                <text x="-40" y="108" fill="#94a3b8" fontSize="8.5">98 (NO)</text>
                <text x="18" y="95" fill={isOverloadTripped ? '#fbbf24' : '#cbd5e1'} fontSize="9.5" fontWeight="bold">
                  FR1 (97-98 NO)
                </text>
                <line x1="0" y1="106" x2="0" y2="250" stroke={isOverloadTripped ? '#f59e0b' : wireInactiveColor} strokeWidth="2" />

                {/* HL2 Lamp */}
                <circle
                  cx="0"
                  cy="265"
                  r="16"
                  fill="#0f172a"
                  stroke={isOverloadTripped ? '#f59e0b' : '#334155'}
                  strokeWidth={isOverloadTripped ? '2.5' : '1.5'}
                />
                <line x1="-10" y1="255" x2="10" y2="275" stroke={isOverloadTripped ? '#f59e0b' : '#475569'} strokeWidth="1.5" />
                <line x1="10" y1="255" x2="-10" y2="275" stroke={isOverloadTripped ? '#f59e0b' : '#475569'} strokeWidth="1.5" />
                <text x="24" y="267" fill={isOverloadTripped ? '#fbbf24' : '#94a3b8'} fontSize="10" fontWeight="bold">HL2 (TRIP)</text>
                <text x="24" y="279" fill="#64748b" fontSize="8">Amber / Alarm</text>
                <line x1="0" y1="281" x2="0" y2="355" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="0" cy="355" r="3" fill="#3b82f6" />
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Schematic Legend & Terminal Guide */}
      <div className="bg-slate-950 p-4 border-t border-slate-800 text-xs text-slate-300 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <span className="text-cyan-400 font-semibold block mb-1">Standard Terminal Notation</span>
          <ul className="space-y-0.5 text-slate-400 font-mono text-[11px]">
            <li>• <strong className="text-slate-200">A1 / A2</strong>: Contactor KM1 electromagnetic coil pins</li>
            <li>• <strong className="text-slate-200">13 / 14</strong>: Normally Open (NO) latching auxiliary contact</li>
            <li>• <strong className="text-slate-200">95 / 96</strong>: Thermal Overload Relay (NC) trip loop</li>
            <li>• <strong className="text-slate-200">97 / 98</strong>: Thermal Overload Relay (NO) alarm lamp path</li>
          </ul>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold block mb-1">Operating Sequence</span>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Pressing SB2 (START) passes 230V to coil A1. Latch contact 13-14 seals in the feed. When SB1 is pressed or overload 95-96 opens, coil current drops immediately, opening main poles 1-2, 3-4, 5-6 and halting the 3-phase motor.
          </p>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold block mb-1">Practical Wiring Diligence</span>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Wire numbers 1, 2, 3 ferruled at each terminal. Contactors mounted on standard 35mm DIN rail with slotted PVC wiring ducting.
          </p>
        </div>
      </div>
    </div>
  );
};
