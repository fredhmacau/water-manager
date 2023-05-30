import * as React from "react";
import {
  chakra,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
const InsertForm = React.memo((props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onRegisterUser = async function (values) {
    console.log(values);
  };
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
      onSubmit={handleSubmit(onRegisterUser)}
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
          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.firstname}
          >
            <FormLabel
              htmlFor="firstname"
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
              Primeiro nome
            </FormLabel>
            <Input
              id="firstname"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="Inserir primeiro nome"
              border="2px"
              type="text"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
              {...register("firstname",{
                required:"Campo obrigatório  preenche correctamente"
              })}
            />
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>

          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]} isInvalid={errors.last_name}>
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
              Sobre nome
            </FormLabel>
            <Input
              id="last_name"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="Inserir sobre nome"
              border="2px"
              type="text"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
              {...register("last_name",{
                required:"Campo obrigatório  preenche correctamente"
              })}
            />
            <FormErrorMessage>
              {errors.last_name && errors.last_name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}  isInvalid={errors.email_address}>
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
              Endereço de email
            </FormLabel>
            <Input
              id="email_address"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="Inserir email"
              border="2px"
              type="email"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
              {...register("email_address",{
                required:"Campo obrigatório preenche correctamente"
              })}
            />
            <FormErrorMessage>
              {errors.email_address && errors.email_address.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl as={GridItem} colSpan={[6, 3]} isInvalid={errors.bi}>
            <FormLabel
              htmlFor="bi"
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
              BI
            </FormLabel>
            <Input
              id="bi"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="bilheite de identidade"
              border="2px"
              type="text"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
              {
                ...register("bi",{
                  required:"Preencha correctamente"
                })
              }
            />
            <FormErrorMessage>
              {errors.bi && errors.bi.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]} isInvalid={errors.contact}>
            <FormLabel
              htmlFor="contact"
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
              Contacto
            </FormLabel>
            <Input
              id="contact"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="Insirir Número de telefone"
              border="2px"
              type="text"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
              {...register("contact",{
                required:"contacto invalido"
              })}
            />
             <FormErrorMessage>
              {errors.contact && errors.contact.message}
            </FormErrorMessage>
          </FormControl>
          <VStack as={GridItem} colSpan={[6,2]}>
          <FormControl as={GridItem} mb="5" colSpan={[6,2]} isInvalid={errors.residence_n}>
            <FormLabel
              htmlFor="residence_n"
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
              Número da residência
            </FormLabel>
            <Input
              id="residence_n"
              sx={{ backgroundColor: "#FCFDFE" }}
              p="1rem"
              color="#4B506D"
              opacity="0.4"
              lineHeight="1.25rem"
              fontSize="0.875rem"
              fontFamily="mulish"
              letterSpacing="0.3px"
              placeholder="Identificação da residência"
              border="2px"
              type="text"
              borderColor="#cbd5e0a3"
              borderRadius="8px"
            />
            <FormErrorMessage>
              {errors.residence_n && errors.residence_n.message}
            </FormErrorMessage>
          </FormControl>

          
          <FormControl as={GridItem}  mt="1rem">
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
              Cadastrar morador
            </Button>
          </FormControl>
          </VStack>

        </SimpleGrid>
      </Stack>
    </chakra.form>
  );
});
export default InsertForm;
