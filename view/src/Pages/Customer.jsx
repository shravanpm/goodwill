import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerInfo } from "../Redux/CustomerReducer/action";

export const Customer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [test, setTest] = useState(false);
  //token
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    dispatch(getCustomerInfo({ id, token }));
  }, [test]);

  return (
    <Box>
      <Box>
        <Button>View Customer Info</Button>
      </Box>
    </Box>
  );
};
