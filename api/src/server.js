const express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
const errorHandler = require("./routes/middlewares/errorHandler");

app.use(express.json());

app.use("/api/questions", require("./routes/api/question.controller"));
app.use("/api/results", require("./routes/api/results.controller"));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Listening on port : ", PORT);
});
