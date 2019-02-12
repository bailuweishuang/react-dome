import { connect } from "react-redux";
import style from "../style/index.jsx";

export default (options = {}) => {
  return Component => {
    if (options.style) {
      Component = style(options.style)(Component);
    }
    return Component;
  };
};
