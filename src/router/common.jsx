import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const getRouters = () => (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/mine">Page1</Link></li>
                <li><Link to="/userinfo">userinfo</Link></li>
            </ul>
        </div>
);

export default getRouters;