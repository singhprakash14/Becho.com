import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  Button,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppContext } from "../../AuthContext/AppContextProvider";
import UserName from "./Login_Pass";
import Becho from "./images/Becho.png";

const GenOtp = (otpLength) => {
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let otp = [];

  for (let i = 0; i < otpLength; i++) {
    otp += digits[Math.floor(Math.random() * 10)]
  }
  return Number(otp);
};

const LoginMobile = () => {
  const [input, setInput] = useState("");
  const { isAuth, toggleAuth } = useContext(AppContext);
  const toast = useToast();
  const [MobileNum, setMobileNum] = useState("");

  return (
    <Box textAlign="center" width="320px" m="auto" height="90vh">
      <Link to="/">
        <AiOutlineArrowLeft />
      </Link>
      <Box>
        <Image
          boxSize="150px"
          height="40px"
          width="100px"
          src={Becho}
          alt="becho-logo"
          marginLeft="35%"
        />
      </Box>
      <Box>
        <Text as="b">Enter Your Phone Number</Text>
      </Box>
      <br />
      <InputGroup>
        <InputLeftAddon children="+91" />
        <Input
          type="tel"
          value={MobileNum}
          onChange={(e) => setMobileNum(e.target.value)}
          placeholder="phone number"
          maxLength="10"
        />
      </InputGroup>
      <br />
      <Button
        onClick={() =>
          toast({
            title: "Generated OTP",
            description: `${GenOtp(4)}`,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          })
        }
      >
        <Text fontSize="sm">Generate OTP </Text>
      </Button>
      <br />
      <br />
      <Text as="b">Enter 4-Digit OTP</Text>
      <br />
      <br />
      <Box display="flex" justifyContent="center">
        <HStack>
          <PinInput type="alphanumeric" borderColor="#00a49f">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Box>{" "}
      <UserName />
      <br />
      <Box>
        <Button
          colorScheme="teal"
          size="md"
          height="48px"
          width="300px"
          border="2px"
          onClick={() => toggleAuth()}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
export default LoginMobile;
