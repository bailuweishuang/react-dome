import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomeRouter from "./home.jsx";
import MineRouter from "./mine.jsx";
import Common from "./common.jsx";
import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/home/index.jsx";
import Mine from "bundle-loader?lazy&name=mine!pages/mine/index.jsx";
import UserInfo from "bundle-loader?lazy&name=userinfo!pages/userinfo/userinfo.jsx";

// import Home from "../pages/home/index.jsx";
// import Mine from "../pages/mine/index.jsx";
// import UserInfo from '../pages/userinfo/userinfo.jsx';

const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => {
  return (
    <Bundle load={component}>
      {Component => (Component ? <Component {...props} /> : <Loading />)}
    </Bundle>
  );
};

const getRouter = () => (
  <div>
    <Router>
      <div>
        <Common />
        <Switch>
          <Route exact path="/" component={createComponent(Home)} />
          <Route path="/mine" component={createComponent(Mine)} />
          <Route path="/userinfo" component={createComponent(UserInfo)} />
          {/*<Route exact path="/" component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/userinfo" component={UserInfo} />*/}
        </Switch>
      </div>
    </Router>
  </div>
);

export default getRouter;
