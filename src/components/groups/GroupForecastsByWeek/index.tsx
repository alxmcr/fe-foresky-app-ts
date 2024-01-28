import { Forecast } from '../../../@types/typeForecasts';
import BoxForecastByDay from '../../boxes/BoxForecastByDay';

type GroupForecastsByWeekProps = {
  forecasts: Forecast | null;
};

export default function GroupForecastsByWeek({
  forecasts,
}: GroupForecastsByWeekProps) {
  if (forecasts === null) {
    return null;
  }

  return (
    <div className="group-forecasts-by-week">
      {forecasts?.forecastday?.map((forecast) => (
        <BoxForecastByDay key={forecast.date_epoch} forecastDay={forecast} />
      ))}
    </div>
  );
}
