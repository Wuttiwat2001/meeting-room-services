const db = require("../models");
const bcrypt = require("bcrypt");
const { User } = db;

const register = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    req.validate();

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(201).json(user);
  } catch (ex) {
    res.error(ex);
  }
};

module.exports = { register };
