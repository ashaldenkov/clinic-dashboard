import expandMoreIcon from '../../assets/icons/expand-more.svg';
import heartRateIcon from '../../assets/icons/heart-rate.svg';
import respiratoryRateIcon from '../../assets/icons/respiratory-rate.svg';
import temperatureIcon from '../../assets/icons/temperature.svg';
import type { DiagnosisRecord } from '../../types/patient';
import { getLatestRecord } from '../../utils/vitals';
import { Card, CardTitle } from '../Card';
import { BloodPressureChart } from './BloodPressureChart';
import { BloodPressureStat } from './BloodPressureStat';
import { VitalCard } from './VitalCard';

const PERIOD_MONTHS = 6;

export function DiagnosisHistory({ history }: { history: readonly DiagnosisRecord[] }) {
  const latest = getLatestRecord(history);

  return (
    <Card className="mt-[14px] h-[673px] w-[766px] p-5">
      <CardTitle>Diagnosis History</CardTitle>

      <div className="mt-10 mb-5 flex h-[298px] justify-between rounded-xl bg-chart-bg p-4">
        <div className="w-full">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-subtitle">Blood Pressure</h3>
            <button type="button" className="mr-8 flex items-center gap-4 text-body">
              Last {PERIOD_MONTHS} months
              <img src={expandMoreIcon} alt="" />
            </button>
          </div>
          <BloodPressureChart history={history} months={PERIOD_MONTHS} />
        </div>

        {latest && (
          <div className="ml-4 w-[208px] shrink-0">
            <BloodPressureStat
              label="Systolic"
              measurement={latest.blood_pressure.systolic}
              dotClassName="bg-systolic"
              className="border-b border-chart-divider"
            />
            <BloodPressureStat
              label="Diastolic"
              measurement={latest.blood_pressure.diastolic}
              dotClassName="bg-diastolic"
              className="mt-4"
            />
          </div>
        )}
      </div>

      {latest ? (
        <div className="flex gap-x-5">
          <VitalCard
            icon={respiratoryRateIcon}
            label="Respiratory Rate"
            value={`${latest.respiratory_rate.value} bpm`}
            level={latest.respiratory_rate.levels}
            className="bg-respiratory"
          />
          <VitalCard
            icon={temperatureIcon}
            label="Temperature"
            value={`${latest.temperature.value}°F`}
            level={latest.temperature.levels}
            className="bg-temperature"
          />
          <VitalCard
            icon={heartRateIcon}
            label="Heart Rate"
            value={`${latest.heart_rate.value} bpm`}
            level={latest.heart_rate.levels}
            className="bg-heart-rate"
          />
        </div>
      ) : (
        <p className="text-body text-muted">No vitals recorded yet.</p>
      )}
    </Card>
  );
}
