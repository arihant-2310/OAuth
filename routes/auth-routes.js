const passport = require("passport");

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
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//redirect route after google sign in
router.get("/google/redirect", (req, res) => {
  res.send("redirecting url after google sign in");
});

module.exports = router;
