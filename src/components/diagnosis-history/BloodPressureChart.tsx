import './chartSetup';

import type { ChartData, ChartOptions } from 'chart.js';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import type { DiagnosisRecord } from '../../types/patient';
import { getBloodPressureSeries } from '../../utils/vitals';

// Canvas can't read CSS variables; keep in sync with --color-systolic / --color-diastolic.
const SYSTOLIC_STYLE = { backgroundColor: '#e66fd2', borderColor: '#c26eb4' };
const DIASTOLIC_STYLE = { backgroundColor: '#8c6fe6', borderColor: '#7e6cab' };

const OPTIONS: ChartOptions<'line'> = {
  responsive: true,
  elements: {
    point: { radius: 7 },
    line: { borderWidth: 2 },
  },
  scales: {
    x: { grid: { display: false } },
  },
};

interface BloodPressureChartProps {
  history: readonly DiagnosisRecord[];
  months: number;
}

export function BloodPressureChart({ history, months }: BloodPressureChartProps) {
  const data = useMemo<ChartData<'line'>>(() => {
    const series = getBloodPressureSeries(history, months);
    const common = { pointBorderColor: 'white', tension: 0.4 };

    return {
      labels: series.labels,
      datasets: [
        { label: 'Systolic', data: series.systolic, ...SYSTOLIC_STYLE, ...common },
        { label: 'Diastolic', data: series.diastolic, ...DIASTOLIC_STYLE, ...common },
      ],
    };
  }, [history, months]);

  // A short history plots fewer points than `months`.
  const monthsShown = data.labels?.length ?? 0;

  return (
    <Line
      data={data}
      options={OPTIONS}
      height={140}
      role="img"
      aria-label={`Blood pressure chart for the last ${monthsShown} ${monthsShown === 1 ? 'month' : 'months'}`}
    />
  );
}
