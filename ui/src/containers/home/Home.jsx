import React from "react";
import { Button, Typography, makeStyles, Container } from "@material-ui/core";
import { START_TEST_BUTTON } from "../../constants/buttonsPreview";

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

function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome to PsycTest
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.startTestButton}
        >
          {START_TEST_BUTTON}
        </Button>
      </div>
    </Container>
  );
}

export default Home;
