import {
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    HStack,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import * as React from "react";
import InsertForm from "./InsertForm";
  const RegisterUserComponent = React.memo((props) => {
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
              Realizar pagamento
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
        <Flex mt="2rem" w="full" h="auto">
          <InsertForm/>
        </Flex>
      </Flex>
    );
  });
  
  export default RegisterUserComponent;
  