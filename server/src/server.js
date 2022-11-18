const express = require("express");
const cors = require("cors");
const PORT = 8080;

const connect = require("./configs/db");

const bikeRoute = require("./routes/bikes/bike.route");
const laptopRoute = require("./routes/laptops/laptop.route");
const mobileRoute = require("./routes/mobiles/mobile.route");
const houseRoute = require("./routes/houses/house.route");
const carRoute = require("./routes/cars/car.route");
const combinedRoute = require("./routes/combined/combined.route");
const authRoute = require("./routes/auth/auth.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/bikes", bikeRoute);
app.use("/laptops", laptopRoute);
app.use("/mobiles", mobileRoute);
app.use("/houses", houseRoute);
app.use("/cars", carRoute);
app.use("/combined", combinedRoute);
app.use("/auth", authRoute);

app.get("/", (request, response) => {
    response.send("Hello, Topper!");
});


app.listen(PORT, async () => {
    try{
        await connect();
        console.log(`Litening at http://localhost:${PORT}`);
    }
    catch({message}){
        console.log(message);
    }
});