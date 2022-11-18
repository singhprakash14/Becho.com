const express = require("express");
const House = require("./house.model");

const app = express.Router();

app.get("/", async (request, response) => {
  try {
    const houses = await House.find();
    response.send(houses);
  } catch ({ message }) {
    response.send(message);
  }
});

app.get("/:_id", async (request, response) => {
  const { _id } = request.params;
  try {
    const house = await House.findOne({ _id });
    if (house) {
      response.send(house);
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
