import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomeRouter from "./home.jsx";
import MineRouter from "./mine.jsx";
import Common from "./common.jsx";
import Home from "../pages/home/index.jsx";
import Mine from "../pages/mine/index.jsx";

const getRouter = () => (
  <div>
    <Router>
      <div>
        <Common />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mine" component={Mine} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default getRouter;
