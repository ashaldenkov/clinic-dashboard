import Respiratory from '../assets/icons/respiratory-rate.svg'
import Temperature from '../assets/icons/temperature.svg'
import HeartRate from '../assets/icons/heart-rate.svg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import ArrowUp from '../assets/icons/arrow-up.svg'
import ExpandMore from '../assets/icons/expand-more.svg'
import LineChart from './LineChart'
import type { Patient } from '../types/patient'


const DiagnosisHistory = ({ clientData }: { clientData: Patient | undefined }) => {
  const latest = clientData?.diagnosis_history[0];

  return (
    <div className='h-[673px] w-[766px] rounded-2xl bg-white mt-[14px] p-5'>
        <div className='text-title'>Diagnosis History</div>

        <div className='w-full h-[298px] bg-chart-bg rounded-xl mb-5 mt-10 p-4 flex justify-between'>
          <div className='w-full'>
            <div className='flex items-center justify-between mb-5'>
              <div className='text-subtitle'>Blood Pressure</div>
              <div className='text-body mr-8'>
                Last 6 month
                <button>
                  <img src={ExpandMore} alt="ExpandMore" className='inline-block ml-4'/>
                </button>
              </div>
            </div>
            <LineChart chartData={clientData?.diagnosis_history}/>
          </div>
          <div className='ml-4 w-[208px] shrink-0'>
            <div className='border-b border-chart-divider'>
              <div className='flex items-center mb-2'>
                <div className='h-[14px] w-[14px] bg-systolic rounded-full'></div>
                <div className='ml-1 text-body font-bold'>Systolic</div>
              </div>
              <div className='text-metric-sm'>{latest?.blood_pressure.systolic.value}</div>
              <div className='flex items-center pb-4 mt-1'>
              {latest?.blood_pressure.systolic.levels === 'Higher than Average' ? 
              <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
              {latest?.blood_pressure.systolic.levels === 'Lower than Average' ? 
              <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='text-body'>{latest?.blood_pressure.systolic.levels}</div>
              </div>
            </div>
            <div className='mt-4'>
              <div className='flex items-center mb-2'>
                <div className='h-[14px] w-[14px] bg-diastolic rounded-full'></div>
                <div className='ml-1 text-body font-bold'>Diastolic</div>
              </div>
              <div className='text-metric-sm'>{latest?.blood_pressure.diastolic.value}</div>
              <div className='flex items-center pb-4 mt-1'>
                {latest?.blood_pressure.diastolic.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {latest?.blood_pressure.diastolic.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='text-body'>{latest?.blood_pressure.diastolic.levels}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-x-5'>
          <div className='bg-respiratory rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={Respiratory} alt="RespiratoryRate" className='mb-4'/>
            <div className='text-label-lg'>Respiratory Rate</div>
            <div className='mb-4 text-metric'>{latest?.respiratory_rate.value} bpm</div>
            <div className='flex items-center'>
                {latest?.respiratory_rate.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {latest?.respiratory_rate.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='text-body'>{latest?.respiratory_rate.levels}</div>
            </div>
          </div>
          <div className='bg-temperature rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={Temperature} alt="Temperature" className='mb-4'/>
            <div className='text-label-lg'>Temperature</div>
            <div className='mb-4 text-metric'>{latest?.temperature.value}°F</div>
            <div className='flex items-center'>
                {latest?.temperature.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {latest?.temperature.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='text-body'>{latest?.temperature.levels}</div>
            </div>
          </div>
          <div className='bg-heart-rate rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={HeartRate} alt="HeartRate" className='mb-4'/>
            <div className='text-label-lg'>Heart Rate</div>
            <div className='mb-4 text-metric'>{latest?.heart_rate.value} bpm</div>
            <div className='flex items-center'>
                {latest?.heart_rate.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {latest?.heart_rate.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='text-body'>{latest?.heart_rate.levels}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DiagnosisHistory