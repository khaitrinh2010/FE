const express = require("express");
const route = express.Router();

// Correctly import the controller function using a relative path
const { controller } = require("./controller"); // Adjust the path as needed

// Use the controller function in the route
route.get("/login", controller);

// Export the route
module.exports = { route };
