import { Link, useLocation } from 'react-router-dom';

import { FaClipboardList, FaUser, FaUsers } from 'react-icons/fa';

export default function AccountNav() {
  const { pathname } = useLocation();

  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = '';
  }

  function linkClasses(type = null) {
    let classes = `inline-flex gap-1 rounded-full px-12 items-center btn text-white`;
    if (type === subpage) {
      classes += ' btn-primary';
    } else {
      classes += ' btn-secondary';
    }
    return classes;
  }

  return (
    <nav className='mx-auto mb-4 my-2 justify-center gap-6 text-center sm:flex sm:max-w-lg sm:flex-row '>
      <Link className={linkClasses('')} to={'/account'}>
        <FaUser size={18} />
        My profile
      </Link>
      <Link className={linkClasses('posts')} to={'/account/posts'}>
        <FaClipboardList size={18} />
        My Posts
      </Link>
      <Link className={linkClasses('users')} to={'/account/users'}>
        <FaUsers size={18} />
        Members
      </Link>
    </nav>
  );
}
