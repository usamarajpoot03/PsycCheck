import React from "react";
import { Button, Typography, makeStyles, Container } from "@material-ui/core";
import { useEffect } from "react";
import Option from "./Option";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Question({ question, options, selectedOptionId, handleSelection }) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        {question}
        <ul>
          {options.map((entry) => {
            return (
              <Option
                text={entry.option}
                isSelected={entry.id == selectedOptionId}
                handleChange={() => {
                  handleSelection(entry.id)
                }}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Question;
