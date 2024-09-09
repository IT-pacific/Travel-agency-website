import codes from '../helpers/statusCodes.js';
import generateSlug from '../helpers/generateSlug.js';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../services/postService.js';

// Get single post
export const getPostHandler = async (req, res, next) => {
  const { slug } = req.params;
  const post = await getPost(slug);

  if (!post) {
    const error = new Error('Post was not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ post: post, responseOk: true });
};

// Get Multiple posts
export const getPostsHandler = async (req, res, next) => {
  let take = 6;
  let page = 0;
  let skip = take * page;
  const posts = await getPosts(take, skip);

  if (!posts) {
    const error = new Error('Items were not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ post: posts, responseOk: true });
};

// Create post
// export const createPostHandler = async (req, res, next) => {
//   return console.log(req.body);
//   const { title, userId } = req.body;

//   let slug = generateSlug(title);

//   console.log(slug);
//   console.log(userId);

//   const data = {
//     title,
//     slug,
//     userId,
//   };

//   if (!title || !userId) {
//     const error = new Error('Something is missing');
//     error.status = codes.BAD_REQUEST;
//     next(error);
//   }

//   const item = await createPost(data);

//   if (!item) {
//     const error = new Error('post not created');
//     return next(error);
//   }

//   res.status(codes.OK).json({ post: item, responseOk: true });
// };

// ================================================================

export const createPostHandler = async (req, res, next) => {
  try {
    // Extract title
    const title = req.body.title;

    return console.log(title);

    // Initialize the combined array for blog data
    const combinedData = [];

    // Process uploaded files
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        combinedData.push({
          type: 'image',
          content: {
            originalName: file.originalname,
            fileName: file.filename,
            path: file.path,
            size: file.size,
          },
        });
      });
    }

    // Process dynamic content blocks
    for (const key in req.body) {
      if (key.startsWith('contentBlock_')) {
        const index = key.split('_')[1]; // Extract the index from the field name
        const blockType = req.body[`contentBlock_${index}_type`];
        const blockContent = req.body[`contentBlock_${index}_content`];

        combinedData.push({
          type: blockType,
          content: blockContent,
        });
      }
    }

    // Prepare the final blogData object
    const blogData = {
      title: title,
      contentBlocks: combinedData,
    };

    // Save blogData into the database
    // Example: Blog.create(blogData);

    res.status(200).send({
      message: 'Blog post created successfully!',
      data: blogData,
    });
  } catch (error) {
    // Handle any errors that occurred during processing
    next(error);
  }
};

// Update post title
export const updatePostHandler = async (req, res, next) => {
  const { slug, title } = req.body;

  const data = {
    slug,
    title,
  };

  if (!title) {
    const error = new Error('Title is required required');
    error.status = codes.BAD_REQUEST;
    next(error);
  }

  const post = await updatePost(data);

  if (!post) {
    const error = new Error('post not updated');
    return next(error);
  }

  res.status(codes.OK).json({ post: post, responseOk: true });
};

// Delete post
export const deletePostHandler = async (req, res, next) => {
  const { slug } = req.params;
  const post = await deletePost(slug);

  if (!post) {
    const error = new Error('Post was not deleted');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ post: post, responseOk: true });
};
