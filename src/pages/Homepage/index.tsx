import { Flex } from "@chakra-ui/react";
import { lazy } from "react";
import { useLocation } from "react-router-dom";
const FacilitySection = lazy(() => import("./FacilitySection"));
const GallerySection = lazy(() => import("./GallerySection"));
const HeroSection = lazy(() => import("./HeroSection"));
const MessageSection = lazy(() => import("./MessageSection"));
const OurFocus = lazy(() => import("./OurFocus"));
const TestimonialSection = lazy(() => import("./TestimonialSection"));
const UpcomingEvents = lazy(() => import("./UpcomingEvents"));
const WhyUsSection = lazy(() => import("./WhyUsSection"));
const FacultySection = lazy(() => import("./FacultySection"));
const OurTeam = lazy(() => import("./OurTeam"));
const BlogSection = lazy(() => import("./BlogSection"));

function HomePage() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <Flex flexDir={"column"}>
      <HeroSection />
      <WhyUsSection />
      {path === "college" && <FacultySection />}
      <MessageSection />
      <OurFocus />
      <FacilitySection />
      <OurTeam />
      <BlogSection />
      <GallerySection />
      <TestimonialSection />
      <UpcomingEvents />
      <Flex
        h={{ base: "400px", md: "600px" }}
        w={"full"}
        align={"center"}
        justify={"center"}
        border={"1px solid #7884B6"}
        my={10}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.66635505587647!2d85.2788256349637!3d27.689327475982314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c0ef7d6689%3A0x4d468e36bbf93803!2sSai%20Nilayam%20Boarding%20School!5e0!3m2!1sen!2snp!4v1713946498127!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Flex>
    </Flex>
  );
}

export default HomePage;
