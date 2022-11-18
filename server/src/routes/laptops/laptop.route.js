const express = require("express");
const Laptop = require("./laptop.model");

const app = express.Router();

app.get("/", async (request, response) => {
  try {
    const laptops = await Laptop.find();
    response.send(laptops);
  } catch ({ message }) {
    response.send(message);
  }
});

app.get("/:_id", async (request, response) => {
  const { _id } = request.params;
  try {
    const laptop = await Laptop.findOne({ _id });
    if (laptop) {
      response.send(laptop);
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
