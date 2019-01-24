import React from "react";
import { Route } from "react-router-dom";
class ZRoute extends React.Component {
  render() {
    const component = this.props.component;
    return (
      <Route
        {...this.props}
        component={
          typeof component === "object" ? component.default ? (
            component.default
          ) : (
            () => component
          ) : (
            component
          )
        }
      />
    );
  }
}
const common = {
  Menus: {},
  getNavigation: (path, oauth) => {
    const menus = [
      {
        name: "首页",
        path: "/"
      }
    ];
  },
  ZRoute
};

export default common;
