import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout/Layout';

import { NotFound } from '../pages/NotFound';

import { Landing } from '../pages/Landing';

import { Home } from '../pages/Home';

import { Detail } from '../pages/Detail';

import { Post } from '../pages/Post';

import { Profile } from '../pages/Profile';

import { SignIn } from '../pages/SignIn';

import { SignUp } from '../pages/SignUp';

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
        path: '/detail/:id/:userId',
        element: <Detail />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);
