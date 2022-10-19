import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const Customer = () => {
  const { id } = useParams();

  return <Box>Customer</Box>;
};
