import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main>
      {/* Header */}
      <section>
        <Outlet /> Outlet
      </section>
      {/* Footer */}
    </main>
  );
}
