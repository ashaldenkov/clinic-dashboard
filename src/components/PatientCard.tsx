import moreHorizontalIcon from '../assets/icons/more-horizontal.svg';
import type { Patient } from '../types/patient';
import { cx } from '../utils/cx';

interface PatientCardProps {
  patient: Patient;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

export function PatientCard({ patient, isSelected, onSelect }: PatientCardProps) {
  return (
    <div
      className={cx(
        'flex items-center justify-between py-4 pr-[30px] pl-5 hover:bg-accent-soft',
        isSelected && 'bg-accent-soft',
      )}
    >
      <button
        type="button"
        aria-current={isSelected ? 'true' : undefined}
        onClick={() => {
          onSelect(patient.name);
        }}
        className="flex items-center gap-3 text-left"
      >
        <img src={patient.profile_picture} alt="" className="size-12 rounded-full" />
        <span>
          <span className="block text-body font-bold">{patient.name}</span>
          <span className="block text-body text-muted">
            {patient.gender}, {patient.age}
          </span>
        </span>
      </button>
      <button type="button" aria-label={`More options for ${patient.name}`} className="size-5">
        <img src={moreHorizontalIcon} alt="" />
      </button>
    </div>
  );
}
