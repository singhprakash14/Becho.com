import React, { useContext } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Flex, Image, SimpleGrid, Skeleton, Stack, Text, Tooltip, useToast } from "@chakra-ui/react"
import { getData } from '../api/api'
import { Link, useSearchParams } from 'react-router-dom'
import { FiHeart } from "react-icons/fi"
import { BsSuitHeartFill } from "react-icons/bs"
//import Footer from '../components/Footer'
import NotFound from './NotFound'
import NoData from './NoData'
import { AppContext } from '../AuthContext/AppContextProvider'
import poster from "../components/Images/land1.png";
// import DownNavbar from "../components/Navbar/Navbar2";
// import UpNavbar from "../components/Navbar/Navbar1";
// import ScrollToTop from "react-scroll-to-top";
// import { IoIosArrowUp } from "react-icons/io";
import Home from "../components/Navbar/Home "

const setIntoNum = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 2;
  }
  if (!value) {
    value = 2;
  }
  return value;
};
function HomePage() {
  const [products, setProducts] = useState([])
  const toast = useToast()
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const initialVal = setIntoNum(searchParams.get("limit"));
  const [limit, setLimit] = useState(initialVal)
  const [heart, setHeart] = useState(false)
  const { addToFav, favItem } = useContext(AppContext)


  useEffect(() => {


    getData({
      limit: limit
    }).then((res) => {

      setProducts(res.data)
      setIsLoaded(false)
      if (products.length === 0) {
        return <NoData />
      }
    })

  }, [limit])
  useEffect(() => {
    setSearchParams({ limit });
  }, [limit]);
  useEffect(() => {
    setInterval(() => {
      setIsLoaded(true)
    }, 2000)
  }, [!isLoaded])
  const addFav = (item) => {

    addToFav(item)
    toast({
      title: 'Added.',
      description: "Added to favorites.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

  }

  console.log(favItem)
  return (

    <>
   <Home/>
     <img src={poster} alt="poster" />
      <Box width={"85%"} margin="auto">
        <Box display={"flex"}>
          <Text fontSize={["22px", "24px", "26px", "32px"]}>
            <Link to="/favorites">
              Fresh recommendations
            </Link>
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2, 3, 4]} gap={"15px"} margin="auto" marginTop={"20px"}>
          <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
            <Box bg={"#6495ED"} borderRadius="10px" height={"360px"} marginTop="20px" color="white" p={2}>
              <Box>
                <Text fontSize={"21px"} as="b">
                  Want to see your stuff here?
                </Text>
              </Box>
              <Box margin={"auto"} marginTop={"20px"} width="90%">
                <Text fontSize={"17px"} alignItems="justify" >
                  Make some extrs cash by selling things in your community.Go on , it's quick and easy
                </Text>
              </Box>
              <Button border={"5px solid"} colorScheme="white" variant={"outline"} marginTop={"40px"} width="90%" fontSize={"20px"} p={6} >
                Start selling
              </Button>
            </Box>
          </Skeleton>
          {
            products.map((item) => (

              <>

                <Box key={item.id} margin={"auto"} width="100%" borderWidth='1px' borderRadius='lg' height={"370px"} >

                  <Box onClick={() => addFav(item)} display={"flex"} justifyContent={"flex-end"} >
                    {/* <Tooltip label="I don't close on click" closeOnClick={false}> */}
                    <FiHeart size={20} style={{ marginRight: "10px", marginTop: "20px" }} />
                    {/* </Tooltip> */}

                  </Box>
                  {
                    item.featured === true ?
                      <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                        <Box width="25%" bg={"orange"} marginLeft={"10px"}>
                          <Text fontSize={"11px"} >
                            FEATURED
                          </Text>
                        </Box>
                      </Skeleton>
                      : null
                  }
                  <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                    <Link to={`${item.type}/${item._id}`}>
                      <Box margin={"auto"} width={"90%"}>

                        <Image margin={"auto"} width={"90%"} height={"180px"} src={item.productImages} />
                      </Box>
                    </Link>

                  </Skeleton>


                  <Box p='6'>

                    <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                      <Link to={`${item.type}/${item._id}`}>
                        <Box
                          mt='1'


                          lineHeight='tight'
                          noOfLines={1}
                          display="flex"

                        >
                          <Text fontSize={["15px", "17px", "19px", "20px"]} as="b">
                            ₹ {item.price}
                          </Text>
                        </Box>
                      </Link>
                    </Skeleton>
                    <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                      <Link to={`${item.type}/${item._id}`}>
                        <Box
                          mt='1'

                          lineHeight='tight'
                          noOfLines={1}


                        >
                          <Text fontSize={["10px", "11px", "13px", "15px"]} color={"grey"}>
                            {item.description}
                          </Text>
                        </Box>
                      </Link>
                    </Skeleton>

                    <Link to={`${item.type}/${item._id}`}>
                      <Box
                        mt='1'

                        lineHeight='tight'


                        display={"flex"}
                        justifyContent="space-between"
                        color={"grey"}
                        marginTop="10px"

                        width="100%"

                      >
                        <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                          <Box>
                            <Text fontSize={["7px", "8px", "9px", "11px"]}>
                              {item.location}
                            </Text>

                          </Box>
                        </Skeleton>
                        <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                          <Box>
                            <Text fontSize={["7px", "8px", "9px", "11px"]}>
                              {item.postedOn}
                            </Text>

                          </Box>
                        </Skeleton>
                      </Box>
                    </Link>

                  </Box>

                </Box>

              </>
            ))
          }

        </SimpleGrid>

      </Box>
      <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
        <Box marginTop={"50px"}>
          <Button fontSize={"17px"} as="b" bg={"white"} border="3px solid" p={5} onClick={() => setLimit(limit + 1)}>
            Load more
          </Button>
        </Box>
      </Skeleton>
    </>
  )
}

export default HomePage