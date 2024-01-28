import React from 'react';
import { LoadingStates } from '../@types/appTypes';
import { WeatherWithForecast } from '../@types/typeForecasts';
import { QueryCity } from '../services/IWeatherAPI';
import { WeatherAPIImpl } from '../services/WeatherAPIImpl';

export default function useWeather(nameCity = '') {
  const [weather, setWeather] = React.useState<WeatherWithForecast | null>(
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
        const weatherData = await service.findWeatherDetailsByCity(query);
        setWeather(weatherData);
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

  return [weather, loading, error];
}
