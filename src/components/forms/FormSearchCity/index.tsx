import React from 'react';
import { WeatherAPIImpl } from '../../../services/WeatherAPIImpl';
import { LoadingStates } from '../../../@types/appTypes';
import './FormSearchCity.scss';
import { CityContext } from '../../../providers/CityContext';
import { useNavigate } from 'react-router-dom';
import { ForecastRoute } from '../../../router/constants.routes';

type FormSearchCityProps = {
  setErrorCity: React.Dispatch<React.SetStateAction<Error | null>>;
  setStatusSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormSearchCity({
  setErrorCity,
  setStatusSearch,
}: FormSearchCityProps) {
  const navigate = useNavigate();
  const { nameCity, setNameCity } = React.useContext(CityContext);

  const handlerNameCity = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNameCity(ev.target.value);
    setErrorCity(null);
    localStorage.removeItem('city');
  };

  const handleSearch = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const service = new WeatherAPIImpl();
      // Searching
      setStatusSearch(LoadingStates.PENDING);
      localStorage.setItem('city', nameCity);

      const city = await service.findCityByName(nameCity);
      setStatusSearch(LoadingStates.SUCCESS);

      if (city !== null) {
        // Redirect
        navigate(ForecastRoute.path);
      }
    } catch (error) {
      setStatusSearch(LoadingStates.ERROR);

      localStorage.removeItem('city');
      if (error instanceof Error) {
        setErrorCity(error);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="form-search-city">
      <div className="form-search-city__formfield">
        <label htmlFor="nameCity" className="form-search-city__label">
          City:
        </label>
        <input
          type="search"
          id="nameCity"
          name="nameCity"
          className="form-search-city__input"
          value={nameCity}
          onChange={handlerNameCity}
          placeholder="Enter some city"
          required
          autoComplete="off"
        />
      </div>
      <button type="submit" className="form-search-city__button">
        Search
      </button>
    </form>
  );
}
