import express from 'express';
import {
  createPackageHandler,
  deletePackageHandler,
  getPackageHandler,
  getPackagesHandler,
  updatePackageHandler,
} from '../controllers/packageController.js';
import verifyToken from '../middlewares/verifyToken.js';
import { uploadSingle } from '../helpers/multerHelper.js';

const router = express.Router();

router.post(
  '/create',
  verifyToken,
  uploadSingle('thumbnail'),
  createPackageHandler
);
router.get('/all', getPackagesHandler);
router.put('/package', updatePackageHandler);
router.delete('/:id', deletePackageHandler);
router.get('/:id', getPackageHandler);

export default router;
