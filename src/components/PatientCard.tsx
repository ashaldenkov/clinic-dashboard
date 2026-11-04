import ShowMore from '../assets/icons/more-horizontal.svg';
import type { Patient } from '../types/patient';

interface PatientCardProps {
  personData: Patient;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const PatientCard = ({ personData, isSelected, onSelect }: PatientCardProps) => {
  return (
    <div className={`pl-5 py-4 pr-[30px] flex justify-between items-center hover:bg-accent-soft ${isSelected ? 'bg-accent-soft' : ''}`}>
        <button
            className='flex items-center text-left'
            aria-current={isSelected ? 'true' : undefined}
            onClick={() => {
              onSelect(personData.name);
            }}
        >
            <img src={personData.profile_picture} alt="profileImg" className='w-[48px] h-[48px] rounded-full mr-3'/>
            <div>
                <div className='text-body font-bold'>{personData.name}</div>
                <div className='text-body font-normal text-muted'>{`${personData.gender}, ${personData.age}`}</div>
            </div>
        </button>
        <button className='w-5 h-5'>
            <img src={ShowMore} alt="ShowMore"/>
        </button>
    </div>
  )
}

export default PatientCard