import React from 'react';
import { WeatherAPIImpl } from '../../../services/WeatherAPIImpl';
import { LoadingStates } from '../../../@types/appTypes';
import './FormSearchCity.scss';

type FormSearchCityProps = {
  setErrorCity: React.Dispatch<React.SetStateAction<Error | null>>;
  setStatusSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormSearchCity({
  setErrorCity,
  setStatusSearch,
}: FormSearchCityProps) {
  const [nameCity, setNameCity] = React.useState('');

  const handlerNameCity = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNameCity(ev.target.value);
  };

  const handleSearch = async (ev: React.FormEvent) => {
    ev.preventDefault();

    try {
      const service = new WeatherAPIImpl();
      // Searching
      setStatusSearch(LoadingStates.PENDING);
      const city = await service.findCityByName(nameCity);

      if (city !== null) {
        console.log(city);
        setStatusSearch(LoadingStates.SUCCESS);
      }
    } catch (error) {
      setStatusSearch(LoadingStates.ERROR);
      if (error instanceof Error) {
        setErrorCity(error);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="form">
      <div className="form__formfield">
        <label htmlFor="nameCity" className="form__label">
          City:
        </label>
        <input
          type="search"
          id="nameCity"
          name="nameCity"
          className="form__input"
          value={nameCity}
          onChange={handlerNameCity}
          placeholder="Enter some city"
          required
          autoComplete="off"
        />
      </div>
      <button type="submit" className="form__button">
        Search
      </button>
    </form>
  );
}
