export interface Clip {
  id: number;
  clipNumber: string;
  attributeCount: number;
}

export interface ClipGroup {
  date: string;
  clips: Clip[];
  total: number;
}

export interface FixEntry {
  id: number;
  clipNumber: string;
  attributeCount: number;
  fixValue: number;
}