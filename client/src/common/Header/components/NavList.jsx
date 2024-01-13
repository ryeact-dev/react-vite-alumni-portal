import React from 'react';

import { FaHome, FaUserCircle, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
    icon: <FaHome size={18} />,
  },
  {
    label: 'Members',
    path: '/members',
    icon: <FaUsers size={18} />,
  },
  {
    label: 'Account',
    path: '/account',
    icon: <FaUserCircle size={18} />,
  },
];

export default function NavList() {
  const defaultClass =
    'flex font-normal items-center m-1 gap-2 text-base lg:text-sm hover:text-primary ';

  return (
    <ul className='pt-20 px-2 bg-base-200 h-full flex flex-col w-56 sm:bg-transparent sm:h-auto sm:w-full sm:pt-0 sm:my-4 sm:flex-row gap-6 sm:justify-center sm:items-center'>
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
