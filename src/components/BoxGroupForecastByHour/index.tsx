import React from 'react';
import useWeather from '../../hooks/useWeather';
import { CityContext } from '../../providers/CityContext';
import GroupForecastByHour from '../GroupForecastByHour';
import { LoadingStates } from '../../@types/appTypes';

export default function BoxGroupForecastByHour() {
  const { nameCity } = React.useContext(CityContext);
  const { weather, loading } = useWeather(nameCity);

  if (loading === LoadingStates.PENDING) {
    return (
      <div className="box-group-forecasts">
        <p className="box-group-forecasts__message">Loading forecasts...</p>
      </div>
    );
  }

  return (
    <div className="box-group-forecasts">
      <GroupForecastByHour weather={weather} />
    </div>
  );
}
