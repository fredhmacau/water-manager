import { Flex } from "@chakra-ui/react";
import React from "react";
import OverviewComponent from "../components/Dashboard/Content/OverviewComponent";
import NavbarMobile from "../components/Dashboard/Sidebar/NavbarMobile";

import UILayout from "../components/Dashboard/Sidebar/UILayout";

const Overview = React.memo((props) => {
  return (
    <Flex w="full" h="auto"  direction="column" bg="#F7F8FC">
      <NavbarMobile display={{ sm: "flex", lg: "none" }} />
      <UILayout display={{ base: "none", lg: "flex" }} />
      <OverviewComponent
        w={{ base: "full", lg: "calc(100% - 15.9375rem)" }}
        ml={{ base: "0px", lg: "auto" }}
        direction="column"
        px="8"
        
        
        
      />
    </Flex>
  );
});

export default Overview;
