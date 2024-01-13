import { Link, useLocation } from 'react-router-dom';

import { FaClipboardList, FaUser, FaUsers } from 'react-icons/fa';

export default function AccountNav() {
  const { pathname } = useLocation();

  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = '';
  }

  function linkClasses(type = null) {
    let classes = `inline-flex gap-1 rounded-full px-8 items-center btn text-white w-full  sm:btn-sm sm:max-w-40`;
    if (type === subpage) {
      classes += ' btn-primary';
    } else {
      classes += ' btn-secondary';
    }
    return classes;
  }

  return (
    <nav className='mx-auto mb-6 justify-center  text-center flex flex-col gap-4 sm:gap-6 sm:max-w-lg sm:flex-row '>
      <Link className={linkClasses('')} to={'/account'}>
        <FaUser size={18} />
        My profile
      </Link>
      <Link className={linkClasses('posts')} to={'/account/posts'}>
        <FaClipboardList size={18} />
        My Posts
      </Link>
      {/* <Link className={linkClasses('users')} to={'/account/users'}>
        <FaUsers size={18} />
        Members
      </Link> */}
    </nav>
  );
}
