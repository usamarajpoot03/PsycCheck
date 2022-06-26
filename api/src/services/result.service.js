const db = require("../database/models/index");
const RESULTS = require("../constants/results");
const Options = db.Options;

generateResult = async (answers) => {
  const optionIds = Object.values(answers);
  const matchedOption = await Options.findAll({
    where: {
      id: optionIds,
    },
  });
  let introvertChancesSum = 0,
    extrovertChancesSum = 0;
  for (const option of matchedOption) {
    extrovertChancesSum += option.extrovertChances;
    introvertChancesSum += option.introvertChances;
  }
  if (introvertChancesSum > extrovertChancesSum) {
    return RESULTS.introvert;
  } else if (introvertChancesSum < extrovertChancesSum) {
    return RESULTS.extrovert;
  } else {
    return RESULTS.ambiverts;
  }
};

module.exports = { generateResult };
