import { Hour, WeatherWithForecast } from '../../@types/typeForecasts';
import BoxForecastByHour from '../BoxForecastByHour';

type GroupForecastByHourProps = {
  weather: WeatherWithForecast;
};

export default function GroupForecastByHour({
  weather,
}: GroupForecastByHourProps) {
  return (
    <div className="group-forecast-by-hour">
      {weather.forecast.forecastsByDays.map((forecastByDay) =>
        forecastByDay.hours.map((hour: Hour) => (
          <BoxForecastByHour key={hour.time_epoch} hour={hour} />
        )),
      )}
    </div>
  );
}
