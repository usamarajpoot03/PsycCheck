const express = require("express");
var app = express();
const cors = require("cors");

const errorHandler = require("./middlewares/errorHandler");
const { logger, loggerMiddleware } = require("./middlewares/logger");

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use("/api/questions", require("./routes/api/question.controller"));
app.use("/api/results", require("./routes/api/results.controller"));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info("Server Listening on port : ", PORT);
});
