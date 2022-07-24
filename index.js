/**
 * This is going to be the starting point of the application
 */
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/**
 * Register the body-parser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Initialize the connection to the mongoDB
 */
mongoose.connect("mongodb://localhost/empdb");
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to MongoDB");
});
db.once("open", () => {
  console.log("Connected to mongoDB");
});

/**
 *  We need to connect router to the server
 *
 */
//require("./routes/auth.route")(app); // this registers server with the route
require("./routes/emp.route")(app);

app.listen(8000, () => {
  console.log("Started the server on the PORT number : ", 8000);
});
