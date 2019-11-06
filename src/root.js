// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";

import Todos from "./pages/todos.js";
import PageNotFound from "./pages/pageNotFound.js";

const root = (
  <Switch>
    <Route exact path="/" component={Todos} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
