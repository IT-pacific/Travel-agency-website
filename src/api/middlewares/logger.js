import colors from 'colors';

export const logger = (req, res, next) => {
  const colorMethods = {
    GET: 'blue',
    POST: 'green',
    PUT: 'orange',
    DELETE: 'red',
  };

  const color = colorMethods[req.method] || 'white';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[
      color
    ]
  );

  next();
};
