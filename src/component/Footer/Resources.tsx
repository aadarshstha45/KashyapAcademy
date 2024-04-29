import { Flex, Link, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export const Resources = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={700}>
        Resources
      </Text>
      <Link
        textColor={"#6A6B6C"}
        fontWeight={400}
        reloadDocument
        _hover={{ color: "#000", textDecoration: "none", fontWeight: 500 }}
        fontSize={{ base: "16px", md: "18px" }}
        as={NavLink}
        to={"downloads"}
      >
        Downloads
      </Link>
      <Link
        textColor={"#6A6B6C"}
        fontWeight={400}
        _hover={{ color: "#000", textDecoration: "none", fontWeight: 500 }}
        fontSize={{ base: "16px", md: "18px" }}
        as={NavLink}
        reloadDocument
        to={path === "school" ? "/college" : "/school"}
      >
        Visit {path === "school" ? "College" : "School"} site
      </Link>
    </Flex>
  );
};
