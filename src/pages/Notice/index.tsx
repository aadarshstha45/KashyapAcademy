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

function NoticePage() {
  return (
    <Container maxW={{ base: "95vw", md: "85vw" }} py={20}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 0: 1, 600: 2, 1200: 3, 1600: 4 }}
      >
        <Masonry gutter="20px">
          {[...Array(5)].map((_, index) => (
            <Card overflow={"hidden"} key={index}>
              <CardHeader h={"fit-content"} p={0}>
                <Image
                  w={"100%"}
                  h={"400px"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                  src="https://source.unsplash.com/random"
                  alt="Segun Adebayo"
                />
              </CardHeader>
              <CardBody>
                <Heading size="md">Notice 1</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </CardBody>
            </Card>
          ))}
          {[...Array(5)].map((_, index) => (
            <Card key={index}>
              <CardHeader h={"fit-content"} p={0}>
                <Image
                  w={"100%"}
                  h={"400px"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                  src="https://source.unsplash.com/random"
                  alt="Segun Adebayo"
                />
              </CardHeader>

              <CardBody>
                <Heading size="md">Notice 1</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet,
                  consectetur adipiscing elit.
                </Text>
              </CardBody>
            </Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
}

export default NoticePage;
