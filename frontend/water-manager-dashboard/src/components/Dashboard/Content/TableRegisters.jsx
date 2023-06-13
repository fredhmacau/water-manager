import * as React from "react";
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
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import useHttp from "../../../Hooks/useHttp";
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
  Button,
  useToast
} from "@chakra-ui/react";
const TableRegisters = React.memo((props) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // adicionado para remover o usuário
  const { viewAllResidents, removeResident } = useHttp();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  
    removeResident(selectedId)
    .then((resp)=>{
      if(resp.status==200){
        toast({
          position: "top",
          title: 'Morador removido!',
          description: "O morador foi eliminado com sucesso.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        setSelectedId(null)
      }

    })
    .catch((error)=>{
      toast({
        position: "top",
        title: 'Erro!',
        description: `Ocorreu um erro ao remover morador.${error}`,
        status: 'error',
        duration: 9000,
  
        isClosable: true,
      })
    })
  };
  useEffect(() => {
    viewAllResidents().then((resp) => {
      setData([...resp.data]);
    });
  }, []);

  return (
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
    >
      <TableContainer w="full">
        <Table variant="striped" colorScheme="blue">
          <TableCaption>
            Total de moradores cadastrados: {data.length}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Contacto</Th>
              <Th>Email</Th>
              <Th>Residência</Th>
              <Th>Adicionado</Th>
              <Th>Ações</Th>
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
                    <Td>{item.email}</Td>
                    <Td>{item.residence_n}</Td>

                    <Td>{tempoPassadoDesde(item.created_at)}</Td>
                    <Td>
                      <Flex>
                        <IconButton
                          backgroundColor="tomato"
                          aria-label="Delete user"
                          color="#fff"
                          onClick={() => {
                            onOpen();
                            setSelectedId(item.resident_id);
                          }}
                          icon={<MdDelete />}
                        />
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
              Remover morador
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody fontFamily="Mulish">
              Desejas remover o morador?
            </ModalBody>
            <ModalFooter alignItems="start" justifyContent="flex-start">
              <Button
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="tomato"
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
                colorScheme="red"
                mr={3}
                onClick={onRemove}
              >
                Remover
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
});

export default TableRegisters;
