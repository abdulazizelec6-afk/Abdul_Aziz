import React, { useState } from 'react';
import { RotateCw, RotateCcw, Square } from 'lucide-react';

export const PowerCircuitSchematic: React.FC = () => {
  const [motorState, setMotorState] = useState<'off' | 'forward' | 'reverse'>('off');

  const phaseL1 = '#ef4444'; // Red
  const phaseL2 = '#eab308'; // Yellow
  const phaseL3 = '#3b82f6'; // Blue
  const peColor = '#22c55e'; // Green PE

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
      {/* Top Controls */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">DIAGRAM TYPE:</span>
          <span className="text-cyan-400 font-semibold font-mono">3-PHASE POWER CIRCUIT & FORWARD/REVERSE PHASE SWAP</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMotorState('forward')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              motorState === 'forward'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-cyan-300'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>FORWARD (KM1 - CW)</span>
          </button>

          <button
            onClick={() => setMotorState('reverse')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              motorState === 'reverse'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-purple-300'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>REVERSE (KM2 - CCW)</span>
          </button>

          <button
            onClick={() => setMotorState('off')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              motorState === 'off'
                ? 'bg-slate-800 text-slate-500'
                : 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm'
            }`}
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>STOP</span>
          </button>
        </div>
      </div>

      {/* Info status strip */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">STATUS:</span>
          {motorState === 'off' && <span className="text-slate-500">IDLE · CONTACTORS DISCONNECTED</span>}
          {motorState === 'forward' && (
            <span className="text-cyan-400 font-bold">
              FORWARD ACTIVE (KM1 CLOSED) · Phase Sequence L1→U1, L2→V1, L3→W1 (Clockwise)
            </span>
          )}
          {motorState === 'reverse' && (
            <span className="text-purple-400 font-bold">
              REVERSE ACTIVE (KM2 CLOSED) · Phase Sequence L3→U1, L2→V1, L1→W1 (Counter-Clockwise Phase Inversion)
            </span>
          )}
        </div>
        <div className="text-slate-500 text-[11px]">3-Phase 400V AC · 50Hz</div>
      </div>

      {/* SVG Canvas */}
      <div className="p-4 overflow-x-auto flex justify-center bg-slate-950 bg-grid-pattern">
        <svg
          viewBox="0 0 880 480"
          className="w-full max-w-4xl h-auto select-none font-mono"
          style={{ minWidth: '700px' }}
        >
          {/* Main 3-Phase Busbar Top */}
          <g transform="translate(60, 20)">
            {/* L1 */}
            <line x1="0" y1="20" x2="760" y2="20" stroke={phaseL1} strokeWidth="3" />
            <text x="-40" y="24" fill={phaseL1} fontSize="11" fontWeight="bold">L1 (Red)</text>
            
            {/* L2 */}
            <line x1="0" y1="40" x2="760" y2="40" stroke={phaseL2} strokeWidth="3" />
            <text x="-40" y="44" fill={phaseL2} fontSize="11" fontWeight="bold">L2 (Yel)</text>

            {/* L3 */}
            <line x1="0" y1="60" x2="760" y2="60" stroke={phaseL3} strokeWidth="3" />
            <text x="-40" y="64" fill={phaseL3} fontSize="11" fontWeight="bold">L3 (Blu)</text>

            {/* PE */}
            <line x1="0" y1="80" x2="760" y2="80" stroke={peColor} strokeWidth="2" strokeDasharray="6 4" />
            <text x="-40" y="84" fill={peColor} fontSize="11" fontWeight="bold">PE (Gnd)</text>
          </g>

          {/* Main MCCB / Isolator Switch */}
          <g transform="translate(200, 115)">
            <rect x="0" y="0" width="160" height="44" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="4" />
            <text x="80" y="20" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle">
              QF1 (Main Isolator)
            </text>
            <text x="80" y="34" fill="#64748b" fontSize="8.5" textAnchor="middle">
              400V 3-Pole Disconnect
            </text>

            {/* Feed lines into QF1 */}
            <line x1="30" y1="-75" x2="30" y2="0" stroke={phaseL1} strokeWidth="2.5" />
            <line x1="80" y1="-55" x2="80" y2="0" stroke={phaseL2} strokeWidth="2.5" />
            <line x1="130" y1="-35" x2="130" y2="0" stroke={phaseL3} strokeWidth="2.5" />

            {/* Exit lines from QF1 */}
            <line x1="30" y1="44" x2="30" y2="70" stroke={phaseL1} strokeWidth="2.5" />
            <line x1="80" y1="44" x2="80" y2="70" stroke={phaseL2} strokeWidth="2.5" />
            <line x1="130" y1="44" x2="130" y2="70" stroke={phaseL3} strokeWidth="2.5" />
          </g>

          {/* Split Node to KM1 (Forward) and KM2 (Reverse) */}
          {/* KM1 (FORWARD CONTACTOR) - LEFT */}
          <g transform="translate(180, 200)">
            <rect
              x="0"
              y="0"
              width="180"
              height="80"
              fill="#0f172a"
              stroke={motorState === 'forward' ? '#06b6d4' : '#334155'}
              strokeWidth={motorState === 'forward' ? '2.5' : '1.5'}
              rx="6"
            />
            <text x="90" y="22" fill={motorState === 'forward' ? '#22d3ee' : '#cbd5e1'} fontSize="11.5" fontWeight="bold" textAnchor="middle">
              KM1 (FORWARD)
            </text>
            <text x="90" y="36" fill="#64748b" fontSize="8.5" textAnchor="middle">
              {motorState === 'forward' ? 'CLOSED · CLOCKWISE' : 'OPEN'}
            </text>

            {/* Contacts */}
            <circle cx="35" cy="48" r="3" fill={phaseL1} />
            <circle cx="90" cy="48" r="3" fill={phaseL2} />
            <circle cx="145" cy="48" r="3" fill={phaseL3} />

            <line x1="35" y1="48" x2={motorState === 'forward' ? "35" : "44"} y2="68" stroke={motorState === 'forward' ? phaseL1 : "#64748b"} strokeWidth="2.5" />
            <line x1="90" y1="48" x2={motorState === 'forward' ? "90" : "99"} y2="68" stroke={motorState === 'forward' ? phaseL2 : "#64748b"} strokeWidth="2.5" />
            <line x1="145" y1="48" x2={motorState === 'forward' ? "145" : "154"} y2="68" stroke={motorState === 'forward' ? phaseL3 : "#64748b"} strokeWidth="2.5" />

            <circle cx="35" cy="70" r="3" fill={motorState === 'forward' ? phaseL1 : '#475569'} />
            <circle cx="90" cy="70" r="3" fill={motorState === 'forward' ? phaseL2 : '#475569'} />
            <circle cx="145" cy="70" r="3" fill={motorState === 'forward' ? phaseL3 : '#475569'} />
          </g>

          {/* KM2 (REVERSE CONTACTOR) - RIGHT */}
          <g transform="translate(500, 200)">
            <rect
              x="0"
              y="0"
              width="180"
              height="80"
              fill="#0f172a"
              stroke={motorState === 'reverse' ? '#a855f7' : '#334155'}
              strokeWidth={motorState === 'reverse' ? '2.5' : '1.5'}
              rx="6"
            />
            <text x="90" y="22" fill={motorState === 'reverse' ? '#c084fc' : '#cbd5e1'} fontSize="11.5" fontWeight="bold" textAnchor="middle">
              KM2 (REVERSE)
            </text>
            <text x="90" y="36" fill="#64748b" fontSize="8.5" textAnchor="middle">
              {motorState === 'reverse' ? 'CLOSED · COUNTER-CW' : 'OPEN'}
            </text>

            {/* Contacts */}
            <circle cx="35" cy="48" r="3" fill={phaseL1} />
            <circle cx="90" cy="48" r="3" fill={phaseL2} />
            <circle cx="145" cy="48" r="3" fill={phaseL3} />

            <line x1="35" y1="48" x2={motorState === 'reverse' ? "35" : "44"} y2="68" stroke={motorState === 'reverse' ? phaseL1 : "#64748b"} strokeWidth="2.5" />
            <line x1="90" y1="48" x2={motorState === 'reverse' ? "90" : "99"} y2="68" stroke={motorState === 'reverse' ? phaseL2 : "#64748b"} strokeWidth="2.5" />
            <line x1="145" y1="48" x2={motorState === 'reverse' ? "145" : "154"} y2="68" stroke={motorState === 'reverse' ? phaseL3 : "#64748b"} strokeWidth="2.5" />

            <circle cx="35" cy="70" r="3" fill={motorState === 'reverse' ? phaseL1 : '#475569'} />
            <circle cx="90" cy="70" r="3" fill={motorState === 'reverse' ? phaseL2 : '#475569'} />
            <circle cx="145" cy="70" r="3" fill={motorState === 'reverse' ? phaseL3 : '#475569'} />
          </g>

          {/* Cross lines demonstrating Phase Swapping between KM1 and KM2 */}
          {/* KM2 top feed: L1 to 1, L2 to 3, L3 to 5 */}
          <line x1="215" y1="185" x2="535" y2="185" stroke={phaseL1} strokeWidth="1.5" />
          <line x1="535" y1="185" x2="535" y2="248" stroke={phaseL1} strokeWidth="1.5" />

          <line x1="260" y1="190" x2="590" y2="190" stroke={phaseL2} strokeWidth="1.5" />
          <line x1="590" y1="190" x2="590" y2="248" stroke={phaseL2} strokeWidth="1.5" />

          <line x1="310" y1="195" x2="645" y2="195" stroke={phaseL3} strokeWidth="1.5" />
          <line x1="645" y1="195" x2="645" y2="248" stroke={phaseL3} strokeWidth="1.5" />

          {/* KM2 bottom outputs: SWAP L1 and L3 before meeting thermal overload! */}
          {/* L3 output from KM2 (645) connects to L1 bus (215) */}
          <path d="M 645,270 L 645,300 L 215,300" fill="none" stroke={motorState === 'reverse' ? phaseL3 : '#475569'} strokeWidth="1.5" strokeDasharray={motorState === 'reverse' ? 'none' : '3 3'} />
          {/* L2 output from KM2 (590) connects to L2 bus (260) */}
          <path d="M 590,270 L 590,305 L 260,305" fill="none" stroke={motorState === 'reverse' ? phaseL2 : '#475569'} strokeWidth="1.5" strokeDasharray={motorState === 'reverse' ? 'none' : '3 3'} />
          {/* L1 output from KM2 (535) connects to L3 bus (310) */}
          <path d="M 535,270 L 535,310 L 310,310" fill="none" stroke={motorState === 'reverse' ? phaseL1 : '#475569'} strokeWidth="1.5" strokeDasharray={motorState === 'reverse' ? 'none' : '3 3'} />

          {/* Thermal Overload Relay FR1 */}
          <g transform="translate(195, 320)">
            <rect x="0" y="0" width="150" height="40" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="4" />
            <text x="75" y="18" fill="#cbd5e1" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              FR1 (Overload Relay)
            </text>
            <text x="75" y="32" fill="#64748b" fontSize="8" textAnchor="middle">
              Adjustable Trip Setting
            </text>

            <line x1="20" y1="-20" x2="20" y2="40" stroke={motorState !== 'off' ? phaseL1 : '#475569'} strokeWidth="2.5" />
            <line x1="65" y1="-20" x2="65" y2="40" stroke={motorState !== 'off' ? phaseL2 : '#475569'} strokeWidth="2.5" />
            <line x1="115" y1="-20" x2="115" y2="40" stroke={motorState !== 'off' ? phaseL3 : '#475569'} strokeWidth="2.5" />
          </g>

          {/* Induction Motor M1 */}
          <g transform="translate(270, 415)">
            <circle
              cx="0"
              cy="0"
              r="48"
              fill="#0b1329"
              stroke={motorState !== 'off' ? '#10b981' : '#334155'}
              strokeWidth="2.5"
            />
            {motorState !== 'off' && (
              <circle
                cx="0"
                cy="0"
                r="40"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                className="animate-spin"
                style={{
                  transformOrigin: 'center',
                  animationDirection: motorState === 'reverse' ? 'reverse' : 'normal',
                  animationDuration: '3s',
                }}
              />
            )}
            <text x="0" y="-8" fill="#f8fafc" fontSize="15" fontWeight="bold" textAnchor="middle">
              M1 (3~)
            </text>
            <text x="0" y="10" fill={motorState !== 'off' ? '#34d399' : '#94a3b8'} fontSize="10" fontWeight="bold" textAnchor="middle">
              {motorState === 'forward' ? 'CW (FORWARD)' : motorState === 'reverse' ? 'CCW (REVERSE)' : 'OFF'}
            </text>
            <text x="0" y="24" fill="#64748b" fontSize="8" textAnchor="middle">
              400V Squirrel Cage
            </text>

            {/* Earth wire */}
            <path d="M 48,0 L 90,0 L 90,-335 L 550,-335" fill="none" stroke={peColor} strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="95" y="15" fill={peColor} fontSize="8.5">Chassis Earth (PE)</text>
          </g>

          {/* Phase Swapping Explanation Box */}
          <g transform="translate(480, 340)">
            <rect x="0" y="0" width="360" height="95" fill="#030712" stroke="#334155" strokeWidth="1" rx="6" />
            <text x="16" y="22" fill="#38bdf8" fontSize="10.5" fontWeight="bold">
              PHASE REVERSAL PRINCIPLE (AC Induction):
            </text>
            <text x="16" y="40" fill="#cbd5e1" fontSize="9.5">
              • Forward (KM1): L1 → U1 | L2 → V1 | L3 → W1
            </text>
            <text x="16" y="56" fill="#c084fc" fontSize="9.5">
              • Reverse (KM2): L3 → U1 | L2 → V1 | L1 → W1 (Swapped L1 & L3)
            </text>
            <text x="16" y="74" fill="#94a3b8" fontSize="8.5">
              Swapping any two phase leads reverses the stator rotating magnetic field, changing shaft rotation from clockwise to counter-clockwise.
            </text>
          </g>
        </svg>
      </div>

      {/* Footer */}
      <div className="bg-slate-950 p-4 border-t border-slate-800 text-xs text-slate-400">
        <p className="leading-relaxed text-[11px]">
          <strong className="text-cyan-400">Protection Coordination:</strong> Main breaker QF1 provides high-fault breaking capacity, while thermal overload relay FR1 protects motor windings from continuous sustained overloads and phase unbalance. Contactor main poles are silver-alloy AC-3 rated.
        </p>
      </div>
    </div>
  );
};
