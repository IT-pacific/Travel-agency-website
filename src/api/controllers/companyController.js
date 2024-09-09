import codes from '../helpers/statusCodes.js';
import {
  createCompanyProfile,
  deleteCompanyProfile,
  getCompanyProfile,
  updateCompanyProfile,
} from '../services/companyService.js';

// Create company profile
export const createCompanyProfileHandler = async (req, res, next) => {
  const { name, description, vision, mission, history } = req.body;

  if (!name || !description) {
    const error = new Error('name and description fields are required.');
    error.status = codes.BAD_REQUEST;

    return next(error);
  }

  const data = {
    name: name,
    description: description,
    vision: vision,
    mission: mission,
    history: history,
  };

  const result = await createCompanyProfile(data);

  if (!result) {
    const error = new Error('Internal server error.');

    return next(error);
  }

  res.status(codes.CREATED).json({ msg: 'record created' });
};

// Get company profile
export const getCompanyProfileHandler = async (req, res, next) => {
  const result = await getCompanyProfile();

  if (!result) {
    const error = new Error('Internal server error.');

    return next(error);
  }

  res.status(codes.OK).json({ data: result });
};

// update company profile
export const updateCompanyProfileHandler = async (req, res, next) => {
  const { name, description, vision, mission, history } = req.body;

  if (!name || !description) {
    const error = new Error('name and description fields are required.');
    error.status = codes.BAD_REQUEST;

    return next(error);
  }

  const data = {
    id: 1,
    name: name,
    description: description,
    vision: vision,
    mission: mission,
    history: history,
  };

  const result = await updateCompanyProfile(data);

  if (!result) {
    const error = new Error('Internal server error.');

    return next(error);
  }

  res.status(codes.OK).json({ msg: 'profile updated', responseOk: true });
};

// Delete comapny profile
export const deleteCompanyProfileHandler = async (req, res, next) => {
  let id = 1;
  const result = await deleteCompanyProfile(id);

  if (!result) {
    const error = new Error(
      'Failed to complete request make sure resource exist.'
    );

    return next(error);
  }

  res
    .status(codes.OK)
    .json({ msg: 'profile deleted', data: result, responseOk: true });
};
