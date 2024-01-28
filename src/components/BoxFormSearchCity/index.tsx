import React from 'react';
import FormSearchCity from '../forms/FormSearchCity';
import { LoadingStates } from '../../@types/appTypes';
import './BoxFormSearchCity.scss';

export default function BoxFormSearchCity() {
  const [statusSearch, setStatusSearch] = React.useState(LoadingStates.IDLE);
  const [errorCity, setErrorCity] = React.useState<Error | null>(null);

  return (
    <article className="box-search-city">
      <FormSearchCity
        setErrorCity={setErrorCity}
        setStatusSearch={setStatusSearch}
      />
      <div className="box-search-city__messages">
        {statusSearch === LoadingStates.PENDING ? (
          <p className="box-search-city__message">Searching...</p>
        ) : null}
        {errorCity !== null ? (
          <p className="box-search-city__message">{errorCity.message}</p>
        ) : null}
      </div>
    </article>
  );
}
