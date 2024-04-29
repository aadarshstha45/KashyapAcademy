/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetchTeams } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import { CKEditor } from "../../component/CkEditor";
import { useTeamCount } from "../../utils/store";

function Teams() {
  const { data } = useFetchTeams();
  const { count, increment, reset } = useTeamCount();
  return (
    <>
      {data?.map((team: any, index: number) => (
        <Box bg={team.id === 1 ? "#73DE9E" : "#FFF"} key={team.id}>
          <Container
            maxW={{
              base: "95vw",
              md: "85vw",
              lg: "80vw",
            }}
            borderBottom={
              team?.id !== 1 && index === data?.length - 2
                ? "1px solid #000"
                : ""
            }
            borderColor={"secondary.500"}
            py={10}
          >
            {/* <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4} p={4}>
              <GridItem colSpan={1}>
                <Box>
                  <Text
                    fontWeight={700}
                    fontSize={{
                      base: "24px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    }}
                  >
                    {team?.title}
                  </Text>
                  <CKEditor data={team?.description} />
                </Box>
              </GridItem>

              {team?.teams.slice(0, count).map((member: any) => (
                <GridItem colSpan={1} key={member?.id} h={"100%"}>
                  <Card
                    boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07)"}
                    borderRadius={"20px"}
                    overflow={"hidden"}
                    w={"90%"}
                    h={350}
                  >
                    <Image
                      src={`${BaseURL}/${member?.image}`}
                      alt={member?.title}
                      h={250}
                      objectFit={"cover"}
                    />
                    <CardBody mt={0}>
                      <Stack
                        justify={"center"}
                        align={"center"}
                        textAlign={"center"}
                      >
                        <Text
                          fontSize={{ base: "14px", md: "16px" }}
                          fontWeight={700}
                          textColor={"#252B42"}
                        >
                          {member?.name}
                        </Text>
                        <Text
                          letterSpacing={0.2}
                          fontSize={{ base: "12px", md: "14px" }}
                        >
                          {member?.position}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </SimpleGrid> */}

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 550: 2, 900: 3, 1200: 4 }}
              style={{
                padding: "20px",
              }}
            >
              <Masonry gutter={"20px"}>
                <Box>
                  <Text
                    fontWeight={700}
                    fontSize={{
                      base: "24px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    }}
                  >
                    {team?.title}
                  </Text>
                  <CKEditor noOfLines={15} data={team?.description} />
                </Box>
                {team?.teams.slice(0, count).map((member: any) => (
                  <Card
                    key={member?.id}
                    boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07)"}
                    borderRadius={"20px"}
                    overflow={"hidden"}
                  >
                    <Image
                      h={"300px"}
                      objectFit={"cover"}
                      src={`${BaseURL}/${member?.image}`}
                    />
                    <CardBody overflow={"clip"}>
                      <Stack
                        justify={"center"}
                        align={"center"}
                        textAlign={"center"}
                      >
                        <Text
                          fontSize={{ base: "14px", md: "16px" }}
                          fontWeight={700}
                          textColor={"#252B42"}
                        >
                          {member?.name}
                        </Text>
                        <Text
                          letterSpacing={0.2}
                          fontSize={{ base: "12px", md: "14px" }}
                        >
                          {member?.position}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            <Stack align={"center"}>
              {team?.teams.length > count && (
                <Button
                  variant={"outline"}
                  colorScheme={"primary"}
                  w={"fit-content"}
                  onClick={increment}
                  borderRadius={0}
                >
                  Load More
                </Button>
              )}
              {count > 3 && team?.teams.length <= count && (
                <Button
                  variant={"outline"}
                  colorScheme={"primary"}
                  w={"fit-content"}
                  onClick={reset}
                  borderRadius={0}
                >
                  Reset
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      ))}
    </>
  );
}

export default Teams;
