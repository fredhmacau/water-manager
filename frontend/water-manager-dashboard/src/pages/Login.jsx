import {
  Flex,
  Image,
  VStack,
  Text,
  chakra,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import React from "react";
import FadeIn from "../components/animation/FadeIn";

const Login = React.memo((props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  let navigate=useNavigate()
  const onLogin =async function (data) {
    console.log(await data);
    navigate("/admin/overview")
  };
  return (
    <FadeIn>
    <Flex
      w="full"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="#363740"
      h="100vh"
      maxH="full"
    >
      <VStack
        display="flex"
        flexDir="column"
        w="full"
        h="full"
        maxW={{sm:"18.75rem",md:"380px"}}
        borderRadius="md"
        
        maxH="582px"
        bgColor="#FFFFFF"
        pt="2rem"
        shadow="md"
        spacing="1rem"
      >
       
        <Image src={logo} alt="water manager login" />
        <Text
          fontFamily="Mulish"
          lineHeight="1.5rem"
          textAlign="center"
          letterSpacing="0.4px"
          color="#A4A6B3"
          fontSize="1.1875rem"
          fontWeight="600"
          opacity="0.7"
          fontStyle="normal"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          Drain-easy
        </Text>
        <Text
          pt="1rem"
          fontFamily="Mulish"
          lineHeight="1.875rem"
          textAlign="center"
          letterSpacing="0.3px"
          fontWeight="700"
          color="#252733"
          fontSize="1.5rem"
          fontStyle="normal"
        >
        Sessão em Drain-easy
        </Text>
        <Text
          fontFamily="Mulish"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="1.25rem"
          fontSize="0.875rem"
          letterSpacing="0.3px"
          textAlign="center"
          color="#9FA2B4"
        >
          Insira seu email e senha abaixo
        </Text>
        {"----------------------------------------------"}
        {/*formulario*/}
        <chakra.form
          w="full"
          display="flex"
          flexDirection="column"
          onSubmit={handleSubmit(onLogin)}
          pt="1.5rem"
          px="2rem"
        >
          <VStack mt="1.4em" spacing="1rem">
            <FormControl isInvalid={errors.email}>
              <FormLabel
                htmlFor="email"
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
                email
              </FormLabel>
              <Input
                id="email"
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
                {...register("email", {
                  required: "email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Endereço de email inválido",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && (
                  <Text color="red">{errors.email.message}</Text>
                )}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel
                htmlFor="password"
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
                Senha
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
               
                type="password"
                borderColor="#cbd5e0a3"
                borderRadius="8px"
                {...register("password", {
                  required: "senha é obrigatório",
                  
                })}
              />
              <FormErrorMessage>
                {errors.password && (
                  <Text color="red">{errors.password.message}</Text>
                )}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt="1rem">
              <Button
                w="full"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#0c9368"
                // {"#0b1e9f"#29CC97"}
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
                Iniciar sessão
              </Button>
            </FormControl>
          </VStack>
        </chakra.form>
      </VStack>
    </Flex>
        </FadeIn>
  );
});

export default Login;
