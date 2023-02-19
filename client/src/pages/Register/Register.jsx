import React from "react";
import { Button } from "../common";
import useForm from "./hooks/useForm";
import useUser from "./hooks/useUser";
import "./register.scss";

const Register = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    errors,
    handleInputs,
    validateInputs,
    formIsValid,
    validateForm
  } = useForm();

  const { signUpUser } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (formIsValid) {
      console.log("formIsValid",formIsValid)
      signUpUser({ firstName, lastName, email, password });
    }
  };

  return (
    <div className="register-wrapper">
      <section>
        <h2>Sign up</h2>
        <p>We do not share your personal details with ayone.</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h3>Note: All fields in the form below are mandatory.</h3>
          <label>
            First Name:
            <input
              id="firstName"
              value={firstName}
              onChange={handleInputs}
              onBlur={validateInputs}
              aria-invalid={errors.firstName}
              type="text"
              autoComplete="name"
              minLength={2}
              required
            />
            {errors.firstName && (
              <span className="error">
                First name must have 2 characters from a to z. Example: Chetna
              </span>
            )}
          </label>
          <label>
            Last Name:
            <input
              id="lastName"
              value={lastName}
              onChange={handleInputs}
              onBlur={validateInputs}
              aria-invalid={errors.lastName}
              type="text"
              autoComplete="name"
              minLength={2}
              required
            />
            {errors.lastName && (
              <span className="error">
                Last name must have 2 characters from a to z. Example: Mahajan
              </span>
            )}
          </label>
          <label>
            Email:
            <input
              id="email"
              value={email}
              onChange={handleInputs}
              onBlur={validateInputs}
              aria-invalid={errors.email}
              type="email"
              autoComplete="email"
              required
            />
            {errors.email && (
              <span className="error">
                Please enter valid email address. Example:
                chetna.mahajan@gmail.com
              </span>
            )}
          </label>
          <label>
            Password:
            <input
              id="password"
              value={password}
              onChange={handleInputs}
              onBlur={validateInputs}
              aria-invalid={errors.password}
              type="password"
              autoComplete="password"
              minLength={8}
              required
            />
            {errors.password && (
              <span className="error">
                Password must have minimum eight characters, at least one
                letter, one number and one special character
              </span>
            )}
          </label>
          <label>
            Confirm Password:
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleInputs}
              onBlur={validateInputs}
              aria-invalid={errors.confirmPassword}
              type="password"
              autoComplete="password"
              minLength={8}
              required
            />
            {errors.confirmPassword && (
              <span className="error">
                Password must match with previous field
              </span>
            )}
          </label>
          <Button>Signup</Button>
        </form>
      </section>
    </div>
  );
};

export default Register;
