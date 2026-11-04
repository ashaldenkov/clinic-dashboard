// snake_case is kept as-is from the API.

export type Level = 'Higher than Average' | 'Lower than Average' | 'Normal';

export interface Measurement {
  value: number;
  levels: Level;
}

export interface DiagnosisRecord {
  month: string;
  year: number;
  blood_pressure: {
    systolic: Measurement;
    diastolic: Measurement;
  };
  heart_rate: Measurement;
  respiratory_rate: Measurement;
  temperature: Measurement;
}

export interface Diagnosis {
  name: string;
  description: string;
  status: string;
}

export type Gender = 'Male' | 'Female';

export interface Patient {
  /** Used as the id: the API has none. */
  name: string;
  gender: Gender;
  age: number;
  profile_picture: string;
  /** The API mixes `yyyy-MM-dd` and `MM/dd/yyyy`. */
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisRecord[];
  diagnostic_list: Diagnosis[];
  lab_results: string[];
}
