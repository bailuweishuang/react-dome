import React from "react";
import ReactDom from "react-dom";
import GetRouter from "router/index.js";
import Util from "@/js/util.js";
global.Util = Util;
import Oauth from "@/components/oauth/index.jsx"
import { MENU_MATCHES } from "@/constants";
global.Oauth = new Oauth({
    defaultOauthPaths: ["*"],
    matches: MENU_MATCHES,
    onReject: () => location.replace("/")
});
ReactDom.render(<GetRouter />, document.getElementById("app"));
