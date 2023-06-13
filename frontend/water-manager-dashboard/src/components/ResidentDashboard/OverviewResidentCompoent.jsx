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
  AvatarBadge, chakra
} from "@chakra-ui/react";
import * as React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import useHttp from "../../Hooks/useHttp";
import { Spinner } from "@chakra-ui/react";
import { GiPayMoney } from "react-icons/gi"

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
import { TbDevicesPc, TbReportMoney, TbUsers } from "react-icons/tb"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'
const OverviewComponentResident = React.memo((props) => {
  const [data, setData] = useState([]);
  const [residentInfo, setResidentInfo] = useState({});
  const { viewInfoResident } = useHttp();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    viewInfoResident(localStorage.getItem("access_token"))
      .then((resp) => {
        setResidentInfo({ ...resp.data });
        setLoading(false);
      })
      .catch((err) => setLoading(true));
  }, []);

  const da = []
  // Filtra os dados inválidos
  // Converte as strings de data em objetos Date
  const formattedData = data.map(datum => ({
    time: new Date(datum.date),
    volume: parseFloat(datum.volume)
  }));




  useEffect(() => {
    const eventSource = new EventSource("https://drain-easy.onrender.com/v1.0/resident/view-data");

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(data => [...data, newData]);
    };

    return () => {
      eventSource.close();
    };
  }, []);
  // Filtra os objetos JSON com base na data atual
const currentDate = new Date().toISOString().substring(0, 10);
const filteredData = data.filter(datum => {
  return datum.date.substring(0, 10) === currentDate;
});

// Soma o volume dos objetos JSON filtrados
const totalVolume = filteredData.reduce((total, datum) => {
  return total + parseFloat(datum.volume)/1000;
}, 0);
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
                  {residentInfo["info_resident"]["username"]}
                </Text>

                <Avatar mt={{ base: "0", lg: "-1.5" }} ml="2" src={`https://drain-easy.onrender.com/v1.0/admin/resident/view_image_resident/${localStorage.getItem(
                  "access_token"
                )}`} size="sm" bg="blue.300" name={residentInfo["info_resident"]["username"]} >
                  {
                    residentInfo["info_resident"]["status_payment"] == true ? (
                      <AvatarBadge size='xs' boxSize='1.25em' bg='green' />
                    ) : (<AvatarBadge size='xs' boxSize='1.25em' bg='tomato' />)
                  }
                </Avatar>

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
                <HStack w="full" h="full">
                  <Box display="flex" justifyContent="center" alignItems="center" w="25%" bg="#0b1e9f" h="100%">
                    <GiPayMoney fontSize="2rem" color="#fff" />

                  </Box>
                  <VStack spacing="1.5rem" w="full" display="flex" alignItems="flex-end">

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
                      Pagamentos realizados
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
                      {residentInfo["all_payments"]}
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
              >
                <HStack w="full" h="full">
                  <Box display="flex" justifyContent="center" alignItems="center" w="25%" bg="#e1a214" h="100%">
                    <TbReportMoney fontSize="2rem" color="#fff" />

                  </Box>
                  <VStack spacing="1.5rem" w="full" display="flex" alignItems="flex-end">

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
                      Pagamentos não validados
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
                      {residentInfo["all_payments"]}
                    </Text>
                  </VStack>
                </HStack>
              </Box>


            </SimpleGrid>
          </Flex>
          <Tabs padding="4"
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

            </TabList>

            <TabPanels w="full" h="100%">
              {/* diario */}
              <TabPanel w="100%" h="100%">
                <chakra.span display="flex" alignItems="center" color="#252733" fontSize="1rem" fontStyle="normal" fontWeight="600" justifyContent={"center"} fontFamily={"Mulish"}>Consumo geral {totalVolume.toFixed(2)}L</chakra.span>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={formattedData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" tickFormatter={(time) => {
                      const minutes = time.getMinutes();
                      return `${time.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
                    }}
                      interval={3600000} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorVolume)"
                    />

                  </AreaChart>
                </ResponsiveContainer>
              </TabPanel>
              {/* diario */}
              <TabPanel w="100%" h="100%">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={"100%"}
                    height={"100%"}
                    data={da}

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
            </TabPanels>
          </Tabs>

        </Flex>
      )
      }
    </>);
});

export default OverviewComponentResident;
