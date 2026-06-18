const express = require("express");
const postController = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/posts", authMiddleware, postController.createPost);
router.get("/posts", authMiddleware, postController.getAllPosts);
router.get("/posts/:id", authMiddleware, postController.getPostById);
router.delete("/posts/:id", authMiddleware, postController.deletePost);

module.exports = router;
