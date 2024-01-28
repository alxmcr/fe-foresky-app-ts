import React from 'react';
import useCurrentForecast from '../../../hooks/useCurrentForecast';
import { CityContext } from '../../../providers/CityContext';
import CardHeaderForecastToday from '../CardHeaderForecastToday';
import CardBodyForecastToday from '../CardBodyForecastToday';

export default function CardForecastToday() {
  const { nameCity } = React.useContext(CityContext);
  const { currentForecast, loading, error } = useCurrentForecast(nameCity);

  if (loading) {
    return (
      <article className="card-forecast-today">
        <p className="card-forecast-today__message">Loading...</p>;
      </article>
    );
  }

  if (!loading && error !== null) {
    return (
      <article className="card-forecast-today">
        <p className="card-forecast-today__message">{error.message}</p>;
      </article>
    );
  }

  return (
    <article className="card-forecast-today">
      <CardHeaderForecastToday
        locationName={currentForecast?.location.name || ''}
        lastUpdatedAt={currentForecast?.current.last_updated || ''}
      />
      <CardBodyForecastToday currentForecast={currentForecast} />
    </article>
  );
}
