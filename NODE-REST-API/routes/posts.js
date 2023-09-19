const router = require("express").Router();
const Post = require("../models/post");
//upload a post
router.post("/", (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated Successfully");
    } else {
      res.status(403).json("You can only update you own post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted Successfully");
    } else {
      res.status(403).json("You can only delete you own post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like ans Dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await Post.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.body.userId },
      });
      res.status(200).json("Post has been liked");
    } else {
      await Post.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.body.userId },
      });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//get timeline of post
router.get("/timeline/all", async (req, res) => {
  try {
    const currentuser = await User.findById(req.body.userId);
    const userPost = await Post.find({ userId: curentUser._id });
    const friendsPost = await Promise.all(
      currentUser.followings.map(async (friendId) => {
        return await Post.find({ userId: friendId });
      })
    );
    res.json(userPost.concat(...friendsPost));
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
module.exports = router;
