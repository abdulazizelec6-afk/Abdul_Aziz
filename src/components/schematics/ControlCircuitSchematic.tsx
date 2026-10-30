import React, { useState } from 'react';
import { Eye, HelpCircle } from 'lucide-react';

export const ControlCircuitSchematic: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodeDescriptions: Record<string, { title: string; wire: string; function: string }> = {
    node1: {
      title: 'Emergency Stop & Isolation Loop',
      wire: 'Wire #1 (Red)',
      function: 'Series safety loop. Sourced from control MCB/Fuse FU1 through E-Stop (NC mushroom button) and Thermal Overload trip contact 95-96. Opens instantly on thermal fault or emergency stop push.',
    },
    node2: {
      title: 'Stop Button to Start Station Feed',
      wire: 'Wire #2 (Orange)',
      function: 'Carries permissive 230V live feed from STOP pushbutton (NC contact 1-2) to the inputs of the START button (NO 3-4) and auxiliary hold contact KM1 (13-14).',
    },
    node3: {
      title: 'Switched Start / Latch Command Node',
      wire: 'Wire #3 (Cyan)',
      function: 'Common junction downstream of START button NO and KM1 auxiliary NO 13-14. Energizes coil terminal A1 upon momentary push and holds coil supply through KM1 latch after button release.',
    },
    node4: {
      title: 'Neutral Return Bus',
      wire: 'Wire #N (Blue)',
      function: 'Continuous zero-potential return line connecting coil A2 and pilot lamps HL1/HL2 directly to the power supply neutral bar.',
    },
    node5: {
      title: 'Alarm Signaling Branch',
      wire: 'Wire #98 (Yellow/Amber)',
      function: 'Connected to Overload Relay NO contact 97-98. Only receives live potential when the thermal element trips, illuminating warning beacon HL2.',
    },
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">DIAGRAM TYPE:</span>
          <span className="text-cyan-400 font-semibold font-mono">STANDARD CONTROL CIRCUIT SCHEMATIC & FERRULING</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>Click on wire nodes below to trace circuit continuity</span>
        </div>
      </div>

      {/* Interactive Node Info Box */}
      {activeNode && (
        <div className="bg-cyan-950/40 border-b border-cyan-800/60 px-4 py-2.5 text-xs flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-cyan-300 font-bold">{nodeDescriptions[activeNode].title}</span>
              <span className="text-slate-400">·</span>
              <span className="text-cyan-400 font-medium">{nodeDescriptions[activeNode].wire}</span>
            </div>
            <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
              {nodeDescriptions[activeNode].function}
            </p>
          </div>
        </div>
      )}

      {/* SVG Canvas */}
      <div className="p-4 overflow-x-auto flex justify-center bg-slate-950 bg-grid-pattern">
        <svg
          viewBox="0 0 880 440"
          className="w-full max-w-4xl h-auto select-none font-mono"
          style={{ minWidth: '700px' }}
        >
          {/* Top Rail (Control Line L) */}
          <line x1="30" y1="40" x2="850" y2="40" stroke="#ef4444" strokeWidth="2.5" />
          <text x="15" y="44" fill="#ef4444" fontSize="12" fontWeight="bold">L</text>
          <text x="810" y="32" fill="#ef4444" fontSize="9.5">230V Phase</text>

          {/* Bottom Rail (Neutral N) */}
          <line x1="30" y1="390" x2="850" y2="390" stroke="#3b82f6" strokeWidth="2.5" />
          <text x="15" y="394" fill="#3b82f6" fontSize="12" fontWeight="bold">N</text>
          <text x="800" y="410" fill="#3b82f6" fontSize="9.5">0V Neutral</text>

          {/* Rung 1: Safety loop (MCB -> E-Stop -> Overload 95-96) */}
          <g transform="translate(90, 40)">
            <line x1="0" y1="0" x2="0" y2="25" stroke="#ef4444" strokeWidth="2" />
            
            {/* Control Fuse FU1 */}
            <rect x="-8" y="25" width="16" height="26" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="0" y1="25" x2="0" y2="51" stroke="#ef4444" strokeWidth="1" />
            <text x="15" y="42" fill="#cbd5e1" fontSize="9">FU1 (4A)</text>
            <line x1="0" y1="51" x2="0" y2="70" stroke="#ef4444" strokeWidth="2" />

            {/* E-Stop SB0 (NC) */}
            <g transform="translate(0, 70)">
              <circle cx="0" cy="10" r="3" fill="#ef4444" />
              <line x1="-12" y1="10" x2="0" y2="10" stroke="#ef4444" strokeWidth="2" />
              <line x1="-12" y1="10" x2="-12" y2="30" stroke="#f43f5e" strokeWidth="2.5" />
              <circle cx="0" cy="30" r="3" fill="#ef4444" />
              <text x="15" y="24" fill="#cbd5e1" fontSize="9" fontWeight="bold">SB0 (E-STOP NC)</text>
              <line x1="0" y1="30" x2="0" y2="50" stroke="#ef4444" strokeWidth="2" />
            </g>

            {/* Thermal Overload Contact FR1 (95-96 NC) */}
            <g transform="translate(0, 130)">
              <circle cx="0" cy="10" r="3" fill="#ef4444" />
              <line x1="0" y1="10" x2="0" y2="34" stroke="#ef4444" strokeWidth="2.5" />
              <circle cx="0" cy="34" r="3" fill="#ef4444" />
              <text x="15" y="16" fill="#94a3b8" fontSize="8">95</text>
              <text x="15" y="38" fill="#94a3b8" fontSize="8">96</text>
              <text x="32" y="26" fill="#fbbf24" fontSize="9" fontWeight="bold">FR1 (95-96 NC)</text>
              <line x1="0" y1="34" x2="0" y2="60" stroke="#ef4444" strokeWidth="2" />
            </g>
          </g>

          {/* Node 1 Hotspot */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveNode('node1')}
            transform="translate(90, 230)"
          >
            <circle cx="0" cy="0" r="10" fill={activeNode === 'node1' ? '#06b6d4' : '#1e293b'} stroke="#06b6d4" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1</text>
            <text x="18" y="4" fill="#38bdf8" fontSize="9" className="group-hover:underline">Wire #1</text>
          </g>

          {/* Line from Node 1 to Stop Switch */}
          <line x1="90" y1="230" x2="250" y2="230" stroke="#f97316" strokeWidth="2" />
          <line x1="250" y1="230" x2="250" y2="90" stroke="#f97316" strokeWidth="2" />

          {/* Rung 2: Stop button SB1 & Start station */}
          <g transform="translate(250, 90)">
            {/* SB1 STOP BUTTON */}
            <circle cx="0" cy="10" r="3" fill="#f97316" />
            <line x1="-10" y1="10" x2="0" y2="10" stroke="#f97316" strokeWidth="2" />
            <line x1="-10" y1="10" x2="-10" y2="30" stroke="#f43f5e" strokeWidth="2.5" />
            <circle cx="0" cy="30" r="3" fill="#f97316" />
            <text x="15" y="24" fill="#cbd5e1" fontSize="9" fontWeight="bold">SB1 (STOP NC 1-2)</text>
            <line x1="0" y1="30" x2="0" y2="60" stroke="#f97316" strokeWidth="2" />
          </g>

          {/* Node 2 Hotspot */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveNode('node2')}
            transform="translate(250, 150)"
          >
            <circle cx="0" cy="0" r="10" fill={activeNode === 'node2' ? '#06b6d4' : '#1e293b'} stroke="#f97316" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>
            <text x="18" y="4" fill="#fb923c" fontSize="9" className="group-hover:underline">Wire #2</text>
          </g>

          {/* Parallel Branches: Start Button SB2 & Holding Contact KM1 */}
          <line x1="250" y1="150" x2="250" y2="180" stroke="#f97316" strokeWidth="2" />
          <line x1="250" y1="180" x2="380" y2="180" stroke="#f97316" strokeWidth="2" />

          {/* Branch A: SB2 Start NO */}
          <g transform="translate(250, 180)">
            <line x1="0" y1="0" x2="0" y2="15" stroke="#f97316" strokeWidth="2" />
            <circle cx="0" cy="15" r="3" fill="#f97316" />
            <line x1="-8" y1="18" x2="-8" y2="34" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="0" cy="38" r="3" fill="#06b6d4" />
            <text x="-45" y="28" fill="#10b981" fontSize="9" fontWeight="bold">SB2 (3-4 NO)</text>
            <line x1="0" y1="38" x2="0" y2="55" stroke="#06b6d4" strokeWidth="2" />
          </g>

          {/* Branch B: Aux Hold KM1 (13-14) */}
          <g transform="translate(380, 180)">
            <line x1="0" y1="0" x2="0" y2="15" stroke="#f97316" strokeWidth="2" />
            <circle cx="0" cy="15" r="3" fill="#f97316" />
            <line x1="0" y1="15" x2="10" y2="32" stroke="#64748b" strokeWidth="2.5" />
            <circle cx="0" cy="38" r="3" fill="#06b6d4" />
            <text x="15" y="20" fill="#94a3b8" fontSize="8">13 (NO)</text>
            <text x="15" y="42" fill="#94a3b8" fontSize="8">14 (NO)</text>
            <text x="32" y="30" fill="#38bdf8" fontSize="9" fontWeight="bold">KM1 Latch</text>
            <line x1="0" y1="38" x2="0" y2="55" stroke="#06b6d4" strokeWidth="2" />
          </g>

          {/* Rejoin to Node 3 */}
          <line x1="250" y1="235" x2="380" y2="235" stroke="#06b6d4" strokeWidth="2" />
          <g
            className="cursor-pointer group"
            onClick={() => setActiveNode('node3')}
            transform="translate(250, 235)"
          >
            <circle cx="0" cy="0" r="10" fill={activeNode === 'node3' ? '#06b6d4' : '#1e293b'} stroke="#06b6d4" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">3</text>
            <text x="18" y="4" fill="#22d3ee" fontSize="9" className="group-hover:underline">Wire #3</text>
          </g>

          {/* Contactor Coil KM1 */}
          <g transform="translate(250, 275)">
            <line x1="0" y1="-40" x2="0" y2="0" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="0" cy="0" r="3" fill="#06b6d4" />
            <text x="-25" y="3" fill="#94a3b8" fontSize="8.5" fontWeight="bold">A1</text>
            <rect x="-24" y="10" width="48" height="36" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" rx="4" />
            <text x="0" y="28" fill="#22d3ee" fontSize="11" fontWeight="bold" textAnchor="middle">KM1</text>
            <text x="0" y="40" fill="#64748b" fontSize="8" textAnchor="middle">230V Coil</text>
            <circle cx="0" cy="55" r="3" fill="#3b82f6" />
            <text x="-25" y="58" fill="#94a3b8" fontSize="8.5" fontWeight="bold">A2</text>
            <line x1="0" y1="55" x2="0" y2="115" stroke="#3b82f6" strokeWidth="2" />
          </g>

          {/* Rung 3: Run Indicator HL1 */}
          <g transform="translate(520, 235)">
            <line x1="-270" y1="0" x2="0" y2="0" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="0" y1="0" x2="0" y2="40" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="0" cy="55" r="15" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <line x1="-9" y1="46" x2="9" y2="64" stroke="#10b981" strokeWidth="1.5" />
            <line x1="9" y1="46" x2="-9" y2="64" stroke="#10b981" strokeWidth="1.5" />
            <text x="24" y="58" fill="#34d399" fontSize="9.5" fontWeight="bold">HL1 (RUN LAMP)</text>
            <line x1="0" y1="70" x2="0" y2="155" stroke="#3b82f6" strokeWidth="2" />
          </g>

          {/* Rung 4: Overload Alarm Lamp HL2 */}
          <g transform="translate(710, 40)">
            <line x1="0" y1="0" x2="0" y2="120" stroke="#ef4444" strokeWidth="2" />
            {/* FR1 97-98 NO contact */}
            <circle cx="0" cy="120" r="3" fill="#ef4444" />
            <line x1="0" y1="120" x2="10" y2="140" stroke="#64748b" strokeWidth="2.5" />
            <circle cx="0" cy="145" r="3" fill="#eab308" />
            <text x="15" y="125" fill="#94a3b8" fontSize="8">97 (NO)</text>
            <text x="15" y="150" fill="#94a3b8" fontSize="8">98 (NO)</text>
            <text x="32" y="136" fill="#fbbf24" fontSize="9" fontWeight="bold">FR1 (97-98 NO)</text>

            {/* Wire 98 Hotspot */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode('node5')}
              transform="translate(0, 175)"
            >
              <circle cx="0" cy="0" r="10" fill={activeNode === 'node5' ? '#06b6d4' : '#1e293b'} stroke="#eab308" strokeWidth="1.5" />
              <text x="0" y="3" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">98</text>
              <text x="16" y="4" fill="#fbbf24" fontSize="9" className="group-hover:underline">Wire #98</text>
            </g>

            <line x1="0" y1="145" x2="0" y2="240" stroke="#eab308" strokeWidth="2" />
            <circle cx="0" cy="255" r="15" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="-9" y1="246" x2="9" y2="264" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="9" y1="246" x2="-9" y2="264" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="24" y="258" fill="#fbbf24" fontSize="9.5" fontWeight="bold">HL2 (TRIP LAMP)</text>
            <line x1="0" y1="270" x2="0" y2="350" stroke="#3b82f6" strokeWidth="2" />
          </g>

          {/* Neutral Hotspot */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveNode('node4')}
            transform="translate(250, 390)"
          >
            <circle cx="0" cy="0" r="10" fill={activeNode === 'node4' ? '#06b6d4' : '#1e293b'} stroke="#3b82f6" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>
            <text x="18" y="4" fill="#60a5fa" fontSize="9" className="group-hover:underline">Neutral Bus</text>
          </g>
        </svg>
      </div>

      {/* Technical Footnote */}
      <div className="bg-slate-950 p-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span className="text-slate-300">
          <strong className="text-cyan-400">Wiring Standard:</strong> IEC 60617 Graphical Symbols, EN 60204-1 Machine Safety
        </span>
        <span className="text-slate-400 font-mono text-[11px]">
          Fail-safe series chain: Emergency Stop and Overload contacts wired upstream of control logic
        </span>
      </div>
    </div>
  );
};
