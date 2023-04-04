import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout/Layout';

import { NotFound } from '../pages/NotFound';

import { Landing } from '../pages/Landing';

import { Accounts } from '../pages/Accounts';

import { Home } from '../pages/Home';

import { Post } from '../pages/Post';

import { Profile } from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/accounts',
        element: <Accounts />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
