import { Flex, Image, Text } from "@chakra-ui/react";
import ErrorImage from "../../assets/ErrorImage.png";

function ErrorPage() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={6}
    >
      <Image src={ErrorImage} alt="Error" />
      <Text>Oops! The requested URL is not found </Text>
    </Flex>
  );
}

export default ErrorPage;
