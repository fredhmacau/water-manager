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
import { useEffect, useState } from "react";
import useHttp from "../../../Hooks/useHttp";
import { Spinner } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";
import {TbDevicesPc, TbReportMoney, TbUsers} from "react-icons/tb"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const OverviewComponent = React.memo((props) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const [adminInfo, setAdminInfo] = useState({});
  const { getAdminInfo } = useHttp();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAdminInfo(localStorage.getItem("access_token"))
      .then((resp) => {
        setAdminInfo({ ...resp.data });
        setLoading(false);
      })
      .catch((err) => setLoading(true));
  }, []);
  return (
    <>
      {loading ? (
        <Flex
          w="full"
          h="100vh"
          mt="6rem"
          align="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex bg="#F7F8FC" minH="850px" {...props}>
          <Flex w="full" mt="2rem">
            <HStack
              spacing="2px"
              w="full"
              px="4"
              justifyContent="space-between"
            >
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
                  {adminInfo["info_admin"]["username"]}
                </Text>
                <Wrap mt={{ base: "0", lg: "-1.5" }} ml="2">
                  <WrapItem>
                    <Avatar
                      src={`http://127.0.0.1:8000/v1.0/admin/view_image_admin/${localStorage.getItem(
                        "access_token"
                      )}`}
                      size="sm"
                      bg="blue.300"
                      name="isaac antónio"
                    />
                  </WrapItem>
                </Wrap>
                <Box ml="1rem" mt="0.2rem"></Box>
              </Flex>
            </HStack>
          </Flex>
          <Flex mt="2rem" w="full" h="auto">
            <SimpleGrid
              px="4"
              w="full"
              gap="2rem"
              columns={{ lg: 3 }}
              minChildWidth="10rem"
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
                borderLeft="1px solid #1b9f0b"
                shadow="md"
              >
               <HStack w="full" h="full">
                <Box display="flex" justifyContent="center" alignItems="center" w="25%" bg="#1b9f0b" h="100%">
                  <TbUsers fontSize="2rem" color="#fff"/>
                  
                </Box>
                <VStack spacing="1.5rem" w="full" display="flex"       alignItems="flex-end">
                  <Text
                    fontFamily="Mulish"
                    fontSize="1rem"
                    fontWeight={600}
                    lineHeight="24px"
                    fontStyle="normal"
                    letterSpacing="0.4px"
                    px="4"
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
                    px="4"
                  >
                    {adminInfo["all_residents"]}
                  </Text>
                </VStack>
               </HStack>
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
                borderLeft="4px solid #0b1e9f"
                shadow="md"
              >
                <HStack w="full" h="full">
                <Box display="flex" justifyContent="center" alignItems="center" w="25%" bg="#0b1e9f" h="100%">
                  <TbReportMoney fontSize="2rem" color="#fff"/>
                  
                </Box>
                <VStack spacing="1.5rem" w="full" display="flex"       alignItems="flex-end">
                
                  <Text
                    fontFamily="Mulish"
                    fontSize="1rem"
                    fontWeight={600}
                    lineHeight="24px"
                    fontStyle="normal"
                    px="4"
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
                    px="4"
                    letterSpacing="1px"
                    color=" #252733"
                  >
                    {adminInfo["all_peding_payment"]}
                  </Text>
                </VStack>
                    </HStack>
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
                borderLeft="1px solid #e1a214 "
                shadow="md"
              >
                <HStack w="full" h="full">
                <Box display="flex" justifyContent="center" alignItems="center" w="25%" bg="#e1a214" h="100%">
                  <TbDevicesPc fontSize="2rem" color="#fff"/>
                  
                </Box>
                <VStack spacing="1.5rem" w="full" display="flex"       alignItems="flex-end">
                  <Text
                    fontFamily="Mulish"
                    fontSize="1rem"
                    fontWeight={600}
                    lineHeight="24px"
                    fontStyle="normal"
                    letterSpacing="0.4px"
                    color="#9FA2B4"
                    px="4"
                  >
                    Dispositivos
                  </Text>
                  <Text
                    fontFamily="Mulish"
                    fontSize="2rem"
                    fontWeight={700}
                    lineHeight="24px"
                    fontStyle="normal"
                    letterSpacing="1px"
                    color=" #252733"
                    px="4"
                  >
                    {adminInfo["devices"]}
                  </Text>
                </VStack>
                </HStack>
              </Box>
            </SimpleGrid>
          </Flex>

          {/*
           */}
          <Tabs
            padding="4"
            mt={{ base: "auto", lg: "3rem" }}
            h="400px"
            w="full"
          >
            <TabList>
              <Tab
                fontFamily="Mulish"
                lineHeight="1.875rem"
                textAlign="center"
                letterSpacing="0.3px"
                fontWeight="600"
                color="#252733"
                fontSize="1rem"
                fontStyle="normal"
              >
                Diario
              </Tab>
              <Tab
                fontFamily="Mulish"
                lineHeight="1.875rem"
                textAlign="center"
                letterSpacing="0.3px"
                fontWeight="600"
                color="#252733"
                fontSize="1rem"
                fontStyle="normal"
              >
                Mensal
              </Tab>
              <Tab
                fontFamily="Mulish"
                lineHeight="1.875rem"
                textAlign="center"
                letterSpacing="0.3px"
                fontWeight="600"
                color="#252733"
                fontSize="1rem"
                fontStyle="normal"
              >
                Anual
              </Tab>
            </TabList>

            <TabPanels w="full" h="100%">
              {/* diario */}
              <TabPanel w="100%" h="100%">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={"100%"}
                    height={"100%"}
                    data={data}
                    
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                    style={{
                     
                      backgroundColor: "white",
                    }}
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      
                      fillOpacity={1} 
                      fill="url(#colorUv)"
                    />
                    <Legend verticalAlign="top" height={36} />

                    <Line
                      name="consumo total"
                      type="monotone"
                      dataKey="consumo total"
                      stroke="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabPanel>
              <TabPanel w="100%" h="100%">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={"100%"}
                    height={"100%"}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Legend verticalAlign="top" height={36} />

                    <Line
                      name="consumo total"
                      type="monotone"
                      dataKey="consumo total"
                      stroke="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabPanel>
              <TabPanel w="100%" h="100%">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={"100%"}
                    height={"100%"}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Legend verticalAlign="top" height={36} />

                    <Line
                      name="consumo total"
                      type="monotone"
                      dataKey="consumo total"
                      stroke="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      )}
    </>
  );
});

export default OverviewComponent;
