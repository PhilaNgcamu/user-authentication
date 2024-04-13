import React, { useState } from "react";
import "./LoginForm.css"; // Import CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Assuming the backend sends back a token upon successful login
        const { token } = data;
        // Store token in localStorage
        localStorage.setItem("token", token);
        // Redirect to profile page or perform any other action
        console.log("Login successful");
      } else {
        const errorMessage = await response.text();
        console.error("Error logging in:", errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message);
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
