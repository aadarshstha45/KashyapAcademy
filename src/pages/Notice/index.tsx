/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetchNotice } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import LoadingScreen from "../Loading";

function NoticePage() {
  const { data, isLoading } = useFetchNotice();
  return (
    <Container maxW={{ base: "95vw", md: "85vw" }} py={20}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3, 1600: 4 }}
        >
          <Masonry gutter="20px">
            {data?.map((notice: any) => (
              <Card overflow={"hidden"} key={notice.id}>
                <CardHeader h={"fit-content"} p={0}>
                  <Image
                    w={"100%"}
                    h={"400px"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    src={`${BaseURL}/${notice.image}`}
                    alt="Segun Adebayo"
                  />
                </CardHeader>
                <CardBody>
                  <Text fontSize={"sm"}>{notice.date}</Text>
                  <Heading mb={4} size="md">
                    {notice.title}
                  </Heading>
                </CardBody>
              </Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </Container>
  );
}

export default NoticePage;
