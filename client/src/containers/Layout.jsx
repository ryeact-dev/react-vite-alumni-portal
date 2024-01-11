import Header from '@/common/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <section>
        <Outlet /> Outlet
      </section>
      {/* Footer */}
    </>
  );
}
