import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config.js';

export const shouldbeLoggegIn = (req, res, next) => {
  const { payload } = req.body;

  //  next to controller

  res.status(200).json(payload);
};

export const shoulbeAdmin = (req, res, next) => {
  const token = req.cookies.token;

  //   redirect if not token cookie set
  if (!token) return res.status(401).json({ msg: 'Not authorized', Ok: false });

  //   check if we issued te token
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ msg: 'Token not valid', Ok: false });
    if (!payload.isAdmin)
      return res.status(403).json({ msg: 'Not authorized', Ok: false });
  });

  //  next to controller

  res.status(200).json('you are authed');
};
