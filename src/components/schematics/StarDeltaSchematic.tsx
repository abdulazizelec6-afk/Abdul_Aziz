import React, { useState, useEffect } from 'react';
import { Play, Square, Timer, RefreshCw } from 'lucide-react';

export const StarDeltaSchematic: React.FC = () => {
  const [stage, setStage] = useState<'off' | 'star' | 'delta'>('off');
  const [timerSeconds, setTimerSeconds] = useState<number>(5);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stage === 'star') {
      if (timerSeconds > 0) {
        interval = setInterval(() => {
          setTimerSeconds((prev) => prev - 1);
        }, 1000);
      } else {
        // Automatic transition to Delta
        setStage('delta');
      }
    }
    return () => clearInterval(interval);
  }, [stage, timerSeconds]);

  const handleStart = () => {
    setTimerSeconds(5);
    setStage('star');
  };

  const handleStop = () => {
    setStage('off');
    setTimerSeconds(5);
  };

  const isKm1On = stage === 'star' || stage === 'delta';
  const isKm2StarOn = stage === 'star';
  const isKm3DeltaOn = stage === 'delta';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
      {/* Top Controller Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">DIAGRAM TYPE:</span>
          <span className="text-cyan-400 font-semibold font-mono">STAR-DELTA (WYE-DELTA) 3-CONTACTOR STARTER</span>
        </div>

        {/* Live status badge */}
        <div className="flex items-center gap-2 font-mono">
          <span className="text-slate-400">STATE:</span>
          {stage === 'off' && (
            <span className="text-slate-400 font-semibold bg-slate-800 px-2 py-0.5 rounded">STOPPED</span>
          )}
          {stage === 'star' && (
            <span className="text-amber-400 font-semibold bg-amber-950/70 border border-amber-800/80 px-2 py-0.5 rounded flex items-center gap-1.5 animate-pulse">
              <Timer className="w-3.5 h-3.5" />
              STAR MODE (Y) — {timerSeconds}s REMAINING
            </span>
          )}
          {stage === 'delta' && (
            <span className="text-emerald-400 font-semibold bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              DELTA MODE (Δ) — FULL SPEED RUN
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleStart}
            disabled={stage !== 'off'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              stage !== 'off'
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>START SEQUENCE</span>
          </button>

          <button
            onClick={handleStop}
            disabled={stage === 'off'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-medium transition-all ${
              stage === 'off'
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm'
            }`}
          >
            <Square className="w-3.5 h-3.5 fill-current" />
            <span>STOP / RESET</span>
          </button>
        </div>
      </div>

      {/* Dynamic Status Strip */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono gap-y-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isKm1On ? '#06b6d4' : '#334155' }} />
            <span className="text-slate-400">MAIN KM1: <strong className={isKm1On ? 'text-cyan-300' : 'text-slate-500'}>{isKm1On ? 'ON' : 'OFF'}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isKm2StarOn ? '#f59e0b' : '#334155' }} />
            <span className="text-slate-400">STAR KM2: <strong className={isKm2StarOn ? 'text-amber-300' : 'text-slate-500'}>{isKm2StarOn ? 'CLOSED (Y)' : 'OPEN'}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: isKm3DeltaOn ? '#10b981' : '#334155' }} />
            <span className="text-slate-400">DELTA KM3: <strong className={isKm3DeltaOn ? 'text-emerald-300' : 'text-slate-500'}>{isKm3DeltaOn ? 'CLOSED (Δ)' : 'OPEN'}</strong></span>
          </div>
        </div>

        <div className="text-slate-400 text-[11px]">
          {stage === 'star' && <span className="text-amber-300">Phase Voltage: 230V across windings (Reduced inrush current ~33%)</span>}
          {stage === 'delta' && <span className="text-emerald-300">Phase Voltage: 400V across windings (Rated torque & full speed)</span>}
          {stage === 'off' && <span>Ready to initiate starting sequence</span>}
        </div>
      </div>

      {/* Star-Delta Circuit Graphic SVG */}
      <div className="p-4 overflow-x-auto flex justify-center bg-slate-950 bg-grid-pattern">
        <svg
          viewBox="0 0 920 480"
          className="w-full max-w-4xl h-auto select-none font-mono"
          style={{ minWidth: '700px' }}
        >
          {/* Incoming Lines */}
          <g transform="translate(40, 20)">
            <text x="20" y="25" fill="#ef4444" fontSize="12" fontWeight="bold">L1</text>
            <text x="60" y="25" fill="#eab308" fontSize="12" fontWeight="bold">L2</text>
            <text x="100" y="25" fill="#3b82f6" fontSize="12" fontWeight="bold">L3</text>
            <text x="140" y="25" fill="#22c55e" fontSize="12" fontWeight="bold">PE</text>

            {/* Mains MCB / Isolator */}
            <rect x="10" y="35" width="100" height="40" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="4" />
            <text x="60" y="58" fill="#94a3b8" fontSize="10" textAnchor="middle">QF1 (Mains)</text>

            <line x1="25" y1="28" x2="25" y2="90" stroke="#ef4444" strokeWidth="2" />
            <line x1="60" y1="28" x2="60" y2="90" stroke="#eab308" strokeWidth="2" />
            <line x1="95" y1="28" x2="95" y2="90" stroke="#3b82f6" strokeWidth="2" />
          </g>

          {/* Bus split to KM1 and KM3 */}
          <line x1="65" y1="110" x2="520" y2="110" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="100" y1="118" x2="555" y2="118" stroke="#eab308" strokeWidth="1.5" />
          <line x1="135" y1="126" x2="590" y2="126" stroke="#3b82f6" strokeWidth="1.5" />

          {/* 1. MAIN CONTACTOR KM1 */}
          <g transform="translate(100, 150)">
            <rect
              x="-35"
              y="0"
              width="150"
              height="80"
              fill="#0f172a"
              stroke={isKm1On ? '#06b6d4' : '#334155'}
              strokeWidth={isKm1On ? '2' : '1.5'}
              rx="6"
            />
            <text x="40" y="22" fill={isKm1On ? '#22d3ee' : '#94a3b8'} fontSize="12" fontWeight="bold" textAnchor="middle">
              MAIN CONTACTOR (KM1)
            </text>
            <text x="40" y="38" fill="#64748b" fontSize="9" textAnchor="middle">
              {isKm1On ? 'CLOSED (ENERGIZED)' : 'OPEN'}
            </text>

            {/* Poles 1-2, 3-4, 5-6 */}
            <circle cx="0" cy="50" r="3" fill="#ef4444" />
            <circle cx="40" cy="50" r="3" fill="#eab308" />
            <circle cx="80" cy="50" r="3" fill="#3b82f6" />
            <line x1="0" y1="50" x2={isKm1On ? "0" : "8"} y2="68" stroke={isKm1On ? '#ef4444' : '#64748b'} strokeWidth="2.5" />
            <line x1="40" y1="50" x2={isKm1On ? "40" : "48"} y2="68" stroke={isKm1On ? '#eab308' : '#64748b'} strokeWidth="2.5" />
            <line x1="80" y1="50" x2={isKm1On ? "80" : "88"} y2="68" stroke={isKm1On ? '#3b82f6' : '#64748b'} strokeWidth="2.5" />
            <circle cx="0" cy="70" r="3" fill={isKm1On ? '#ef4444' : '#475569'} />
            <circle cx="40" cy="70" r="3" fill={isKm1On ? '#eab308' : '#475569'} />
            <circle cx="80" cy="70" r="3" fill={isKm1On ? '#3b82f6' : '#475569'} />
          </g>

          {/* Thermal Overload Relay FR1 below KM1 */}
          <g transform="translate(100, 250)">
            <rect x="-35" y="0" width="150" height="50" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="6" />
            <text x="40" y="20" fill="#cbd5e1" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              THERMAL OVERLOAD (FR1)
            </text>
            <text x="40" y="36" fill="#64748b" fontSize="8.5" textAnchor="middle">
              95-96 NC Control Loop
            </text>
            <line x1="0" y1="-20" x2="0" y2="50" stroke={isKm1On ? '#ef4444' : '#475569'} strokeWidth="2" />
            <line x1="40" y1="-20" x2="40" y2="50" stroke={isKm1On ? '#eab308' : '#475569'} strokeWidth="2" />
            <line x1="80" y1="-20" x2="80" y2="50" stroke={isKm1On ? '#3b82f6' : '#475569'} strokeWidth="2" />
          </g>

          {/* Feed lines into Motor U1, V1, W1 */}
          <line x1="100" y1="300" x2="260" y2="350" stroke={isKm1On ? '#ef4444' : '#475569'} strokeWidth="2" />
          <line x1="140" y1="300" x2="290" y2="350" stroke={isKm1On ? '#eab308' : '#475569'} strokeWidth="2" />
          <line x1="180" y1="300" x2="320" y2="350" stroke={isKm1On ? '#3b82f6' : '#475569'} strokeWidth="2" />

          {/* 3-PHASE MOTOR M1 (CENTER) */}
          <g transform="translate(350, 390)">
            <circle
              cx="0"
              cy="0"
              r="60"
              fill="#0b1329"
              stroke={stage === 'delta' ? '#10b981' : stage === 'star' ? '#f59e0b' : '#334155'}
              strokeWidth="3"
            />
            {stage !== 'off' && (
              <circle
                cx="0"
                cy="0"
                r="52"
                fill="none"
                stroke={stage === 'delta' ? '#10b981' : '#f59e0b'}
                strokeWidth="1.5"
                strokeDasharray="10 6"
                className="animate-spin"
                style={{ transformOrigin: 'center', animationDuration: stage === 'star' ? '6s' : '2.5s' }}
              />
            )}
            <text x="0" y="-12" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
              M1 (3~)
            </text>
            <text x="0" y="8" fill={stage === 'delta' ? '#34d399' : stage === 'star' ? '#fbbf24' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">
              {stage === 'delta' ? 'DELTA (Δ) RUN' : stage === 'star' ? 'STAR (Y) START' : 'STOPPED'}
            </text>
            <text x="0" y="24" fill="#64748b" fontSize="8.5" textAnchor="middle">
              6-Lead Motor Terminal Box
            </text>

            {/* Terminal tags */}
            <text x="-70" y="-40" fill="#94a3b8" fontSize="9">U1</text>
            <text x="-50" y="-48" fill="#94a3b8" fontSize="9">V1</text>
            <text x="-30" y="-55" fill="#94a3b8" fontSize="9">W1</text>

            <text x="30" y="-55" fill="#94a3b8" fontSize="9">W2</text>
            <text x="50" y="-48" fill="#94a3b8" fontSize="9">U2</text>
            <text x="70" y="-40" fill="#94a3b8" fontSize="9">V2</text>
          </g>

          {/* Motor Return lines from U2, V2, W2 to KM2 and KM3 */}
          <line x1="380" y1="350" x2="520" y2="280" stroke={stage !== 'off' ? '#ef4444' : '#475569'} strokeWidth="2" />
          <line x1="400" y1="350" x2="555" y2="280" stroke={stage !== 'off' ? '#eab308' : '#475569'} strokeWidth="2" />
          <line x1="420" y1="350" x2="590" y2="280" stroke={stage !== 'off' ? '#3b82f6' : '#475569'} strokeWidth="2" />

          {/* 2. DELTA CONTACTOR KM3 */}
          <g transform="translate(500, 150)">
            <rect
              x="-15"
              y="0"
              width="140"
              height="80"
              fill="#0f172a"
              stroke={isKm3DeltaOn ? '#10b981' : '#334155'}
              strokeWidth={isKm3DeltaOn ? '2' : '1.5'}
              rx="6"
            />
            <text x="55" y="22" fill={isKm3DeltaOn ? '#34d399' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">
              DELTA KM3 (Δ)
            </text>
            <text x="55" y="38" fill="#64748b" fontSize="8.5" textAnchor="middle">
              {isKm3DeltaOn ? 'CLOSED (FULL SPEED)' : 'OPEN (ISOLATED)'}
            </text>

            {/* Poles */}
            <circle cx="20" cy="50" r="3" fill="#ef4444" />
            <circle cx="55" cy="50" r="3" fill="#eab308" />
            <circle cx="90" cy="50" r="3" fill="#3b82f6" />
            <line x1="20" y1="50" x2={isKm3DeltaOn ? "20" : "28"} y2="68" stroke={isKm3DeltaOn ? '#ef4444' : '#64748b'} strokeWidth="2.5" />
            <line x1="55" y1="50" x2={isKm3DeltaOn ? "55" : "63"} y2="68" stroke={isKm3DeltaOn ? '#eab308' : '#64748b'} strokeWidth="2.5" />
            <line x1="90" y1="50" x2={isKm3DeltaOn ? "90" : "98"} y2="68" stroke={isKm3DeltaOn ? '#3b82f6' : '#64748b'} strokeWidth="2.5" />
            <circle cx="20" cy="70" r="3" fill={isKm3DeltaOn ? '#ef4444' : '#475569'} />
            <circle cx="55" cy="70" r="3" fill={isKm3DeltaOn ? '#eab308' : '#475569'} />
            <circle cx="90" cy="70" r="3" fill={isKm3DeltaOn ? '#3b82f6' : '#475569'} />
          </g>

          {/* 3. STAR CONTACTOR KM2 */}
          <g transform="translate(710, 150)">
            <rect
              x="-15"
              y="0"
              width="140"
              height="80"
              fill="#0f172a"
              stroke={isKm2StarOn ? '#f59e0b' : '#334155'}
              strokeWidth={isKm2StarOn ? '2' : '1.5'}
              rx="6"
            />
            <text x="55" y="22" fill={isKm2StarOn ? '#fbbf24' : '#94a3b8'} fontSize="11" fontWeight="bold" textAnchor="middle">
              STAR KM2 (Y)
            </text>
            <text x="55" y="38" fill="#64748b" fontSize="8.5" textAnchor="middle">
              {isKm2StarOn ? 'CLOSED (STARTING)' : 'OPEN'}
            </text>

            {/* Shorting Bridge on top of Star Contactor (Neutral Star Point) */}
            <line x1="20" y1="50" x2="90" y2="50" stroke={isKm2StarOn ? '#f59e0b' : '#64748b'} strokeWidth="3" />
            <text x="55" y="44" fill="#fbbf24" fontSize="8" textAnchor="middle">STAR BRIDGE POINT</text>

            <circle cx="20" cy="50" r="3" fill="#f59e0b" />
            <circle cx="55" cy="50" r="3" fill="#f59e0b" />
            <circle cx="90" cy="50" r="3" fill="#f59e0b" />
            <line x1="20" y1="50" x2={isKm2StarOn ? "20" : "28"} y2="68" stroke={isKm2StarOn ? '#f59e0b' : '#64748b'} strokeWidth="2.5" />
            <line x1="55" y1="50" x2={isKm2StarOn ? "55" : "63"} y2="68" stroke={isKm2StarOn ? '#f59e0b' : '#64748b'} strokeWidth="2.5" />
            <line x1="90" y1="50" x2={isKm2StarOn ? "90" : "98"} y2="68" stroke={isKm2StarOn ? '#f59e0b' : '#64748b'} strokeWidth="2.5" />
            <circle cx="20" cy="70" r="3" fill={isKm2StarOn ? '#f59e0b' : '#475569'} />
            <circle cx="55" cy="70" r="3" fill={isKm2StarOn ? '#f59e0b' : '#475569'} />
            <circle cx="90" cy="70" r="3" fill={isKm2StarOn ? '#f59e0b' : '#475569'} />
          </g>

          {/* Connecting bus from U2, V2, W2 to KM2 bottom terminals */}
          <line x1="520" y1="280" x2="730" y2="280" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="555" y1="290" x2="765" y2="290" stroke="#eab308" strokeWidth="1.5" />
          <line x1="590" y1="300" x2="800" y2="300" stroke="#3b82f6" strokeWidth="1.5" />

          <line x1="730" y1="280" x2="730" y2="220" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="765" y1="290" x2="765" y2="220" stroke="#eab308" strokeWidth="1.5" />
          <line x1="800" y1="300" x2="800" y2="220" stroke="#3b82f6" strokeWidth="1.5" />

          {/* Interlocking Callout Box */}
          <g transform="translate(560, 360)">
            <rect x="0" y="0" width="310" height="75" fill="#030712" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" rx="6" />
            <text x="15" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">SAFETY ELECTRICAL INTERLOCKING:</text>
            <text x="15" y="38" fill="#94a3b8" fontSize="9.5">
              • KM2 (Star) coil circuit passes through KM3 (NC 21-22)
            </text>
            <text x="15" y="53" fill="#94a3b8" fontSize="9.5">
              • KM3 (Delta) coil circuit passes through KM2 (NC 21-22)
            </text>
            <text x="15" y="68" fill="#34d399" fontSize="9" fontWeight="bold">
              Guarantees dead short between phases is impossible!
            </text>
          </g>
        </svg>
      </div>

      {/* Footer Notes */}
      <div className="bg-slate-950 p-4 border-t border-slate-800 text-xs text-slate-400 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-cyan-400 font-semibold block mb-1">Star-Delta Inrush Reduction Physics</span>
          <p className="text-[11px] leading-relaxed">
            In Star connection: V_phase = V_line / √3 = 400V / 1.732 ≈ 230V. Because torque and current are proportional to voltage squared, starting current surge is reduced to approximately 1/3 of direct online value, protecting plant transformers and mains switchboards from heavy dips.
          </p>
        </div>
        <div>
          <span className="text-cyan-400 font-semibold block mb-1">Auxiliary Timer Changeover</span>
          <p className="text-[11px] leading-relaxed">
            On-delay electronic timer (KT1) features a timed break-before-make transition. Star contactor KM2 must physically drop out and arc extinguish before Delta contactor KM3 pulls in, preventing violent inter-phase flashovers.
          </p>
        </div>
      </div>
    </div>
  );
};
