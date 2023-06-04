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
import useHttp from "../../../Hooks/useHttp";
import { useState,useEffect } from "react";
  const RegisterUserComponent = React.memo((props) => {
    const [adminInfo,setAdminInfo]=useState({})
    const {getAdminInfo}=useHttp();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      getAdminInfo(localStorage.getItem("access_token"))
        .then((resp)=>{
          
          setAdminInfo({...resp.data})
          setLoading(false);
        }).catch((err) => setLoading(true));
      }
    ,[])
    return (
     <>
     {
      loading?(
        <Text>Carregando...</Text>
      ):(
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
              Cadastrar Usuário
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
                  <Avatar src={`http://127.0.0.1:8000/v1.0/admin/view_image_admin/${localStorage.getItem("access_token")}`}  size="sm" bg="blue.300" name="isaac antónio" />
                </WrapItem>
              </Wrap>
            </Flex>
          </HStack>
        </Flex>
        <Flex mt="2rem" w="full" h="auto">
          <InsertForm/>
        </Flex>
      </Flex>
      )
     }
     </>
    );
  });
  
  export default RegisterUserComponent;
  