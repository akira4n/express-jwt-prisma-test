const prisma = require("../config/prisma");
const { get } = require("../routes/auth.routes");

const createPost = async (data) => {
  return prisma.post.create({
    data,
  });
};

const getAllPosts = async () => {
  return prisma.post.findMany();
};

const getPostById = async (id) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
