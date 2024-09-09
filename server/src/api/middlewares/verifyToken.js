import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config.js';

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  //   redirect if not token cookie set
  if (!token) return res.status(401).json({ msg: 'Not authorized', Ok: false });

  //   check if we issued te token
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ msg: 'Token not valid', Ok: false });

    //   parse user information to request object
    req.body.payload = payload;
  });

  next();
};

export default verifyToken;
