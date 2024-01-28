import { Current } from '../../../@types/typeForecasts';
import IconCloud from '../../icons/IconCloud';
import IconDropWater from '../../icons/IconDropWater';
import IconWind from '../../icons/IconWind';
import './CardFooterForecastToday.scss';

type CardFooterForecastTodayProps = {
  currentForecast: Current | null;
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
        <IconWind />
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.wind_kph} Km/h
        </p>
      </div>
      <div className="card-footer-forecast-today__nature-info">
        <IconDropWater />
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.humidity}%
        </p>
      </div>
      <div className="card-footer-forecast-today__nature-info">
        <IconCloud />
        <p className="card-footer-forecast-today__nature-event">
          {currentForecast.cloud}%
        </p>
      </div>
    </footer>
  );
}
