import AccountNav from '@/common/AccountNav';
import { Outlet } from 'react-router-dom';

export default function AccountPage() {
  return (
    <section>
      <AccountNav />
      <Outlet />
    </section>
  );
}
