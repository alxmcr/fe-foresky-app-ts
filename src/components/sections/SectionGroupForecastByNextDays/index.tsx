import React from 'react';
import { LoadingStates } from '../../../@types/appTypes';
import useForecastsNextDays from '../../../hooks/useForecastsNextDays';
import { CityContext } from '../../../providers/CityContext';

export default function SectionGroupForecastByNextDays() {
  const { nameCity } = React.useContext(CityContext);
  const { forecasts, loading, error } = useForecastsNextDays(nameCity);

  if (loading === LoadingStates.PENDING) {
    return (
      <section className="section-group-forecasts-by-nextdays">
        <p className="section-group-forecasts-by-nextdays__message">
          Loading forecasts...
        </p>
      </section>
    );
  }

  if (loading === LoadingStates.ERROR) {
    return (
      <section className="section-group-forecasts-by-nextdays">
        <p className="section-group-forecasts-by-nextdays__message">
          {error?.message}
        </p>
      </section>
    );
  }

  return (
    <section className="section-group-forecasts-by-nextdays">
      <h2 className="section-group-forecasts-by-nextdays__title">Next Days</h2>
      {JSON.stringify(forecasts, null, 2)}
    </section>
  );
}
