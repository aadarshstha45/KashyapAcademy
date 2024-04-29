import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../component/Footer";
import { Navbar } from "../../component/Navbar";
import LoadingScreen from "../../pages/Loading";

function SchoolLayout() {
  return (
    <Flex flexDir={"column"}>
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </Flex>
  );
}

export default SchoolLayout;
