import './main.css';

import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { store } from './store';

import { Provider } from 'react-redux';

import { Auth0Provider } from '@auth0/auth0-react';

import { router } from '../router';

import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Auth0Provider
        domain="dev-cts718frtyfcon0v.us.auth0.com"
        clientId="ypJUdX0NihDz1q2ElwRY5v4M2mlZeZCb"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </StrictMode>
  </Provider>
);
