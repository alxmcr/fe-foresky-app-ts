import { Current } from '../../../@types/typeForecasts';
import './CardBodyForecastToday.scss';

type CardBodyForecastTodayProps = {
  currentForecast: Current | null;
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
        src={currentForecast.condition.icon}
        alt={currentForecast.condition.text}
        className="card-body-forecast-today__image"
      />
      <div className="card-body-forecast-today__condition">
        <p className="card-body-forecast-today__temperature">
          {currentForecast.temp_c} °C
        </p>
        <p className="card-body-forecast-today__name">
          {currentForecast.condition.text}
        </p>
      </div>
    </div>
  );
}
