const router = require("express").Router();
const questionService = require("../../services/question.service.js");
const apiResponse = require("../../helpers/responseSender.helper");

router.get("/", async (req, res) => {
  try {
    const questions = await questionService.getAllQuestions();
    return apiResponse.sendSuccessResponse(res, questions, "Questions found");
  } catch (e) {
    return apiResponse.sendErrorResponse(res, e.message, e.code);
  }
});

module.exports = router;
