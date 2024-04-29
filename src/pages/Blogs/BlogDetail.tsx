/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

import { useFetchBlogById, useFetchBlogs } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import { Facebook, Instagram, LinkedIn } from "../../assets/SocailIcons";
import { Banner } from "../../component/Banner";
import { CKEditor } from "../../component/CkEditor";
import LoadingScreen from "../Loading";

function BlogDetail() {
  const { id } = useParams();
  const { data, isLoading } = useFetchBlogById(parseInt(id!));
  const { data: blogData } = useFetchBlogs();

  return (
    <Flex flexDir={"column"}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        data && (
          <>
            <Banner bg="" image={`${BaseURL}/${data.image}`} />
            <Container maxW={"95vw"} py={20}>
              <Flex gap={10}>
                <Box w={"70%"}>
                  <Text
                    fontWeight={600}
                    fontSize={{
                      base: "22px",
                      sm: "24px",
                      md: "28px",
                      lg: "30px",
                    }}
                  >
                    {data.heading}
                  </Text>
                  <CKEditor data={data.content} />
                </Box>

                <Flex
                  display={{ base: "none", md: "flex" }}
                  flexDir={"column"}
                  gap={4}
                  w={{ base: "100%", md: "40%", lg: "30%" }}
                >
                  <Text
                    fontSize={{ base: "24px", md: "28px" }}
                    fontWeight={500}
                  >
                    Recent Posts
                  </Text>
                  {blogData?.length > 0 ? (
                    blogData.slice(0, 5).map((blog: any) => (
                      <Card
                        as={Link}
                        to={blog.id}
                        borderRadius={"none"}
                        border={"none"}
                        borderBottom={"0.5px solid"}
                        borderBottomColor={"#6A6B6C"}
                        shadow={"none"}
                        key={blog.id}
                      >
                        <Flex gap={2}>
                          <Image
                            objectPosition={"center"}
                            objectFit={"cover"}
                            h={"80px"}
                            border={"1px solid #6A6B6C"}
                            borderRadius={"10px"}
                            src={`${BaseURL}/${blog.image}`}
                          />
                          <CardBody>
                            <Text
                              fontWeight={600}
                              fontSize={{ base: "18px", md: "20px" }}
                              noOfLines={2}
                            >
                              {blog.title}
                            </Text>
                            <Text fontSize={{ base: "14px", md: "16px" }}>
                              {blog.published_at}
                            </Text>
                          </CardBody>
                        </Flex>
                      </Card>
                    ))
                  ) : (
                    <Text>No Blogs Available ...</Text>
                  )}

                  <Stack
                    align={"center"}
                    bg={"secondary.100"}
                    borderRadius={"5px"}
                  >
                    <Text
                      fontSize={{ base: "18px", md: "22px" }}
                      fontWeight={500}
                    >
                      Follow on Social Media
                    </Text>
                    <HStack justify={"start"} align={"center"}>
                      <Link target="_blank" to={data?.facebook}>
                        <Facebook
                          _hover={{ textColor: "#3b5998" }}
                          boxSize={{ base: 8, md: 10 }}
                        />
                      </Link>
                      <Link target="_blank" to={data?.instagram}>
                        <Instagram
                          _hover={{ textColor: "#c13584" }}
                          boxSize={{ base: 8, md: 10 }}
                        />
                      </Link>
                      <Link target="_blank" to={data?.linkedin}>
                        <LinkedIn
                          _hover={{ textColor: "#0077b5" }}
                          boxSize={{ base: 8, md: 10 }}
                        />
                      </Link>
                    </HStack>
                  </Stack>
                </Flex>
              </Flex>
            </Container>
          </>
        )
      )}
    </Flex>
  );
}

export default BlogDetail;
