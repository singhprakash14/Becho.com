import {
  Box,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
  Button,
  Spacer,
  useDisclosure,
  IconButton,
  MenuDivider,
  Text,
  Image,
  Heading,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import "./Navbar.css";

import {
  ChevronDownIcon,
  CheckIcon,
  Search2Icon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { FiCamera } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdContentCopy, MdNotificationsNone } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { ReactNode } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ProfileBtn from "./ProfileBtn";

import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../AuthContext/AppContextProvider";
import { LoginPage } from "./Login";
import Becho from "./images/Becho1.Com.png";
import SellButton from "./SellButton";

import Becho1 from "./images/Becho.png";

const UpNavbar = () => {
  const { isAuth, username, logout } = useContext(AppContext);
  const [isLargerThan425] = useMediaQuery("(min-width: 426px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  if (isLargerThan425) {
    return (
      <Box
        position="fixed"
        top="0"
        zIndex="900"
        width="100%"
        background="#fff"
        boxSizing="border-box"
        boxShadow="0 1px 5px 0 rgb(0 0 0 / 10%)"
        display="block"
        className="NavContainer"
      >
        <HStack p="2" bg="#eff1f3" spacing="18px">
          <Box>
            <Link to="/" cursor="pointer">
              <Image
                boxSize="150px"
                height="50px"
                width="140px"
                src={Becho}
                alt="becho-logo"
                marginLeft="0%"
              ></Image>
            </Link>
          </Box>
          <Box>
            <InputGroup border="1px solid #002f34" borderRadius="4px">
              <InputLeftElement
                pointerEvents="initial"
                children={<Search2Icon color="gray.500" />}
              />

              <Input
                type="text"
                borderRadius="none"
                placeholder="Search city, area or locality.."
                bg="white"
                focusBorderColor="#23e5db"
              />
            </InputGroup>
          </Box>
          <Box width="32%">
            <Flex
              border="1px solid #002f34"
              alignItems="center"
              borderRadius="4px"
              width="100%"
            >
              <Input
                placeholder="Find Cars, Mobile Phones and more..."
                borderRadius="none"
                bg="white"
                focusBorderColor="#23e5db"
              />
              <span>
                <Button
                  bg="#002f34"
                  border="none"
                  borderRadius="none"
                  _hover="none"
                  cursor="pointer"
                >
                  <Search2Icon color="white" />
                </Button>
              </span>
            </Flex>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                display="flex"
                transition="all 0.2s"
                borderRadius="md"
                fontWeight="600"
              >
                ENGLISH <ChevronDownIcon className="turnIcon" />
              </MenuButton>

              <MenuList>
                <MenuItem>
                  ENGLISH <Spacer />
                  <span>
                    <CheckIcon />
                  </span>
                </MenuItem>
                <MenuItem>हिंदी</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <SellButton />
          {isAuth ? (
            <>
              <Box cursor="pointer">
                <RiChat1Line />
              </Box>
              <Box cursor="pointer">
                <MdNotificationsNone />
              </Box>
              <ProfileBtn />
              <Link to="/favorites">Favorites</Link>
            </>
          ) : (
            <Box
              colorScheme="black"
              variant="link"
              fontWeight="600"
              borderRadius="none"
              mb={80}
            >
              <LoginPage />
            </Box>
          )}
        </HStack>
      </Box>
    );
  } else {
    return (
      <>
        <Box
          bg="white"
          px={4}
          position="fixed"
          top="0"
          width="100%"
          zIndex="900"
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={2} alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={
                  isOpen ? (
                    <CloseIcon />
                  ) : (
                    <HamburgerIcon fontWeight="1000" fontSize="20px" />
                  )
                }
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                bg="white"
              />

              <Box>
                <Link to="#" cursor="pointer">
                  <Image
                    boxSize="150px"
                    height="50px"
                    width="140px"
                    src={Becho1}
                    alt="becho-logo"
                    marginLeft="0%"
                  ></Image>
                </Link>
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"text"}
                  cursor={"pointer"}
                  minW={0}
                  color="#002f34"
                >
                  <Flex alignItems="center">
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>Varanasi</MenuItem>
                  <MenuItem>Delhi</MenuItem>
                  <MenuDivider />
                  <MenuItem>Bangalore</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Link to="/favorites">Favorites</Link>
          </Flex>
          {!isOpen ? (
            <Box mb="10px">
              <InputGroup border="1px solid #002f34" borderRadius="3px">
                <InputLeftElement
                  pointerEvents="initial"
                  children={<Search2Icon color="gray.500" />}
                />
                <Input
                  type="text"
                  borderRadius="none"
                  placeholder="Find Cars, Mobile Phones and more..."
                  bg="white"
                  focusBorderColor="#23e5db"
                />
              </InputGroup>
            </Box>
          ) : null}

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Flex alignItems="center">
                <Box width="96px" height="96px" borderRadius="50%" mt="15px">
                  {" "}
                  <Image
                    src=" https://statics.olx.in/external/base/img/avatar_empty_state.png"
                    alt="Profile pic"
                  />
                </Box>

                <Box mx="1rem">
                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Welcome to Becho!
                    </Heading>
                  </Box>

                  <Text
                    color="#5b5c5d"
                    font-family="Roboto,Arial,Helvetica,sans-serif"
                  >
                    Take charge of your buying and selling journey.
                  </Text>
                </Box>
              </Flex>
              <Divider orientation="horizontal" />
              <VStack align="stretch">
                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <FiCamera />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Start selling
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <MdContentCopy />
                  </Box>
                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      My ADS
                    </Text>
                  </Box>
                </Flex>

                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <RiChat1Line />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Chat
                    </Text>
                  </Box>
                </Flex>

                <Divider color="black" orientation="horizontal" />

                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <QuestionOutlineIcon />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Help
                    </Text>
                  </Box>
                </Flex>

                <Flex alignItems="center" my="10px" fontSize="20px" py="8px">
                  <Box mx="5px">
                    <GiEarthAmerica />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Select language / भाषा चुनें
                    </Text>
                  </Box>
                </Flex>
                <Button bg="#002f34" color="white" fontSize="15px">
                  <Link to="#">Login</Link>
                </Button>
              </VStack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }
};

export default UpNavbar;
