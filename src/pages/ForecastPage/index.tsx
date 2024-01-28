import { NavLink } from 'react-router-dom';
import CardForecastToday from '../../components/cards/CardForecastToday';
import SectionGroupForecastByHour from '../../components/sections/SectionGroupForecastByHour';
import SectionGroupForecastByWeek from '../../components/sections/SectionGroupForecastByWeek';
import './ForecastPage.scss';
import { HomeRoute } from '../../router/constants.routes';
import React from 'react';
import { CityContext } from '../../providers/CityContext';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import { LoadingStates } from '../../@types/appTypes';

export default function ForecastPage() {
  const { nameCity } = React.useContext(CityContext);
  const { currentWeather, loading, error } = useCurrentWeather(nameCity);
  console.log({ currentWeather, loading, error });

  if (loading === LoadingStates.PENDING) {
    return (
      <article className="card-forecast-today">
        <p className="card-forecast-today__message">Loading...</p>
      </article>
    );
  }

  if (loading === LoadingStates.ERROR && error !== null) {
    return (
      <article className="card-forecast-today">
        <p className="card-forecast-today__message">{error.message}</p>

        <NavLink to={HomeRoute.path} className="forecast-page__link">
          Return to home
        </NavLink>
      </article>
    );
  }

  if (currentWeather !== null) {
    return (
      <main className="forecast-page">
        <NavLink to={HomeRoute.path} className="forecast-page__link">
          Return to home
        </NavLink>
        <CardForecastToday currentWeather={currentWeather} />
        <SectionGroupForecastByHour />
        <SectionGroupForecastByWeek />
        <p className="forecast-page__poweredby">
          {'Powered by '}
          <a
            href="https://www.weatherapi.com/"
            title="Free Weather API"
            className="forecast-page__link"
          >
            WeatherAPI.com
          </a>
        </p>
      </main>
    );
  }

  return null;
}
