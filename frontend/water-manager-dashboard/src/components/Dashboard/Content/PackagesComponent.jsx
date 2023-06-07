import {
  Avatar,
  Button,
  Flex,
  HStack,
  Img,
  Input,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import * as React from "react";

import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

} from "@chakra-ui/react";
import useHttp from "../../../Hooks/useHttp";
const PackagesComponent = React.memo((props) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // adicionado para remover o usuário
  const { viewPedngPayment, validPayment } = useHttp();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [adminInfo,setAdminInfo]=useState({})
  const {getAdminInfo}=useHttp();
  const [loading, setLoading] = useState(true);
  function tempoPassadoDesde(data) {
    const dataAntiga = new Date(data);
    const dataAtual = new Date();
    const tempoDecorrido = (dataAtual - dataAntiga) / 1000; // tempo em segundos
  
    const dias = Math.round(tempoDecorrido / 86400); // arredonda para o número inteiro mais próximo
  
    if (dias === 0) {
      return "Hoje";
    } else if (dias === 1) {
      return "Ontem";
    } else {
      return `Passaram-se ${dias} dias`;
    }
  }
  
  const onRemove = function () {
   validPayment(selectedId)
   .then((resp)=>{
    if(resp.status==200){
      toast({
        position: "top",
        title: 'Pagamento validado!',
        description: "O pagamento foi validado com sucesso.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setSelectedId(null);
    }
   }).catch((error)=>{
    toast({
      position: "top",
      title: 'Erro!',
      description: `Ocorreu um erro ao validar o pagamento.${error}`,
      status: 'error',
      duration: 9000,

      isClosable: true,
    })
   })
  };
  useEffect(() => {
    getAdminInfo(localStorage.getItem("access_token"))
    .then((resp)=>{
      
      setAdminInfo({...resp.data})
      setLoading(false);
    }).catch((err) => setLoading(true));
    viewPedngPayment().then((resp) => {
      setData([...resp.data]);
    });
  }, []);


  return (
    <>
    {
      loading ? (
        <div>Carregando...</div>
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
            Pagamentos
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
      <Flex w="full" h="auto" px="4">
</Flex>
      <Flex mt="2rem" w="full" h="auto">
      <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      shadon="sm"
      rounded="lg"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <TableContainer w="full">
        <Table variant="striped" colorScheme="blue">
          <TableCaption>
            Total de pagamentos pendentes: {data.length}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Morador</Th>
              <Th>Contacto</Th>
              <Th>Pacote</Th>
              <Th>Residência</Th>
              <Th>Data</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <Tr
                    key={index}
                    fontFamily="Mulish"
                    fontWeight="500"
                    lineHeight="0.9375rem"
                    fontSize="0.9rem"
                    letterSpacing="0.3px"
                    color="#252733"
                  >
                    <Td>{item.username}</Td>
                    <Td>{item.contact}</Td>
                    <Td>{item.package_name}</Td>
                    <Td>{item.residence_n}</Td>
                    <Td>{tempoPassadoDesde(item.created_at)}</Td>
                    <Td>
                      <Flex>
                        <Button
                          backgroundColor="#1b9f0b"
                          aria-label="Delete user"
                          color="#fff"
                          size="xs"
                          onClick={() => {
                            onOpen();
                            setSelectedId(item.payment_id);
                          }}
                          icon={<MdDelete />}
                        >Validar</Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <></>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      {selectedId && (
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
              Validar Pagamento
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody fontFamily="Mulish">
              <Img src={`http://127.0.0.1:8000/v1.0/admin/view_image_payment/${selectedId}`} />
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
                onClick={onRemove}
              >
                Validar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
      </Flex>
    </Flex>
      )
    }
    </>
  );
});

export default PackagesComponent;
