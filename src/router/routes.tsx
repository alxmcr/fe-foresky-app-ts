import { RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { ForecastRoute, HomeRoute } from './constants.routes';
import ForecastPage from '../pages/ForecastPage';

export const routes: RouteObject[] = [
  {
    id: HomeRoute.id,
    path: HomeRoute.path,
    element: <HomePage />,
  },
  {
    id: ForecastRoute.id,
    path: ForecastRoute.path,
    element: <ForecastPage />,
  },
];

export const appRouter = createBrowserRouter(routes);
