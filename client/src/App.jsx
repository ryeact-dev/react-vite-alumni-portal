import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './containers/Layout';
import AccountPost from './features/account/Post';
import AccountProfile from './features/account/profile';
import AllMembers from './features/allmembers';
import SinglePost from './features/post/SinglePost';
import AccountPage from './pages/protected/AccountPage';
import AllPostsPage from './pages/protected/AllPostsPage';
import HomePage from './pages/protected/Home';
import initializeApp from './setup/init';

initializeApp();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'members', element: <AllMembers /> },
      {
        path: 'account',
        element: <AccountPage />,
        children: [
          {
            index: true,
            element: <AccountProfile />,
          },
          {
            path: 'posts',
            element: <AccountPost />,
          },
        ],
      },
      { path: 'posts', element: <AllPostsPage /> },
      { path: 'post/:postId', element: <SinglePost /> },
    ],
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
