import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/home/index.jsx';
const getRouter = () => (
    <Router>
            <Route path="/home" component={Home}></Route>
    </Router>  
)

export default getRouter;