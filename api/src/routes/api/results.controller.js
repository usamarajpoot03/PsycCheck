const router = require("express").Router();
const apiResponse = require("../../helpers/responseSender.helper");
const resultService = require("../../services/result.service");
const answersSchemas = require("../../helpers/validators/answers.validators");

router.post("/generateResult", async (req, res) => {
  const { error } = answersSchemas.answersObjectSchema.validate(req.body);
  if (error) {
    return apiResponse.sendValidationError(res, [error.details[0].message]);
  } else {
    try {
      const result = await resultService.generateResult(req.body);
      return apiResponse.sendSuccessResponse(res, result, "Result generated");
    } catch (e) {
      return apiResponse.sendErrorResponse(res, e.message, e.code);
    }
  }
});

module.exports = router;
