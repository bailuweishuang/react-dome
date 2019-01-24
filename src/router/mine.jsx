
import React from "react";
import Common from "./common.jsx";
const ZRoute = Common.ZRoute;
import Bundle from "./bundle.js"
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
          return <ZRoute exact path={match.url} component={Mine} />;
        }}
      />
    );
  }
}
export default Home;
