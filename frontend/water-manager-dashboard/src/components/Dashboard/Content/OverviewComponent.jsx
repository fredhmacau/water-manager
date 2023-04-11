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
import { Chart } from "react-google-charts";
const OverviewComponent = React.memo((props) => {
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
            Visão geral
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
        <SimpleGrid
          px="4"
          w="full"
          gap="2rem"
          columns={{ lg: 3 }}
          minChildWidth="14rem"
          h="8.375rem"
          minHeight="8.375rem"
        >
          <Box
            bg="white"
            h="8.375rem"
            display="flex"
            role="group"
            cursor="pointer"
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid #DFE0EB"
            rounded="md"
          >
            <VStack spacing="1.5rem">
              <Text
                fontFamily="Mulish"
                fontSize="1rem"
                fontWeight={600}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="0.4px"
                color="#9FA2B4"
              >
                Moradores cadastrados
              </Text>
              <Text
                fontFamily="Mulish"
                fontSize="2rem"
                fontWeight={700}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="1px"
                color=" #252733"
              >
                60
              </Text>
            </VStack>
          </Box>
          <Box
            bg="white"
            display="flex"
            h="8.375rem"
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid #DFE0EB"
            rounded="md"
            cursor="pointer"
          >
            <VStack spacing="1.5rem">
              <Text
                fontFamily="Mulish"
                fontSize="1rem"
                fontWeight={600}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="0.4px"
                color="#9FA2B4"
              >
                Pagamentos pendentes
              </Text>
              <Text
                fontFamily="Mulish"
                fontSize="2rem"
                fontWeight={700}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="1px"
                color=" #252733"
              >
                12
              </Text>
            </VStack>
          </Box>
          <Box
            bg="white"
            h="8.375rem"
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid #DFE0EB"
            rounded="md"
            cursor="pointer"
          >
            <VStack spacing="1.5rem">
              <Text
                fontFamily="Mulish"
                fontSize="1rem"
                fontWeight={600}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="0.4px"
                color="#9FA2B4"
              >
                Pacotes registrados
              </Text>
              <Text
                fontFamily="Mulish"
                fontSize="2rem"
                fontWeight={700}
                lineHeight="24px"
                fontStyle="normal"
                letterSpacing="1px"
                color=" #252733"
              >
                4
              </Text>
            </VStack>
          </Box>
         
        </SimpleGrid>
      </Flex>
      <Flex w="full" display={{base:"none",lg:"flex"}} px="4" mt="3rem">
        <Grid
          w="full"
          h="400px"
          templateRows="repeat (2,1fr)"
          templateColumns="repeat(4,1fr)"
        >
          <GridItem
            rounded="md"
            w="full"
            h="full"
            fontFamily="Mulish"
            fontSize="1rem"
            fontWeight={600}
            lineHeight="24px"
            fontStyle="normal"
            letterSpacing="0.4px"
            color="#9FA2B4"
            colSpan={3}
            py="4"
          >
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "litros"],
                ["2010", 1000],
                ["2011", 1170],
                ["2012", 660],
                ["2013", 1030],
              ]}
              options={{
                title: "Consumo total",
                curveType: "function",
                legend: { position: "top right" },
              }}
              rootProps={{ "data-testid": "1" }}
              style={{ fontFamily: "Mulish", color: "#9FA2B4" }}
            />
          </GridItem>
          <GridItem
            w="full"
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            alignItems="center"
            colSpan={1}
          >
            <Stack
              direction={{ base: "row", lg: "column" }}
              borderLeft="1px solid #DFE0EB"
              h="auto"
              spacing="4px"
              w="full"
            >
              <Flex
                p="4"
                w="full"
                h="6.03rem"
                justifyContent="center"
                alignItems="center"
                
                bg="white"
                direction="column"
              >
                <Text
                  fontFamily="Mulish"
                  fontSize="1rem"
                  fontWeight={600}
                  lineHeight="22px"
                  fontStyle="normal"
                  letterSpacing="0.3px"
                  textAlign="center"
                  color="#9FA2B4"
                >
                  Total de litros consumidos
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontSize="1.4rem"
                  mt="1rem"
                  fontWeight={700}
                  lineHeight="24px"
                  fontStyle="normal"
                  letterSpacing="1px"
                  color=" #252733"
                >
                  150L
                </Text>
              </Flex>
              <Flex
                p="4"
                w="full"
                h="6.03rem"
                
                bg="white"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontFamily="Mulish"
                  fontSize="1rem"
                  fontWeight={600}
                  lineHeight="22px"
                  fontStyle="normal"
                  letterSpacing="0.3px"
                  textAlign="center"
                  color="#9FA2B4"
                >
                  Tempo de actividade
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontSize="1.4rem"
                  mt="1rem"
                  fontWeight={700}
                  lineHeight="24px"
                  fontStyle="normal"
                  letterSpacing="1px"
                  color=" #252733"
                >
                  4m
                </Text>
              </Flex>
              <Flex
                p="4"
                w="full"
                h="6.03rem"
               
                bg="white"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontFamily="Mulish"
                  fontSize="1rem"
                  fontWeight={600}
                  lineHeight="22px"
                  fontStyle="normal"
                  letterSpacing="0.3px"
                  textAlign="center"
                  color="#9FA2B4"
                >
                  Registros recentes
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontSize="1.4rem"
                  mt="1rem"
                  fontWeight={700}
                  lineHeight="24px"
                  fontStyle="normal"
                  letterSpacing="1px"
                  color=" #252733"
                >
                  6
                </Text>
              </Flex>
              <Flex
                p="4"
                w="full"
                h="6.03rem"
                bg="white"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontFamily="Mulish"
                  fontSize="1rem"
                  fontWeight={600}
                  lineHeight="22px"
                  fontStyle="normal"
                  letterSpacing="0.3px"
                  textAlign="center"
                  color="#9FA2B4"
                >
                  Pacotes recentes
                </Text>
                <Text
                  fontFamily="Mulish"
                  fontSize="1.4rem"
                  mt="1rem"
                  fontWeight={700}
                  lineHeight="24px"
                  fontStyle="normal"
                  letterSpacing="1px"
                  color=" #252733"
                >
                  1
                </Text>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
});

export default OverviewComponent;
