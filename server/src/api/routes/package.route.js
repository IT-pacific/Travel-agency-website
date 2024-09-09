import express from 'express';
import {
  createPackageHandler,
  deletePackageHandler,
  getPackageHandler,
  getPackagesHandler,
  updatePackageHandler,
} from '../controllers/packageController.js';

const router = express.Router();

router.post('/package', createPackageHandler);
router.get('/package', getPackagesHandler);
router.put('/package', updatePackageHandler);
router.delete('/package/:id', deletePackageHandler);
router.get('/package/:id', getPackageHandler);

export default router;
