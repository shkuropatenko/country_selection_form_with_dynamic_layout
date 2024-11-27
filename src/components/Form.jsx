import React, { useState } from "react";
import CountrySelector from "./CountrySelector";
import { validateForm } from "../utils/validation";

const Form = ({ onSubmit, countries, loading, error }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      const updatedValues = { ...prev, [name]: value };

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (newErrors[name]) {
          delete newErrors[name];
        }
        return newErrors;
      });

      return updatedValues;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="form-header">
      <h2 id="form-header">Please fill out the form</h2>

      <label htmlFor="firstName">
        First Name:
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          aria-describedby="first-name-error"
        />
        {errors.firstName && (
          <span id="first-name-error" role="alert" className="error">
            {errors.firstName}
          </span>
        )}
      </label>

      <label htmlFor="lastName">
        Last Name:
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          aria-describedby="last-name-error"
        />
        {errors.lastName && (
          <span id="last-name-error" role="alert" className="error">
            {errors.lastName}
          </span>
        )}
      </label>

      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span id="email-error" role="alert" className="error">
            {errors.email}
          </span>
        )}
      </label>

      <label htmlFor="phone">
        Phone Number:
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          aria-describedby="phone-error"
        />
        {errors.phone && (
          <span id="phone-error" role="alert" className="error">
            {errors.phone}
          </span>
        )}
      </label>

      <CountrySelector
        value={formValues.country}
        onChange={(country) => setFormValues((prev) => ({ ...prev, country }))}
        countries={countries}
        loading={loading}
        error={error}
        aria-describedby="country-error"
      />
      {errors.country && (
        <span id="country-error" role="alert" className="error">
          {errors.country}
        </span>
      )}

      <button type="submit" aria-label="Submit the form">
        Submit
      </button>
    </form>
  );
};

export default Form;
