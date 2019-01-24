import React from "react";
import Common from "./common.jsx";
const ZRoute = Common.ZRoute;
import Bundle from "./bundle.js"
const Homes = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/home/index.jsx")} />
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
        path="/home"
        component={({ match, history }) => {
          return <ZRoute exact path={match.url} component={Homes} />;
        }}
      />
    );
  }
}
export default Home;
