import { Flex } from "@chakra-ui/react";
import React from "react";
import RegistersComponent from "../components/Dashboard/Content/RegistersComponent";
import NavbarMobile from "../components/Dashboard/Sidebar/NavbarMobile";

import UILayout from "../components/Dashboard/Sidebar/UILayout";

const Registers = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobile display={{ sm: "flex", lg: "none" }} />
      <UILayout display={{ base: "none", lg: "flex" }} />
      <RegistersComponent
        w={{ base: "full", lg: "calc(100% - 15.9375rem)" }}
        ml={{ base: "0px", lg: "auto" }}
        direction="column"
        px="8"
        
        
        
      />
    </Flex>
  );
});

export default Registers;
