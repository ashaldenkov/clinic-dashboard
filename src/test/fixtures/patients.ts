import type { DiagnosisRecord, Level, Measurement, Patient } from '../../types/patient';

function measurement(value: number, levels: Level = 'Normal'): Measurement {
  return { value, levels };
}

export function makeRecord(
  month: string,
  year: number,
  bloodPressure: { systolic: number; diastolic: number } = { systolic: 120, diastolic: 80 },
): DiagnosisRecord {
  return {
    month,
    year,
    blood_pressure: {
      systolic: measurement(bloodPressure.systolic),
      diastolic: measurement(bloodPressure.diastolic),
    },
    heart_rate: measurement(72),
    respiratory_rate: measurement(16),
    temperature: measurement(98.6),
  };
}

// Mirrors the API: US date format, newest record first.
export const jessicaTaylor: Patient = {
  name: 'Jessica Taylor',
  gender: 'Female',
  age: 28,
  profile_picture: 'https://example.test/jessica.png',
  date_of_birth: '08/23/1996',
  phone_number: '(415) 555-1234',
  emergency_contact: '(415) 555-5678',
  insurance_type: 'Sunrise Health Assurance',
  diagnosis_history: [
    {
      month: 'March',
      year: 2024,
      blood_pressure: {
        systolic: measurement(160, 'Higher than Average'),
        diastolic: measurement(78, 'Lower than Average'),
      },
      heart_rate: measurement(78, 'Lower than Average'),
      respiratory_rate: measurement(20),
      temperature: measurement(98.6),
    },
    makeRecord('February', 2024),
  ],
  diagnostic_list: [
    {
      name: 'Hypertension',
      description: 'Chronic high blood pressure',
      status: 'Under Observation',
    },
    {
      name: 'Asthma',
      description: 'Recurrent episodes of bronchial constriction',
      status: 'Inactive',
    },
  ],
  lab_results: ['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays'],
};

// Mirrors API quirks: ISO date of birth, repeated diagnosis name.
export const ryanJohnson: Patient = {
  name: 'Ryan Johnson',
  gender: 'Male',
  age: 45,
  profile_picture: 'https://example.test/ryan.png',
  date_of_birth: '1979-11-02',
  phone_number: '(913) 228-2252',
  emergency_contact: '(761) 811-3559',
  insurance_type: 'Secure Travel Services',
  diagnosis_history: [makeRecord('March', 2024, { systolic: 130, diastolic: 85 })],
  diagnostic_list: [
    { name: 'Allergies', description: 'Immune reaction', status: 'Under observation' },
    { name: 'Allergies', description: 'Immune reaction', status: 'Cured' },
  ],
  lab_results: ['MRI'],
};

export const patients: Patient[] = [ryanJohnson, jessicaTaylor];
