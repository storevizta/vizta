import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout/Layout';

import { NotFound } from '../pages/NotFound';

import { Landing } from '../pages/Landing';

import { Home } from '../pages/Home';

import { Profile } from '../pages/Profile';

import { Detail } from '../pages/Detail';

import { Post } from '../pages/Post';

import { Favorite } from '../pages/Favorite';

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
        path: '/home',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
    ],
  },
]);
