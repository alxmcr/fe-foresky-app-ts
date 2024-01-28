import React from 'react';
import { LoadingStates } from '../../../@types/appTypes';
import useForecastsThisWeek from '../../../hooks/useForecastsThisWeek';
import { CityContext } from '../../../providers/CityContext';
import GroupForecastByHour from '../../GroupForecastByHour';
import './SectionGroupForecastByHour.scss';

export default function SectionGroupForecastByHour() {
  const { nameCity } = React.useContext(CityContext);
  const { forecasts, loading, error } = useForecastsThisWeek(nameCity);

  if (loading === LoadingStates.PENDING) {
    return (
      <section className="section-group-forecasts-by-day">
        <p className="section-group-forecasts-by-day__message">
          Loading forecasts...
        </p>
      </section>
    );
  }

  if (loading === LoadingStates.ERROR) {
    return (
      <section className="section-group-forecasts-by-day">
        <p className="section-group-forecasts-by-day__message">
          {error?.message}
        </p>
      </section>
    );
  }

  return (
    <section className="section-group-forecasts-by-day">
      <h2 className="section-group-forecasts-by-day__title">Next Hours</h2>
      <GroupForecastByHour weather={forecasts || null} />
    </section>
  );
}
