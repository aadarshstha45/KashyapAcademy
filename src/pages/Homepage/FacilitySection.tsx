/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

import { useFetchFacility } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import NoImage from "../../assets/noImage/picture.png";

function FacilitySection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");
  const { data } = useFetchFacility();
  return (
    <Container maxW={{ base: "95vw", md: "90vw", lg: "80vw" }} py={10}>
      <Heading
        size={{ base: "md", md: "lg", lg: "xl" }}
        pl={{ base: 1, md: 8 }}
      >
        Our Facilities
      </Heading>
      {!isLessThan768 ? (
        <Flex gap={4} justify={"center"} py={4}>
          {data
            ?.slice(0, 6)
            .map(({ id, title, description, image }: any, index: any) => (
              <Flex
                bg={
                  expanded === index
                    ? `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.91%, rgba(0, 0, 0, 0.33) 82.46%, #000 97.5%), url(${
                        image ? `${BaseURL}/${image}` : NoImage
                      })`
                    : `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(${
                        image ? `${BaseURL}/${image}` : NoImage
                      })`
                }
                key={id}
                h={"571px"}
                bgSize={"cover"}
                bgPos={"top"}
                bgRepeat={"no-repeat"}
                align={"flex-end"}
                p={4}
                cursor={"pointer"}
                transition={"all 0.5s ease"}
                w={{
                  md: expanded === index ? "200px" : "80px",
                  lg: expanded === index ? "350px" : "100px",
                }}
                onClick={() => setExpanded(index)}
              >
                <Box
                  transition={"all 0.5s"}
                  opacity={expanded === index ? 1 : 0}
                >
                  <Text
                    fontSize={{
                      base: "18px",
                      sm: "22px",
                      md: "20px",
                      lg: "26px",
                    }}
                    color={"white"}
                  >
                    {title}
                  </Text>
                  <Text
                    display={{ md: "none", lg: "block" }}
                    fontSize={"16px"}
                    color={"white"}
                  >
                    {description}
                  </Text>
                </Box>
              </Flex>
            ))}
        </Flex>
      ) : (
        <>
          <SimpleGrid columns={2} spacing={2} py={4}>
            {data?.slice(0, 4).map(({ id, title, icon }: any) => (
              <Box
                borderRadius={"5px"}
                key={id}
                h={200}
                bg={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 71.91%, rgba(0, 0, 0, 0.33) 82.46%, #000 97.5%), url(${BaseURL}/${icon}) no-repeat top center/cover`}
                alignContent={"end"}
                p={1}
              >
                <Text fontSize={"14px"} color={"white"}>
                  {title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          <Stack align={"center"} py={2}>
            <Button
              size={"xs"}
              variant={"primary"}
              onClick={() => console.log("clicked")}
            >
              View More
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default FacilitySection;
