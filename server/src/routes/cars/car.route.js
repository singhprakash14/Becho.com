const express = require("express");
const Car = require("./car.model");

const app = express.Router();

app.get("/", async (request, response) => {
  try {
    const cars = await Car.find();
    response.send(cars);
  } catch ({ message }) {
    response.send(message);
  }
});

app.get("/:_id", async (request, response) => {
  const { _id } = request.params;
  try {
    const car = await Car.findOne({ _id });
    if (car) {
      response.send(car);
    } else {
      response.send({
        error: true,
        message: "Invalid Id. Object not found.",
      });
    }
  } catch ({ message }) {
    response.send(message);
  }
});

module.exports = app;
