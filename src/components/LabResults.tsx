import DownloadIcon from '../assets/icons/download.svg'
import type { Patient } from '../types/patient';


const LabResults = ({ clientData }: { clientData: Patient | undefined }) => {
  return (
    <div className='max-h-[296px] w-[367px] rounded-2xl bg-white ml-[33px] mt-8'>
      <div className='text-title pt-[20px] pl-[20px] pb-[27px]'>Lab Results</div>
      <div className='overflow-y-auto	 max-h-[176px] pb-[7px] mr-[22px]'>
        {clientData?.lab_results.map((analysis => {
          return (
            <div key={analysis} className='flex justify-between items-center ml-[22px] px-4 h-10 hover:bg-page'>
              <div className='text-caption'>{analysis}</div>
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