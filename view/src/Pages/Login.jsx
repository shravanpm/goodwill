import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [shop, setShop] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Taking the input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShop({
      ...shop,
      [id]: value,
    });
  };

  const handleSubmit = () => {};

  useEffect(() => {}, []);

  return (
    <Box>
      <Container>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="name" id="name" onChange={handleChange} />
          <FormLabel>Password</FormLabel>
          <Input type="password" id="password" onChange={handleChange} />
        </FormControl>
        <Button colorScheme={"teal"} onClick={handleSubmit} mt="1em">
          Login
        </Button>
      </Container>
    </Box>
  );
};
