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

  return res.status(codes.OK).json({ post: post, Ok: true });
};

// Get Multiple posts
export const getPostsHandler = async (req, res, next) => {
  let take = 6;
  let page = 0;
  let skip = take * page;
  const items = await getPosts(take, skip);

  if (!items) {
    const error = new Error('Item was not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ posts: items, Ok: true });
};

export const createPostHandler = (req, res, next) => {
  const { title, userId } = req.body;
  const slug = generateSlug(title);
  const contentBlocks = JSON.parse(req.body.contentBlocks);
  const thumbnail = req.file ? req.file.filename : null;

  const response = createPost(title, slug, thumbnail, userId, contentBlocks);

  if (!response)
    return res.json({
      msg: 'Something went wrong',
      Ok: false,
    });
  res.json({ response, Ok: true });
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
