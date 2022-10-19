import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const CustomerMeasurement = ({ handleCustomer }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="name" id="name" onChange={handleCustomer} />
        <FormLabel>Mobile</FormLabel>
        <Input type="mobile" id="mobile" onChange={handleCustomer} />

        <FormLabel>length</FormLabel>
        <Input type="length" id="length" onChange={handleCustomer} />
      </FormControl>
      <FormLabel>shoulder</FormLabel>
      <Input type="shoulder" id="shoulder" onChange={handleCustomer} />
      <FormLabel>chest</FormLabel>
      <Input type="chest" id="chest" onChange={handleCustomer} />
      <FormLabel>waist</FormLabel>
      <Input type="waist" id="waist" onChange={handleCustomer} />
      <FormLabel>sleeve</FormLabel>
      <Input type="sleeve" id="sleeve" onChange={handleCustomer} />
      <FormLabel>regard</FormLabel>
      <Input type="regard" id="regard" onChange={handleCustomer} />
      <FormLabel>slit</FormLabel>
      <Input type="slit" id="slit" onChange={handleCustomer} />
      <FormLabel>hip</FormLabel>
      <Input type="hip" id="hip" onChange={handleCustomer} />
      <FormLabel>seat</FormLabel>
      <Input type="seat" id="seat" onChange={handleCustomer} />
      <FormLabel>bottom_length</FormLabel>
      <Input
        type="bottom_length"
        id="bottom_length"
        onChange={handleCustomer}
      />
      <FormLabel>bottom_waist</FormLabel>
      <Input type="bottom_waist" id="bottom_waist" onChange={handleCustomer} />
      <FormLabel>bell</FormLabel>
      <Input type="bell" id="bell" onChange={handleCustomer} />
      <FormLabel>neck_number</FormLabel>
      <Input type="neck_number" id="neck_number" onChange={handleCustomer} />
      <FormLabel>neck_width</FormLabel>
      <Input type="neck_width" id="neck_width" onChange={handleCustomer} />
      <FormLabel>neck_length</FormLabel>
      <Input type="neck_length" id="neck_length" onChange={handleCustomer} />
      {/* <Button onClick={handleSubmit}>submit</Button> */}
    </Box>
  );
};
/*length: { type: String, required: false },
    // shoulder: { type: String, required: false },
    // chest: { type: String, required: false },
    // waist: { type: String, required: false },
    // sleeve: { type: String, required: false },
    // regard: { type: String, required: false },
    // slit: { type: String, required: false },
    // hip: { type: String, required: false },
    // seat: { type: String, required: false },
    // bottom_length: { type: String, required: false },
    // bottom_waist: { type: String, required: false },
    // bell: { type: String, required: false },
    // neck_number: { type: String, required: false },
    // neck_width: { type: String, required: false },
    // neck_length: { type: String, required: false },
*/
