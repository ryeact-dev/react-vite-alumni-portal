import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Layout from './containers/Layout';
import LoginPage from './pages/Login';
import HomePage from './pages/protected/Home';
import initializeApp from './setup/init';

initializeApp();

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
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
