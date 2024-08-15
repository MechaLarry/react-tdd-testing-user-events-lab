import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Portfolio Elements (these tests already exist)

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/your name/i);
  const emailInput = screen.getByPlaceholderText(/your email/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const technologyCheckbox = screen.getByLabelText(/technology/i);
  const healthCheckbox = screen.getByLabelText(/health/i);
  const travelCheckbox = screen.getByLabelText(/travel/i);

  expect(technologyCheckbox).toBeInTheDocument();
  expect(healthCheckbox).toBeInTheDocument();
  expect(travelCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const technologyCheckbox = screen.getByLabelText(/technology/i);
  const healthCheckbox = screen.getByLabelText(/health/i);
  const travelCheckbox = screen.getByLabelText(/travel/i);

  expect(technologyCheckbox).not.toBeChecked();
  expect(healthCheckbox).not.toBeChecked();
  expect(travelCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/your name/i);
  const emailInput = screen.getByPlaceholderText(/your email/i);

  fireEvent.change(nameInput, { target: { value: "Larry" } });
  fireEvent.change(emailInput, { target: { value: "larry@example.com" } });

  expect(nameInput.value).toBe("Larry");
  expect(emailInput.value).toBe("larry@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const technologyCheckbox = screen.getByLabelText(/technology/i);
  
  fireEvent.click(technologyCheckbox);

  expect(technologyCheckbox).toBeChecked();
  
  fireEvent.click(technologyCheckbox);
  
  expect(technologyCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/your name/i);
  const emailInput = screen.getByPlaceholderText(/your email/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(nameInput, { target: { value: "Larry" } });
  fireEvent.change(emailInput, { target: { value: "larry@example.com" } });
  fireEvent.click(submitButton);

  const thankYouMessage = screen.getByText(/thank you, larry!/i);
  expect(thankYouMessage).toBeInTheDocument();
});
