import express from 'express';
import code from '../helpers/statusCodes.js';
import {
  createCompanyProfileHandler,
  getCompanyProfileHandler,
  updateCompanyProfileHandler,
  deleteCompanyProfileHandler,
} from '../controllers/companyController.js';

const router = express.Router();

// create company profile
router.post('/company', createCompanyProfileHandler);
router.get('/company', getCompanyProfileHandler);
router.put('/company', updateCompanyProfileHandler);
router.delete('/company', deleteCompanyProfileHandler);

export default router;
