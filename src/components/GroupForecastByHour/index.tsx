import { Hour, WeatherWithForecast } from '../../@types/typeForecasts';
import BoxForecastByHour from '../BoxForecastByHour';

type GroupForecastByHourProps = {
  weather: WeatherWithForecast | null;
};

export default function GroupForecastByHour({
  weather,
}: GroupForecastByHourProps) {
  if (weather === null) {
    return null;
  }

  return (
    <div className="group-forecast-by-hour">
      {weather?.forecast?.forecastday.length === 0 ? <p>Empty!!!!</p> : null}

      {weather?.forecast?.forecastday?.map((forecastByDay) => {
        console.log(
          '🚀 ~ {weather?.forecast?.forecastday?.map ~ forecastByDay:',
          forecastByDay,
        );
        return forecastByDay?.hour?.map((hour: Hour) => (
          <BoxForecastByHour key={hour.time_epoch} hour={hour} />
        ));
      })}
    </div>
  );
}
