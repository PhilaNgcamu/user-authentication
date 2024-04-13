import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/Auth/LoginForm";
import UserProfile from "./components/Profile/UserProfile";
import PrivateRoute from "./components/common/PrivateRoute";
import RegisterForm from "./components/Auth/RegisterForm";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute component={UserProfile}>
                <Route path="/" element={<UserProfile />} />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
