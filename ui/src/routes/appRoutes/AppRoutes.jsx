import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import { AuthRoute } from "../protectedRoute/ProtectedRoute";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
const Home = lazy(() => import("../../containers/home/Home"));
const Test = lazy(() => import("../../containers/test/Test"));
const Result = lazy(() => import("../../containers/result/Result"));

const useStyles = makeStyles((theme) => ({
  fallback: {
    margin: theme.spacing(8),
  },
}));

const AppRoutes = ({ user }) => {
  const classes = useStyles();

  return (
    <Suspense
      fallback={
        <Grid container justifyContent="center" className={classes.fallback}>
          <CircularProgress size={40} />
        </Grid>
      }
    >
      <Switch>
        <AuthRoute path="/home" exact component={Home} user={user} />
        <AuthRoute path="/test" exact component={Test} user={user} />
        <AuthRoute path="/result" exact component={Result} user={user} />
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
