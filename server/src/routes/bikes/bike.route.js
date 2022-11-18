const express = require("express");
const Bike = require("./bike.model");

const app = express.Router();

app.get("/", async (request, response) => {
  try {
    const bikes = await Bike.find();
    response.send(bikes);
  } catch ({ message }) {
    response.send(message);
  }
});

app.get("/:_id", async (request, response) => {
  const { _id } = request.params;
  try {
    const bike = await Bike.findOne({ _id });
    if (bike) {
      response.send(bike);
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
