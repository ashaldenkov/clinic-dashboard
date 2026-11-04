import Search from '../assets/icons/search.svg';
import PatientCard from './PatientCard'
import type { Patient } from '../types/patient';

interface PatientListProps {
  patientList: Patient[];
  selectedName: string | undefined;
  onSelect: (name: string) => void;
}

const PatientList = ({ patientList, selectedName, onSelect }: PatientListProps) => {
  return (
    <div className='max-h-[1026px] w-[367px] rounded-2xl bg-white mt-[14px] mr-[32px] pb-5'>
      <div className='flex justify-between mx-5 mt-5 mb-6 items-center'>
        <div className='text-title'>Patients</div>
        <button>
          <img src={Search} alt="searchBtn" className='w-[18px] h-[18px] cursor-pointer'/>
        </button>
      </div>
      <div className='overflow-y-auto h-fit max-h-[940px]'>
        { patientList?.map( (card) => {
          return <PatientCard
            key={card.name}
            personData={card}
            isSelected={card.name === selectedName}
            onSelect={onSelect}
          />
        })}
        
      </div>
    </div>
  )
}

export default PatientList