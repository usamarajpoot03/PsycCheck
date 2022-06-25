import React from "react";
import { Button, Typography, makeStyles, Container } from "@material-ui/core";
import { getQuestions } from "../../services/questions";
import { useEffect } from "react";
import useAxios from "utils/useAxois";
import Question from "components/Question";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Test(props) {
  const classes = useStyles();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const {
    response: questions,
    error,
    loading,
  } = useAxios({ url: "questions", method: "get" });

  useEffect(() => {}, []);

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Typography variant="h4">PsycTest</Typography>
        <Typography variant="h6">
          Are you an introvert or an extrovert?
        </Typography>
        {questions && (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleSelection={(change) => {
              const answersClone = { ...answers };
              answersClone[questions[currentQuestion].id] = change;
              setAnswers(answersClone);
            }}
            selectedOptionId={answers[questions[currentQuestion].id]}
          />
        )}
        <Button
          // fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            setCurrentQuestion(currentQuestion - 1);
          }}
          disabled={currentQuestion == 0}
        >
          Previous Question
        </Button>
        <Button
          // fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            if (currentQuestion + 1 == questions.length) {
              props.history.push("/result");
            }
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {questions && currentQuestion + 1 == questions.length
            ? "Finish Test"
            : "Next Question"}
        </Button>
      </div>
    </Container>
  );
}

export default withRouter(Test);
