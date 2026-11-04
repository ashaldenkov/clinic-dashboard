import React from 'react'
import DownloadIcon from '../assets/icons/download.svg'
import { v4 as uuidv4 } from 'uuid';


const LabResults = ({ clientData }) => {
  return (
    <div className='max-h-[296px] w-[367px] rounded-2xl bg-white ml-[33px] mt-8'>
      <div className='card-title-24pt pt-[20px] pl-[20px] pb-[27px]'>Lab Results</div>
      <div className='overflow-y-auto	 max-h-[176px] pb-[7px] mr-[22px]'>
        {clientData?.lab_results.map((analysis => {
          return (
            <div key={uuidv4()} className='flex justify-between items-center ml-[22px] px-4 h-10 hover:bg-bodyBg'>
              <div className='manrope-regular-13px'>{analysis}</div>
              <button>
                <img src={DownloadIcon} alt="DownloadIcon"/>
              </button>
            </div>
          )
        }))}
        {/* additional results because there were only few */}
        {clientData?.lab_results.map((analysis => {
          return (
            <div key={uuidv4()} className='flex justify-between items-center ml-[22px] px-4 h-10 hover:bg-bodyBg'>
              <div className='manrope-regular-13px'>{analysis}</div>
              <button>
                <img src={DownloadIcon} alt="DownloadIcon"/>
              </button>
            </div>
          )
        }))}
      </div>
    </div>
  )
}

export default LabResults