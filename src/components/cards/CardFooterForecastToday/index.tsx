import { CurrentForecast } from '../../../@types/typeForecasts';
import IconCloud from '../../icons/IconCloud';
import IconDropWater from '../../icons/IconDropWater';
import IconWind from '../../icons/IconWind';
import './CardFooterForecastToday.scss';

type CardFooterForecastTodayProps = {
  currentForecast: CurrentForecast | null;
};

export default function CardFooterForecastToday({
  currentForecast,
}: CardFooterForecastTodayProps) {
  if (currentForecast === null) {
    return null;
  }

  return (
    <footer className="card-footer-forecast-today">
      <div className="card-footer-forecast-today__nature-info">
        <i className="card-footer-forecast-today__icon">
          <IconWind />
        </i>
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.current.wind_kph} Km/h
        </p>
      </div>
      <div className="card-footer-forecast-today__nature-info">
        <i className="card-footer-forecast-today__icon">
          <IconDropWater />
        </i>
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.current.humidity}%
        </p>
      </div>
      <div className="card-footer-forecast-today__nature-info">
        <i className="card-footer-forecast-today__icon">
          <IconCloud />
        </i>
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.current.cloud}%
        </p>
      </div>
    </footer>
  );
}
