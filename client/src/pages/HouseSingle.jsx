import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import Map from "../components/Map";
function HouseSingle() {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    axios
      .get(`https://olx-data-server-hwrf.onrender.com/houses/${_id}`)
      .then((res) => {
        setData(res.data);
        setIsLoaded(false);
      });
  }, []);
  useEffect(() => {
    setInterval(() => {
      setIsLoaded(true);
    }, 2000);
  }, [!isLoaded]);

  return (
    <>
      <SimpleGrid
        width={"90%"}
        margin="auto"
        marginTop={"50px"}
        columns={[1, 1, 2, 2]}
        gap="30px"
      >
        <Box>
          <Box margin={"auto"}>
            <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
              <Image
                width={"100%"}
                height="450px"
                margin={"auto"}
                src={data.image}
              />
            </Skeleton>
          </Box>
          <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
            <Box marginTop={"30px"} boxShadow="0 0 15px 2px #efdfde">
              <Box p={4}>
                <Flex>
                  <Text fontSize={["22px", "24px", "26px", "31px"]} as="b">
                    Description :
                  </Text>
                </Flex>
                <Flex>
                  <Text>{data.description}</Text>
                </Flex>
              </Box>
            </Box>
          </Skeleton>
        </Box>

        <SimpleGrid columns={[1, 1, 1, 1]}>
          <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
            <Box
              width={"100%"}
              margin="auto"
              height={"auto"}
              boxShadow="0 0 15px 2px #efdfde"
              p={6}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Box>
                  <Text fontSize={["22px", "24px", "26px", "31px"]} as="b">
                    ₹ {data.price}
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  width={"10%"}
                  marginRight="20px"
                  justifyContent="space-between"
                >
                  <Box>
                    <BiShareAlt size={25} />
                  </Box>
                  <Box>
                    <FiHeart size={25} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box mt="1" lineHeight="tight" noOfLines={1}>
                  <Text
                    fontSize={["13px", "14px", "15px", "18px"]}
                    color={"grey"}
                  >
                    {data.model}
                  </Text>
                </Box>
              </Box>
              <Box
                display={"flex"}
                width={"95%"}
                margin="auto"
                justifyContent="space-between"
              >
                <Box>
                  <Text
                    fontSize={["12px", "12px", "12px", "15px"]}
                    color={"grey"}
                  >
                    {data.location}
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={["12px", "12px", "12px", "15px"]}
                    color={"grey"}
                  >
                    {data.postedOn}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Skeleton>

          <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
            <Box
              width={"100%"}
              margin="auto"
              height={"auto"}
              boxShadow="0 0 15px 2px #efdfde"
              p={6}
            >
              <Box display={"flex"}>
                <Box>
                  <Text fontSize={["22px", "24px", "26px", "31px"]}>
                    Seller description
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        size="2xl"
                        name="Dan Abrahmov"
                        src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
                      />
                    </WrapItem>
                  </Wrap>
                  <Box marginTop={"30px"}>
                    <Text>Name:</Text>
                    <Text>Member Since</Text>
                  </Box>
                </Box>

                <Button width={"90%"} p={4} borderRadius="0">
                  Chat with seller
                </Button>
              </Box>
            </Box>
          </Skeleton>
          <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
            <Box
              width={"100%"}
              margin="auto"
              height={"auto"}
              boxShadow="0 0 15px 2px #efdfde"
              p={6}
            >
              <Box display={"flex"}>
                <Box>
                  <Text fontSize={["22px", "24px", "26px", "31px"]} as="b">
                    Posted in
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Text
                    fontSize={["13px", "14px", "15px", "18px"]}
                    color={"grey"}
                  >
                    {data.location}
                  </Text>
                </Box>
                <Map place={data.location} />
              </Box>
            </Box>
          </Skeleton>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default HouseSingle;
