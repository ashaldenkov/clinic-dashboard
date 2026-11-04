import React from 'react'
import Search from '../assets/icons/search.svg';
import PatientCard from './patientCard'
import { v4 as uuidv4 } from 'uuid';

const Patients = ({ patientList }) => {
  return (
    <div className='max-h-[1026px] w-[367px] rounded-2xl bg-white mt-[14px] mr-[32px] pb-5'>
      <div className='flex justify-between mx-5 mt-5 mb-6 items-center'>
        <div className='card-title-24pt'>Patients</div>
        <button>
          <img src={Search} alt="searchBtn" className='w-[18px] h-[18px] cursor-pointer'/>
        </button>
      </div>
      <div className='overflow-y-auto h-fit max-h-[940px]'>
        { patientList?.map( (card) => {
          return <PatientCard key={uuidv4()} personData={card}/>
        })}
        
      </div>
    </div>
  )
}

export default Patients