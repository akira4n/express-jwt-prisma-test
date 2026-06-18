const {
  createPost: createPostRepository,
  getAllPosts: getAllPostRepository,
  getPostById: getPostByIdRepository,
  deletePost: deletePostRepository,
} = require("../repositories/post.repository.js");

const createPost = async ({ title, content, userId }) => {
  if (!title) {
    throw new Error("Title is required");
  }

  if (!content) {
    throw new Error("Content is required");
  }

  if (!userId) {
    throw new Error("userId is required");
  }

  const post = await createPostRepository({
    title,
    content,
    userId,
  });

  return post;
};

const getAllPosts = async () => await getAllPostRepository();

const getPostById = async (id) => {
  if (isNaN(id)) {
    throw new Error("Invalid post id");
  }

  const post = await getPostByIdRepository(Number(id));

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};

const deletePost = async (id, userId) => {
  if (isNaN(id)) {
    throw new Error("Invalid post id");
  }

  const post = await getPostByIdRepository(Number(id));

  if (!post) {
    throw new Error("Post not found");
  }

  if (userId !== post.userId) {
    throw new Error("Can't delete this post");
  }

  return await deletePostRepository(Number(id));
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
};
