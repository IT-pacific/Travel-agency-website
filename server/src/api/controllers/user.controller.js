import codes from '../helpers/statusCodes.js';
import {
  createUser,
  getAllUsers,
  getUserByEmail,
} from '../services/userService.js';

// Regist new user
export const registUserHandler = async (req, res, next) => {
  console.log(req.file);
  console.log('-----------------------');
  console.log(req.body);
};

// Login user

export const loginUserHandler = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email, password);
  // check if user exist
  const user = await getUserByEmail(email);

  console.log(user);

  res.json({ msg: user });
};

// Get all users form database
export const getAllUsersHandler = async (req, res, next) => {
  const users = await getAllUsers();

  if (!users) {
    const error = new Error('Items were not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ post: users, responseOk: true });
};

// Update user
export const updateUserHandler = async (req, res, next) => {
  const { names, country, username, email, password } = req.body;

  const data = {
    names,
    country,
    username,
    email,
    password,
  };

  if (!names || !country || !username || !email || !password) {
    const error = new Error('Something is missing');
    error.status = codes.BAD_REQUEST;
    next(error);
  }

  const user = await createUser(data);

  if (!user) {
    const error = new Error('post not created');
    return next(error);
  }

  res.status(codes.OK).json({ post: user, responseOk: true });
};

// Delete user

export const deleteUserHandler = async (req, res, next) => {};
