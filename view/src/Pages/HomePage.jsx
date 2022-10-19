import React from "react";
import { Box, Button, Heading, Input, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createCustomerProfile,
  getCustomers,
  getLatestTasks,
} from "../Redux/AppReducer/action";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { NewCustomer } from "../Components/Customer/NewCustomer";

export const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appReducer.customers);
  //token
  const token = useSelector((state) => state.authReducer.token);

  //tasks
  const tasks = useSelector((state) => state.appReducer.tasks);

  const { isOpen, onOpen, onClose } = useDisclosure();
  //modal
  const [customer, setCustomer] = useState({});
  const handleCustomer = (e) => {
    const { id, value } = e.target;
    setCustomer({
      ...customer,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    // console.log(customer);
    if (!customer.name && customer.password) {
      return;
    }
    const payload = {
      data: customer,
      token,
    };

    dispatch(createCustomerProfile(payload));
    // onClose();
  };

  const [mobile, setMobile] = useState("");

  const handleSearch = () => {
    //Todo
    dispatch(
      getCustomers({
        token,
        params: {
          nbr: mobile,
        },
      })
    );
  };

  useEffect(() => {
    // dispatch(getLatestTasks({ token }));
  }, []);
  return (
    <Box>
      <Heading>Home</Heading>
      <Box>
        <Input
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="Search by mobile Number"
        />
        <Button colorScheme={"teal"} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box>
        <>
          <Button onClick={onOpen}>Create a customer</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New Customer</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <NewCustomer handleCustomer={handleCustomer} />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" onClick={handleSubmit}>
                  Create
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Box>
    </Box>
  );
};
