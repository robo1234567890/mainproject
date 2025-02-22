import { useState } from "react";
import './App.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 5) {
      setErrorMessage("Password length must be above 5 characters.");
    } else {
      setErrorMessage("");
      console.log("User logged in with:", formData);
    }
  };

  return (
    <div className="whole">
      <div className="container">
        <h1>Login</h1>
        <form id="signupForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Correct way to conditionally display an error message */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <button
            type="submit"
            className="login-btn"
          >
            Log in
          </button>
        </form>

        <p>Don't have an account?</p>
        <button
          className="signup-btn"
          onClick={() => window.location.href = "/SignUp"}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
