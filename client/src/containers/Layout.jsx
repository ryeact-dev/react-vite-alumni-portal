import Header from '@/common/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <section className='mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-5 sm:px-0'>
        <Outlet />
      </section>
      {/* Footer */}
    </>
  );
}
