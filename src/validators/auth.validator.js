const { body } = require("express-validator");

const register = [
  body("username", "กรุณากรอกชื่อผู้ใช้ที่มีความยาวอย่างน้อย 3 ตัวอักษร").isString().isLength({ min: 3 }),
  body("password", "กรุณากรอกรหัสผ่านที่มีความยาวอย่างน้อย 6 ตัวอักษร").isString().isLength({ min: 6 }),
  body("firstName", "กรุณากรอกชื่อจริง").isString().isLength({ min: 1 }),
  body("lastName", "กรุณากรอกนามสกุล").isString().isLength({ min: 1 }),
];


module.exports = { register };