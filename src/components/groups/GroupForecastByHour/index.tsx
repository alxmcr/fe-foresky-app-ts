import { Hour, ForecastForNextDays } from '../../../@types/typeForecasts';
import BoxForecastByHour from '../../boxes/BoxForecastByHour';
import './GroupForecastByHour.scss';

type GroupForecastByHourProps = {
  weather: ForecastForNextDays | null;
};

export default function GroupForecastByHour({
  weather,
}: GroupForecastByHourProps) {
  if (weather === null) {
    return null;
  }

  return (
    <div className="group-forecast-by-hour">
      {weather?.forecast?.forecastday?.map((forecastByDay) =>
        forecastByDay?.hour?.map((hour: Hour) => (
          <BoxForecastByHour key={hour.time_epoch} hour={hour} />
        )),
      )}
    </div>
  );
}
