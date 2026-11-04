import React from 'react'
import { format } from 'date-fns'

import BirthIcon from '../assets/icons/birth-date.svg'
import FemaleIcon from '../assets/icons/female.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import InsuranceIcon from '../assets/icons/insurance.svg'
import ProfileImage from '../assets/images/jessica-taylor.png'


const PatientProfile = ({clientData}) => {
  return (
    <div className='h-[740px] w-[367px] rounded-2xl bg-white ml-[33px] px-5 py-8 flex flex-col items-center mt-[14px]'>
      <img src={clientData?.name === 'Jessica Taylor' ? ProfileImage : clientData?.profile_picture} alt="ProfilePicture" width={200} height={200}/>
      <div className='card-title-24pt mt-6 mb-8'>{clientData?.name}</div>
      <div className='self-start'>
        <div className='flex items-center'>
          <img src={BirthIcon} alt="BirthIcon" className='mr-4'/>
          <div>
            <div className='manrope-medium-14px'>Date Of Birth</div>
            <div className='manrope-bold-14px'>{clientData?.date_of_birth ? format(clientData?.date_of_birth, 'MMMM d, y') : ''}</div>
          </div>
        </div>
        <div className='flex items-center mt-6'>
          <img src={FemaleIcon} alt="FemaleIcon" className='mr-4'/>
          <div>
            <div className='manrope-medium-14px'>Gender</div>
            <div className='manrope-bold-14px'>{clientData?.gender}</div>
          </div>
        </div>
        <div className='flex items-center mt-6'>
          <img src={PhoneIcon} alt="PhoneIcon" className='mr-4'/>
          <div>
            <div className='manrope-medium-14px'>Contact Info.</div>
            <div className='manrope-bold-14px'>{clientData?.phone_number}</div>
          </div>
        </div>
        <div className='flex items-center mt-6'>
          <img src={PhoneIcon} alt="EmergencyPhoneIcon" className='mr-4'/>
          <div>
            <div className='manrope-medium-14px'>Emergency Contacts</div>
            <div className='manrope-bold-14px'>{clientData?.emergency_contact}</div>
          </div>
        </div>
        <div className='flex items-center mt-6'>
          <img src={InsuranceIcon} alt="InsuranceIcon" className='mr-4'/>
          <div>
            <div className='manrope-medium-14px'>Insurance Provider</div>
            <div className='manrope-bold-14px'>{clientData?.insurance_type}</div>
          </div>
        </div>
      </div>
      <button className='bg-activeState w-[230px] py-[11px] rounded-full body-emphasized-14pt text-center mt-10 hover:bg-teal-200 duration-300'>Show All Information</button>
    </div>
  )
}

export default PatientProfile