import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import arrowUpIcon from '../../assets/icons/arrow-up.svg';
import type { Level } from '../../types/patient';
import { cx } from '../../utils/cx';

const LEVEL_ICONS: Partial<Record<Level, string>> = {
  'Higher than Average': arrowUpIcon,
  'Lower than Average': arrowDownIcon,
};

export function LevelIndicator({ level, className }: { level: Level; className?: string }) {
  const icon = LEVEL_ICONS[level];

  return (
    <p className={cx('flex items-center gap-2 text-body', className)}>
      {icon && <img src={icon} alt="" />}
      {level}
    </p>
  );
}
