import React from "react";
import { Button, Typography, makeStyles, Container } from "@material-ui/core";
import { START_TEST_BUTTON } from "../../constants/buttonsPreview";
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

function Home(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h4" variant="h5">
          Welcome to PsycTest
        </Typography>
        <Typography variant="h6">
          Are you an introvert or an extrovert?
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.startTestButton}
          onClick={() => {
            props.history.push("/test");
          }}
        >
          {START_TEST_BUTTON}
        </Button>
      </div>
    </Container>
  );
}

export default withRouter(Home);
