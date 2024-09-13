import express from 'express';
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from '../controllers/postController.js';
import { uploadSingle, uploadMany } from '../helpers/multerHelper.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post(
  '/create',
  verifyToken,
  uploadSingle('thumbnail'),
  createPostHandler
);
router.get('/all', getPostsHandler);
router.put('/post', updatePostHandler);
router.delete('/:slug', deletePostHandler);
router.get('/:slug', getPostHandler);

export default router;
