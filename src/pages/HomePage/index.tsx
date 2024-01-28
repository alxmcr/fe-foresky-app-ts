import CardFormSearchCity from '../../components/boxes/BoxFormSearchCity';
import IconWeather from '../../components/icons/IconWeather';
import './HomePage.scss';

export default function HomePage() {
  return (
    <main className="home-page">
      <IconWeather />
      <h1 className="home-page__title">Weather App</h1>
      <CardFormSearchCity />
      <p className="home-page__poweredby">
        {'Powered by '}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          className="home-page__link"
        >
          WeatherAPI.com
        </a>
      </p>
    </main>
  );
}
