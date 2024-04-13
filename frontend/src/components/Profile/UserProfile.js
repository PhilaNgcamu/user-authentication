// UserProfile.js

import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./UserProfile.css"; // Import CSS file for styling

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.response.data);
        setError(error.response.data);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profile-container">
      {" "}
      {/* Apply CSS class for styling */}
      <h2>User Profile</h2>
      {error && <p className="error-message">{error}</p>}
      {userData && (
        <div className="profile-data">
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user profile data */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
