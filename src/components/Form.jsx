import React from "react";

const Form = ({ countries, loading, error, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      email: formData.get("email"),
      country: formData.get("country"),
    };

    if (!data.firstName || !data.email || !data.country) {
      alert("All fields are required!");
      return;
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="form-title">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      {loading && <p>Loading countries...</p>}
      {error && <p className="error">{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
