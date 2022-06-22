const metadata = require("../metadata");

const runSetup = (db, sequelize) => {
  (async () => {
    await sequelize.sync({ force: true });
    console.log("Tables are created");
    metadata.forEach(async (data) => {
      const { question, options } = data;
      const questionObj = await db.Questions.create({
        question: question,
      });
      console.log(question, options);
    });
    // console.log(metadata);

  })();
};

module.exports = { runSetup };
