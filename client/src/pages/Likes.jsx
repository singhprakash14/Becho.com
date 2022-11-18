import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {AppContext} from "../AuthContext/AppContextProvider";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Skeleton,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import NoFav from "./NoFav";
function Like() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { favItem, addToFav, deleteFromFav } = useContext(AppContext);

  useEffect(() => {
    setInterval(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  console.log(favItem);
  return (
    <>
      {favItem.length === 0 ? (
        <NoFav />
      ) : (
        <Box width={"90%"} margin="auto">
          <Box display={"flex"}>
            <Text
              fontSize={["22px", "24px", "26px", "32px"]}
              textDecoration="underline"
            >
              FAVORITES
            </Text>
          </Box>

          <SimpleGrid
            columns={[1, 2, 3, 4]}
            gap={"15px"}
            margin="auto"
            marginTop={"20px"}
          >
            <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
              <Box
                p={4}
                bg={"#6495ED"}
                borderRadius="10px"
                height={"400px"}
                marginTop="20px"
                color="white"
              >
                <Box margin={"auto"}>
                  <Text fontSize={"21px"} as="b">
                    Want to see your stuff here?
                  </Text>
                </Box>
                <Box margin={"auto"} marginTop={"20px"}>
                  <Text fontSize={"21px"}>
                    Make some extrs cash by selling things in your community.Go
                    on , it's quick and easy
                  </Text>
                </Box>
                <Button
                  border={"5px solid"}
                  colorScheme="white"
                  variant={"outline"}
                  marginTop={"170px"}
                  width="90%"
                  fontSize={"20px"}
                  p={6}
                >
                  Start selling
                </Button>
              </Box>
            </Skeleton>
            {favItem.map((item) => (
              <>
                <Box
                  key={item._id}
                  margin={"auto"}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Box
                    onClick={() => deleteFromFav(item._id)}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    {/* <Tooltip label="I don't close on click" closeOnClick={false}> */}
                    <FaHeart
                      size={25}
                      style={{ marginRight: "10px", marginTop: "20px" }}
                    />
                    {/* </Tooltip> */}
                  </Box>
                  {item.featured === true ? (
                    <Skeleton
                      startColor="black"
                      endColor="white"
                      isLoaded={isLoaded}
                    >
                      <Box
                        width="30%"
                        bg={"orange"}
                        p={1}
                        marginBottom="20px"
                        marginLeft={"10px"}
                      >
                        <Text>FEATURED</Text>
                      </Box>
                    </Skeleton>
                  ) : null}
                  <Skeleton
                    startColor="black"
                    endColor="white"
                    isLoaded={isLoaded}
                  >
                    <Link to={`${item.type}/${item._id}`}>
                      <Box margin={"auto"} width={"90%"}>
                        <Image
                          margin={"auto"}
                          width={"90%"}
                          height={"220px"}
                          src={item.productImages}
                        />
                      </Box>
                    </Link>
                  </Skeleton>

                  <Box p="6">
                    <Skeleton
                      startColor="black"
                      endColor="white"
                      isLoaded={isLoaded}
                    >
                      <Link to={`${item.type}/${item._id}`}>
                        <Box
                          mt="1"
                          lineHeight="tight"
                          noOfLines={1}
                          display="flex"
                        >
                          <Text
                            fontSize={["22px", "24px", "26px", "28px"]}
                            as="b"
                          >
                            ₹ {item.price}
                          </Text>
                        </Box>
                      </Link>
                    </Skeleton>
                    <Skeleton
                      startColor="black"
                      endColor="white"
                      isLoaded={isLoaded}
                    >
                      <Link to={`${item.type}/${item._id}`}>
                        <Box mt="1" lineHeight="tight" noOfLines={1}>
                          <Text
                            fontSize={["13px", "14px", "15px", "18px"]}
                            color={"grey"}
                          >
                            {item.description}
                          </Text>
                        </Box>
                      </Link>
                    </Skeleton>

                    <Link to={`${item.type}/${item._id}`}>
                      <Box
                        mt="1"
                        lineHeight="tight"
                        display={"flex"}
                        justifyContent="space-between"
                        color={"grey"}
                        marginTop="10px"
                        width="100%"
                      >
                        <Skeleton
                          startColor="black"
                          endColor="white"
                          isLoaded={isLoaded}
                        >
                          <Box>
                            <Text fontSize={["12px", "12px", "12px", "15px"]}>
                              {item.location}
                            </Text>
                          </Box>
                        </Skeleton>
                        <Skeleton
                          startColor="black"
                          endColor="white"
                          isLoaded={isLoaded}
                        >
                          <Box>
                            <Text fontSize={["12px", "12px", "12px", "15px"]}>
                              {item.postedOn}
                            </Text>
                          </Box>
                        </Skeleton>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
}

export default Like;
