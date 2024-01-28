import CardForecastToday from '../../components/cards/CardForecastToday';
import SectionGroupForecastByHour from '../../components/sections/SectionGroupForecastByHour';
import SectionGroupForecastByNextDays from '../../components/sections/SectionGroupForecastByWeek';
import './ForecastPage.scss';

export default function ForecastPage() {
  return (
    <main className="forecast-page">
      <CardForecastToday />
      <SectionGroupForecastByHour />
      <SectionGroupForecastByNextDays />
    </main>
  );
}
