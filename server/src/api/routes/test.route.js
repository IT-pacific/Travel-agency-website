import express from 'express';
import {
  shoulbeAdmin,
  shouldbeLoggegIn,
} from '../controllers/testController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

// create company profile
router.post('/user', verifyToken, shouldbeLoggegIn);
router.post('/admin', shoulbeAdmin);

export default router;
