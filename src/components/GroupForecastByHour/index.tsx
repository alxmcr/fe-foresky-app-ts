import { Weather } from '../../@types/typeForecasts';
import BoxForecastByHour from '../BoxForecastByHour';

type GroupForecastByHourProps = {
  weather: Weather;
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
