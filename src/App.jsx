import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "../src/pages/Dashboard";
import SignIn from "../src/pages/sigin";
import SignUp from "../src/pages/signup";

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/dashboard", "/signin", "/signup"];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
