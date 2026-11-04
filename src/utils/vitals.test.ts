import { describe, expect, it } from 'vitest';

import { makeRecord } from '../test/fixtures/patients';
import { getBloodPressureSeries, getLatestRecord } from './vitals';

// Newest first, as the API returns it.
const history = [
  makeRecord('March', 2024, { systolic: 160, diastolic: 78 }),
  makeRecord('February', 2024, { systolic: 150, diastolic: 75 }),
  makeRecord('January', 2024, { systolic: 140, diastolic: 72 }),
  makeRecord('December', 2023, { systolic: 130, diastolic: 70 }),
  makeRecord('November', 2023, { systolic: 120, diastolic: 68 }),
  makeRecord('October', 2023, { systolic: 110, diastolic: 66 }),
  makeRecord('September', 2023, { systolic: 100, diastolic: 64 }),
];

describe('getLatestRecord', () => {
  it('returns the most recent record regardless of input order', () => {
    expect(getLatestRecord([...history].reverse())).toMatchObject({ month: 'March', year: 2024 });
  });

  it('returns undefined for an empty history', () => {
    expect(getLatestRecord([])).toBeUndefined();
  });
});

describe('getBloodPressureSeries', () => {
  it('returns the last N months in chronological order', () => {
    expect(getBloodPressureSeries(history, 6)).toEqual({
      labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
      systolic: [110, 120, 130, 140, 150, 160],
      diastolic: [66, 68, 70, 72, 75, 78],
    });
  });

  it('returns everything available when the history is shorter than the period', () => {
    expect(getBloodPressureSeries(history.slice(0, 2), 6).labels).toEqual([
      'Feb, 2024',
      'Mar, 2024',
    ]);
  });

  it('returns empty series for an empty history', () => {
    expect(getBloodPressureSeries([], 6)).toEqual({ labels: [], systolic: [], diastolic: [] });
  });
});

describe('records with an unrecognized month', () => {
  // Placed last: with a NaN sort key it would be taken as the latest record.
  const withBadRecord = [
    ...history,
    makeRecord('Unknown', 2024, { systolic: 999, diastolic: 999 }),
  ];

  it('are left out of the series instead of throwing', () => {
    expect(getBloodPressureSeries(withBadRecord, 6)).toEqual(getBloodPressureSeries(history, 6));
  });

  it('are never picked as the latest record', () => {
    expect(getLatestRecord(withBadRecord)).toMatchObject({ month: 'March', year: 2024 });
  });
});
