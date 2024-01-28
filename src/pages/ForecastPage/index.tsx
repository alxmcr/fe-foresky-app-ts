import SectionGroupForecastByHour from '../../components/SectionGroupForecastByHour';
import CardForecastToday from '../../components/cards/CardForecastToday';
import './ForecastPage.scss';

export default function ForecastPage() {
  return (
    <main className="forecast-page">
      <CardForecastToday />
      <SectionGroupForecastByHour />
    </main>
  );
}
