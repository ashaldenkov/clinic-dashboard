import type { Level } from '../../types/patient';
import { cx } from '../../utils/cx';
import { LevelIndicator } from './LevelIndicator';

interface VitalCardProps {
  icon: string;
  label: string;
  value: string;
  level: Level;
  className: string;
}

export function VitalCard({ icon, label, value, level, className }: VitalCardProps) {
  return (
    <div className={cx('h-[242px] w-[228px] rounded-xl p-4', className)}>
      <img src={icon} alt="" className="mb-4" />
      <p className="text-label-lg">{label}</p>
      <p className="mb-4 text-metric">{value}</p>
      <LevelIndicator level={level} />
    </div>
  );
}
