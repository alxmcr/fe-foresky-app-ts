import React from 'react';
import { LoadingStates } from '../../../@types/appTypes';
import useForecastsThisWeek from '../../../hooks/useForecastsThisWeek';
import { CityContext } from '../../../providers/CityContext';

export default function SectionGroupForecastByWeek() {
  const { nameCity } = React.useContext(CityContext);
  const { forecasts, loading, error } = useForecastsThisWeek(nameCity);

  if (loading === LoadingStates.PENDING) {
    return (
      <section className="section-group-forecasts-this-week">
        <p className="section-group-forecasts-this-week__message">
          Loading forecasts...
        </p>
      </section>
    );
  }

  if (loading === LoadingStates.ERROR) {
    return (
      <section className="section-group-forecasts-this-week">
        <p className="section-group-forecasts-this-week__message">
          {error?.message}
        </p>
      </section>
    );
  }

  return (
    <section className="section-group-forecasts-this-week">
      <h2 className="section-group-forecasts-this-week__title">This week</h2>
      {JSON.stringify(forecasts, null, 2)}
    </section>
  );
}
