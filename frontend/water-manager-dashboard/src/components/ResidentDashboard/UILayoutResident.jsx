import { Flex } from "@chakra-ui/react";
import SidebarResident from "./SidebarResident"

export default function UILayoutResident(props){
    return(
        <Flex w="15.9375rem" h="auto" {...props}>
            <SidebarResident/>
        </Flex>
    )
}