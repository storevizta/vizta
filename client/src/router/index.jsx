import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout/Layout';

import { NotFound } from '../pages/NotFound';

import { Landing } from '../pages/Landing';

import { Home } from '../pages/Home';

import { Profile } from '../pages/Profile';

import { Detail } from '../pages/Detail';

import { Post } from '../pages/Post';

import { Favorites } from '../pages/Favorites';

import { Subscribe } from '../pages/Subscribe';

import { Updata } from '../pages/Update';

import { ReportAd } from '../pages/ReportAd';

import { ReportUser } from '../pages/ReportUser';

import { Admin } from '../components/ProfileAdmin';

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
        element: <Favorites />,
      },
      {
        path: '/subscribe',
        element: <Subscribe />,
      },
      {
        path: '/update/:id',
        element: <Updata />,
      },
      {
        path: 'reportAd/:id',
        element: <ReportAd />,
      },
      {
        path: 'reportUser/:id',
        element: <ReportUser />,
      },
      {
        path: '/admin',
        element: <Admin />,
      }
    ],
  },
]);
