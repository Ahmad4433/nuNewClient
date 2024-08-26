import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/user-auth/Register";
import Login from "./components/user-auth/Login";
import Home from "./components/admin/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
