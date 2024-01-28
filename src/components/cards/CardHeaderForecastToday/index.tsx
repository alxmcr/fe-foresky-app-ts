import { Weather } from '../../../@types/typeForecasts';
import { basicFormatDateStr } from '../../../helpers/dateHelpers';
import IconMapPin from '../../icons/IconMapPin';
import './CardHeaderForecastToday.scss';

type CardHeaderForecastTodayProps = {
  currentWeather: Weather | null;
};

export default function CardHeaderForecastToday({
  currentWeather,
}: CardHeaderForecastTodayProps) {
  if (currentWeather === null) {
    return null;
  }

  return (
    <header className="header-forecast-today">
      <div className="header-forecast-today__location">
        <IconMapPin />
        <h3 className="header-forecast-today__location-details">
          {currentWeather?.location !== null
            ? currentWeather?.location?.name
            : null}
        </h3>
      </div>
      <p className="header-forecast-today__lastupdated">
        {currentWeather?.current?.last_updated !== null
          ? basicFormatDateStr(currentWeather?.current?.last_updated, 'en-US')
          : null}
      </p>
    </header>
  );
}
