import { WeatherWithForecast } from '../../@types/typeForecasts';
import BoxForecastByHour from '../BoxForecastByHour';

type GroupForecastByHourProps = {
  weather: WeatherWithForecast;
};

export default function GroupForecastByHour({
  weather,
}: GroupForecastByHourProps) {
  return (
    <div className="group-forecast-by-hour">
      {weather.forecast.forecastsByDays.map((forecastByDay, index) => (
        <BoxForecastByHour
          key={index}
          current={forecastByDay}
          time={forecastByDay.hour}
        />
      ))}
    </div>
  );
}
