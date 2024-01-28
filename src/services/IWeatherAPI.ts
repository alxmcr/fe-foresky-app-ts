import { City } from '../@types/typeCity';
import { Weather, ForecastForNextDays } from '../@types/typeForecasts';

export type QueryCity = {
  nameCity: string;
  hasAirQuality: string;
  hasAlerts?: string;
  days?: number;
};

export interface IWeatherAPI {
  findCityByName(nameCity: string): Promise<City>;
  findCurrentWeatherByCity(query: QueryCity): Promise<Weather>;
  findForecastsByCity(query: QueryCity): Promise<ForecastForNextDays>;
}
