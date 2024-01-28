import { City } from '../@types/typeCity';
import { Weather, ForecastForNextDays } from '../@types/typeForecasts';
import { IWeatherAPI, QueryCity } from './IWeatherAPI';

const API_RESOURCES = {
  search: 'search.json',
  CurrentForecast: 'current.json',
  forecast: 'forecast.json',
};

export class WeatherAPIImpl implements IWeatherAPI {
  private WEATHER_API_KEY: string;
  private WEATHER_API_BASE_URL: string;
  private WEATHER_API_VERSION: string;

  constructor() {
    this.WEATHER_API_KEY = import.meta.env.VITE_API_KEY_WEATHER;
    this.WEATHER_API_BASE_URL = 'https://api.weatherapi.com';
    this.WEATHER_API_VERSION = 'v1';
  }

  async findCityByName(nameCity = ''): Promise<City> {
    if (this.WEATHER_API_KEY === null || this.WEATHER_API_KEY === undefined) {
      throw new Error('API KEY is invalid!');
    }

    if (nameCity === '' || nameCity === null || nameCity === undefined) {
      throw new Error('Name city is invalid!');
    }

    const params = new URLSearchParams();
    params.append('key', this.WEATHER_API_KEY);
    params.append('q', nameCity);

    const fullUrl = new URL(
      `${this.WEATHER_API_BASE_URL}/${this.WEATHER_API_VERSION}/${API_RESOURCES.search}`,
    );
    fullUrl.search = new URLSearchParams(params).toString();

    const response = await fetch(fullUrl);
    const data: City = await response.json();

    return data;
  }
  async findCurrentWeatherByCity(query: QueryCity): Promise<Weather> {
    const { nameCity, hasAirQuality } = query;

    if (this.WEATHER_API_KEY === null || this.WEATHER_API_KEY === undefined) {
      throw new Error('API KEY is invalid!');
    }

    if (nameCity === '' || nameCity === null || nameCity === undefined) {
      throw new Error('Name city is invalid!');
    }

    if (
      hasAirQuality === '' ||
      hasAirQuality === null ||
      hasAirQuality === undefined
    ) {
      throw new Error('Air quality is invalid!');
    }

    const params = new URLSearchParams();
    params.append('key', this.WEATHER_API_KEY);
    params.append('q', nameCity);
    params.append('aqi', hasAirQuality);

    const fullUrl = new URL(
      `${this.WEATHER_API_BASE_URL}/${this.WEATHER_API_VERSION}/${API_RESOURCES.CurrentForecast}`,
    );
    fullUrl.search = new URLSearchParams(params).toString();

    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }
  async findForecastsByCity(query: QueryCity): Promise<ForecastForNextDays> {
    const { nameCity, hasAirQuality, days } = query;

    if (this.WEATHER_API_KEY === null || this.WEATHER_API_KEY === undefined) {
      throw new Error('API KEY is invalid!');
    }

    if (nameCity === '' || nameCity === null || nameCity === undefined) {
      throw new Error('Name city is invalid!');
    }

    if (
      hasAirQuality === '' ||
      hasAirQuality === null ||
      hasAirQuality === undefined
    ) {
      throw new Error('Air quality is invalid!');
    }

    const params = new URLSearchParams();
    params.append('key', this.WEATHER_API_KEY);
    params.append('q', nameCity);
    params.append('aqi', hasAirQuality);
    params.append('days', '7');

    const fullUrl = new URL(
      `${this.WEATHER_API_BASE_URL}/${this.WEATHER_API_VERSION}/${API_RESOURCES.forecast}`,
    );
    fullUrl.search = new URLSearchParams(params).toString();

    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }
}
