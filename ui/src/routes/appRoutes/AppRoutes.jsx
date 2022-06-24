import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import { AuthRoute } from "../protectedRoute/ProtectedRoute";
import { CircularProgress, Grid } from "@material-ui/core";
const Home = lazy(() => import("../../containers/home/Home"));

const AppRoutes = ({ user }) => {
  return (
    <Suspense
      fallback={
        <Grid container justifyContent="center">
          <CircularProgress size={50} />
        </Grid>
      }
    >
      <Switch>
        <AuthRoute path="/home" exact component={Home} user={user} />
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
