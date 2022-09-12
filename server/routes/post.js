const express = require("express");
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/post");
const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
