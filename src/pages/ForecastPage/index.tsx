import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoadingStates } from '../../@types/appTypes';
import CardForecastToday from '../../components/cards/CardForecastToday';
import SectionGroupForecastByHour from '../../components/sections/SectionGroupForecastByHour';
import SectionGroupForecastByWeek from '../../components/sections/SectionGroupForecastByWeek';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import { CityContext } from '../../providers/CityContext';
import { HomeRoute } from '../../router/constants.routes';
import './ForecastPage.scss';
import AppButton from '../../components/buttons/AppButton';

export default function ForecastPage() {
  const navigate = useNavigate();
  const { nameCity, setNameCity } = React.useContext(CityContext);
  const { currentWeather, loading, error } = useCurrentWeather(nameCity);

  const handlerReturnHome = () => {
    // Reset
    setNameCity('');

    // Navigate to home page
    navigate(HomeRoute.path);
  };

  if (loading === LoadingStates.PENDING) {
    return (
      <main className="forecast-page">
        <p className="forecast-page__message">Loading...</p>
      </main>
    );
  }

  if (loading === LoadingStates.ERROR && error !== null) {
    return (
      <main className="forecast-page">
        <p className="forecast-page__message">{error.message}</p>

        <AppButton onClick={handlerReturnHome} className="forecast-page__link">
          Return to home
        </AppButton>
      </main>
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
