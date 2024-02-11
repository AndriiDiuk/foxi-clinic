import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from 'constants/routes';
import ErrorPage from 'pages/Error';
import HomePage from 'pages/Home';
import Imprint from 'pages/Imprint';
import Policy from 'pages/Policy';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.imprint,
    element: <Imprint />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.policy,
    element: <Policy />,
    errorElement: <ErrorPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
