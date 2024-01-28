import { NavLink } from 'react-router-dom';
import CardForecastToday from '../../components/cards/CardForecastToday';
import SectionGroupForecastByHour from '../../components/sections/SectionGroupForecastByHour';
import SectionGroupForecastByWeek from '../../components/sections/SectionGroupForecastByWeek';
import './ForecastPage.scss';
import { HomeRoute } from '../../router/constants.routes';

export default function ForecastPage() {
  return (
    <main className="forecast-page">
      <NavLink to={HomeRoute.path} className="forecast-page__link">
        Return to home
      </NavLink>
      <CardForecastToday />
      <SectionGroupForecastByHour />
      <SectionGroupForecastByWeek />
      <p className="forecast-page__poweredby">
        {'Powered by '}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          className="forecast-page__link"
        >
          WeatherAPI.com
        </a>
      </p>
    </main>
  );
}
