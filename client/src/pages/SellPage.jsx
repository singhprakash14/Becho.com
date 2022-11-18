import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillMobile, AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";

const Sellpage = () => {
    const handleSubcategory = (e) => {
        console.log(e.target.innerText);
        localStorage.setItem("subcategory", e.target.innerText);
    };

    const handleCategory = (e) => {
        console.log(e.target.innerText);
        localStorage.setItem("type", e.target.innerText);
    };
    return (
        <>
            <div style={{ width: "100%", backgroundColor: "grey", height: "60px" }}>
                <div style={{ width: "2%", height: "40px", marginLeft: "2%", paddingTop: "15px", }}>
                    <Link to="/postadd" >
                        <AiOutlineArrowLeft
                            style={{
                                marginLeft: "3%",
                                height: "100%",
                                width: "100%",
                                fontSize: ["30px", "35px"],
                            }}
                        />
                    </Link>
                </div>
            </div>
            <Heading fontSize={["20px", "25", "30px"]} mt="2%">
                Post Your Ad
            </Heading>
            <Box
                w={"50%"}
                m="auto"
                border={"2px solid"}
                borderColor="whitesmoke"
                mt={"2%"}
            >
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <AiFillMobile /> Mobiles
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            textAlign="initial"
                            color="gray"
                            className="acpanel"
                        >
                            <Link to="/sellmobile">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Mobile Phones
                                </Box>
                            </Link>
                            <Link to="/mobile">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Accessories
                                </Box>
                            </Link>
                            <Link to="/mobile">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Tablets
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <RiMotorbikeFill />
                                    Bikes
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            className="acpanel"
                            textAlign="initial"
                            color="gray"
                        >
                            <Link to="/sellbike">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Motorcylces
                                </Box>
                            </Link>
                            <Link to="/bike">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Scooters
                                </Box>
                            </Link>
                            <Link to="/bike">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Spare Parts
                                </Box>
                            </Link>
                            <Link to="/sellbike">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Bicycles
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <GiSofa /> Furniture
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            className="acpanel"
                            textAlign="initial"
                            color="gray"
                        >
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Sofa Dining
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Beds & Wardrobes
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Kids Furniture
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Home Decor & Garden
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <GiClothes /> Fashion
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            className="acpanel"
                            textAlign="initial"
                            color="gray"
                        >
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Men
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Women
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Kids
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <AiFillHome /> Properties
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            className="acpanel"
                            textAlign="initial"
                            color="gray"
                        >
                            <Link to="/house">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    For Sale: Houses & Apartments
                                </Box>
                            </Link>
                            <Link to="/house">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    For Rent: Houses & Apartments
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    For Sale: Shops & Offices
                                </Box>
                            </Link>
                            <Link to="/house">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    For Rent: Shops & Offices
                                </Box>
                            </Link>
                            <Link to="/house">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    PG & Guest Houses
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                    gap="2"
                                    fontSize={["17px", "22px", "24px"]}
                                    onClick={handleCategory}
                                >
                                    <FaLaptop /> Electronic and Appliances
                                </Box>
                                <AccordionIcon w={["24px", "35px", "45px"]} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            w={"100%"}
                            padding="0px"
                            fontSize={["15px", "20px", "20px"]}
                            className="acpanel"
                            textAlign="initial"
                            color="gray"
                        >
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    TV, Video - Audio
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"2px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Computer & Laptops
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Cameras & Lenses
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Games & Entertainment
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Fridges
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Computer Accessories
                                </Box>
                            </Link>
                            <Link to="/">
                                <Box
                                    pl="5%"
                                    borderBottom={"1px"}
                                    borderBottomColor="whitesmoke"
                                    onClick={handleSubcategory}
                                >
                                    Wasing Machine
                                </Box>
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "blue",
                    color: "white",
                    fontSize: "15px",
                    height: "30px",
                    textAlign: "center",
                    marginTop: "165px",
                    position: "sticky"
                }}
            >
                Free Classifieds in India. © 2006-2022 OLX
            </div>
        </>
    );
};

export default Sellpage;