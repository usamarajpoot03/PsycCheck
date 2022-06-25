import React from "react";
import { Button, Typography, makeStyles, Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startTestButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Result(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h4" variant="h5">
          You're introvert
        </Typography>
        <Typography variant="h6">You're extrovert</Typography>extrovert
      </div>
      <Button>Retake</Button>
    </Container>
  );
}

export default withRouter(Result);
