import express from 'express';
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from '../controllers/postController.js';
import { uploadSingle, uploadMany } from '../helpers/multerHelper.js';

const router = express.Router();

// router.post('/post', uploadMany(images, 10), createPostHandler);
router.get('/post', getPostsHandler);
router.put('/post', updatePostHandler);
router.delete('/post/:slug', deletePostHandler);
router.get('/post/:slug', getPostHandler);

export default router;
