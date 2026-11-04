import birthDateIcon from '../assets/icons/birth-date.svg';
import femaleIcon from '../assets/icons/female.svg';
import insuranceIcon from '../assets/icons/insurance.svg';
import maleIcon from '../assets/icons/male.svg';
import phoneIcon from '../assets/icons/phone.svg';
import jessicaTaylorPortrait from '../assets/images/jessica-taylor.png';
import type { Patient } from '../types/patient';
import { formatDateOfBirth } from '../utils/date';
import { Card } from './Card';

// The API only serves 96×96 avatars, which are blurry at 200×200.
const HIGH_RES_PORTRAITS: Record<string, string> = {
  'Jessica Taylor': jessicaTaylorPortrait,
};

export function PatientProfile({ patient }: { patient: Patient }) {
  const fields = [
    {
      label: 'Date Of Birth',
      value: formatDateOfBirth(patient.date_of_birth),
      icon: birthDateIcon,
    },
    {
      label: 'Gender',
      value: patient.gender,
      icon: patient.gender === 'Male' ? maleIcon : femaleIcon,
    },
    { label: 'Contact Info.', value: patient.phone_number, icon: phoneIcon },
    { label: 'Emergency Contacts', value: patient.emergency_contact, icon: phoneIcon },
    { label: 'Insurance Provider', value: patient.insurance_type, icon: insuranceIcon },
  ];

  return (
    <Card className="mt-[14px] ml-[33px] flex h-[740px] w-[367px] flex-col items-center px-5 py-8">
      <img
        src={HIGH_RES_PORTRAITS[patient.name] ?? patient.profile_picture}
        alt=""
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="mt-6 mb-8 text-title">{patient.name}</h2>

      <ul className="flex flex-col gap-6 self-start">
        {fields.map(({ label, value, icon }) => (
          <li key={label} className="flex items-center gap-4">
            <img src={icon} alt="" />
            <div>
              <p className="text-label">{label}</p>
              <p className="text-body font-bold">{value}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-10 w-[230px] rounded-full bg-accent py-[11px] text-body font-bold transition-colors duration-300 hover:bg-teal-200"
      >
        Show All Information
      </button>
    </Card>
  );
}
