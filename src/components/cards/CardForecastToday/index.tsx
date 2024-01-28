import React from 'react';
import useCurrentForecast from '../../../hooks/useCurrentForecast';
import { CityContext } from '../../../providers/CityContext';
import CardHeaderForecastToday from '../CardHeaderForecastToday';

export default function CardForecastToday() {
  const { nameCity } = React.useContext(CityContext);
  const { currentForecast } = useCurrentForecast(nameCity);

  return (
    <article className="card-forecast-today">
      <CardHeaderForecastToday
        locationName={currentForecast?.location.name || ''}
        lastUpdatedAt={currentForecast?.current.last_updated || ''}
      />
    </article>
  );
}
