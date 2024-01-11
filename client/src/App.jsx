import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import LoginPage from './pages/Login';
import initializeApp from './setup/init';

initializeApp();

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <main className='bg-base-300 min-h-screen w-full'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
