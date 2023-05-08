import { Flex } from "@chakra-ui/react";
import React from "react";
import PackagesResidentComponent from "../components/ResidentDashboard/PackagesResidentComponent";
import NavbarMobileResident from "../components/ResidentDashboard/NavItemsMobileResident";

import UILayoutResident from "../components/ResidentDashboard/UILayoutResident";

const PackagesResident = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobileResident display={{ sm: "flex", lg: "none" }} />
      <UILayoutResident display={{ base: "none", lg: "flex" }} />
      <PackagesResidentComponent
        w={{ base: "full", lg: "calc(100% - 15.9375rem)" }}
        ml={{ base: "0px", lg: "auto" }}
        direction="column"
        px="8"
        
        
        
      />
    </Flex>
  );
});

export default PackagesResident;
