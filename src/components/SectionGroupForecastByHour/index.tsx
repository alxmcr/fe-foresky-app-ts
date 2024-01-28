import React from 'react';
import { LoadingStates } from '../../@types/appTypes';
import useWeather from '../../hooks/useWeather';
import { CityContext } from '../../providers/CityContext';
import GroupForecastByHour from '../GroupForecastByHour';

export default function SectionGroupForecastByHour() {
  const { nameCity } = React.useContext(CityContext);
  const { weather, loading, error } = useWeather(nameCity);

  if (loading === LoadingStates.PENDING) {
    return (
      <section className="section-group-forecasts">
        <p className="section-group-forecasts__message">Loading forecasts...</p>
      </section>
    );
  }

  if (loading === LoadingStates.ERROR) {
    return (
      <section className="section-group-forecasts">
        <p className="section-group-forecasts__message">{error?.message}</p>
      </section>
    );
  }

  return (
    <section className="section-group-forecasts">
      <h2 className="section-group-forecasts__title">Next Hours</h2>
      <GroupForecastByHour weather={weather} />
    </section>
  );
}
