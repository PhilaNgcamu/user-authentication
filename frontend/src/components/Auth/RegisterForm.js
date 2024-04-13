// RegisterForm.js

import React, { useState } from "react";
import axios from "../services/api";
import "./RegisterForm.css"; // Import CSS file for styling

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        username,
        email,
        password,
      });
      console.log(response.data); // Log the response from the server
      // Reset the form fields after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error registering user:", error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="form-container">
      {" "}
      {/* Apply CSS class for styling */}
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
