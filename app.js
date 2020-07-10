const express = require("express");
const app = new express();

//set the view engine
app.set("view engine", "ejs");

//Create the home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
