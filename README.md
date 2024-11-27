# Country Form Submission Project

## Overview
This project is a React application designed to allow users to fill out a form with their personal details and select a country from a dynamically fetched list. Upon successful submission, a confirmation message is displayed. The form adheres to WCAG 2.1 accessibility guidelines.

## Features
- Dynamic fetching of country data from an API.
- Real-time form validation for required fields and proper formatting (e.g., email validation).
- Accessible design including proper labels, ARIA attributes, and keyboard navigation.
- Confirmation message displayed upon successful form submission.
- Error handling for failed API calls.
- Basic animations for transitions.
- Responsive and ADA-compliant design.

## Components
### 1. **Form**
Handles the input fields and form submission logic:
- Fields: First Name, Last Name, Phone Number, Email Address, and Country.
- Validates all fields before allowing submission.
- Displays inline error messages for invalid inputs.

### 2. **Confirmation**
Displays a success message with the user’s first name, email address, and selected country upon successful form submission.

## Approach
### Why Components?
- **Separation of Concerns:** Dividing the functionality between `Form` and `Confirmation` ensures maintainable and scalable code.
- **Reusability:** If the confirmation message or form layout needs to be reused elsewhere, it can be easily imported as a standalone component.

### Accessibility
- **Labels and ARIA:** Each input field is labeled with `<label>` tags for screen readers, and ARIA attributes are used to highlight errors.
- **Keyboard Navigation:** All elements are accessible via keyboard, providing focus indicators.
- **Color Contrast:** Ensures sufficient contrast for text readability.

### CSS Variables
- Used for theming and easy customization of colors and styles.

### Error Handling
- Displays an error message in case the API call fails to fetch the list of countries.

### Animations
- Applied a fade-in effect for the confirmation message using CSS transitions.

## Challenges
1. **Dynamic API Data:** Handling edge cases such as failed API calls and empty responses required robust error handling.
2. **Accessibility Compliance:** Ensuring the design met WCAG 2.1 guidelines involved adding ARIA roles, labels, and proper focus management.
3. **Validation:** Implementing real-time form validation for various field types without external libraries required extra effort.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/country-form-submission.git
   ```
2. Navigate to the project directory:
   ```bash
   cd country-form-submission
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used
- React
- JavaScript (ES6+)
- Fetch API
- CSS (with variables for theming)

## Project Structure
```
src/
├── components/
│   ├── Form.js
│   ├── Confirmation.js
├── App.js
├── App.css
├── index.js
```

## Accessibility Compliance
This project adheres to WCAG 2.1 guidelines:
- Proper labeling of form fields.
- Keyboard accessibility.
- Screen reader-friendly messages.
- High contrast colors for readability.

## Contact
If you have any questions, feel free to contact Dmytro Shkuropatenko (mailto:shkuropatenko.d@gmail.com).