import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

let imgarray = [];
const PostAdCar = () => {
  const [photo, setPhoto] = useState([]);
  const [formData, setFormData] = useState({});

  const handlephoto = (e) => {
    let image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "olxuploadimg");
    data.append("cloud_name", "dcmmvm9mf");

    fetch("https://api.cloudinary.com/v1_1/dcmmvm9mf/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        let url = data.url;
        setPhoto([...photo, url]);

        imgarray.push(url);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData({ ...formData, productImages: imgarray });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let subcategory = localStorage.getItem("subcategory")
  let type = localStorage.getItem("type");
  console.log(subcategory, type)


  console.log(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();
  let posted = `${date} ${month} ${year}`;
  console.log(`${date} ${month} ${year}`);

  console.log(formData);
  const handleSubmit = async () => {
    setFormData({ ...formData, postedOn: posted, type: "car" });
    console.log("formData", formData);
    let response = await axios.post(
      "https://olx-data-server-hwrf.onrender.com/cars",
      formData
    );
    console.log(response.data);
  };

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "grey", height: "60px" }}>
        <Link to="/postadCar">
          <AiOutlineArrowLeft
            style={{
              marginLeft: "3%",
              height: "100%",
              fontSize: ["30px", "35px"],
            }}
          />
        </Link>
      </div>
      <Box w={"50%"} m="auto" padding="0%" mt="40px">
        <Box w="100%" border="1px" borderBottomColor="transparent">
          <Heading
            fontSize={["20px", "25px", "30px"]}
            textAlign="left"
            ml="20px"
            mt="10px"
          >
            Selected Category
          </Heading>
          <Text
            textAlign="left"
            ml="20px"
            fontSize={["16px", "18px", "22px"]}
            mt="8px"
            mb="20px"
          >
            {type} / {subcategory}
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            w="100%"
            h="40%"
            border="1px"
            pl="8%"
            pr="8%"
            borderBottomColor="transparent"
          >
            <Heading fontSize={["20px", "25px", "30px"]} mt="20px">
              INCLUDE SOME DETAILS
            </Heading>
            <FormControl isRequired>
              <FormLabel
                fontSize={["16px", "18px", "22px"]}
                mt="20px"
                mb="10px"
              >
                Brand
              </FormLabel>
              <Input
                placeholder="Brand"
                onChange={handleChange}
                name="brandName"
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                mt="20px"
                fontSize={["16px", "18px", "22px"]}
                mb="10px"
              >
                Ad Title
              </FormLabel>
              <Input
                placeholder="Ad Title"
                onChange={handleChange}
                name="productName"
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                mt="20px"
                fontSize={["16px", "18px", "22px"]}
                mb="10px"
              >
                Model
              </FormLabel>
              <Input
                placeholder="Model Name"
                onChange={handleChange}
                name="model"
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                mt="20px"
                fontSize={["16px", "18px", "22px"]}
                mb="10px"
              >
                Physical Condition
              </FormLabel>
              <Input
                onChange={handleChange}
                name="physicalCondition"
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                mt="20px"
                fontSize={["16px", "18px", "22px"]}
                mb="10px"
              >
                Year of Purchase
              </FormLabel>
              <Input
                onChange={handleChange}
                name="yearOfPurchase"
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
                type="number"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                fontSize={["16px", "18px", "22px"]}
                mt="20px"
                mb="10px"
              >
                Description
              </FormLabel>
              <Textarea
                type="text area"
                h={"100px"}
                name="description"
                onChange={handleChange}
                fontSize={["16px", "18px", "22px"]}
                mb="40px"
              />
            </FormControl>
          </Box>
          <Box
            w="100%"
            h="30%"
            border="1px"
            pl="8%"
            pr="8%"
            borderBottomColor="transparent"
          >
            <Heading fontSize={["20px", "25", "30px"]} mt="20px">
              SET A PRICE
            </Heading>
            <FormControl isRequired>
              <FormLabel
                fontSize={["16px", "18px", "22px"]}
                mt="20px"
                mb="10px"
              >
                Price
              </FormLabel>
              <Input
                placeholder="Price"
                type="number"
                name="price"
                onChange={handleChange}
                fontSize={["16px", "18px", "22px"]}
                h={["40px", "50px", "50px"]}
                mb="40px"
              />
            </FormControl>
          </Box>
          <Box
            w="100%"
            border="1px"
            pl="8%"
            pr="8%"
            borderBottomColor="transparent"
          >
            <Heading fontSize={["20px", "25", "30px"]} mt="30px">
              UPLOAD UP TO 4 PHOTOS
            </Heading>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2,1fr)",
                "repeat(4,1fr)",
              ]}
              templateRows={[
                "repeat(4,200px)",
                "repeat(2,200px)",
                "repeat(1,200px)",
              ]}
              gap={1}
              mt="20px"
            >
              <GridItem>
                <Input
                  type="file"
                  name="image"
                  onChange={handlephoto}
                  id="upload"
                  w="100px"
                  h="100px"
                  hidden
                ></Input>
                <FormLabel
                  htmlFor="upload"
                  title="Click to choose a file"
                  border={"2px"}
                >
                  <Box w="100%" h="100px">
                    <Image
                      w="100%"
                      h="100%"
                      src={photo ? photo[0] : null}
                    ></Image>
                  </Box>
                </FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="file"
                  name="image"
                  onChange={handlephoto}
                  id="upload"
                  w="100px"
                  h="100px"
                  hidden
                ></Input>
                <FormLabel
                  htmlFor="upload"
                  title="Click to choose a file"
                  border={"2px"}
                >
                  <Box w="100%" h="100px">
                    <Image
                      w="100%"
                      h="100%"
                      src={photo ? photo[1] : null}
                    ></Image>
                  </Box>
                </FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="file"
                  name="image"
                  onChange={handlephoto}
                  id="upload"
                  w="100px"
                  h="100px"
                  hidden
                ></Input>
                <FormLabel
                  htmlFor="upload"
                  title="Click to choose a file"
                  border={"2px"}
                >
                  <Box w="100%" h="100px">
                    <Image
                      w="100%"
                      h="100%"
                      src={photo ? photo[2] : null}
                    ></Image>
                  </Box>
                </FormLabel>
              </GridItem>
              <GridItem>
                <Input
                  type="file"
                  name="image"
                  onChange={handlephoto}
                  id="upload"
                  w="100px"
                  h="100px"
                  hidden
                ></Input>
                <FormLabel
                  htmlFor="upload"
                  title="Click to choose a file"
                  border={"2px"}
                >
                  <Box w="100%" h="100px">
                    <Image src={photo ? photo[3] : null}></Image>
                  </Box>
                </FormLabel>
              </GridItem>
            </Grid>
          </Box>
          <Box
            w="100%"
            border="1px"
            pl="8%"
            pr="8%"
            borderBottomColor="transparent"
          >
            <Heading fontSize={["20px", "25", "30px"]} mt="20px">
              Confirm Your Location
            </Heading>
            <select
              name="location"
              onChange={handleChange}
              style={{
                marginBottom: "20px",
                height: "40px",
                border: "1px solid",
                marginTop: "20px",
                width: "100%",
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              <option value="Delhi"></option>
              <option value="Banglore">Banglore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </Box>
          <Box w="100%" border="1px" p="4%">
            <Button
              type="submit"
              h={["40px", "50px", "60px"]}
              fontSize={["25px", "30px", "35px"]}
              w="100%"
            >
              Post
            </Button>
          </Box>
        </form>
      </Box>
      <div
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
          fontSize: "15px",
          height: "30px",
          textAlign: "center",
          marginTop: "13.5%",
        }}
      >
        Free Classifieds in India. © 2006-2022 OLX
      </div>
    </>
  );
};

export default PostAdCar;