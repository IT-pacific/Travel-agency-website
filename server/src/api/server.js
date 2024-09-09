// Library imports
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import { join } from 'path';

// Helpers
import { basePath } from './helpers/basePath.js';

// Routes imports
import authRoute from './routes/auth.route.js';
import companyRoute from './routes/company.route.js';
import packageRoute from './routes/package.route.js';
import postRoute from './routes/post.route.js';

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

// Parse frontend static files
const path = basePath();
// app.use(express.static(join(path, 'dist')));

app.use('/api/auth', authRoute);
app.use('/api/company', companyRoute);
app.use('/api/package', packageRoute);
app.use('/api/post', postRoute);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Startinf server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
