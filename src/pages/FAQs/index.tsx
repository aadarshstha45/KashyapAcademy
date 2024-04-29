/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchFAQ } from "../../api";
import { AddIcon, MinusIcon } from "../../assets/ArithmeticIcons";
import { CKEditor } from "../../component/CkEditor";
import SearchInput from "../../component/FormComponent/SearchInput";

function FAQs() {
  const { data } = useFetchFAQ();
  console.log(data);
  const { control } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchValue: any) => {
    const filteredItems = data.filter((item: any) =>
      item.question.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  return (
    <Flex flexDir={"column"}>
      <Flex
        bg={"#E5F7D2"}
        justify={"center"}
        align={"center"}
        p={{ base: 4, md: 10 }}
      >
        <Stack
          textAlign={"center"}
          spacing={4}
          p={4}
          align={"center"}
          justify={"center"}
        >
          <Text fontSize={{ base: "16px", md: "18px" }}>FAQs</Text>
          <Text
            textColor={"secondary.500"}
            fontSize={{ base: "18px", md: "20px" }}
          >
            Ask Us Anything
          </Text>
          <Text fontSize={{ base: "16px", md: "18px" }}>
            Have any questions? We're here to assist you.
          </Text>
          <SearchInput
            bg="white"
            variant="outline"
            name="search"
            control={control}
            placeholder="Search for your question..."
            onSearch={handleSearch}
          />
        </Stack>
      </Flex>

      <Container maxW="container.xl" p={4}>
        <Flex flexDir={"column"} justify={"center"} align={"center"} mb={4}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
            fontWeight={700}
            mb={4}
          >
            Popular Questions
          </Text>
          <Accordion
            w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
            allowMultiple
          >
            {filteredData?.map((item: any, index: number) => (
              <AccordionItem
                border={"none"}
                borderBottom={"1px solid #D9D9D9"}
                key={index}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      p={4}
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                      }}
                      fontWeight={600}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {item?.question}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon boxSize="20px" />
                      ) : (
                        <AddIcon boxSize="20px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4} shadow={isExpanded ? "md" : "none"}>
                      <CKEditor textColor="#7B7B7B" data={item?.answer} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </Flex>
  );
}

export default FAQs;
