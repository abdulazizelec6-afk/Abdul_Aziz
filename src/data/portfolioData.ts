import { SkillCategory, ElectricalProject, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdul Aziz',
  title: 'Industrial Electrical Technician',
  tagline: 'Motor Starter Wiring · Electrical Control Circuits · Electrical Diagrams',
  phone: '+92 3452489424',
  email: 'abdulaziz.elec6@gmail.com',
  location: 'Pakistan (Open to Relocation / Industrial Shifts)',
  photoUrl: '/assets/aistudio/cv-image_f0e30f52.jpeg',
  cvPdfUrl: '/assets/aistudio/ABDUL_AZIZ_CV__2__a50b76d0.pdf',
  summary:
    'Entry-level Industrial Electrical Technician with hands-on training in motor control wiring and electrical drawing, currently studying for a DAE in Electrical Technology alongside an Industrial Electrician course. Combines practical wiring ability with a clear understanding of control circuit operation and safe working practice. Seeking an entry-level industrial electrical maintenance role in a factory, mill or electrical contractor, with a long-term interest in automation.',
  careerObjective:
    'To join a forward-thinking industrial manufacturing plant, processing mill, or electrical engineering contractor as a hands-on electrical technician. Eager to apply motor control troubleshooting, panel wiring diligence, and schematic interpretation while continually developing capabilities in industrial automation and process control systems.',
  languages: [
    { language: 'English', proficiency: 'Professional Working Proficiency' },
    { language: 'Urdu', proficiency: 'Native / Bilingual' },
  ],
  computerSkills: [
    'MS Word',
    'MS Excel',
    'MS PowerPoint',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'motor-starter-wiring',
    title: 'Motor Starter Wiring',
    iconName: 'Zap',
    summary:
      'Assembly, physical wiring, and testing of 3-phase AC induction motor starters with electrical and mechanical safety interlocks.',
    skills: [
      {
        name: 'Direct-On-Line (DOL) Starter Assembly & Wiring',
        description:
          'Full construction of DOL starters combining 3-pole contactors, thermal overload relays, start/stop push buttons, and 13-14 NO holding contacts.',
        keywords: ['DOL Starter', 'Contactor Coil A1-A2', 'Hold-on Contact', '3-Phase Motor'],
      },
      {
        name: 'Star-Delta (Wye-Delta) Starter Assembly & Wiring',
        description:
          'Hands-on assembly of 3-contactor configurations (Main, Star, Delta) with pneumatic/electronic timer changeover to limit inrush current.',
        keywords: ['Main Contactor', 'Star Contactor', 'Delta Contactor', 'Timer Relay', 'Reduced Inrush'],
      },
      {
        name: 'Forward-Reverse Starter Circuits',
        description:
          'Circuit architecture and contactor phase-reversal swapping (swapping two phase leads) guarded with electrical cross-interlocking.',
        keywords: ['Phase Inversion', 'Interlocking Contacts', 'Directional Control'],
      },
      {
        name: 'Contactor Interlocking & 3-Phase Motor Control',
        description:
          'Wiring auxiliary NC contacts in series with opposing coils to prevent catastrophic short circuits between phases during switching transitions.',
        keywords: ['Auxiliary NC Interlock', 'Short-Circuit Prevention', 'Sequence Control'],
      },
    ],
  },
  {
    id: 'electrical-diagrams',
    title: 'Electrical Diagrams & Schematics',
    iconName: 'FileSpreadsheet',
    summary:
      'Drafting, reading, and tracing industrial electrical diagrams from conceptual schematics to real physical panel terminals.',
    skills: [
      {
        name: 'Power Circuit Diagrams',
        description:
          'Drawing and interpreting main incoming 3-phase lines (L1, L2, L3, PE), circuit breaker isolation, contactor main contacts, and motor terminal wiring.',
        keywords: ['L1-L2-L3 Lines', 'Main Power Bus', 'Thermal Elements', 'Motor Terminal Box'],
      },
      {
        name: 'Control Circuit Diagrams',
        description:
          'Tracing single-phase control logic, control transformers/fuses, emergency stop buttons, start/stop stations, coil energization, and indicator lamps.',
        keywords: ['Ladder / Schematic', 'Control Transformer', 'E-Stop', 'Coil Circuit'],
      },
      {
        name: 'Standard Electrical Symbols & Terminal Numbering',
        description:
          'Applying standardized IEC/NEMA graphical symbols for contactors, relays, thermal elements, switches, and assigning unambiguous terminal numbers.',
        keywords: ['IEC Symbols', 'Terminal Numbers (A1/A2, 13/14, 95/96)', 'Wire Ferruling'],
      },
      {
        name: 'Sequence of Operation Tracing',
        description:
          'Analyzing electrical drawings step-by-step to predict circuit behavior, verify NO/NC status at each phase of operation, and troubleshoot faults.',
        keywords: ['Logic Tracing', 'Fault Isolation', 'Circuit Verification'],
      },
    ],
  },
  {
    id: 'switchgear-protection',
    title: 'Switchgear & Panel Components',
    iconName: 'ShieldAlert',
    summary:
      'Component identification, rating assessment, mounting, and wiring of protection devices and operator controls.',
    skills: [
      {
        name: 'Contactors & Auxiliary Contacts',
        description:
          'Selection and wiring of electromagnetic contactors with AC coils (220V/400V) and NO/NC auxiliary blocks for interlocking and status signaling.',
        keywords: ['Main Contacts', 'Auxiliary Block', 'Coil Ratings', 'AC-3 Duty'],
      },
      {
        name: 'Thermal Overload Relays (OLR)',
        description:
          'Mounting directly below contactors, setting motor full-load ampere (FLA) trip thresholds, and wiring 95-96 NC contact into the control trip loop.',
        keywords: ['Bimetallic Strip', 'Current Setting (FLA)', 'Manual/Auto Reset', '95-96 Trip Contact'],
      },
      {
        name: 'Timer Relays & Control Relays',
        description:
          'Configuration of on-delay timers for automated Star-Delta transitions and multi-pole control relays for signal amplification and isolation.',
        keywords: ['On-Delay Timing', 'Control Relays', 'Star-Delta Changeover'],
      },
      {
        name: 'Circuit Breakers: MCB & MCCB Protection',
        description:
          'Installation of Miniature Circuit Breakers (MCB) for branch and control protection and Molded Case Circuit Breakers (MCCB) for high-current mains.',
        keywords: ['MCB Type C/D', 'MCCB Isolation', 'Short Circuit & Overcurrent', 'Backup Fuses'],
      },
      {
        name: 'Pilot Devices & Panel Hardware',
        description:
          'Mounting push buttons, 2/3-position selector switches, LED indicator lamps (Run/Stop/Trip), DIN rail channels, and slotted wire trunking ducts.',
        keywords: ['Push Buttons', 'Selector Switches', 'Indicator Lamps', 'DIN Rail & Trunking'],
      },
    ],
  },
  {
    id: 'electrical-installation',
    title: 'Electrical Installation & Safety',
    iconName: 'Wrench',
    summary:
      'Rigorous execution of domestic and light industrial wiring installations adhering to electrical safety and isolation protocols.',
    skills: [
      {
        name: 'Domestic & Lighting Circuit Wiring',
        description:
          'Wiring residential and commercial lighting branch circuits, one-way and two-way staircase switching, and power socket outlets.',
        keywords: ['Lighting Circuits', 'Two-Way Switching', 'Power Sockets', 'Cable Sizing'],
      },
      {
        name: 'Distribution Board (DB) Terminations',
        description:
          'Connecting main isolators, RCCB/ELCB earth leakage units, busbars, neutral links, and protective earth bars with neat wire routing.',
        keywords: ['Distribution Board', 'Earth Leakage / RCCB', 'Busbar Connections', 'Cable Dressing'],
      },
      {
        name: 'Electrical Isolation & Safe Working Practices',
        description:
          'Executing safe isolation procedures (proving dead with multimeter/voltage tester), Lockout/Tagout (LOTO) awareness, and personal protective equipment (PPE).',
        keywords: ['Safe Isolation', 'Proving Dead', 'LOTO Awareness', 'Electrical Safety'],
      },
    ],
  },
];

