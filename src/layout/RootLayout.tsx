import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { HomeCollege } from "../pages/College";
import { HomeSchool } from "../pages/School";

function RootLayout() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem colSpan={1}>
        <HomeSchool />
      </GridItem>
      <GridItem colSpan={1}>
        <HomeCollege />
      </GridItem>
    </SimpleGrid>
  );
}

export default RootLayout;
