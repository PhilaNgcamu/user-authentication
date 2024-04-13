import React, { useState } from "react";
import "./RegisterForm.css"; // Import CSS file for styling

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response from the server
        // Reset the form fields after successful registration
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        const errorMessage = await response.text();
        console.error("Error registering user:", errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
      setError(error.message);
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
