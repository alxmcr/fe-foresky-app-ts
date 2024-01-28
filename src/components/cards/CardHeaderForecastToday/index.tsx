import { basicFormatDateStr } from '../../../helpers/dateHelpers';
import IconMapPin from '../../icons/IconMapPin';
import './CardHeaderForecastToday.scss';

type CardHeaderForecastTodayProps = {
  locationName: string;
  lastUpdatedAt: string;
};

export default function CardHeaderForecastToday({
  locationName = '_',
  lastUpdatedAt = '2024-01-26 16:15',
}: CardHeaderForecastTodayProps) {
  return (
    <header className="header-forecast-today">
      <div className="header-forecast-today__location">
        <IconMapPin />
        <h3 className="header-forecast-today__location-details">{locationName}</h3>
      </div>
      <p className="header-forecast-today__lastupdated">
        {basicFormatDateStr(lastUpdatedAt, 'en-US')}
      </p>
    </header>
  );
}
