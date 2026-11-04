import { format, parse } from 'date-fns';

import type { DiagnosisRecord } from '../types/patient';

function recordDate(record: DiagnosisRecord): Date {
  return parse(`${record.month} ${record.year}`, 'MMMM yyyy', new Date());
}

export function sortChronologically(history: readonly DiagnosisRecord[]): DiagnosisRecord[] {
  return history
    .map((record) => ({ record, time: recordDate(record).getTime() }))
    .sort((a, b) => a.time - b.time)
    .map(({ record }) => record);
}

export function getLatestRecord(history: readonly DiagnosisRecord[]): DiagnosisRecord | undefined {
  return sortChronologically(history).at(-1);
}

export interface BloodPressureSeries {
  labels: string[];
  systolic: number[];
  diastolic: number[];
}

export function getBloodPressureSeries(
  history: readonly DiagnosisRecord[],
  months: number,
): BloodPressureSeries {
  const recent = sortChronologically(history).slice(-months);

  return {
    labels: recent.map((record) => format(recordDate(record), 'MMM, yyyy')),
    systolic: recent.map((record) => record.blood_pressure.systolic.value),
    diastolic: recent.map((record) => record.blood_pressure.diastolic.value),
  };
}
