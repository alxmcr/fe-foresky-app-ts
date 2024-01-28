import { City } from '../@types/typeCity';
import { Current, WeatherWithForecast } from '../@types/typeForecasts';

export type QueryCity = {
  nameCity: string;
  hasAirQuality: string;
  hasAlerts?: string;
  days?: number;
};

export interface IWeatherAPI {
  findCityByName(nameCity: string): Promise<City>;
  findCurrentForecastByCity(query: QueryCity): Promise<Current>;
  findWeatherDetailsByCity(query: QueryCity): Promise<WeatherWithForecast>;
}
