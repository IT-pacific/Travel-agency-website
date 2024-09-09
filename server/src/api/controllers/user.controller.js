import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config.js';
import codes from '../helpers/statusCodes.js';
import {
  createUser,
  getAllUsers,
  getUserByEmail,
} from '../services/userService.js';

// Regist new user
export const registUserHandler = async (req, res, next) => {
  const { names, country, email, password } = req.body;
  const picture = req.file.filename;

  // hash password

  let hashedPassword = await bcrypt.hash(password, 10);

  // Create user object
  const payload = {
    names,
    country,
    picture,
    email,
    password: hashedPassword,
  };

  // create user database query
  const user = createUser(payload);

  const error = new Error('Something went wrong,  Try again');

  // If user does not created
  if (!user) next(error);

  // User created
  res.status(201).json({ msg: 'User Created', Ok: true });
};

// Login user

export const loginUserHandler = async (req, res, next) => {
  const { email, password } = req.body;

  // check if user exist
  const user = await getUserByEmail(email);
  const error = new Error('Invalid Credentials');
  error.status = 403;

  if (!user) return next(error);

  // verify if password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return next(error);

  const userObject = {
    id: user.id,
    names: user.names,
    country: user.country,
    email: user.email,
  };

  // expiration time for token and cookie
  const age = 1000 * 60 * 60 * 24 * 7;

  const token = jwt.sign(userObject, process.env.JWT_SECRET, {
    expiresIn: age,
  });

  // generate user auth token
  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    maxAge: age,
  });

  const { password: userPassword, ...userInfo } = user;

  res.json({ msg: 'Logged in successfully', Ok: true, userInfo });
};

// logout user
export const logoutUserHandler = async (req, res, next) => {
  res.clearCookie('token').status(200).json({ Ok: true });
};
