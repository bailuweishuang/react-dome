import React from "react";
import Page from "@/components/page/index.jsx";
import Common from "./common.jsx";
const ZRoute = Common.ZRoute;
const getNavigation = Common.getNavigation;
const Menus = Common.Menus;
const onIsSelected = Common.onIsSelected;
import Bundle from "./bundle.js";
const Mine = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/mine/index.jsx")} />
);
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <ZRoute
        exact
        path="/mine"
        component={({ match, history }) => {
          return (
            <Page
              {...this.props}
              title="我的"
              navigation={getNavigation(match.path)}
              horizontalMenus={{
                onIsSelected: menu => onIsSelected(menu, history),
                menus: Menus.mine
              }}
            >
              <ZRoute exact path={match.url} component={Mine} />
            </Page>
          );
        }}
      />
    );
  }
}
export default Home;
