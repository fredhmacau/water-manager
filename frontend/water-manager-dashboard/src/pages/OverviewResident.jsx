import { Flex } from "@chakra-ui/react";
import React from "react";

import OverviewComponentResident from "../components/ResidentDashboard/OverviewResidentCompoent";
import UILayoutResident from "../components/ResidentDashboard/UILayoutResident";
import NavbarMobileResident from "../components/ResidentDashboard/NavbarMobileResident";

const OverviewResident = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobileResident display={{ sm: "flex", lg: "none" }} />
      <UILayoutResident display={{ base: "none", lg: "flex" }} />
      <OverviewComponentResident
        w={{ base: "full", lg: "calc(100% - 15.9375rem)" }}
        ml={{ base: "0px", lg: "auto" }}
        direction="column"
        px="8"
        
        
        
      />
    </Flex>
  );
});

export default OverviewResident;
