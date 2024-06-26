import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LinksData = [
  {
    id: 1,
    title: "Events",
    to: "events",
  },
  {
    id: 2,
    title: "Notice",
    to: "notice",
  },
  {
    id: 3,
    title: "Our Team",
    to: "our-team",
  },
  {
    id: 4,
    title: "FAQs",
    to: "faqs",
  },
];

export const Links = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={700}>
        Links
      </Text>
      <Stack spacing={4}>
        {LinksData.map((link) => (
          <Link
            textColor={"#6A6B6C"}
            fontWeight={400}
            _hover={{ color: "#000", textDecoration: "none", fontWeight: 500 }}
            fontSize={{ base: "16px", md: "18px" }}
            as={NavLink}
            reloadDocument
            to={link.to}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};
