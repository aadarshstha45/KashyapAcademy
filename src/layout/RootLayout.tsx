import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Suspense } from "react";
import { HomeCollege } from "../pages/College";
import LoadingScreen from "../pages/Loading";
import { HomeSchool } from "../pages/School";

function RootLayout() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem colSpan={1}>
          <HomeSchool />
        </GridItem>
        <GridItem colSpan={1}>
          <HomeCollege />
        </GridItem>
      </SimpleGrid>
    </Suspense>
  );
}

export default RootLayout;
