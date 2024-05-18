export const getCurrentForecastByCity = async ({
  nameCity = '',
  hasAirQuality = 'no',
}) => {
  const APPID = import.meta.env.VITE_API_KEY_WEATHER;
  const SERVER_API = 'https://api.weatherapi.com/v1';
  const RESOURCE = 'current.json';

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

  const fullUrl = new URL(`${SERVER_API}/${RESOURCE}`);
  fullUrl.search = new URLSearchParams(params).toString();

  return fetch(fullUrl);
};
