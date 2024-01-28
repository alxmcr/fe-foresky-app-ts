import React from 'react';
import { WeatherAPIImpl } from '../services/WeatherAPIImpl';
import { LoadingStates } from '../@types/appTypes';
import { QueryCity } from '../services/IWeatherAPI';
import { ForecastForNextDays } from '../@types/typeForecasts';

export default function useForecastsNextDays(nameCity = '') {
  const [forecastsNextDays, setForecastsNextDays] =
    React.useState<ForecastForNextDays | null>(null);
  const [loading, setLoading] = React.useState(LoadingStates.IDLE);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchCurrentForecast = async () => {
      const service = new WeatherAPIImpl();

      const query: QueryCity = {
        nameCity,
        hasAirQuality: 'no',
      };

      try {
        setLoading(LoadingStates.PENDING);
        const forecasts = await service.findForecastsByCity(query);
        setForecastsNextDays(forecasts);
        setLoading(LoadingStates.SUCCESS);
      } catch (error) {
        setLoading(LoadingStates.ERROR);

        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    fetchCurrentForecast();
  }, [nameCity]);

  return { forecasts: forecastsNextDays, error, loading };
}
