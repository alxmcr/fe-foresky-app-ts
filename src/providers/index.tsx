import React from 'react';
import { CityContextData } from '../@types/typesProviders';
import { CityContext } from './CityContext';

type CityProviderProps = {
  children: React.ReactNode;
};

export default function CityProvider({ children }: CityProviderProps) {
  const [nameCity, setNameCity] = React.useState('');

  const value: CityContextData = {
    nameCity,
    setNameCity,
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}
