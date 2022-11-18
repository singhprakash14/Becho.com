import { Button } from "@chakra-ui/react";
import React from "react";
import DownNavbar from "./Navbar2";
import UpNavbar from "./Navbar1";
import SellButton from "./SellButton";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  return (
    <div className="Container">
      <ScrollToTop
        smooth="true"
        top={80}
        style={{
          marginBottom: "450px",
          marginRight: "50%",
          borderRadius: "60px",
        }}
        component={
          <Button
            style={{
              color: "#002f34",
              boxShadow: "0 2px 8px 0 rgb(0 0 0 / 15%)",
              paddingX: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <IoIosArrowUp Size="15px" paddingRight="3px" /> Back to top
          </Button>
        }
      />

      {/* <SellButton /> */}
      <UpNavbar />
      <DownNavbar />
    </div>
  );
};

export default Home;
