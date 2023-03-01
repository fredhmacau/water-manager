import { Flex } from "@chakra-ui/react";
import OverviewContent from "../components/Dashboard/Content/OverviewContent";
import SidebarContent from "../components/Dashboard/Sidebar/SidebarContent";

const Dashboard =function (){
    return (
        <Flex w="full" direction="row" bg="red" h="100vh">
            <SidebarContent/>
            <OverviewContent/>
        </Flex>
    )

}
 
export default Dashboard;