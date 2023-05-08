import { Flex, Img} from "@chakra-ui/react";
import {Link as RouteLink}  from "react-router-dom";
export default function SidebarContentResident(props) {

  const { icon, describe,link} = props;
  return (
    
    <RouteLink style={{width:"100%"}} to={link} replace>
      <Flex
      w="full"
      align="center"
      px="3rem"
      py="3"
     
      cursor="pointer"
      role="group"
      transition=".15 ease"
      fontFamily="Mulish"
      fontStyle="normal"
      fontWeight={400}
      fontSize="1rem"
      letterSpacing="0.2"
      color=" #DDE2FF"
      opacity="0.7"
      

    >
      {icon && <Img src={icon}  mx="4" boxSize="4" w="1rem" h="1rem" />}
      {describe}
    </Flex>
    </RouteLink>
  );
}
