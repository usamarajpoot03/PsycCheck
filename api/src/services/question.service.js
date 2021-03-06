const db = require("../database/models/index");

getAllQuestions = async () => {
  var response = await db.Questions.findAll({
    attributes: ["id", "question"],
    include: [
      { model: db.Options, as: "options", attributes: ["id", "option"] },
    ],
  });
  return response;
};

addQuestion = async (requestObj) => {
  var duplicateQuestion = await db.Questions.findOne({
    where: {
      question: requestObj.question,
    },
  });
  if (duplicateQuestion) {
    throw new Error("Duplicated question");
  } else {
    const questionInstance = await db.Questions.create({
      question: requestObj.question,
    });
    const optionsPormises = [];
    for (opt of requestObj.options) {
      optionsPormises.push(
        db.Options.create({
          option: opt.option,
          introvertChances: opt.introvertChances,
          extrovertChances: opt.extrovertChances,
        })
      );
    }
    Promise.all(optionsPormises).then((optionsInstances) => {
      questionInstance.setOptions(optionsInstances);
    });
    return true;
  }
};

deleteQuestion = async (questionId) => {
  const questionsDeleted = await db.Questions.destroy({
    where: {
      id: questionId,
    },
  });
  if(!questionsDeleted)
    throw new Error('Invalid question id')
  await db.Options.destroy({
    where: {
      id: questionId,
    },
  });

  return questionsDeleted;
};

module.exports = { getAllQuestions, addQuestion, deleteQuestion };
