const express = require("express");
const crypto = require("crypto");
const User = require("./auth.model");

const app = express.Router();

app.get("/", async (request, response) => {
  const users = await User.find();
  response.send(users);
});

// Mobile register
app.post("/register/mobile", async (request, response) => {
  const { name, mobile } = request.body;
  try {
    if (name && mobile) {
      const user = await User.findOne({ mobile });
      if (user) {
        response.status(400).send({
          error: true,
          isExist: true,
          message: "User already exists.",
        });
      } else {
        crypto.randomBytes(16, async (err, buffer) => {
          let token = buffer.toString("hex");
          let user = await User.create({
            name,
            mobile,
            token,
          });
          response.send({
            error: false,
            user,
            status: "User created",
          });
        });
      }
    } else {
      response.send({
        error: true,
        message: "Invalid credentials.",
      });
    }
  } catch ({ message }) {
    response.send(message);
  }
});

// Email register
app.post("/register/email", async (request, response) => {
  const { name, email, password } = request.body;
  try {
    if (name && email && password) {
      const user = await User.findOne({ email });
      if (user) {
        response.status(400).send({
          error: true,
          isExist: true,
          message: "User already exists.",
        });
      } else {
        crypto.randomBytes(16, async (err, buffer) => {
          let token = buffer.toString("hex");
          let user = await User.create({
            name,
            email,
            password,
            token,
          });
          response.status(201).send({
            error: false,
            user,
            status: "Registered successfully",
          });
        });
      }
    } else {
      response.status(400).send({
        error: true,
        message: "Invalid credentials.",
      });
    }
  } catch ({ message }) {
    response.send(message);
  }
});

// Mobile login
app.post("/login/mobile", async (request, response) => {
  const { mobile } = request.body;
  try {
    if (mobile) {
      const user = await User.findOne({ mobile });
      if (user) {
        response.send({
          error: false,
          user,
          status: "Logged in",
        });
      } else {
        response.status(404).send({
          error: true,
          messsage: "User not found!",
        });
      }
    } else {
      response.status(400).send({
        error: true,
        message: "Invalid credentials.",
      });
    }
  } catch ({ message }) {
    response.send(message);
  }
});

// Email login
app.post("/login/email", async (request, response) => {
  const { email, password } = request.body;
  try {
    if (email && password) {
      const user = await User.findOne({ $and: [{ email: { $eq: email } }, { password: { $eq: password } }] });
      if (user) {
        response.send({
          error: false,
          user,
          status: "Logged in",
        });
      } else {
        response.status(404).send({
          error: true,
          messsage: "User not found!",
        });
      }
    } else {
      response.status(400).send({
        error: true,
        message: "Invalid credentials.",
      });
    }
  } catch ({ message }) {
    response.send(message);
  }
});

module.exports = app;
