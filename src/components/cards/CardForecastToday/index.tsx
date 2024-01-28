import { Weather } from '../../../@types/typeForecasts';
import CardBodyForecastToday from '../CardBodyForecastToday';
import CardFooterForecastToday from '../CardFooterForecastToday';
import CardHeaderForecastToday from '../CardHeaderForecastToday';
import './CardForecastToday.scss';

type CardForecastTodayProps = {
  currentWeather: Weather;
};

export default function CardForecastToday({
  currentWeather,
}: CardForecastTodayProps) {
  return (
    <article className="card-forecast-today">
      <CardHeaderForecastToday currentWeather={currentWeather || null} />
      <CardBodyForecastToday
        currentForecast={currentWeather?.current || null}
      />
      <CardFooterForecastToday
        currentForecast={currentWeather?.current || null}
      />
    </article>
  );
}
