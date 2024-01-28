import { City } from '../@types/typeCity';
import { Weather, WeatherWithForecast } from '../@types/typeForecasts';

export type QueryCity = {
  nameCity: string;
  hasAirQuality: string;
  hasAlerts?: string;
  days?: number;
};

export interface IWeatherAPI {
  findCityByName(nameCity: string): Promise<City>;
  findCurrentWeatherByCity(query: QueryCity): Promise<Weather>;
  findWeatherDetailsByCity(query: QueryCity): Promise<WeatherWithForecast>;
}
