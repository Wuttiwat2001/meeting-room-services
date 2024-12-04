const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  next();
};

module.exports = validateRequest;
