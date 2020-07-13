const express = require("express");
const app = new express();
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");
const mongoose = require("mongoose");
//set the view engine
app.set("view engine", "ejs");

//connect to the mongodb
mongoose.connect(
  keys.mongodb.dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!!");
  }
);

//set the auth routes
app.use("/auth", authRoutes);

//Create the home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
