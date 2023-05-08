import * as React from "react";
import {
    ButtonGroup,
    Flex,
    IconButton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { AiFillEdit } from "react-icons/ai";
  import {BsFillTrashFill } from "react-icons/bs";
const TableRegisters=React.memo((props)=>{
    
  const header = ["nome","contacto", "adicionado", "acções"];
  const data = [
    {
      name: "Daggy",
      contacto:945345456,
      created: "7 days ago",
    },
    {
      name: "Anubra",
      contacto:945345456,
      created: "23 hours ago",
    },
    {
      name: "Josef",
      contacto:945345456,
      created: "A few seconds ago",
    },
    {
      name: "Sage",
      contacto:945345456,
      created: "A few hours ago",
    },
  ];
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");
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
      <Table
        w="full"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {data.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          }}}
                          
                      >
                        <Text transition=".15 ease"
                        fontFamily="Mulish"
                        fontStyle="normal"
                        fontWeight={400}
                        fontSize="1.2rem"
                        letterSpacing="0.2"
                        color="#DDE2FF">
                            {x}
                        </Text>
                   
                      </Td>
                      <Td
                         fontStyle="normal"
                         px="6"
                         textTransform="uppercase"
                         fontFamily="Mulish"
                         fontWeight="700"
                         lineHeight="0.9375rem"
                         fontSize="0.75rem"
                         letterSpacing="0.3px"
                         color="#9FA2B4"
                      >
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    }}}
                    transition=".15 ease"
                    fontFamily="Mulish"
                    fontStyle="normal"
                    fontWeight={400}
                    fontSize="1.2rem"
                    letterSpacing="0.2"
                    color="#DDE2FF"
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    
                    <IconButton
                      color="#fff"
                      bg="#08b57d"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
   </Flex>
  );   
})

export default TableRegisters;