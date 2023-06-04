import {
  Avatar,
  Box,
  chakra,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import useHttp from "../../Hooks/useHttp";
import { Spinner } from "@chakra-ui/react";
import PackageItem from "../Dashboard/Content/PackageItem";
import tester1 from "../../assets/erda-estremera-eMX1aIAp9Nw-unsplash (1).jpg";
import tester2 from "../../assets/oppo-find-x5-pro-3orZREf1vgc-unsplash.jpg";
import tester3 from "../../assets/osarugue-igbinoba-4ardiyvfhTM-unsplash.jpg";
import { useForm,Controller} from "react-hook-form";
import { Select } from "@chakra-ui/react";
const PackagesResidentComponent = React.memo((props) => {
  const [residentInfo, setResidentInfo] = useState({});
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();
  const { viewInfoResident } = useHttp();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const onRegisterPayment = (data) => {
    console.log(data);
  };
  useEffect(() => {
    viewInfoResident(localStorage.getItem("access_token"))
      .then((resp) => {
        setResidentInfo({ ...resp.data });
        setLoading(false);
      })
      .catch((err) => setLoading(true));
  }, []);

  return (
    <>
      {loading ? (
        <Flex
          w="full"
          h="100vh"
          mt="6rem"
          align="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex bg="#F7F8FC" minH="950px" {...props}>
          <Flex w="full" mt="2rem">
            <HStack
              spacing="2px"
              w="full"
              px="4"
              justifyContent="space-between"
            >
              <Text
                as="h1"
                fontWeight={700}
                fontFamily="Mulish"
                fontSize="1.1875rem"
                color="#252733"
                letterSpacing="0.4px"
                opacity="0.7"
              >
                Pacotes
              </Text>
              <Flex>
                <Text
                  mt={{ base: "1.5", lg: "0" }}
                  as="p"
                  fontWeight={600}
                  fontFamily="Mulish"
                  fontSize="0.875rem"
                  color="#252733"
                  letterSpacing="0.2px"
                  lineHeight="20px"
                  opacity="0.7"
                >
                  {residentInfo["info_resident"]["username"]}
                </Text>
                <Wrap mt={{ base: "0", lg: "-1.5" }} ml="2">
                  <WrapItem>
                    <Avatar
                      src={`http://127.0.0.1:8000/v1.0/admin/resident/view_image_resident/${localStorage.getItem(
                        "access_token"
                      )}`}
                      size="sm"
                      bg="blue.300"
                      name={residentInfo["info_resident"]["username"]}
                    />
                  </WrapItem>
                </Wrap>
              </Flex>
            </HStack>
          </Flex>
          <Flex w="full" h="auto" px="4">
            <chakra.form
              w="full"
              mt="5"
              onSubmit={handleSubmit(onRegisterPayment)}
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
                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3]}
                    isInvalid={errors.package_name}
                  >
                    <FormLabel
                      htmlFor="package_name"
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
                      Pacote
                    </FormLabel>
                    <Select
                      color="#4B506D"
                      opacity="0.4"
                      lineHeight="1.25rem"
                      fontSize="0.875rem"
                      fontFamily="mulish"
                      letterSpacing="0.3px"
                      placeholder="Selecionar pacote"
                      border="2px"
                      type="text"
                      borderColor="#cbd5e0a3"
                      borderRadius="8px"
                      {...register("package_name", {
                        required: "Campo obrigatório",
                      })}
                    >
                      <chakra.option
                        opacity="0.4"
                        lineHeight="1.25rem"
                        fontSize="0.875rem"
                        fontFamily="mulish"
                        letterSpacing="0.3px"
                        value="Pacote Simples"
                      >
                        Pacote Simples
                      </chakra.option>
                      <chakra.option
                        opacity="0.4"
                        lineHeight="1.25rem"
                        fontSize="0.875rem"
                        fontFamily="mulish"
                        letterSpacing="0.3px"
                        value="Pacote Família"
                      >
                        Pacote Família
                      </chakra.option>
                      <chakra.option
                        opacity="0.4"
                        lineHeight="1.25rem"
                        fontSize="0.875rem"
                        fontFamily="mulish"
                        letterSpacing="0.3px"
                        value="Pacote Premium"
                      >
                        Pacote Premium
                      </chakra.option>
                    </Select>
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
                      Comprovativo
                    </FormLabel>
                    <Controller
                      name="file"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="file"
                          onChange={(e) => field.onChange(e.target.files[0])}
                        />
                      )}
                    />
                  </FormControl>

                  <FormControl w="full" mt="1rem">
                    <Button
                      w="md"
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
                      Realizar pagamento
                    </Button>
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </chakra.form>
          </Flex>
          <Flex mt="2rem" w="full" h="auto">
            <SimpleGrid
              px="4"
              w="full"
              gap="1rem"
              columns={{ lg: 3 }}
              minChildWidth="20rem"
              h="8.375rem"
              minHeight="8.375rem"
            >
              {/* Packages */}
              <PackageItem
                imgPackage={tester1}
                packageName="Pacote Simples"
                packageDescription="O Pacote Simples oferece 200 litros de água por um preço acessível de 1500kz."
                packagePrice="1500kz"
                packageVolume="200l"
              />
              <PackageItem
                imgPackage={tester2}
                packageName="Pacote Família"
                packageDescription="O Pacote Família é a escolha ideal para famílias que desejam manter seu consumo."
                packageVolume="2000l"
              />
              <PackageItem
                imgPackage={tester3}
                packageName="Pacote Premium"
                packageDescription="O pacote premium de consumo de água é uma excelente opção para moradores."
                packagePrice="32800kz"
                packageVolume="20300l"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      )}
    </>
  );
});

export default PackagesResidentComponent;
