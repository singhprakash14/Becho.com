import { Routes, Route, Link } from "react-router-dom";
import Motorcycle from "../pages/Motorcycles";
import Cars from "../pages/Cars";
import Mobiles from "../pages/Mobiles";
import Laptops from "../pages/Laptops";
import Houses from "../pages/Houses";

import LaptopSingle from "../pages/LaptopSingle";
import BikesSingle from "../pages/BikesSingle";
import CarSingle from "../pages/CarSingle";
import HouseSingle from "../pages/HouseSingle";
import MobileSingle from "../pages/MobileSingle";
import HomePage from "../pages/HomePage";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2"

import DummyLogin from "../pages/SigninPages/DummyLogin";
import LoginEmail from "../pages/SigninPages/Login_Email";
import LoginMobile from "../pages/SigninPages/LoginMobile";

// import Navbar1 from "../components/Navbar/Navbar1";
// import Navbar2 from "../components/Navbar/Navbar2";

import Sellpage from "../pages/SellPage";
import PostAdHouse from "../pages/PostAdHouse";
import PostAdBike from "../pages/PostAdBike";
import PostAdLaptop from "../pages/PostAdLaptop";
import PostAdMobile from "../pages/PostAdMobile";
import PostAdCar from "../pages/PostAdCar";

import Like from "../pages/Likes";

const AllRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />}>

        <Route path="/bikes" element={<Motorcycle />}></Route>
        <Route path="/bikes/:_id" element={<BikesSingle />} />

        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/cars/:_id" element={<CarSingle />} />

        <Route path="/mobiles" element={<Mobiles />}></Route>
        <Route path="mobiles/:_id" element={<MobileSingle />} />

        <Route path="/laptops" element={<Laptops />}></Route>
        <Route path="/laptops/:_id" element={<LaptopSingle />} />

        <Route path="/houses" element={<Houses />}></Route>
        <Route path="/houses/:_id" element={<HouseSingle />} />

        <Route path="/favorites" element={<Like />}></Route>

        <Route path="/" element={ <DummyLogin/>  }></Route>
        <Route path="/contwithphone" element={<LoginMobile />}></Route>
        <Route path="/contwithemail" element={<LoginEmail />}></Route>

        <Route path="/sellpage" element={<Sellpage />}></Route>
        <Route path="/sellhouse" element={<PostAdHouse />}></Route>
        <Route path="/sellmobile" element={<PostAdMobile />}></Route>
        <Route path="/selllaptop" element={<PostAdLaptop />}></Route>
        <Route path="/sellcar" element={<PostAdCar />}></Route>
        <Route path="/sellbike" element={<PostAdBike />}></Route>
      </Route>
      </Routes>
      <Footer1 />
      <Footer2/>
    </>
  );
};

export default AllRoutes;
