// Library imports
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import { join } from 'path';
import cookieParser from 'cookie-parser';

// Helpers
import { basePath } from './helpers/basePath.js';

// Routes imports
import authRoute from './routes/auth.route.js';
import companyRoute from './routes/company.route.js';
import packageRoute from './routes/package.route.js';
import postRoute from './routes/post.route.js';
import testRoute from './routes/test.route.js';

// Midllewares imports
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(logger);
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

// Data parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Parse frontend static files
const path = basePath();
console.log(path);
app.use('/uploads', express.static(join(path, 'uploads')));

// Routes

app.get('/', (req, res, next) => {
  res.json({ msg: 'there you go boy you got this' });
});

app.use('/api/auth', authRoute);
app.use('/api/company', companyRoute);
app.use('/api/package', packageRoute);
app.use('/api/post', postRoute);
app.use('/api/test', testRoute);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Starting server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
