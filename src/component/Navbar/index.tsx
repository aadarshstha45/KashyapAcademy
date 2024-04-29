/* eslint-disable @typescript-eslint/no-explicit-any */
import { HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useFetchCourseMenu } from "../../api/";
import Logo from "../../assets/logo.png";
import { navItems } from "./data";

export const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { data } = useFetchCourseMenu();
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];
  console.log(path);

  return (
    <Flex as={"nav"} p={4} borderBottom={"1px solid #CACACA"}>
      <Container maxW={{ base: "95vw", lg: "85vw" }}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src={Logo} w={{ base: 150, md: 200 }} alt="Kasyap Academy" />
          </Box>
          <Button
            display={{ base: "block", md: "none" }}
            variant={"primary"}
            onClick={onOpen}
          >
            <HamburgerIcon />
          </Button>
          <HStack display={{ base: "none", md: "flex" }} spacing={4}>
            {navItems.map(({ id, name, to }) =>
              to === "course" ? (
                <Popover isLazy isOpen={isPopoverOpen} key={id}>
                  {path === "college" && (
                    <>
                      <PopoverTrigger>
                        <Flex
                          onMouseEnter={() => setIsPopoverOpen(true)}
                          onMouseLeave={() => setIsPopoverOpen(false)}
                          cursor={"pointer"}
                          borderBottom={"2px solid transparent"}
                          fontWeight={500}
                          fontSize={"20px"}
                          _hover={{
                            borderBottom: "2px solid #FF4900",
                          }}
                          _activeLink={{
                            borderBottom:
                              path === `/school/${to}` ||
                              path === `/college/${to}`
                                ? "2px solid #FF4900"
                                : "",
                          }}
                          align={"center"}
                          justify={"space-between"}
                          gap={2}
                        >
                          <Text>Course</Text>
                          <TriangleDownIcon boxSize={3} />
                        </Flex>
                      </PopoverTrigger>
                      <PopoverContent
                        w={"auto"}
                        _focus={{ ring: "none", ringColor: "transparent" }}
                        overflow={"hidden"}
                        onMouseEnter={() => setIsPopoverOpen(true)}
                        onMouseLeave={() => setIsPopoverOpen(false)}
                      >
                        <PopoverArrow />
                        {data ? (
                          data.map(({ id, title }: any, index: number) => (
                            <NavLink
                              key={id}
                              to={`course/${id}`}
                              reloadDocument
                            >
                              <PopoverBody
                                _hover={{
                                  bg: "primary.200",
                                  textColor: "white",
                                }}
                                textAlign={"center"}
                                fontWeight={500}
                                fontSize={"16px"}
                                borderBottom={
                                  index === data?.length - 1 ? "" : "1px solid"
                                }
                                borderBottomColor={"#CACACA"}
                              >
                                {title}
                              </PopoverBody>
                            </NavLink>
                          ))
                        ) : (
                          <PopoverBody
                            textAlign={"center"}
                            fontWeight={500}
                            fontSize={"16px"}
                            p={4}
                          >
                            Loading...
                          </PopoverBody>
                        )}
                      </PopoverContent>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  fontSize={"20px"}
                  as={NavLink}
                  key={id}
                  fontWeight={500}
                  reloadDocument
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid #FF4900",
                  }}
                  _activeLink={{
                    borderBottom:
                      pathname === `/school/${to}` ||
                      pathname === `/college/${to}`
                        ? "2px solid #FF4900"
                        : "",
                  }}
                  borderBottom={"2px solid transparent"}
                  to={to}
                  onClick={onClose}
                >
                  {name}
                </Link>
              )
            )}
          </HStack>
        </Flex>
      </Container>
      <Drawer size={"full"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <Flex flexDir={"column"} p={4} py={32} align={"center"} gap={6}>
            {navItems.map(({ id, name, to }) =>
              to === "course" ? (
                <Popover isLazy isOpen={isPopoverOpen} key={id}>
                  {path === "college" && (
                    <>
                      <PopoverTrigger>
                        <Flex
                          onMouseEnter={() => setIsPopoverOpen(true)}
                          onMouseLeave={() => setIsPopoverOpen(false)}
                          cursor={"pointer"}
                          borderBottom={"2px solid transparent"}
                          fontWeight={500}
                          fontSize={"20px"}
                          _hover={{
                            borderBottom: "2px solid #FF4900",
                          }}
                          _activeLink={{
                            borderBottom:
                              path === `/school/${to}` ||
                              path === `/college/${to}`
                                ? "2px solid #FF4900"
                                : "",
                          }}
                          align={"center"}
                          justify={"space-between"}
                          gap={2}
                        >
                          <Text>Course</Text>
                          <TriangleDownIcon boxSize={3} />
                        </Flex>
                      </PopoverTrigger>
                      <PopoverContent
                        w={"auto"}
                        _focus={{ ring: "none", ringColor: "transparent" }}
                        overflow={"hidden"}
                        onMouseEnter={() => setIsPopoverOpen(true)}
                        onMouseLeave={() => setIsPopoverOpen(false)}
                      >
                        <PopoverArrow />
                        {data ? (
                          data.map(({ id, title }: any, index: number) => (
                            <NavLink
                              key={id}
                              to={`course/${id}`}
                              reloadDocument
                            >
                              <PopoverBody
                                _hover={{
                                  bg: "primary.200",
                                  textColor: "white",
                                }}
                                textAlign={"center"}
                                fontWeight={500}
                                fontSize={"16px"}
                                borderBottom={
                                  index === data?.length - 1 ? "" : "1px solid"
                                }
                                borderBottomColor={"#CACACA"}
                              >
                                {title}
                              </PopoverBody>
                            </NavLink>
                          ))
                        ) : (
                          <PopoverBody
                            textAlign={"center"}
                            fontWeight={500}
                            fontSize={"16px"}
                            p={4}
                          >
                            Loading...
                          </PopoverBody>
                        )}
                      </PopoverContent>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  fontSize={"20px"}
                  as={NavLink}
                  key={id}
                  fontWeight={500}
                  reloadDocument
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid #FF4900",
                  }}
                  _activeLink={{
                    borderBottom:
                      pathname === `/school/${to}` ||
                      pathname === `/college/${to}`
                        ? "2px solid #FF4900"
                        : "",
                  }}
                  borderBottom={"2px solid transparent"}
                  to={to}
                  onClick={onClose}
                >
                  {name}
                </Link>
              )
            )}
          </Flex>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
