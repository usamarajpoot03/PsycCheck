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
      const optionsPormises = [];
      for (opt of options) {
        optionsPormises.push(
          db.Options.create({
            option: opt.option,
            introvertChances: opt.introvertChances,
            extrovertChances: opt.extrovertChances,
          })
        );
      }
      Promise.all(optionsPormises).then((resolved) => {
        questionObj.setOptions(resolved);
      });
    });
  })();
};

module.exports = { runSetup };
