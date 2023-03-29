import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout/Layout";

import { NotFound } from "../pages/NotFound";

import { Landing } from "../pages/Landing";

import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
