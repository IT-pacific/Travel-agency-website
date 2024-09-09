export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  const status = err.status || 500;
  const msg = err.message || 'Server error';

  res.status(status).json({
    OK: false,
    errorMsg: msg,
  });
};
