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
import { loginRequest } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [shop, setShop] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //token
  const token = useSelector((state) => state.authReducer.token);

  //Taking the input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setShop({
      ...shop,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(loginRequest(shop));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Box>
      <Container>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input id="mobile" onChange={handleChange} />
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
