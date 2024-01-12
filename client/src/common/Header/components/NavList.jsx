import React from 'react';

import { FaHome, FaUserCircle, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <FaHome className='mr-2 h-[22px] w-[22px] md:mr-1 md:h-[18px] md:w-[18px]' />
    ),
  },
  {
    label: 'Members',
    path: 'members',
    icon: (
      <FaUsers className='mr-2 h-[22px] w-[22px] md:mr-1 md:h-[18px] md:w-[18px]' />
    ),
  },
  {
    label: 'Account',
    path: 'account',
    icon: (
      <FaUserCircle className='mr-2 h-[22px] w-[22px] md:mr-1 md:h-[18px] md:w-[18px]' />
    ),
  },
];

export default function NavList() {
  const defaultClass =
    'flex font-normal items-center m-1 text-base lg:text-sm hover:text-primary ';

  return (
    <ul className='my-4 flex flex-col gap-1 md:ml-11 md:flex-row md:items-center lg:mb-0 lg:mt-0 lg:gap-4'>
      {NAV_LINKS.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${defaultClass} ${isActive ? 'text-primary' : 'text-white'}`
            }
            // onClick={closeDrawerTop}
          >
            {link.icon}
            {link.label}
          </NavLink>
        </li>
      ))}
      {/* <button
    type="button"
    onClick={logoutHandler}
    className="m-1 flex items-center justify-center rounded-full bg-primary px-6 py-1 text-base font-normal text-white hover:bg-primaryDark sm:mt-0 sm:hidden md:text-sm"
  >
    <PowerIcon
      className="mr-2 h-[22px] w-[22px] md:mr-1 md:h-[18px] md:w-[18px]"
      strokeWidth={2}
    />{" "}
    Logout
  </button> */}
    </ul>
  );
}
