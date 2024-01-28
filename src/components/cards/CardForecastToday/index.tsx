import React from 'react';
import { LoadingStates } from '../../../@types/appTypes';
import useCurrentWeather from '../../../hooks/useCurrentWeather';
import { CityContext } from '../../../providers/CityContext';
import CardBodyForecastToday from '../CardBodyForecastToday';
import CardFooterForecastToday from '../CardFooterForecastToday';
import CardHeaderForecastToday from '../CardHeaderForecastToday';
import './CardForecastToday.scss';

export default function CardForecastToday() {
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
      </article>
    );
  }

  return (
    <article className="card-forecast-today">
      <CardHeaderForecastToday currentWeather={currentWeather || null} />
      <CardBodyForecastToday
        currentForecast={currentWeather?.current || null}
      />
      <CardFooterForecastToday
        currentForecast={currentWeather?.current || null}
      />
    </article>
  );
}
