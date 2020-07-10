const router = require("express").Router();

//login route
router.get("/login", (req, res) => {
  res.render("login");
});

//logout route
router.get("/logout", (req, res) => {
  res.send("logging out..");
});

//google route
router.get("/google", (req, res) => {
  res.send("google login");
});

module.exports = router;
