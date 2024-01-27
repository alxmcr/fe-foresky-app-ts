import React from 'react';
import { CityContextData } from '../@types/typesProviders';

const initialCityContext: CityContextData = {
  nameCity: '',
  setNameCity: () => {},
};

export const CityContext = React.createContext(initialCityContext);
