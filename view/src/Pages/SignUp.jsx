import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signupRequest } from "../Redux/AuthReducer/action";

export const SignUp = () => {
  const [shop, setShop] = useState({});
  const dispatch = useDispatch();
  //Taking the input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShop({
      ...shop,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    // console.log(shop);
    dispatch(signupRequest(shop));
  };

  return (
    <Box>
      SignUp
      <Box>
        <Container>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input id="mobile" onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <Input type="password" id="password" onChange={handleChange} />
          </FormControl>
          <Button colorScheme={"teal"} onClick={handleSubmit} mt="1em">
            Signup
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
