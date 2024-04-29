/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Card,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useFetchTestimonial } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import TestimonialBanner from "../../assets/Banner/Testimonial.png";
import { CKEditor } from "../../component/CkEditor";
import { Slider } from "../../component/Slider";

function TestimonialSection() {
  const { data } = useFetchTestimonial();
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  };
  return (
    <Box
      bg={`url(${TestimonialBanner})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      py={{ base: 1, md: 10 }}
    >
      <Container maxW={{ base: "99vw", md: "90vw", lg: "80vw" }} py={10}>
        <Box pl={4}>
          <Heading size={{ base: "md", md: "lg", lg: "xl" }}>
            Testimonials
          </Heading>
        </Box>
        <Slider
          noOfSlides={3}
          speed={1000}
          loop={true}
          space={10}
          breakpoints={breakpoints}
        >
          {data?.map(({ id, name, designation, description, image }: any) => (
            <SwiperSlide key={id} className="swiper-items swiper-activities">
              <Card
                role="group"
                shadow={"none"}
                w={{ base: "250px", md: "350px", lg: "400px" }}
                h={"250px"}
                overflow={"hidden"}
              >
                <CardHeader
                  h={150}
                  mb={0}
                  alignContent={"center"}
                  textAlign={"center"}
                >
                  <CKEditor noOfLines={5} data={description} />
                </CardHeader>
                <CardFooter mt={0} alignSelf={"center"}>
                  <HStack align={"center"} gap={4}>
                    <Avatar
                      size={{ base: "md", md: "lg" }}
                      src={`${BaseURL}/${image}`}
                    />
                    <Stack gap={0} textAlign={"center"}>
                      <Text
                        fontSize={{
                          base: "14px",
                          md: "16px",
                        }}
                        fontWeight={700}
                      >
                        {name}
                      </Text>
                      <Text
                        textColor={"#737373"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >
                        {designation}
                      </Text>
                    </Stack>
                  </HStack>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default TestimonialSection;
