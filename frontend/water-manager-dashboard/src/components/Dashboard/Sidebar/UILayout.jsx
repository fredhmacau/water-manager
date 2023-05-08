import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar"

export default function UILayout(props){
    return(
        <Flex w="15.9375rem" h="auto" {...props}>
            <Sidebar/>
        </Flex>
    )
}