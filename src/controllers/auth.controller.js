const db = require("../models");
const { User } = db;


const register = async (req, res, next) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    // const user = await User.create({ username, password, firstName, lastName });
    req.validate();


    res.json({
      username,
      password,
      firstName,
      lastName
    });
  } catch (ex) {
    res.error(ex);
    
  }
};

module.exports = { register };
