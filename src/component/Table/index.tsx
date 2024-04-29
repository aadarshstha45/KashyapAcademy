/* eslint-disable @typescript-eslint/no-explicit-any */
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  IconButton,
  Select,
  Skeleton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  PaginationState,
  Updater,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { MdArrowDropDown } from "react-icons/md";
import { SearchInput } from "./SearchInput";

export type DataTableProps = {
  data: Record<string, any>[];
  columns: ColumnDef<any, any>[];
  isLoading?: boolean;
  pinColumnAccess?: boolean;
  showFooter?: boolean;
  totalDataLabel?: string;
  pagination?: {
    manual?: boolean;
    pageCount?: number;
    pageParams?: {
      pageIndex: number;
      pageSize: number;
    };
    onChangePagination?: (paginationData: Updater<PaginationState>) => void;
  };
  filter?: {
    globalFilter: string;
    setGlobalFilter: Dispatch<SetStateAction<string>>;
  };
  sortingColumn?: string;
  setTable?: (table: any) => void;
  modalProps?: {
    sticky: boolean;
    height: string;
  };
  footerLeftElement?: ReactElement;
  setFilteredRows?: Dispatch<SetStateAction<any>>;
  searchText?: string;
  setSearchText?: Dispatch<SetStateAction<string>>;

  navigate?: () => void;
};

const filterFunction: FilterFn<any> = (rows, id, value) => {
  const rowValue = String(rows.original[id]).toLowerCase();
  const filterValue = value.toLowerCase();
  return rowValue.includes(filterValue);
};

export default function DataTable({
  data,
  columns,
  isLoading,
  filter,

  setSearchText,
}: DataTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    columns,
    data,
    enableColumnResizing: true,
    state: {
      columnFilters,
      globalFilter: filter?.globalFilter?.trim(),
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: filterFunction,
    onGlobalFilterChange: filter?.setGlobalFilter,
  });

  const { colorMode } = useColorMode();
  const { control } = useForm();
  return (
    <Card
      w={{ base: "95vw", sm: "80vw", md: "70vw", lg: "60vw" }}
      minH={"40vh"}
      h={"max-content"}
      shadow={"lg"}
      overflow={"clip"}
    >
      <CardBody>
        <Flex
          justify={"end"}
          align={"center"}
          mb={4}
          flexWrap={"wrap"}
          w={"full"}
          gap={4}
        >
          <Flex gap={2} align={"center"}>
            <SearchInput
              control={control}
              type="text"
              onSearch={setSearchText}
              name="search"
              placeholder="Search Data...."
            />
          </Flex>
        </Flex>
        <Box
          css={{
            scrollbarGutter: "stable",
            "&::-webkit-scrollbar": {
              width: "0.2rem",
              height: "0.6rem",
              position: "absolute",
            },
            "&::-webkit-scrollbar-track": {
              position: "absolute",
              background: "#gray.50",
              borderRadius: 20,
              opacity: 0.1,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "primary",
              borderRadius: 20,
            },
          }}
          overflowX={isLoading ? "hidden" : "scroll"}
        >
          <Table borderRadius={20} size={"sm"}>
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <Th
                          onMouseDown={header.getResizeHandler()} //for desktop
                          onTouchStart={header.getResizeHandler()} //for mobile
                          key={header.id}
                          px={5}
                          py={2}
                          bg={colorMode === "light" ? "gray.50" : "gray.800"}
                          color={colorMode === "light" ? "gray.600" : "white"}
                          colSpan={header.colSpan}
                          width={`${header.getSize()}px`}
                          transition={{
                            transform: header.column.getIsResizing()
                              ? `translateX(${
                                  table.getState().columnSizingInfo.deltaOffset
                                }px)`
                              : "",
                          }}
                        >
                          <Flex justify={"space-between"} align={"center"}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                            {header.column.getCanSort() ? (
                              <VStack flexDir={"column"}>
                                <IconButton
                                  size={"xs"}
                                  icon={<TriangleUpIcon />}
                                  aria-label="Descending"
                                  color={
                                    header.column.getIsSorted().valueOf() ===
                                    "desc"
                                      ? colorMode === "light"
                                        ? "black"
                                        : "white"
                                      : "gray.500"
                                  }
                                  bg={"none"}
                                  _hover={{ bg: "none" }}
                                  onClick={() => header.column.toggleSorting()}
                                />
                                <IconButton
                                  size={"xs"}
                                  icon={<TriangleDownIcon />}
                                  aria-label="Ascending"
                                  mt={-5}
                                  color={
                                    header.column.getIsSorted().valueOf() ===
                                    "asc"
                                      ? colorMode === "light"
                                        ? "black"
                                        : "white"
                                      : "gray.500"
                                  }
                                  bg={"none"}
                                  _hover={{ bg: "none" }}
                                  onClick={() => header.column.toggleSorting()}
                                />
                              </VStack>
                            ) : null}
                          </Flex>
                        </Th>
                      );
                    })}
                  </Tr>
                );
              })}
            </Thead>
            <Tbody>
              <>
                {data.length === 0 && !isLoading && (
                  <Tr>
                    <Td colSpan={columns.length}>
                      <Text textAlign={"center"}>No data available</Text>
                    </Td>
                  </Tr>
                )}
                {isLoading ? (
                  <>
                    {[...Array(3)].map((_row, rowIndex) => (
                      <Tr key={rowIndex}>
                        {columns.map((_column, columnIndex) => (
                          <Td key={columnIndex}>
                            <Skeleton height={"20px"} w={"full"} />
                          </Td>
                        ))}
                      </Tr>
                    ))}
                  </>
                ) : (
                  table.getRowModel().rows.map((row) => {
                    return (
                      <Tr key={row.id}>
                        {row.getVisibleCells()?.map((cell) => {
                          return (
                            <Td key={cell.id} py={3} px={5}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </Td>
                          );
                        })}
                      </Tr>
                    );
                  })
                )}
              </>
            </Tbody>
          </Table>
        </Box>
        <Flex flexDir={"column"} mt={4}>
          <Flex justify={"space-between"} align={"center"}>
            <Box>
              <Text fontSize={{ base: "14px", md: "16px" }}>
                Showing Page : {table.getState()?.pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </Text>
            </Box>

            <ButtonGroup variant={"outline"} size={{ base: "sm", md: "md" }}>
              <Button
                onClick={() => table.previousPage()}
                isDisabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </Button>
              <Button>{table.getState()?.pagination.pageIndex + 1}</Button>
              <Button
                onClick={() => table.nextPage()}
                isDisabled={!table.getCanNextPage()}
              >
                {">"}
              </Button>
            </ButtonGroup>
          </Flex>

          <Flex justifyContent={"flex-start"} align={"center"}>
            <Text fontSize={{ base: "12px", md: "14px" }}>Rows per page :</Text>
            <Select
              size={{ base: "xs", sm: "sm" }}
              borderRadius={5}
              variant={"filled"}
              icon={<MdArrowDropDown />}
              padding="2px 8px 2px 12px"
              focusBorderColor="teal.400"
              align-items="center"
              w={"fit-content"}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
