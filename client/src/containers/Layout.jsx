import Footer from '@/common/Footer';
import Header from '@/common/Header';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <section className='mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-5 sm:px-0'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
