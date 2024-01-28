import React from 'react';
import { basicFormatDateStr } from '../../../helpers/dateHelpers';
import useCurrentForecast from '../../../hooks/useCurrentForecast';
import IconMapPin from '../../icons/IconMapPin';
import { CityContext } from '../../../providers/CityContext';

type HeaderForecastTodayProps = {
  locationName: string;
  lastUpdatedAt: string;
};

function HeaderForecastToday({
  locationName = '_',
  lastUpdatedAt = '2024-01-26 16:15',
}: HeaderForecastTodayProps) {
  return (
    <header className="forecast-today">
      <div className="forecast-today__location">
        <IconMapPin />
        <h3 className="forecast-today__location-details">{locationName}</h3>
      </div>
      <p className="forecast-today__lastupdated">
        {basicFormatDateStr(lastUpdatedAt, 'en-US')}
      </p>
    </header>
  );
}

export default function CardForecastToday() {
  const { nameCity } = React.useContext(CityContext);
  const { currentForecast } = useCurrentForecast(nameCity);

  return (
    <article className="card-forecast-today">
      <HeaderForecastToday
        locationName={currentForecast?.location.name || ''}
        lastUpdatedAt={currentForecast?.current.last_updated || ''}
      />
    </article>
  );
}
