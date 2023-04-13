import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { store } from './app/store';

import { Provider } from 'react-redux';

import { router } from './router';

import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
