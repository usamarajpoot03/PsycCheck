import React, { Component } from "react";
import AppRoutes from "./routes/appRoutes/AppRoutes";
import { CssBaseline } from "@material-ui/core";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <CssBaseline />
        <AppRoutes user={this.state.user} />
      </>
    );
  }
}

export default App;
