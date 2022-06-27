const router = require("express").Router();
const questionService = require("../services/question.service.js");
const apiResponse = require("../helpers/responseSender.helper");
const questionSchemas = require("../helpers/validators/questions.validators");

router.get("/", async (req, res) => {
  try {
    const questions = await questionService.getAllQuestions();
    return apiResponse.sendSuccessResponse(res, questions, "Questions found");
  } catch (err) {
    req.log.error(err);
    return apiResponse.sendErrorResponse(res, err.message, err.code);
  }
});

router.post("/", async (req, res) => {
  const { error } = questionSchemas.questionObject.validate(req.body);
  if (error) {
    return apiResponse.sendValidationError(res, [error.details[0].message]);
  } else {
    try {
      const result = await questionService.addQuestion(req.body);
      return apiResponse.sendSuccessResponse(res, result, "Question Added");
    } catch (err) {
      req.log.error(err);
      return apiResponse.sendErrorResponse(res, err.message, err.code);
    }
  }
});

module.exports = router;
