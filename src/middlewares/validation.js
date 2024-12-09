const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  req.validate = () => {
      const errors = validationResult(req).array();
      if(errors.length === 0) return
      throw new Error(`${errors[0].path} : ${errors[0].msg}`);
  };

  res.error = (ex, status = 400) => {
    res.status(status).json({
      message: ex.message || ex.toString(),
    });
  };

  next();
};
