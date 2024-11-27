import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import "./styles/Form.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Failed to fetch countries.");
      const data = await response.json();
      const countryNames = data.map((country) => country.name.common).sort();
      setCountries(countryNames);
      setError("");
    } catch (err) {
      setError("Could not load countries. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (formData) => {
    setConfirmation(formData);
  };

  return (
    <div className="app">
      <h1>Country Selection Form</h1>
      <Form
        countries={countries}
        loading={loading}
        error={error}
        onSubmit={handleFormSubmit}
      />
      {confirmation && <Confirmation data={confirmation} />}
    </div>
  );
};

export default App;
