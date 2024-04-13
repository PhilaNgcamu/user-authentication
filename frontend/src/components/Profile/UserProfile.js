import React, { useState, useEffect } from "react";
import "./UserProfile.css"; // Import CSS file for styling

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        const response = await fetch("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          const errorMessage = await response.text();
          console.error("Error fetching user profile:", errorMessage);
          setError(errorMessage);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        setError(error.message);
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
