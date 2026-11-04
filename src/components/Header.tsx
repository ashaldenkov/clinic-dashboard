import TestLogo from '../assets/images/logo.svg';
import Home from '../assets/icons/home.svg';
import Group from '../assets/icons/group.svg';
import Calendar from '../assets/icons/calendar.svg';
import Chat from '../assets/icons/chat.svg';
import Transactions from '../assets/icons/credit-card.svg';
import Doctor from '../assets/images/doctor.png';
import Settings from '../assets/icons/settings.svg';
import ShowMore from '../assets/icons/more-vertical.svg';

export default function Header () {
  return (
    <div className='flex justify-between h-[72px] px-8 py-[14px] bg-white rounded-[72px] text-body font-bold mb-[18px]'>
        <img src={TestLogo} alt="Logo" />
        <div className='flex'>
            <button className='flex items-center px-4 py-3 mr-6 rounded-full hover:bg-teal-200 duration-300	'>
                <img src={Home} alt="OverviewImg" />
                <div className='pl-[9px]'>Overview</div>
            </button>
            <button className='flex items-center px-4 py-3 rounded-full bg-accent'>
                <img src={Group} alt="PatientsImg" />
                <div className='pl-[9px]'>Patients</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-6 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Calendar} alt="ScheduleImg" />
                <div className='pl-[9px]'>Schedule</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-2 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Chat} alt="MessageImg" />
                <div className='pl-[9px]'>Message</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-2 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Transactions} alt="TransactionsImg" />
                <div className='pl-[9px]'>Transactions</div>
            </button>
        </div>
        <div className='flex'>
            <div className='flex pr-3'>
                <img className='w-[44px] h-[44px] mr-2' src={Doctor} alt="DoctorImg" />
                <div className='flex flex-col justify-center'>
                    <div>
                    Dr. Jose Simmons
                    </div>
                    <div className='text-body font-normal text-muted'>
                    General Practitioner
                    </div>
                </div>
            </div>
            <div className='flex items-center pl-3 border-l border-divider'>
                <button className='mr-3'>
                    <img src={Settings} alt="SettingsImg" />
                </button>
                <button>
                    <img src={ShowMore} alt="ShowMoreImg" />
                </button>
            </div>
        </div>

    </div>
  )
}
