const { check } = require('express-validator');

exports.updateUserValidation = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
];
