import { Flex, Img} from "@chakra-ui/react";

export default function SidebarContent(props) {
  const { icon, describe, ...rest } = props;
  return (
    <Flex
      w="full"
      align="center"
      px="3rem"
      py="3"
      {...rest}
      cursor="pointer"
      role="group"
      transition=".15 ease"
      fontFamily="Mulish"
      fontStyle="normal"
      fontWeight={400}
      fontSize="1rem"
      letterSpacing="0.2"
      color=" #DDE2FF"
      opacity="0.7"
      

    >
      {icon && <Img src={icon}  mx="4" boxSize="4" w="1rem" h="1rem" />}
      {describe}
    </Flex>
  );
}
