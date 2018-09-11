import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Mine from '../pages/mine/index.jsx';
const getRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Mine}></Route>
        </Switch>
    </Router>  
)

export default getRouter;