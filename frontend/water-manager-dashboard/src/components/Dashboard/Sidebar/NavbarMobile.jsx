import { Flex, HStack, Img, Text, IconButton } from "@chakra-ui/react";
import logo from "../../../assets/logo.png";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import NavItemsMobile from "./NavItemsMobile";
import { useBoolean } from "@chakra-ui/react";



const NavbarMobile = function (props) {
    const [menu,setMenu]=useBoolean();
   
  return (
    <Flex w="full" h="auto" bg="#363740"  {...props}>
      <Flex w="full" justifyContent="space-between" px="2rem" py="1rem">
        <HStack spacing="2px" cursor="pointer">
          <Img src={logo} w="32px" h="32px" />
          <Text
            as="h1"
            pl="3px"
            fontWeight={700}
            fontFamily="Mulish"
            fontSize="1.1875rem"
            color="#A4A6B3"
            letterSpacing="0.4px"
            opacity="0.7"
          >
            Drain-easy
          </Text>
        </HStack>
        <Flex
          rounded="md"
          w="32px"
          h="32px"
          justifyContent="center"
          alignItems="center"
          border="1px solid #A4A6B3 "
          opacity="0.7"
        >
          {
            !menu?(<IconButton
                variant="ghost"
                onClick={setMenu.on}
                icon={<AiOutlineMenu color="#A4A6B3" fontSize="1.125rem" />}
              />):(
                <IconButton
                variant="ghost"
                onClick={setMenu.off}
                icon={<AiOutlineClose color="#A4A6B3" fontSize="1.125rem" />}
              />
              )
          }
        </Flex>
      </Flex>
      {
        menu && (
        
            <NavItemsMobile/>
        
            )
      }
    </Flex>
  );
};

export default NavbarMobile;
