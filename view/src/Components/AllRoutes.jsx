import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Login } from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
