import { RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { HomeRoute } from './constants.routes';

export const routes: RouteObject[] = [
  {
    id: HomeRoute.id,
    path: HomeRoute.path,
    element: <HomePage />,
  },
];

export const appRouter = createBrowserRouter(routes);
