import { basicFormatDateStr } from '../../../helpers/dateHelpers';
import IconMapPin from '../../icons/IconMapPin';

type CardHeaderForecastTodayProps = {
  locationName: string;
  lastUpdatedAt: string;
};

export default function CardHeaderForecastToday({
  locationName = '_',
  lastUpdatedAt = '2024-01-26 16:15',
}: CardHeaderForecastTodayProps) {
  return (
    <header className="forecast-today">
      <div className="forecast-today__location">
        <IconMapPin />
        <h3 className="forecast-today__location-details">{locationName}</h3>
      </div>
      <p className="forecast-today__lastupdated">
        {basicFormatDateStr(lastUpdatedAt, 'en-US')}
      </p>
    </header>
  );
}
