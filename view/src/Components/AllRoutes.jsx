import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
