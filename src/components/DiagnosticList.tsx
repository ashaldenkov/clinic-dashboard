import { v4 as uuidv4 } from 'uuid';
import type { Patient } from '../types/patient';

const DiagnosticList = ({ clientData }: { clientData: Patient | undefined }) => {
  return (
    <div className='w-[766px] rounded-2xl bg-white mt-[32px] p-5'>
        <div className='text-title mb-10'>Diagnostic List</div>
        <div className='text-body font-bold flex justify-between bg-page rounded-full h-[48px] items-center px-4'>
          <div className='basis-1/5'>Problem/Diagnosis</div>
          <div className='basis-1/2'>Description</div>
          <div className='basis-1/6'>Status</div>
        </div>
        <div className='last:border-0 max-h-[160px] overflow-y-scroll'>
          { clientData?.diagnostic_list.map((diagnosis) => {
            return (
              <div key={uuidv4()} className={`text-body flex justify-between py-2.5 items-center px-4 border-b border-page last:border-b-0`}>
                <div className='basis-1/5'>{diagnosis?.name}</div>
                <div className='basis-1/2'>{diagnosis?.description}</div>
                <div className='basis-1/6'>{diagnosis?.status}</div>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default DiagnosticList