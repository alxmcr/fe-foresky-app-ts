import { CurrentForecast } from '../../../@types/typeForecasts';

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
    <div className="card-forecast-today__body">
      <img
        src={currentForecast?.current.condition.icon}
        alt={currentForecast?.current.condition.text}
        className="card-forecast-today__image"
      />
      <div className="card-forecast-today__condition">
        <p className="card-forecast-today__temperature">
          {currentForecast?.current.temp_c} °C
        </p>
        <p className="card-forecast-today__name">
          {currentForecast?.current.condition.text}
        </p>
      </div>
    </div>
  );
}
