import React from 'react';

const CountryInfoDisplay = ({ countryInfo }) => {
  const { name, capital, population, flag } = countryInfo;

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <img src={flag} alt={`Flag of ${name}`} style={{ width: '100px', height: 'auto' }} />
    </div>
  );
};

export default CountryInfoDisplay;
