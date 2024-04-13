// LoginForm.js

import React, { useState } from "react";
import axios from "../../services/api";
import "./LoginForm.css"; // Import CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { username, password });
      // Assuming the backend sends back a token upon successful login
      const { token } = response.data;
      // Store token in localStorage
      localStorage.setItem("token", token);
      // Redirect to profile page or perform any other action
      console.log("Login successful");
    } catch (error) {
      console.error("Error logging in:", error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="form-container">
      {" "}
      {/* Apply CSS class for styling */}
      <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
