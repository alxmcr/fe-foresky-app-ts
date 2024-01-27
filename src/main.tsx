import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { appRouter } from './router/routes';
import CityProvider from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CityProvider>
      <RouterProvider router={appRouter} />
    </CityProvider>
  </React.StrictMode>,
);
