const db = require("../database/models/index");
const Questions = db.Questions;

getAllQuestions = async () => {
  var response = await Questions.findAll({
    attributes: ["id", "question"],
    include: [
      { model: db.Options, as: "options", attributes: ["id", "option"] },
    ],
  });
  return response;
};

module.exports = { getAllQuestions };
