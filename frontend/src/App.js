import React, { useState } from 'react';
import InputField from './components/InputField';
import CountryInfoDisplay from './components/CountryInfoDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountryInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/country/${country}`);
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const data = await response.json();
      setCountryInfo(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryInfo();
  };

  return (
    <div>
      <h1>Country Information</h1>
      <InputField
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        onSubmit={handleSubmit}
      />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {countryInfo && <CountryInfoDisplay countryInfo={countryInfo} />}
    </div>
  );
}

export default App;