export const ELECTRICAL_PROJECTS: ElectricalProject[] = [
  {
    id: 'dol-motor-starter',
    title: 'DOL (Direct-On-Line) Motor Starter',
    subtitle: 'Full Power & Control Circuit Wiring with Thermal Overload Protection',
    category: 'starter',
    diagramType: 'dol',
    overview:
      'The Direct-On-Line (DOL) starter is the foundational motor starting mechanism in industrial plants for small to medium 3-phase squirrel cage induction motors (typically up to 5 HP). It connects the motor stator windings directly to full supply voltage upon start command while providing essential overcurrent and thermal overload safety.',
    operatingPrinciple:
      'Pressing the Green START push button (Normally Open) energizes contactor coil KM1 (terminals A1-A2). Contactor auxiliary contact 13-14 (NO) closes simultaneously, providing a continuous latching path around the START button so the contactor remains held in after releasing the button. The main power poles 1-3-5 connect to 2-4-6, transmitting 3-phase power through thermal overload relay FR1 to the motor terminals. Pressing the Red STOP button (Normally Closed) or tripping of overload contact 95-96 interrupts coil supply, instantly de-energizing KM1 and halting the motor safely.',
    circuitComponents: [
      { name: '3-Pole Main Contactor', designation: 'KM1', role: 'Main electromagnetic switch connecting line voltage to motor terminals' },
      { name: 'Thermal Overload Relay', designation: 'FR1', role: 'Bimetallic thermal protection calibrated to motor rated full-load current (FLA)' },
      { name: 'Start Push Button (Green)', designation: 'SB2 (NO)', role: 'Momentary normally-open contact to initiate coil energization' },
      { name: 'Stop Push Button (Red)', designation: 'SB1 (NC)', role: 'Momentary normally-closed contact to break control loop' },
      { name: 'Auxiliary Hold Contact', designation: 'KM1 (13-14 NO)', role: 'Seal-in / latching contact maintaining circuit after button release' },
      { name: 'Overload Trip Contact', designation: 'FR1 (95-96 NC)', role: 'Normally closed trip contact that opens upon motor overcurrent' },
      { name: 'Indicator Lamps', designation: 'HL1 (Green) / HL2 (Red)', role: 'Run status and Trip warning visualization' },
    ],
    powerCircuitNotes: [
      'Line supply connected via 3-pole MCB/MCCB isolator (L1, L2, L3 + Protective Earth).',
      'Phase conductors route into contactor main poles 1/L1, 3/L2, 5/L3 and exit at 2/T1, 4/T2, 6/T3.',
      'Thermal overload relay heater elements directly coupled to contactor output terminals.',
      'Motor cable terminates in motor terminal box connected to U1, V1, W1 with star or delta links.'
    ],
    controlCircuitNotes: [
      'Control voltage sourced from single phase (L1 to Neutral or 230V control transformer).',
      'Circuit chain: Control fuse -> FR1 (95-96 NC) -> SB1 (STOP NC) -> SB2 (START NO) / KM1 (13-14 NO in parallel) -> KM1 Coil (A1-A2) -> Neutral.',
      'Emergency stop and overload contact placed in series before the start station for fail-safe isolation.'
    ],
    safetyAndInterlocking: [
      'Fail-safe series loop: Any break in the control string instantly drops the contactor coil.',
      'Manual reset on thermal overload prevents unexpected auto-restarting after cool down.',
      'Protective grounding conductor bonded to motor chassis and enclosure backplate.'
    ],
    skillsApplied: [
      'Contactor Coil Wiring (A1-A2)',
      'Latching Circuit Implementation (13-14 NO)',
      'Thermal Overload Calibration (95-96 NC)',
      'Power Bus Routing & Cable Dressing',
      'Control Circuit Logic Tracing',
    ],
  },
  {
    id: 'star-delta-starter',
    title: 'Star-Delta (Wye-Delta) Motor Starter',
    subtitle: 'Reduced-Voltage Starting System with Automatic Timer Transition & Interlocking',
    category: 'starter',
    diagramType: 'star-delta',
    overview:
      'Star-Delta starting is standard industrial practice for large 3-phase induction motors (typically above 5 HP/7.5 kW) to mitigate severe inrush current surges (which can reach 6 to 8 times nominal current on direct start). By initially configuring the stator windings in Star, voltage across each winding is reduced by 1/√3 (~58%), dropping starting current and torque to ~33% before switching automatically to full-voltage Delta.',
    operatingPrinciple:
      'When the START button is actuated, the Star contactor (KM2) pulls in first, bridging motor terminals U2-V2-W2 together. An auxiliary contact on KM2 immediately signals the Main contactor (KM1) to close, delivering line power to U1-V1-W1 and starting the motor in Star configuration. Concurrently, an electronic on-delay timer (KT1) begins timing down (typically 5 to 10 seconds). Upon timeout, KT1 opens its timed NC contact to de-energize KM2 (Star) and closes its timed NO contact to energize KM3 (Delta), connecting winding ends across full line voltage (U1-W2, V1-U2, W1-V2). Rigorous electrical interlocks between KM2 and KM3 guarantee both contactors can never close together.',
    circuitComponents: [
      { name: 'Main Contactor', designation: 'KM1', role: 'Feeds line voltage to winding start terminals (U1, V1, W1)' },
      { name: 'Star Contactor', designation: 'KM2', role: 'Bridges winding finish terminals (U2, V2, W2) to form star neutral point' },
      { name: 'Delta Contactor', designation: 'KM3', role: 'Connects winding finishes across opposing phase lines for full run speed' },
      { name: 'On-Delay Timer Relay', designation: 'KT1', role: 'Governs precise dwell time in Star before triggering transition to Delta' },
      { name: 'Electrical Interlock Blocks', designation: 'KM2 (NC) & KM3 (NC)', role: 'Series-wired cross contacts that mechanically prohibit simultaneous pull-in' },
      { name: 'Thermal Overload Relay', designation: 'FR1', role: 'Calibrated to line current (if before split) or phase current (0.58 x FLA) inside delta loop' },
    ],
    powerCircuitNotes: [
      'Six conductors run from starter enclosure to motor terminal box (U1, V1, W1 and U2, V2, W2).',
      'KM1 supplies U1, V1, W1 through thermal overload relay elements.',
      'KM2 shorts together U2, V2, and W2 during initial acceleration.',
      'KM3 connects U1 to W2, V1 to U2, and W1 to V2 to form closed delta mesh upon transition.'
    ],
    controlCircuitNotes: [
      'Sequence interlock: Star contactor KM2 must physically verify closure before Main contactor KM1 receives coil energization.',
      'Timer KT1 initiates on Star pull-in; transition incorporates a break-before-make dead time (approx 30-50ms) to extinguish switching arcs.',
      'Hold-on contact on Main contactor KM1 ensures uninterrupted run when timer cycles.'
    ],
    safetyAndInterlocking: [
      'Electrical cross-interlocking: KM2 coil circuit routes through NC contact of KM3; KM3 coil circuit routes through NC contact of KM2.',
      'Mechanical interlocking bar between Star and Delta contactor frames prevents physical arm pull-in simultaneously.',
      'Overload trip safely shuts down all three contactors instantaneously.'
    ],
    skillsApplied: [
      'Three-Contactor Architecture',
      'Electronic Timer Timing Calibration',
      'Electrical Cross-Interlocking (NO/NC)',
      '6-Wire Motor Terminal Box Hookup',
      'Inrush Current Surge Mitigation',
    ],
  },
  {
    id: 'electrical-control-diagrams',
    title: 'Electrical Control Circuit Diagrams',
    subtitle: 'Schematic Logic Design, Ferruling Standards & Standard Symbols',
    category: 'diagram',
    diagramType: 'control-logic',
    overview:
      'Control circuit schematics represent the logical brain of an industrial automation cabinet. Unlike physical layout drawings, control diagrams are organized strictly by functional sequence from left to right or top to bottom between positive/line and neutral/negative rails, emphasizing clarity, terminal designations, and fail-safe interlocking.',
    operatingPrinciple:
      'Control schematics use standardized graphical symbols and alphanumeric terminal references (e.g., A1-A2 for electromagnetic coils, 13-14 for Normally Open auxiliary contacts, 21-22 for Normally Closed interlocks, 95-96 for Overload trip contacts). Reading a schematic involves following current flow from the control supply through emergency stop contacts, permissive conditions, selector switches, and push buttons to load devices (coils, timers, pilot lamps). Wire numbers (ferrules) update at every junction or component terminal, facilitating straightforward fault finding with a digital multimeter.',
    circuitComponents: [
      { name: 'Line & Neutral Power Rails', designation: 'L / N (or +24V / 0V)', role: 'Boundary supply rails between which all control rungs are suspended' },
      { name: 'Emergency Stop Pushbutton', designation: 'SB0 (E-Stop)', role: 'Mushroom head latching NC contact positioned at the head of all control rungs' },
      { name: 'Start / Stop Pushbuttons', designation: 'SB_Start (NO) / SB_Stop (NC)', role: 'Local operator control stations for manual initiation and stop' },
      { name: 'Coil & Relay Symbols', designation: 'KM, KA, KT', role: 'Standard rectangular/circular coil representations with pin callouts' },
      { name: 'Wire Number Ferrules', designation: '1, 2, 3, 4...', role: 'Sequential identification tags assigned to every electrical node for troubleshooting' },
    ],
    powerCircuitNotes: [
      'Separated from high-voltage power lines to eliminate induction noise and improve safety.',
      'Protected by dedicated single-pole control MCB (typically 2A to 6A Type C).',
      'Supplied via step-down control transformer when line supply exceeds standard 220V/24V control levels.'
    ],
    controlCircuitNotes: [
      'Rungs are systematically drawn horizontally or vertically with wire numbers tagged at every transition.',
      'Cross-reference notations below contactor coils indicate which sheets/rungs contain associated auxiliary contacts.',
      'Status indicators wired directly in parallel with coils or through dedicated auxiliary signaling contacts.'
    ],
    safetyAndInterlocking: [
      'Fail-safe principle: All safety devices (E-stop, thermal overload, limit switches) use Normally Closed (NC) contacts wired in series.',
      'Wire breakage immediately ceases operation rather than allowing unsafe running.',
      'All neutral connections return directly to common neutral rail without intervening switches.'
    ],
    skillsApplied: [
      'IEC/NEMA Graphical Symbol Drafting',
      'Terminal Reference Numbering (A1/A2, 13/14, 21/22)',
      'Wire Ferruling & Node Identification',
      'Systematic Multimeter Fault Isolation',
      'Fail-Safe Series Logic Architecture',
    ],
  },
  {
    id: 'electrical-power-diagrams',
    title: 'Electrical Power Circuit Diagrams',
    subtitle: '3-Phase Power Distribution, Switchgear Sizing & Motor Connections',
    category: 'diagram',
    diagramType: 'power-dist',
    overview:
      'Power circuit schematics depict the heavy-current electrical path carrying raw 3-phase electrical energy (380V/400V/415V AC) from the main plant distribution busbar down through branch isolation, magnetic contactors, and thermal protection elements straight to inductive motor loads.',
    operatingPrinciple:
      'The power diagram focuses on conductor sizing, phase identification (L1-Red, L2-Yellow, L3-Blue or modern L1/L2/L3 with PE), continuous current capacities, and breaking capabilities. It illustrates the physical sequence of switchgear: incoming disconnect switch / MCCB -> branch MCB -> primary contactor line contacts -> overload relay heater bi-metals -> terminal blocks -> motor stator coils. In forward-reverse systems, the power diagram demonstrates how two contactors exchange two incoming phases while holding the third phase steady to reverse rotor magnetic field rotation.',
    circuitComponents: [
      { name: 'Mains Disconnect / MCCB', designation: 'QF1', role: 'High breaking capacity protection against major phase faults and short-circuits' },
      { name: 'Main Power Contactors', designation: 'KM1, KM2', role: 'Heavy silver-alloy main contacts rated for inductive motor switching (AC-3)' },
      { name: 'Thermal Overload Units', designation: 'FR1', role: 'Directly in-line current sensing heaters with adjustable trip curve' },
      { name: '3-Phase Induction Motor', designation: 'M1 (3~)', role: 'Stator windings configured in Star (Y) or Delta (Δ) terminal box' },
      { name: 'Protective Conductor', designation: 'PE', role: 'Low-impedance copper ground bonding for human and equipment safety' },
    ],
    powerCircuitNotes: [
      'Shows full 3-phase line conductors (L1, L2, L3) and protective earth (PE) drawn with heavy line weight.',
      'Details motor terminal designations (U1-V1-W1 and U2-V2-W2) and strap bar arrangements.',
      'Highlights phase swapping sequence (e.g., L1 to W1, L2 to V1, L3 to U1) in reversing starters.'
    ],
    controlCircuitNotes: [
      'Control takeoff tapped safely between one phase and neutral with dedicated miniature fuse.',
      'Auxiliary contacts shown dotted or referenced back to the companion control schematic.'
    ],
    safetyAndInterlocking: [
      'Coordination Type 2 protection consideration: ensures switchgear withstands short-circuit without welding contacts.',
      'Color-coded grounding conductors (Green/Yellow) bonded directly to steel enclosure frame.',
      'Clear clearance and creepage spacing maintained between bare phase busbars.'
    ],
    skillsApplied: [
      '3-Phase Power Bus Routing',
      'AC-3 Contactor Selection & Ampere Rating',
      'Phase Rotation & Reversal Mechanics',
      'Protective Earthing & Grounding Paths',
      'Motor Terminal Box Link Configurations',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'dae-electrical',
    qualification: 'Diploma of Associate Engineer (DAE)',
    field: 'Electrical Technology',
    durationOrStatus: 'First Year | Currently Studying',
    statusTag: 'Currently Studying',
    summary:
      'Rigorous three-year technical engineering diploma program covering theoretical foundations and practical laboratory training in AC/DC electrical machines, circuit analysis, industrial measurements, and electrical technology.',
    highlights: [
      'Circuit theory: Ohm’s law, Kirchhoff’s laws (KVL/KCL), series/parallel networks, and AC power factor fundamentals.',
      'Principles of single-phase and 3-phase AC machines, transformers, and induction motors.',
      'Electrical measurement instruments: analog/digital multimeters, clamp meters, insulation resistance megohmmeter.',
      'Foundation for future advancement in industrial automation, process control, and electrical plant maintenance.',
    ],
  },
  {
    id: 'industrial-electrician',
    qualification: 'Industrial Electrician Course',
    field: 'Vocational Technical Training',
    durationOrStatus: '1.5-Year Program | First 6 Months Completed | Ongoing',
    statusTag: 'Ongoing',
    summary:
      'Intensive hands-on practical vocational training program concentrated specifically on motor starter assembly, control panel wiring, switchgear installation, and industrial drawing interpretation.',
    highlights: [
      'First 6 months successfully completed with extensive workshop bench wiring practice.',
      'Assembled and wired full-scale DOL and Star-Delta motor starter panels with functional power and control circuits.',
      'Hands-on mounting and wiring of contactors, overload relays, on-delay timer relays, and auxiliary blocks.',
      'Applied NO/NC electrical and mechanical contactor interlocking to prevent inter-phase short circuits.',
      'Studied industrial control panel layout, DIN rail component placement, trunking duct dressing, and wire numbering.',
      'Wired domestic lighting circuits, two-way switching, socket outlets, and distribution board connections with proper safe isolation.',
    ],
  },
  {
    id: 'matriculation',
    qualification: 'Matriculation',
    field: 'Secondary School Certificate',
    durationOrStatus: 'Completed',
    statusTag: 'Completed',
    summary:
      'Completed secondary school education providing a strong foundation in mathematics, physics, and technical science subjects.',
    highlights: [
      'Solid grounding in physics: magnetism, electromagnetism, conductors, and basic electricity principles.',
      'Mathematics: algebra, geometry, trigonometry, and technical calculations.',
      'Clear documentation, discipline, and scientific problem-solving approach.',
    ],
  },
];
