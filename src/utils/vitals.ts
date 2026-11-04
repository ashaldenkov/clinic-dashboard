import { format, isValid, parse } from 'date-fns';

import type { DiagnosisRecord } from '../types/patient';

interface DatedRecord {
  record: DiagnosisRecord;
  date: Date;
}

// Skip unparseable months so one bad record can't crash the chart.
function toChronological(history: readonly DiagnosisRecord[]): DatedRecord[] {
  return history
    .map((record) => ({
      record,
      date: parse(`${record.month} ${record.year}`, 'MMMM yyyy', new Date()),
    }))
    .filter(({ date }) => isValid(date))
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function getLatestRecord(history: readonly DiagnosisRecord[]): DiagnosisRecord | undefined {
  return toChronological(history).at(-1)?.record;
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
  const recent = toChronological(history).slice(-months);

  return {
    labels: recent.map(({ date }) => format(date, 'MMM, yyyy')),
    systolic: recent.map(({ record }) => record.blood_pressure.systolic.value),
    diastolic: recent.map(({ record }) => record.blood_pressure.diastolic.value),
  };
}
