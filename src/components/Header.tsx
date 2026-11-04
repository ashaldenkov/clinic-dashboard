import calendarIcon from '../assets/icons/calendar.svg';
import chatIcon from '../assets/icons/chat.svg';
import creditCardIcon from '../assets/icons/credit-card.svg';
import groupIcon from '../assets/icons/group.svg';
import homeIcon from '../assets/icons/home.svg';
import moreVerticalIcon from '../assets/icons/more-vertical.svg';
import settingsIcon from '../assets/icons/settings.svg';
import doctorPhoto from '../assets/images/doctor.png';
import logo from '../assets/images/logo.svg';
import { cx } from '../utils/cx';

const NAV_ITEMS = [
  { label: 'Overview', icon: homeIcon },
  { label: 'Patients', icon: groupIcon },
  { label: 'Schedule', icon: calendarIcon },
  { label: 'Message', icon: chatIcon },
  { label: 'Transactions', icon: creditCardIcon },
] as const;

const ACTIVE_SECTION: (typeof NAV_ITEMS)[number]['label'] = 'Patients';

export function Header() {
  return (
    <header className="mb-[18px] flex h-[72px] justify-between rounded-[72px] bg-white px-8 py-[14px] text-body font-bold">
      <img src={logo} alt="Tech.Care" />

      <nav aria-label="Main">
        <ul className="flex h-full gap-2">
          {NAV_ITEMS.map(({ label, icon }) => {
            const isActive = label === ACTIVE_SECTION;
            return (
              // Extra spacing around the active pill, per the design.
              <li key={label} className={cx('flex', isActive && 'mx-4')}>
                <button
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  className={cx(
                    'flex items-center gap-[9px] rounded-full px-4 py-3',
                    isActive ? 'bg-accent' : 'transition-colors duration-300 hover:bg-teal-200',
                  )}
                >
                  <img src={icon} alt="" />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex">
        <div className="flex items-center gap-2 pr-3">
          <img src={doctorPhoto} alt="" className="size-11" />
          <div>
            <p>Dr. Jose Simmons</p>
            <p className="font-normal text-muted">General Practitioner</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-l border-divider pl-3">
          <button type="button" aria-label="Settings">
            <img src={settingsIcon} alt="" />
          </button>
          <button type="button" aria-label="More options">
            <img src={moreVerticalIcon} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
