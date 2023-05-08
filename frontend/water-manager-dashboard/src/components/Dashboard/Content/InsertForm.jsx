import * as React from "react";
import {
    chakra,
    Button,
    Stack,
    SimpleGrid,
    GridItem,
 
    FormControl,
    Input,
    FormLabel,} from "@chakra-ui/react"
const InsertForm=React.memo((props)=>{
    
    return (
        <chakra.form
          w="full"
          mt="5"
          method="POST"
          shadow="base"
          rounded={[null, "md"]}
          overflow={{
            sm: "hidden",
          }}
        >
          <Stack
            px={4}
            py={5}
            p={[null, 6]}
            bg="white"
            _dark={{
              bg: "#141517",
            }}
            spacing={6}
          >
            <SimpleGrid columns={6} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="first_name"
                  
                fontStyle="normal"
                pl="1"
                textTransform="uppercase"
                fontFamily="Mulish"
                fontWeight="700"
                lineHeight="0.9375rem"
                fontSize="0.75rem"
                letterSpacing="0.3px"
                color="#9FA2B4"
                >
                  First name
                </FormLabel>
                <Input
                id="password"
                sx={{ backgroundColor: "#FCFDFE" }}
                p="1rem"
                color="#4B506D"
                opacity="0.4"
                lineHeight="1.25rem"
                fontSize="0.875rem"
                fontFamily="mulish"
                letterSpacing="0.3px"
                placeholder="Insirir senha"
                border="2px"
               
                type="text"
                borderColor="#cbd5e0a3"
                borderRadius="8px"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="last_name"
                  
                fontStyle="normal"
                pl="1"
                textTransform="uppercase"
                fontFamily="Mulish"
                fontWeight="700"
                lineHeight="0.9375rem"
                fontSize="0.75rem"
                letterSpacing="0.3px"
                color="#9FA2B4"
                >
                  Last name
                </FormLabel>
                <Input
                 id="password"
                 sx={{ backgroundColor: "#FCFDFE" }}
                 p="1rem"
                 color="#4B506D"
                 opacity="0.4"
                 lineHeight="1.25rem"
                 fontSize="0.875rem"
                 fontFamily="mulish"
                 letterSpacing="0.3px"
                 placeholder="Insirir senha"
                 border="2px"
                
                 type="text"
                 borderColor="#cbd5e0a3"
                 borderRadius="8px"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 4]}>
                <FormLabel
                  htmlFor="email_address"
                  
                  fontStyle="normal"
                  pl="1"
                  textTransform="uppercase"
                  fontFamily="Mulish"
                  fontWeight="700"
                  lineHeight="0.9375rem"
                  fontSize="0.75rem"
                  letterSpacing="0.3px"
                  color="#9FA2B4"
                >
                  Email address
                </FormLabel>
                <Input
                 id="password"
                 sx={{ backgroundColor: "#FCFDFE" }}
                 p="1rem"
                 color="#4B506D"
                 opacity="0.4"
                 lineHeight="1.25rem"
                 fontSize="0.875rem"
                 fontFamily="mulish"
                 letterSpacing="0.3px"
                 placeholder="Insirir senha"
                 border="2px"
                
                 type="text"
                 borderColor="#cbd5e0a3"
                 borderRadius="8px"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="first_name"
                  
                  fontStyle="normal"
                  pl="1"
                  textTransform="uppercase"
                  fontFamily="Mulish"
                  fontWeight="700"
                  lineHeight="0.9375rem"
                  fontSize="0.75rem"
                  letterSpacing="0.3px"
                  color="#9FA2B4"
                >
                  First name
                </FormLabel>
                <Input
                 id="password"
                 sx={{ backgroundColor: "#FCFDFE" }}
                 p="1rem"
                 color="#4B506D"
                 opacity="0.4"
                 lineHeight="1.25rem"
                 fontSize="0.875rem"
                 fontFamily="mulish"
                 letterSpacing="0.3px"
                 placeholder="Insirir senha"
                 border="2px"
                
                 type="text"
                 borderColor="#cbd5e0a3"
                 borderRadius="8px"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="last_name"
    
                  fontStyle="normal"
                  pl="1"
                  textTransform="uppercase"
                  fontFamily="Mulish"
                  fontWeight="700"
                  lineHeight="0.9375rem"
                  fontSize="0.75rem"
                  letterSpacing="0.3px"
                  color="#9FA2B4"
                >
                  Last name
                </FormLabel>
                <Input
                  id="password"
                  sx={{ backgroundColor: "#FCFDFE" }}
                  p="1rem"
                  color="#4B506D"
                  opacity="0.4"
                  lineHeight="1.25rem"
                  fontSize="0.875rem"
                  fontFamily="mulish"
                  letterSpacing="0.3px"
                  placeholder="Insirir senha"
                  border="2px"
                 
                  type="text"
                  borderColor="#cbd5e0a3"
                  borderRadius="8px"
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="first_name"
                  
                  fontStyle="normal"
                  pl="1"
                  textTransform="uppercase"
                  fontFamily="Mulish"
                  fontWeight="700"
                  lineHeight="0.9375rem"
                  fontSize="0.75rem"
                  letterSpacing="0.3px"
                  color="#9FA2B4"
                >
                  First name
                </FormLabel>
                <Input
                 id="password"
                 sx={{ backgroundColor: "#FCFDFE" }}
                 p="1rem"
                 color="#4B506D"
                 opacity="0.4"
                 lineHeight="1.25rem"
                 fontSize="0.875rem"
                 fontFamily="mulish"
                 letterSpacing="0.3px"
                 placeholder="Insirir senha"
                 border="2px"
                
                 type="text"
                 borderColor="#cbd5e0a3"
                 borderRadius="8px"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="last_name"
    
                  fontStyle="normal"
                  pl="1"
                  textTransform="uppercase"
                  fontFamily="Mulish"
                  fontWeight="700"
                  lineHeight="0.9375rem"
                  fontSize="0.75rem"
                  letterSpacing="0.3px"
                  color="#9FA2B4"
                >
                  Last name
                </FormLabel>
                <Input
                  id="password"
                  sx={{ backgroundColor: "#FCFDFE" }}
                  p="1rem"
                  color="#4B506D"
                  opacity="0.4"
                  lineHeight="1.25rem"
                  fontSize="0.875rem"
                  fontFamily="mulish"
                  letterSpacing="0.3px"
                  placeholder="Insirir senha"
                  border="2px"
                 
                  type="text"
                  borderColor="#cbd5e0a3"
                  borderRadius="8px"
                />
              </FormControl>
              <FormControl mt="1rem">
              <Button
                w="full"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#0b1e9f"
                // {#29CC97"}
                //{"#13ab09"} color
                variant="ghost"
             //   isLoading={isSubmitting}
                type="submit"
                boxShadow="0px 4px 12px rgba(55, 81, 255, 0.24)"
                color="#FFFFFF"
                _hover={{ color: "#046848", backgroundColor: "#ffffff" }}
                lineHeight="1.25rem"
                fontSize="0.875rem"
                fontFamily="mulish"
                fontWeight={600}
                letterSpacing="0.2px"
              >
                Cadastrar pacote
              </Button>
              </FormControl>
              </SimpleGrid>
    </Stack>
    </chakra.form>
    )
})
export default InsertForm;