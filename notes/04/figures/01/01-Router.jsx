import React, { Fragment } from "react";

// import the ReactRouter components
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./Header";
import Buttons from "./Buttons";

// wrap the entire app with the <Router> component
// this is simply using the children prop under the hood
const App = () => (
  <Router>
    <Fragment>
      <Header subtitle="Space Wombats">App</Header>
      <Buttons />
    </Fragment>
  </Router>
);

export default App;
