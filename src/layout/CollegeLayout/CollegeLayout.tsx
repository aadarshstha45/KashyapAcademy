import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../component/Footer";
import { Navbar } from "../../component/Navbar";

function CollegeLayout() {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      <Outlet />
      <Footer />
    </Flex>
  );
}

export default CollegeLayout;
