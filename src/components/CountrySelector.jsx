import React from "react";

const CountrySelector = ({ value, onChange, countries, loading, error }) => {
  if (loading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <label htmlFor="country">
        Country:
        <select
          id="country"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-labelledby="country"
          required
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CountrySelector;
