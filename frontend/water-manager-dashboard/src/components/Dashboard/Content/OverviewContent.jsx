import { Flex ,Text} from "@chakra-ui/react";

export default function OverviewContent() {
  return (
    <Flex h="full" ml="15.9375rem" w="full" bg="#F7F8FC">
      <Flex w="full" px="6" pt="8" direction="row" justifyContent="space-between">

      
      <Text
      
        fontSize="1.1875rem"
       
        ml="2"
        color="#252733"
        fontFamily="Mulish"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="1.5rem"
        letterSpacing="0.4px"
        opacity="0.7"
      >
        Visão geral
      </Text>
      
      </Flex>
    </Flex>
  );
}
