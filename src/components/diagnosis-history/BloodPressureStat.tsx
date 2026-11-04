import type { Measurement } from '../../types/patient';
import { cx } from '../../utils/cx';
import { LevelIndicator } from './LevelIndicator';

interface BloodPressureStatProps {
  label: string;
  measurement: Measurement;
  dotClassName: string;
  className?: string;
}

export function BloodPressureStat({
  label,
  measurement,
  dotClassName,
  className,
}: BloodPressureStatProps) {
  return (
    <div className={className}>
      <p className="mb-2 flex items-center gap-1 text-body font-bold">
        <span aria-hidden className={cx('size-3.5 rounded-full', dotClassName)} />
        {label}
      </p>
      <p className="text-metric-sm">{measurement.value}</p>
      <LevelIndicator level={measurement.levels} className="mt-1 pb-4" />
    </div>
  );
}
