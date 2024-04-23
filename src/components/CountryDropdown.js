import React from 'react';
import './CountryDropdown.css';

const CountryDropdown = ({ countryData, selectedCountry, handleCountryChange }) => {
  const handleChange = (e) => {
    handleCountryChange(e.target.value);
  };

  return (
    <div className="country-dropdown">
      <select value={selectedCountry} onChange={handleChange}>
        {countryData.map((country) => (
          <option key={country.cca3} value={country.cca3}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;