import { Flex } from "@chakra-ui/react";
import React from "react";
import NavbarMobile from "../components/Dashboard/Sidebar/NavbarMobile";

import OverviewComponentResident from "../components/ResidentDashboard/OverviewResidentCompoent";
import UILayoutResident from "../components/ResidentDashboard/UILayoutResident";

const OverviewResident = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobile display={{ sm: "flex", lg: "none" }} />
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
