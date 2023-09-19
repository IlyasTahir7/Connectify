const router = require("express").Router();
const User = require("../models/user"); // Import the User model
const bcrypt = require("bcrypt");

// ... (other routes and code)

// Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Now you can use 'hashedPassword' to update the password in the database
        // Example: Update the user's password in the database here
      } catch (error) {
        console.error(error);
        return res.status(500).json("Error updating password");
      }
    }

    // Add logic to update other user properties if needed
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      return res.status(200).json("Account updated successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Error updating User Account");
    }
  } else {
    return res.status(403).json("You can only update your account!");
  }
});
//Delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // Add logic to update other user properties if needed
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.id);

      return res.status(200).json("Account deleted successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Error deleting User Account");
    }
  } else {
    return res.status(403).json("You can only delete your account!");
  }
});
//Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const user = await User.findById(req.body.userId);
      const currentUser = await User.findById(req.params.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.body.userId } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can,t follow yourself");
  }
});
//unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const user = await User.findById(req.body.userId);
      const currentUser = await User.findById(req.params.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.body.userId } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you already unfollow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can,t unfollow yourself");
  }
});
// ... (other routes and code)

module.exports = router;
