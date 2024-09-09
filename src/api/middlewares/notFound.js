export const notFound = (req, res, next) => {
  const error = new Error('Resource was not Found.');
  error.status = 400;
  next(error);
};
