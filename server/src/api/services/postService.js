import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create post
export const createPost = async (
  title,
  slug,
  thumbnail,
  userId,
  contentBlocks
) => {
  const createdBlogPost = await prisma.post.create({
    data: {
      userId: parseInt(userId), // Ensure userId is an integer
      title,
      slug,
      thumbnail,
      contentBlocks: {
        create: contentBlocks.map((block) => ({
          contentType: block.type, // Corrected field name
          contentData: block.content, // Corrected field name
          position: block.order, // Ensure position is used correctly
        })),
      },
    },
    include: {
      contentBlocks: {
        orderBy: {
          position: 'asc', // Corrected field name
        },
      },
    },
  });

  if (!createdBlogPost) return null;

  return createdBlogPost;
};

// Get single post
export const getPost = async (slug) => {
  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      contentBlocks: true,
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
