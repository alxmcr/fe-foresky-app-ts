import CardFormSearchCity from '../../components/cards/CardFormSearchCity';
import IconWeather from '../../components/icons/IconWeather';
import './HomePage.scss';

export default function HomePage() {
  return (
    <main className="home-page">
      <IconWeather />
      <h1 className="home-page__title">Weather App</h1>
      <CardFormSearchCity />
    </main>
  );
}
