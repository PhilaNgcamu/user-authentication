import React from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import UserProfile from "./components/Profile/UserProfile";
import LoginForm from "./components/Auth/LoginForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginForm />} />
      <Route
        path="/profile"
        element={<PrivateRoute component={UserProfile} />}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
