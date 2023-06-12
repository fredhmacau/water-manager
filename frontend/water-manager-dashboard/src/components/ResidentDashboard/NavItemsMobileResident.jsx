import { Flex, HStack, Img, Text,  useDisclosure,  } from "@chakra-ui/react";
import SidebarContentResident from "./SidebarContentResident";
//icons
import logo from "../../assets/logo.png";
import OverviewIcon from "../../assets/icons/1. overview.png";
import pacotesIcon from "../../assets/icons/ticket.png";
import registersIcon from "../../assets/icons/registers.png";
import insertIcon from "../../assets/icons/insert.png";
import configIcon from "../../assets/icons/config.png";
import { SlArrowLeftCircle } from "react-icons/sl";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,

  Button
} from "@chakra-ui/react";
const NavItemsMobileResident = function (props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logout=function(){
    localStorage.removeItem("access_token");
    window.location.reload();
  }
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
          link="/resident/overview"
          describe="Início"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
        <SidebarContentResident
          icon={pacotesIcon}
          describe="Pacotes"
          link="/resident/packages"
          _hover={{
            borderLeft:"2px solid #DDE2FF",
            bg:"#9FA2B4"
          }}
        />
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
          onClick={onOpen}
          fontWeight={400}
          fontSize="1rem"
          letterSpacing="0.2"
          color=" #DDE2FF"
          opacity="0.7"
        >
          <Flex mx="4" boxSize="4" w="1rem" h="1rem">
            <SlArrowLeftCircle />
          </Flex>
          Sair
        </Flex>
       
      </Flex>
      <Modal
          isCentered
          justifyContent="flex-start"
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              lineHeight="1.875rem"
              textAlign="left"
              letterSpacing="0.3px"
              fontWeight="700"
              color="#252733"
              fontSize="1.5rem"
              fontFamily="Mulish"
              fontStyle="normal"
            >
              Terminar sessão
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody fontFamily="Mulish">
              Você tem certeza que deseja terminar sua sessão?
            </ModalBody>
            <ModalFooter alignItems="start" justifyContent="flex-start">
              <Button
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
           
                // {#29CC97"}
                //{"#13ab09"} color
                variant="ghost"
                type="submit"
                boxShadow="0px 4px 12px rgba(55, 81, 255, 0.24)"
                color="#FFFFFF"
                lineHeight="1.25rem"
                fontSize="0.875rem"
                fontFamily="mulish"
                fontWeight={600}
                letterSpacing="0.2px"
                backgroundColor="#1b9f0b"
                mr={3}
                onClick={logout}
              >
                Terminar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
    </Flex>
  );
};

export default NavItemsMobileResident;
