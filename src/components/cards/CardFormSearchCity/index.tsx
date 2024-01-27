import React from 'react';
import FormSearchCity from '../../forms/FormSearchCity';
import { LoadingStates } from '../../../@types/appTypes';
import './CardFormSearchCity.scss';

export default function CardFormSearchCity() {
  const [statusSearch, setStatusSearch] = React.useState(LoadingStates.IDLE);
  const [errorCity, setErrorCity] = React.useState<Error | null>(null);

  return (
    <article className="card-search-city">
      <FormSearchCity
        setErrorCity={setErrorCity}
        setStatusSearch={setStatusSearch}
      />
      <div className="card-search-city__messages">
        {statusSearch === LoadingStates.PENDING ? (
          <p className="card-search-city__message">Searching...</p>
        ) : null}
        {errorCity !== null ? (
          <p className="card-search-city__message">{errorCity.message}</p>
        ) : null}
      </div>
    </article>
  );
}
