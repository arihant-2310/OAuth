const express = require("express");
const app = new express();
const authRoutes = require("./routes/auth-routes");
//set the view engine
app.set("view engine", "ejs");

//set the auth routes
app.use("/auth", authRoutes);

//Create the home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
