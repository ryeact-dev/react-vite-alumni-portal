import { FaBars } from 'react-icons/fa';
import NavList from './components/NavList';

export default function Header() {
  return (
    <header className='bg-base-100 sticky top-0 z-50 px-4 sm:px-0'>
      <div className='drawer '>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content navbar p-0 justify-between items-center max-w-6xl mx-auto'>
          {/* Page content here */}
          <div className='drawer navbar p-0 justify-between items-center max-w-6xl mx-auto'>
            <div>
              <label
                htmlFor='my-drawer'
                className='drawer-button cursor-pointer inline-block sm:hidden'
              >
                <FaBars />
              </label>
              <div className='btn bg-transparent border-0 text-lg'>
                Alumni Portal
              </div>
            </div>
            <div className='hidden sm:inline-flex'>
              <NavList />
            </div>
            <div>
              <div className='dropdown dropdown-end'>
                <button className='btn btn-circle bg-transparent border-0'>
                  <div className='indicator'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                    <span className='badge badge-xs badge-accent indicator-item'></span>
                  </div>
                </button>
              </div>

              <div className='p-2 avatar'>
                <div className='w-8 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='drawer-side sm:hidden'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <NavList />
        </div>
      </div>
    </header>
  );
}
