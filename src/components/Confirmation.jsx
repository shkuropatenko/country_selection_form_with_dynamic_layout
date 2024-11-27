import React from "react";

const Confirmation = ({ data }) => {
  return (
    <div className="confirmation" aria-live="polite">
      <h2>Confirmation</h2>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Phone Number: {data.phone}</p>
      <p>Email: {data.email}</p>
      <p>Country: {data.country}</p>
    </div>
  );
};

export default Confirmation;
