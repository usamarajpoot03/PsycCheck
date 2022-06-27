const Joi = require("joi");
module.exports = {
  questionObject: Joi.object({
    question: Joi.string().required(),
    options: Joi.array()
      .items({
        option: Joi.string().required(),
        introvertChances: Joi.number().min(1).max(100).required(),
        extrovertChances: Joi.number().min(1).max(100).required(),
      })
      .length(4)
      .required(),
  }),
};
