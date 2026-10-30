export interface SkillItem {
  name: string;
  description: string;
  keywords: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  skills: SkillItem[];
}

export interface ElectricalProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'starter' | 'diagram' | 'wiring';
  overview: string;
  operatingPrinciple: string;
  circuitComponents: {
    name: string;
    designation: string;
    role: string;
  }[];
  powerCircuitNotes: string[];
  controlCircuitNotes: string[];
  safetyAndInterlocking: string[];
  skillsApplied: string[];
  diagramType: 'dol' | 'star-delta' | 'control-logic' | 'power-dist';
}

export interface EducationItem {
  id: string;
  qualification: string;
  field: string;
  durationOrStatus: string;
  statusTag: 'Currently Studying' | 'Ongoing' | 'Completed';
  summary: string;
  highlights: string[];
}
