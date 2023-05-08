import {
  Avatar,
  Box,
  chakra,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import * as React from "react";

import PackageItem from "./PackageItem";
import tester1 from "../../../assets/erda-estremera-eMX1aIAp9Nw-unsplash (1).jpg";
import tester2 from "../../../assets/oppo-find-x5-pro-3orZREf1vgc-unsplash.jpg";
import tester3 from "../../../assets/osarugue-igbinoba-4ardiyvfhTM-unsplash.jpg";
const PackagesComponent = React.memo((props) => {
  return (
    <Flex bg="#F7F8FC" minH="850px" {...props}>
      <Flex w="full" mt="2rem" >
        <HStack spacing="2px" w="full" px="4" justifyContent="space-between">
          <Text
            as="h1"
            fontWeight={700}
            fontFamily="Mulish"
            fontSize="1.1875rem"
            color="#252733"
            letterSpacing="0.4px"
            opacity="0.7"
          >
            Pacotes
          </Text>
          <Flex>
            <Text
              mt={{ base: "1.5", lg: "0" }}
              as="p"
              fontWeight={600}
              fontFamily="Mulish"
              fontSize="0.875rem"
              color="#252733"
              letterSpacing="0.2px"
              lineHeight="20px"
              opacity="0.7"
            >
              Isaac António
            </Text>
            <Wrap mt={{ base: "0", lg: "-1.5" }} ml="2">
              <WrapItem>
                <Avatar size="sm" bg="blue.300" name="isaac antónio" />
              </WrapItem>
            </Wrap>
          </Flex>
        </HStack>
      </Flex>
      <Flex w="full" h="auto" px="4">
</Flex>
      <Flex mt="2rem" w="full" h="auto">
        <SimpleGrid
          px="4"
          w="full"
          gap="1rem"
          columns={{ lg: 3 }}
          minChildWidth="20rem"
          h="8.375rem"
          minHeight="8.375rem"
        >
          {/* Packages */}
          <PackageItem 
            imgPackage={tester1} 
            packageName="Pacote Simples"
            packageDescription="O Pacote Simples oferece 200 litros de água por um preço acessível de 1500kz."
            packagePrice="1500kz" 
            packageVolume="200l"/>
          <PackageItem 
           imgPackage={tester2} 
           packageName="Pacote Família"
           packageDescription="O Pacote Família é a escolha ideal para famílias que desejam manter seu consumo."
           packageVolume="2000l"/>
          <PackageItem 
          imgPackage={tester3} 
          packageName="Pacote Premium"
          packageDescription="O pacote premium de consumo de água é uma excelente opção para moradores."
          packagePrice="32800kz" 
          packageVolume="20300l"/>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
});

export default PackagesComponent;
