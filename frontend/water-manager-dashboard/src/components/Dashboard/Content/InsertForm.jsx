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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useHttp from "../../../Hooks/useHttp";
import { useState } from "react";
const InsertForm = React.memo((props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { insertResident } = useHttp();
  const [alertError, setAlertError] = React.useState({
    errorMessage: "",
    isError: false,
  });
  const [registerSuccess, setRegisterSuccess] = useState(false);

  
  const onRegisterUser = async function (values) {

    const response=insertResident(values)
      await response.then((resp) => {
        if (resp.status == 201) {
          setAlertError({ errorMessage: "", isError: false });
          setRegisterSuccess(true);
        }
      })
      .catch((error) => {
        setRegisterSuccess(false);
        const errorMessage =
          error["response"]["data"]["msg"] != undefined
            ? error["response"]["data"]["msg"]
            : error["response"]["data"]["detail"];

        setAlertError({ errorMessage: `${errorMessage}`, isError: true });
      });
  };
  const onClose=function(){
    setAlertError({errorMessage:"",isError:false})
    setRegisterSuccess(false)
    redirect("/agents",{replace:true})
  }
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
      {registerSuccess && (
        <AlertDialog
          motionPreset="slideInBottom"
          onClose={onClose}
          isOpen={registerSuccess && true}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader
              pt="1rem"
              fontFamily="poppinsMedium"
              lineHeight="1.875rem"
              textAlign="center"
              letterSpacing="0.3px"
              fontWeight="700"
              color="#252733"
              fontSize="1.3rem"
              fontStyle="normal"
            >
              Registro efetuado com sucesso
            </AlertDialogHeader>

            <AlertDialogBody
              pt="1rem"
              fontFamily="poppinsLight"
              lineHeight="1.875rem"
              textAlign="center"
              letterSpacing="0.3px"
              fontWeight="500"
              color="#252733"
              fontSize="1rem"
              fontStyle="normal"
            >O registro do morador no sistema foi efetuado com sucesso.
            </AlertDialogBody>
            <AlertDialogFooter>
              <ChakraButton
                onClick={onClose}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#ACC960"
                // {"#0b1e9f#3751FF"}
                //{"#13ab09"} color
                variant="ghost"
                boxShadow="0px 4px 12px rgba(55, 81, 255, 0.24)"
                color="#FFFFFF"
                _hover={{ color: "#ffffff", backgroundColor: "0095A8" }}
                lineHeight="1.25rem"
                fontSize="0.875rem"
                fontFamily="poppinsMedium"
                fontWeight={500}
                letterSpacing="0.2px" ml={3}>
                OK
              </ChakraButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {alertError.isError ? (
        <Alert status="error">
          <AlertIcon />
          {alert.errorMessage}
        </Alert>
      ) : (
        <></>
      )}
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
              {...register("firstname", {
                required: "Campo obrigatório  preenche correctamente",
              })}
            />
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.last_name}
          >
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
              {...register("last_name", {
                required: "Campo obrigatório  preenche correctamente",
              })}
            />
            <FormErrorMessage>
              {errors.last_name && errors.last_name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6, 4]}
            isInvalid={errors.email_address}
          >
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
              {...register("email_address", {
                required: "Campo obrigatório preenche correctamente",
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
              {...register("bi", {
                required: "Preencha correctamente",
              })}
            />
            <FormErrorMessage>
              {errors.bi && errors.bi.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.contact}
          >
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
              {...register("contact", {
                required: "contacto invalido",
              })}
            />
            <FormErrorMessage>
              {errors.contact && errors.contact.message}
            </FormErrorMessage>
          </FormControl>
          <VStack as={GridItem} colSpan={[6, 2]}>
            <FormControl
              as={GridItem}
              mb="5"
              colSpan={[6, 2]}
              isInvalid={errors.residence_n}
            >
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

            <FormControl as={GridItem} mt="1rem">
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
                isLoading={isSubmitting}
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
