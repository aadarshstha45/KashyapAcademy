/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFetchDownload } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import DataTable from "../../component/Table";

function Downloads() {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [isDownloading, setIsDownloading] = useState(false);

  const { data } = useFetchDownload(path);

  const columns = [
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }: any) => {
        const handleDownload = () => {
          setIsDownloading(true);
          setTimeout(() => {
            setIsDownloading(false);
          }, 2000);
        };
        return (
          <IconButton
            as={Link}
            to={`${BaseURL}/${row.original.file}`}
            colorScheme="primary"
            aria-label="Download"
            isLoading={isDownloading}
            borderRadius={0}
            onClick={handleDownload}
            icon={<DownloadIcon />}
          />
        );
      },
    },
  ];

  return (
    <Flex
      justify={"center"}
      flexDir={"column"}
      align={"center"}
      py={10}
      bg={"gray.100"}
    >
      <Text
        textColor={"primary.500"}
        textAlign={"left"}
        fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
        fontWeight={700}
        mb={5}
      >
        Downloads
      </Text>
      <DataTable
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        setSearchText={setSearchText}
        columns={columns}
        data={data || []}
      />
    </Flex>
  );
}

export default Downloads;
