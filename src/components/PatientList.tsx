import searchIcon from '../assets/icons/search.svg';
import type { Patient } from '../types/patient';
import { Card, CardTitle } from './Card';
import { PatientCard } from './PatientCard';

interface PatientListProps {
  patients: readonly Patient[];
  selectedName: string | undefined;
  onSelect: (name: string) => void;
}

export function PatientList({ patients, selectedName, onSelect }: PatientListProps) {
  return (
    <Card className="mt-[14px] mr-8 max-h-[1026px] w-[367px] pb-5">
      <div className="mx-5 mt-5 mb-6 flex items-center justify-between">
        <CardTitle>Patients</CardTitle>
        <button type="button" aria-label="Search patients">
          <img src={searchIcon} alt="" className="size-[18px]" />
        </button>
      </div>
      <ul className="max-h-[940px] overflow-y-auto">
        {patients.map((patient) => (
          <li key={patient.name}>
            <PatientCard
              patient={patient}
              isSelected={patient.name === selectedName}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
