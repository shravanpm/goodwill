import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/signup")}>signup</Button>
    </Box>
  );
};
