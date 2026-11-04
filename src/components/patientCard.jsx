import React from 'react'
import ShowMore from '../assets/icons/more-horizontal.svg';

const PatientCard = ({personData}) => {
  return (
    <div className={`pl-5 py-4 pr-[30px] flex justify-between items-center hover:bg-activePatient ${personData.name === 'Jessica Taylor' ? 'bg-activePatient' : ''}`}>
        <button className='flex items-center '>
            <img src={personData.profile_picture} alt="profileImg" className='w-[48px] h-[48px] rounded-full mr-3'/>
            <div>
                <div className='body-emphasized-14pt'>{personData.name}</div>
                <div className='body-secondary-info-14pt'>{`${personData.gender}, ${personData.age}`}</div>
            </div>
        </button>
        <button className='w-5 h-5'>
            <img src={ShowMore} alt="ShowMore"/>
        </button>
    </div>
  )
}

export default PatientCard