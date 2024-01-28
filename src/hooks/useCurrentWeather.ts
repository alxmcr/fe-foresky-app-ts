import React from 'react';
import { Weather } from '../@types/typeForecasts';
import { LoadingStates } from '../@types/appTypes';
import { WeatherAPIImpl } from '../services/WeatherAPIImpl';
import { QueryCity } from '../services/IWeatherAPI';

export default function useCurrentWeather(nameCity = '') {
  const [currentWeather, setCurrentWeather] = React.useState<Weather | null>(
    null,
  );
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
        const currentWeather = await service.findCurrentWeatherByCity(query);

        setCurrentWeather(currentWeather);
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

  return { currentWeather, loading, error };
}
