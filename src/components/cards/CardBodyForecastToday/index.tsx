import { CurrentForecast } from '../../../@types/typeForecasts';
import './CardBodyForecastToday.scss';

type CardBodyForecastTodayProps = {
  currentForecast: CurrentForecast | null;
};

export default function CardBodyForecastToday({
  currentForecast,
}: CardBodyForecastTodayProps) {
  if (currentForecast === null) {
    return null;
  }

  return (
    <div className="card-body-forecast-today">
      <img
        src={currentForecast?.current.condition.icon}
        alt={currentForecast?.current.condition.text}
        className="card-body-forecast-today__image"
      />
      <div className="card-body-forecast-today__condition">
        <p className="card-body-forecast-today__temperature">
          {currentForecast?.current.temp_c} °C
        </p>
        <p className="card-body-forecast-today__name">
          {currentForecast?.current.condition.text}
        </p>
      </div>
    </div>
  );
}
