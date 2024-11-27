export const validateForm = (values) => {
  const errors = {};

  // First Name Validation
  if (!values.firstName) {
    errors.firstName = "First name is required.";
  }

  // Last Name Validation
  if (!values.lastName) {
    errors.lastName = "Last name is required.";
  }

  // Email Validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Email is not valid.";
  }

  // Phone Validation (basic example, you can extend it)
  if (!values.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[0-9]{10,15}$/.test(values.phone)) {
    errors.phone = "Phone number is not valid.";
  }

  // Country Validation
  if (!values.country) {
    errors.country = "Country is required.";
  }

  return errors;
};
