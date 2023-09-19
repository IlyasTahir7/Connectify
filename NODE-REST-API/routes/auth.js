const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  //Register

  try {
    //Generates new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user and respond
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
  }

  //Login
  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("User not found");
      }

      // Compare the password using bcrypt or another method
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        return res.status(401).json("Invalid password");
      }
      res.status(200).json(user);
      // Generate and send a JWT token for authentication if login is successful
      // Example: res.json({ token: generateAuthToken(user) });
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
    }
  });
});

module.exports = router;
