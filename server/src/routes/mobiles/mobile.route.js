const express = require("express");
const Mobile = require("./mobile.model");

const app = express.Router();

app.get("/", async (request, response) => {
  try {
    const mobiles = await Mobile.find();
    response.send(mobiles);
  } catch ({ message }) {
    response.send(message);
  }
});

app.get("/:_id", async (request, response) => {
  const { _id } = request.params;
  try {
    const mobile = await Mobile.findOne({ _id });
    if (mobile) {
      response.send(mobile);
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
