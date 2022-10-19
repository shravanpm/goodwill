import React from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const NewCustomer = ({ handleCustomer }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="name" id="name" onChange={handleCustomer} />
        <FormLabel>Mobile</FormLabel>
        <Input type="mobile" id="mobile" onChange={handleCustomer} />
      </FormControl>
    </Box>
  );
};
