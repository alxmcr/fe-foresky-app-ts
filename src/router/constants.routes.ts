type AppRoute = {
  id: string;
  path: string;
};

export const HomeRoute: AppRoute = {
  id: 'home',
  path: '/',
};

export const ForecastRoute: AppRoute = {
  id: 'forecast',
  path: '/forecast',
};
