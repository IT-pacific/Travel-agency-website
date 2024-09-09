import { response } from 'express';
import codes from '../helpers/statusCodes.js';
import {
  createPackage,
  deletePackage,
  getPackage,
  getPackages,
  updatePackage,
} from '../services/packageService.js';

// Get single package
export const getPackageHandler = async (req, res, next) => {
  const { id } = req.params;
  const item = await getPackage(parseInt(id));

  if (!item) {
    const error = new Error('Item wasnot found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ package: item, responseOk: true });
};

// Get Multiple packages
export const getPackagesHandler = async (req, res, next) => {
  let take = 6;
  let page = 1;
  let skip = take * page;
  const items = await getPackages(take, skip);

  if (!items) {
    const error = new Error('Item was not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ package: items, responseOk: true });
};

// Create package
export const createPackageHandler = async (req, res, next) => {
  const {
    title,
    description,
    departureLocation,
    departureTime,
    price,
    duration,
  } = req.body;

  const data = {
    title,
    description,
    departureLocation,
    departureTime,
    price,
    duration,
  };

  if (!title || !description || !price || !duration) {
    const error = new Error('All fields are required');
    error.status = codes.BAD_REQUEST;
    next(error);
  }

  const item = await createPackage(data);

  if (!item) {
    const error = new Error('package not created');
    return next(error);
  }

  res.status(codes.OK).json({ package: item, responseOk: true });
};

// Update package
export const updatePackageHandler = async (req, res, next) => {
  const {
    id,
    title,
    description,
    departureLocation,
    departureTime,
    price,
    duration,
  } = req.body;

  const data = {
    id,
    title,
    description,
    departureLocation,
    departureTime,
    price,
    duration,
  };

  if (
    !title ||
    !description ||
    !departureLocation ||
    !departureTime ||
    !price ||
    !duration
  ) {
    const error = new Error('All fields are required');
    error.status = codes.BAD_REQUEST;
    next(error);
  }

  const item = await updatePackage(data);

  if (!item) {
    const error = new Error('package not updated');
    return next(error);
  }

  res.status(codes.OK).json({ package: item, responseOk: true });
};

// Delete package
export const deletePackageHandler = async (req, res, next) => {
  const { id } = req.params;
  const item = await deletePackage(parseInt(id));

  if (!item) {
    const error = new Error('Item was not deleted');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ package: item, responseOk: true });
};
