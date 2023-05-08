import * as React from "react";
import { chakra, Box, Flex, Image } from "@chakra-ui/react";


const ImagePackage = ({img}) => {
  return (
    <Image 
      h="200px"
      w="full"
      fit="cover"
      listStylePosition="center"
      borderTopRadius="lg"
      src={img}

      alt="NIKE AIR"
      backgroundSize="cover"
      backgroundPosition="center" />
  )
}

const PackageItem = React.memo((props) => {
  return (
    <Flex


      p={50}

      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg="#363740"

        shadow="lg"
        rounded="lg"
      >
        
        <ImagePackage img={props.imgPackage} />

        <Box px={4} py={2}>
          <chakra.h1
            transition=".15 ease"
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight={400}
            fontSize="1.2rem"
            letterSpacing="0.2"
            color=" #DDE2FF"
          >
            {props.packageName}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="1.25rem"
            fontSize="0.8rem"
            letterSpacing="0.3px"
            noOfLines={4}
            
            color="#DDE2FF"
            opacity="0.7"

          >
            {props.packageDescription}
          </chakra.p>
        </Box>


        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1
            transition=".15 ease"
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight={700}
            fontSize="1.2rem"
            letterSpacing="0.2"
            color=" #DDE2FF">
            {props.packagePrice}
          </chakra.h1>
          <chakra.h1
            transition=".15 ease"
            fontFamily="Mulish"
            fontStyle="normal"
            fontWeight={400}
            fontSize="1.2rem"
            letterSpacing="0.2"
            color=" #DDE2FF">
            {props.packageVolume}
          </chakra.h1>
        </Flex>
      </Box>
    </Flex>

  )
})

export default PackageItem;