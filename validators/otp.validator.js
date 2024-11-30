const Joi = require('joi');

const otpValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().length(6).required(),
  });
  return schema.validate(data);
};

module.exports = { otpValidation };