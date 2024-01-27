import React from 'react';
import { LoadingStates } from '../@types/appTypes';
import { CurrentForecast } from '../@types/typeForecasts';
import { QueryCity } from '../services/IWeatherAPI';
import { WeatherAPIImpl } from '../services/WeatherAPIImpl';

export default function useCurrentForecast(nameCity = '') {
  const [currentForecast, setCurrentForecast] =
    React.useState<CurrentForecast | null>(null);
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
        const currentForecast = await service.findCurrentForecastByCity(query);
        setCurrentForecast(currentForecast);
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

  return [currentForecast, loading, error];
}
