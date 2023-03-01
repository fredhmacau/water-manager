import { Flex, Image } from "@chakra-ui/react";

const NavItem = function (props) {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="4"
      cursor="pointer"
      fontSize="1rem"
      role="group"
      color="#A4A6B3"
      fontFamily="Mulish"
      fontStyle="normal"
      fontWeight="400"
      lineHeight="1.5rem"
      letterSpacing="0.4px"
      transition=".15s ease"
      {...rest}
    >
      {icon && <Image src={icon} pl="4" pr="4" alt={`${children}`} />}
      {children}
    </Flex>
  );
};

export default NavItem;