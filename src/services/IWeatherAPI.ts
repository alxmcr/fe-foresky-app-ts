import { City } from '../@types/typeCity';
import { CurrentForecast, Weather } from '../@types/typeForecasts';

export type QueryCity = {
  nameCity: string;
  hasAirQuality: string;
  hasAlerts?: string;
  days?: number;
};

export interface IWeatherAPI {
  findCityByName(nameCity: string): Promise<City>;
  findCurrentForecastByCity(query: QueryCity): Promise<CurrentForecast>;
  findWeatherDetailsByCity(query: QueryCity): Promise<Weather>;
}
