const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .message("Invalid email format")
      .required(),
    password: Joi.string()
      .min(8)
      .max(30)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$",
        ),
      )
      .message(
        "Password must be 8-30 characters, include uppercase, lowercase, number, and special character",
      )
      .required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .message("Invalid email format")
      .required(),
    password: Joi.string().min(8).max(30).required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };
