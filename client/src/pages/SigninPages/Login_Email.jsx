import {
  Image,
  Box,
  Input,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Becho from "./images/Becho.png";
function LoginEmail() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box boxSize="sm" textAlign="center" m="auto" height="90vh">
      <Link to="/">
        <AiOutlineArrowLeft />
      </Link>
      <Image
        boxSize="150px"
        height="40px"
        width="100px"
        src={Becho}
        alt="becho-logo"
        marginLeft="35%"
      />
      <Text fontSize="1xl" as="b">
        Enter Your Email To Login
      </Text>
      <br />
      <br />
      <Box>
        <Input placeholder="Email" focusBorderColor="#00a49f" type={"email"} />
      </Box>
      <br />

      <br />
      <InputGroup size="md">
        <Input
          width="95%"
          pr="4rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          marginLeft="2%"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <BsEyeSlash /> : <BsEye />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Box bg="#fefbf0" w="100%" p={1} color="black">
        <span>
          If you are a new user please select any other login option from
          previous page.
        </span>
      </Box>
      <Button
        colorScheme="teal"
        size="md"
        height="48px"
        width="300px"
        border="2px"
      >
        Login
      </Button>

      <br />
      <br />
      <Text fontSize="xs">
        {" "}
        Your email is never shared with external parties nor do we use it to
        spam you in any way.
      </Text>
    </Box>
  );
}

export default LoginEmail;
