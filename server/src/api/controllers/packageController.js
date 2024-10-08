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
    const error = new Error('Item was not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ package: item, responseOk: true });
};

// Get Multiple packages
export const getPackagesHandler = async (req, res, next) => {
  let take = 6;
  let page = 0;
  let skip = take * page;
  const items = await getPackages(take, skip);

  if (!items) {
    const error = new Error('Item was not found');
    error.status = 404;
    return next(error);
  }

  return res.status(codes.OK).json({ package: items, Ok: true });
};

// Create package
export const createPackageHandler = async (req, res, next) => {
  const { title, description, departure, time, duration } = req.body;
  const itineraries = JSON.parse(req.body.itineraries);
  const thumbnail = req.file ? req.file.filename : null;

  const response = await createPackage(
    title,
    description,
    departure,
    time,
    duration,
    thumbnail,
    itineraries
  );
  res.json(response);
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
