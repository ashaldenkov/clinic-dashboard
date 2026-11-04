import Respiratory from '../assets/icons/respiratory-rate.svg'
import Temperature from '../assets/icons/temperature.svg'
import HeartRate from '../assets/icons/heart-rate.svg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import ArrowUp from '../assets/icons/arrow-up.svg'
import ExpandMore from '../assets/icons/expand-more.svg'
import LineChart from '../components/lineChart'


const DiagnosisHistory = ( { clientData }) => {

  return (
    <div className='h-[673px] w-[766px] rounded-2xl bg-white mt-[14px] p-5'>
        <div className='card-title-24pt'>Diagnosis History</div>

        <div className='w-full h-[298px] bg-graphBg rounded-xl mb-5 mt-10 p-4 flex justify-between'>
          <div className='w-full'>
            <div className='flex items-center justify-between mb-5'>
              <div className='inner-card-title-18pt'>Blood Pressure</div>
              <div className='body-regular-14 mr-8'>
                Last 6 month
                <button>
                  <img src={ExpandMore} alt="ExpandMore" className='inline-block ml-4'/>
                </button>
              </div>
            </div>
            <LineChart chartData={clientData?.diagnosis_history}/>
          </div>
          <div className='ml-4 w-[208px] shrink-0'>
            <div className='border-b border-borderColor'>
              <div className='flex items-center mb-2'>
                <div className='h-[14px] w-[14px] bg-ellipse1 rounded-full'></div>
                <div className='ml-1 manrope-bold-14px'>Systolic</div>
              </div>
              <div className='manrope-bold-22px'>{clientData?.diagnosis_history[0].blood_pressure.systolic.value}</div>
              <div className='flex items-center pb-4 mt-1'>
              {clientData?.diagnosis_history[0].blood_pressure.systolic.levels === 'Higher than Average' ? 
              <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
              {clientData?.diagnosis_history[0].blood_pressure.systolic.levels === 'Lower than Average' ? 
              <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='body-regular-14'>{clientData?.diagnosis_history[0].blood_pressure.systolic.levels}</div>
              </div>
            </div>
            <div className='mt-4'>
              <div className='flex items-center mb-2'>
                <div className='h-[14px] w-[14px] bg-ellipse2 rounded-full'></div>
                <div className='ml-1 manrope-bold-14px'>Diastolic</div>
              </div>
              <div className='manrope-bold-22px'>{clientData?.diagnosis_history[0].blood_pressure.diastolic.value}</div>
              <div className='flex items-center pb-4 mt-1'>
                {clientData?.diagnosis_history[0].blood_pressure.diastolic.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {clientData?.diagnosis_history[0].blood_pressure.diastolic.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='body-regular-14'>{clientData?.diagnosis_history[0].blood_pressure.diastolic.levels}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-x-5'>
          <div className='bg-respiratory rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={Respiratory} alt="RespiratoryRate" className='mb-4'/>
            <div className='manrope-medium-16px'>Respiratory Rate</div>
            <div className='mb-4 manrope-30px-extra-bold'>{clientData?.diagnosis_history[0].respiratory_rate.value} bpm</div>
            <div className='flex items-center'>
                {clientData?.diagnosis_history[0].respiratory_rate.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {clientData?.diagnosis_history[0].respiratory_rate.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='body-regular-14'>{clientData?.diagnosis_history[0].respiratory_rate.levels}</div>
            </div>
          </div>
          <div className='bg-temperature rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={Temperature} alt="Temperature" className='mb-4'/>
            <div className='manrope-medium-16px'>Temperature</div>
            <div className='mb-4 manrope-30px-extra-bold'>{clientData?.diagnosis_history[0].temperature.value}°F</div>
            <div className='flex items-center'>
                {clientData?.diagnosis_history[0].temperature.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {clientData?.diagnosis_history[0].temperature.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='body-regular-14'>{clientData?.diagnosis_history[0].temperature.levels}</div>
            </div>
          </div>
          <div className='bg-heartRate rounded-xl	w-[228px] h-[242px] p-4'>
            <img src={HeartRate} alt="HeartRate" className='mb-4'/>
            <div className='manrope-medium-16px'>Heart Rate</div>
            <div className='mb-4 manrope-30px-extra-bold'>{clientData?.diagnosis_history[0].heart_rate.value} bpm</div>
            <div className='flex items-center'>
                {clientData?.diagnosis_history[0].heart_rate.levels === 'Higher than Average' ? 
                <img src={ArrowUp} alt="ArrowUp" className='mr-2'/> : null}
                {clientData?.diagnosis_history[0].heart_rate.levels === 'Lower than Average' ? 
                <img src={ArrowDown} alt="ArrowDown" className='mr-2'/> : null}
                <div className='body-regular-14'>{clientData?.diagnosis_history[0].heart_rate.levels}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DiagnosisHistory