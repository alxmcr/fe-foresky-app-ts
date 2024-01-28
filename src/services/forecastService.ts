export const getCurrentForecastByCity = async ({
  nameCity = '',
  hasAirQuality = 'no',
  hasAlerts = 'no',
  days = 1,
}) => {
  const APPID = import.meta.env.REACT_APP_API_KEY_WEATHER;
  const SERVER_API = 'https://api.weatherapi.com/v1';
  const RESOURCE = 'forecast.json';

  const params = new URLSearchParams();
  if (APPID !== null) {
    params.append('key', APPID);
  }
  if (nameCity !== null) {
    params.append('q', nameCity);
  }
  if (hasAirQuality !== null) {
    params.append('aqi', hasAirQuality);
  }
  if (hasAlerts !== null) {
    params.append('alerts', hasAlerts);
  }
  if (days !== null) {
    params.append('days', days.toString());
  }

  const fullUrl = new URL(`${SERVER_API}/${RESOURCE}`);
  fullUrl.search = new URLSearchParams(params).toString();
  return fetch(fullUrl);
};
