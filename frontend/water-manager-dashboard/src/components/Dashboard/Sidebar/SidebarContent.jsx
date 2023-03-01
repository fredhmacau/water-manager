import { Box, Flex, Img, Text, chakra } from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import logoOverview from "../../../assets/icons/1. overview.png";
import logoContact from "../../../assets/icons/4. contacts.png";
import logoAgent from "../../../assets/icons/5. agents.png";
import logoTicket from "../../../assets/icons/ticket.png";
import logoSetting from "../../../assets/icons/Vector-5.png";
import NavItem from "./NavItem";
export default function SidebarContent(props) {
  return (
    <Flex
      
      pos="fixed"
      direction="column"
      top="0"
      left="0"
      h="full"
      w="15.9375rem"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#363740"
      {...props}
    >
      <Flex px="6" py="8" align="center">
        <Img src={Logo} alt="logo" w="2rem" h="2rem" />
        <Text
          fontSize="1.1875rem"
          ml="2"
          color="#A4A6B3"
          fontFamily="Mulish"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.4px"
          opacity="0.7"
        >
          Drain-easy
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        area-label="main navegation"
      >
        <NavItem icon={logoOverview}>Início</NavItem>
        <NavItem icon={logoTicket}>Pacotes</NavItem>
        <NavItem icon={logoContact}>Cadastrados</NavItem>
        <NavItem icon={logoAgent}>Adicionar</NavItem>
        <NavItem icon={logoSetting}>Configurações</NavItem>
      </Flex>
    </Flex>
  );
}
