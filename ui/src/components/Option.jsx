import React from "react";
import {
  Button,
  Typography,
  makeStyles,
  Container,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Option({ text, isSelected, handleChange }) {
  const classes = useStyles();

  useEffect(() => {}, []);

  console.log("xx", "here", text);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label={text}
          />
        </FormGroup>{" "}
      </div>
    </Container>
  );
}

export default Option;
