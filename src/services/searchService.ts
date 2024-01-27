export const searchByQuery = async (query = '') => {
  const APPID = import.meta.env.REACT_APP_API_KEY_WEATHER;
  const SERVER_API = 'https://api.weatherapi.com/v1';
  const RESOURCE = 'search.json';

  let fullUrl = new URL(`${SERVER_API}/${RESOURCE}`);

  let params = new URLSearchParams();
  if (APPID !== null) {
    params.append('key', APPID);
  }
  if (query !== null) {
    params.append('q', query);
  }
  fullUrl.search = new URLSearchParams(params).toString();
  return fetch(fullUrl);
};
