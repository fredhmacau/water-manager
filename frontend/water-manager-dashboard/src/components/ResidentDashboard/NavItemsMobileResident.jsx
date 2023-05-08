import { Flex, HStack, Img, Text  } from "@chakra-ui/react";
import SidebarContentResident from "./SidebarContentResident";
//icons
import logo from "../../assets/logo.png";
import OverviewIcon from "../../assets/icons/1. overview.png";
import pacotesIcon from "../../assets/icons/ticket.png";
import registersIcon from "../../assets/icons/registers.png";
import insertIcon from "../../assets/icons/insert.png";
import configIcon from "../../assets/icons/config.png";

const NavItemsMobileResident = function (props) {
  return (
    <Flex
      w={{base:"60%",md:"30%"}}
      pos="fixed"
      h="100vh"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="#0d1118"
      minH="100vh"
      zIndex="sticky"
      transition="0.5 ease"
      direction="column"
      {...props}
    >
         <Flex w="full" mt="1rem" ml="-2rem">
        <HStack
          spacing="2px"
          w="full"
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <Img src={logo} w="32px" h="32px" mr="10px" />
          <Text
            as="h1"
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
      </Flex>
      <Flex w="full" mt="2rem" ml="-2.5rem" direction="column" alignItems="center">
        <SidebarContentResident
          icon={OverviewIcon}
          describe="Início"
          link="/admin/overview"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
        <SidebarContentResident
          icon={pacotesIcon}
          link="/admin/packages"
          describe="Pacotes"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
        <SidebarContentResident
          icon={registersIcon}
          describe="Registrados"
          link="/admin/registers"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}

        />
        <SidebarContentResident
          icon={insertIcon}
          describe="Cadastrar"
          link="/admin/register"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
          
        />
        <SidebarContentResident
          icon={configIcon}
          describe="Configurações"
          link="/admin/packages"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
          
        />
      </Flex>
    </Flex>
  );
};

export default NavItemsMobileResident;
