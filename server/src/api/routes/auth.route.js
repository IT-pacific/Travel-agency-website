import express from 'express';
import bcrypt from 'bcrypt';
import {
  registUserHandler,
  loginUserHandler,
  // logoutUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  updateUserHandler,
} from '../controllers/user.controller.js';

import { uploadSingle } from '../helpers/multerHelper.js';

const router = express.Router();

router.post('/register', uploadSingle('avatar'), registUserHandler);

router.post('/login', loginUserHandler);

// router.post('/logout', logoutUserHandler);

export default router;
