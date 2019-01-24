import React from "react";
import ReactDom from "react-dom";
import GetRouter from "router/index.js";
import Util from "@/js/util.js";
global.Util = Util;
ReactDom.render(<GetRouter />, document.getElementById("app"));
