import { Box, Container, Divider, Link, Stack, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NavLink } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Links } from "./Links";
import { Resources } from "./Resources";

export const Footer = () => {
  return (
    <Box bg={"#F2F2F2"}>
      <Container maxW={{ base: "95vw", md: "90vw", lg: "85vw" }} py={10}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 2, 900: 4 }}
          style={{
            paddingTop: "10px",
          }}
        >
          <Masonry gutter="20px">
            <About />
            <Links />
            <Contact />
            <Resources />
          </Masonry>
        </ResponsiveMasonry>

        <Stack justify={"center"} align={"center"}>
          <Divider
            w={"80%"}
            opacity={1}
            borderColor={"#6A6B6C"}
            borderWidth={"1px"}
            mt={6}
          />
          <Text fontSize={{ base: "14px", md: "16px" }}>
            © 2021 Kashyap. All rights reserved.
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>
            Designed and Developed by{" "}
            <Link
              fontWeight={500}
              _hover={{ textDecoration: "none", fontWeight: 600 }}
              textColor={"primary.500"}
              as={NavLink}
              to={"https://www.codetara.com"}
            >
              Code Tara
            </Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
