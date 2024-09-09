import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create post
export const createPost = async (data) => {
  const post = prisma.post.create({
    data: {
      title: data.title,
      slug: data.slug,
      userId: data.userId,
    },
  });

  return post;
};

// Get single post
export const getPost = async (slug) => {
  const post = await prisma.post.findFirst({
    where: {
      slug,
    },
  });
  return post;
};

// Get Multiple posts with pagination
export const getPosts = async (take, skip) => {
  const post = await prisma.post.findMany({
    take,
    skip,
  });
  return post;
};

// Update single post
export const updatePost = async (data) => {
  const post = prisma.post.update({
    where: {
      slug: data.slug,
    },
    data: {
      title: data.title,
    },
  });

  return post;
};

// Delete single post
export const deletePost = async (slug) => {
  const post = prisma.post.delete({
    where: {
      slug,
    },
  });

  return post;
};
