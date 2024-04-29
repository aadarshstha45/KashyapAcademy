import { Box, Flex, Text } from "@chakra-ui/react";
import { useFetchHomeContent } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";

export const HeroSection = () => {
  const path = location.pathname.split("/")[1];
  console.log(path);
  const { data } = useFetchHomeContent(path);
  console.log(data);
  const image = `${BaseURL}/${data?.image}`;

  return (
    <Box
      h={{ base: "300px", sm: "400px", md: "600px", lg: "700px" }}
      bg={`url(${image})`}
      w={"100%"}
      bgPos={"center"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={{ base: "start", md: "center" }}
      bgRepeat={"no-repeat"}
      p={4}
      mb={4}
    >
      <Flex
        flexDir={"column"}
        bg={"rgba(255, 73, 0, 0.59)"}
        w={"fit-content"}
        bottom={10}
        textAlign={"center"}
        p={4}
      >
        <Text
          fontSize={{ base: "18px", sm: "22px", md: "26px", lg: "30px" }}
          color={"white"}
        >
          {data?.title}
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
          color={"white"}
        >
          {data?.description}
        </Text>
      </Flex>
    </Box>
  );
};
