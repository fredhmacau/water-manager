import { Flex, HStack, Img, Text } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";
//icons
import logo from "../../../assets/logo.png";
import OverviewIcon from "../../../assets/icons/1. overview.png";
import pacotesIcon from "../../../assets/icons/ticket.png";
import registersIcon from "../../../assets/icons/registers.png";
import insertIcon from "../../../assets/icons/insert.png";
import configIcon from "../../../assets/icons/config.png";

export default function Sidebar() {
  return (
    <Flex
      w="15.9375rem"
      h="100%"
      top="0"
      left="0"
      bottom="0"
      pos="fixed"
      zIndex="1"
      bg="#363740"
      direction="column"
    >
      <Flex w="full" mt="2rem">
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
      <Flex w="full" mt="2rem" direction="column" alignItems="center">
        <SidebarContent
          icon={OverviewIcon}
          link="/admin/overview"
          describe="Início"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
        <SidebarContent
          icon={pacotesIcon}
          describe="Pacotes"
          link="/admin/packages"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
        <SidebarContent
          icon={registersIcon}
          describe="Registrados"
          link="/admin/registers"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}

        />
        <SidebarContent
          icon={insertIcon}
          describe="Cadastrar"
          link="/admin/register"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
          
        />
        <SidebarContent
          icon={configIcon}
          describe="Configurações"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
          
        />
      </Flex>
    </Flex>
  );
}
