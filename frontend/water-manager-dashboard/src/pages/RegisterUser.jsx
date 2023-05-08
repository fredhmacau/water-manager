import { Flex } from "@chakra-ui/react";
import React from "react";
import RegisterUserComponent from "../components/Dashboard/Content/RegisterUserComponent";
import NavbarMobile from "../components/Dashboard/Sidebar/NavbarMobile";

import UILayout from "../components/Dashboard/Sidebar/UILayout";

const RegisterUser = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobile display={{ sm: "flex", lg: "none" }} />
      <UILayout display={{ base: "none", lg: "flex" }} />
      <RegisterUserComponent
        w={{ base: "full", lg: "calc(100% - 15.9375rem)" }}
        ml={{ base: "0px", lg: "auto" }}
        direction="column"
        px="8"
        
        
        
      />
    </Flex>
  );
});

export default RegisterUser;
