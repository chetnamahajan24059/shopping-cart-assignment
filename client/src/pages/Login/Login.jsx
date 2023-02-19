import React from "react";
import { Button } from "../common";
import useForm from "./hooks/useForm";
import useUser from "./hooks/useUser";
import "./login.scss";

const Login = () => {
  const {
    email,
    password,
    errors,
    handleInputs,
    validateInputs,
    formIsValid,
    validateForm,
  } = useForm();

  const { loginUser } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (formIsValid) {
      console.log("formIsValid", formIsValid);
      loginUser({ email, password });
    }
  };

  return (
    <div className="login-wrapper">
      <section>
        <h2>Sign up</h2>
        <p>We do not share your personal details with ayone.</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h3>Note: All fields in the form below are mandatory.</h3>
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
          <Button>Login</Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
